import rss from '@astrojs/rss';
import { SITE, FIELD_NOTES } from '../consts';

export async function GET(context) {
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: FIELD_NOTES.map((n) => ({
      title: n.title,
      description: n.description,
      pubDate: n.date,
      link: n.href,
      categories: ['field-notes'],
    })),
  });
}
