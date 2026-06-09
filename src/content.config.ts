import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts live in src/content/posts/. Bodies are authored in plain HTML,
// divided into <section data-title="..."> blocks for the sectioned reader.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pillar: z.enum([
      'field-notes',
      'building-organizations',
      'building-product',
      'building-software',
    ]),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // Ordered section titles → render the left-rail section navigation.
    sections: z.array(z.string()).default([]),
    // A pull quote surfaced in the right rail (copyable).
    quote: z.string().optional(),
    readingTime: z.string().optional(), // auto-computed when omitted
    featured: z.boolean().default(false),
    pinned: z.boolean().default(false),
    accent: z
      .enum(['coral', 'indigo', 'teal', 'gold', 'violet'])
      .optional(), // overrides the pillar's default accent
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
