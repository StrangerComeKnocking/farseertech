import rss from '@astrojs/rss';
import { SITE, FEATURED } from '../consts';

export async function GET(context) {
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: [
      {
        title: FEATURED.title,
        description: FEATURED.description,
        pubDate: FEATURED.date,
        link: FEATURED.href,
        categories: ['field-notes'],
      },
    ],
  });
}
