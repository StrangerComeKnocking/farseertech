import { getCollection, type CollectionEntry } from 'astro:content';
import { PILLARS, type PillarId } from '../consts';
import { readingTime } from './readingTime';

export type Post = CollectionEntry<'posts'>;

/** All non-draft posts, newest first (drafts visible only in `npm run dev`). */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPostsByPillar(pillar: PillarId): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.pillar === pillar);
}

/** The weekly highlight: pinned > featured > most recent. */
export function pickHighlight(posts: Post[]): Post | undefined {
  return (
    posts.find((p) => p.data.pinned) ??
    posts.find((p) => p.data.featured) ??
    posts[0]
  );
}

/** Canonical URL path for a post: /<pillar>/<slug>. */
export function postUrl(post: Post): string {
  return `/${post.data.pillar}/${post.id}`;
}

/** Reading-time label: frontmatter override, else computed from body. */
export function postReadingTime(post: Post): string {
  return post.data.readingTime || readingTime(post.body);
}

/** Resolve a post's accent CSS color (override or pillar default). */
export function postAccent(post: Post): string {
  return post.data.accent ? `var(--${post.data.accent})` : PILLARS[post.data.pillar].accent;
}
