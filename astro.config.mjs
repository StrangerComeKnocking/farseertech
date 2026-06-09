// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your production URL. Used for canonical links, sitemap, and RSS.
  // Update this if your final domain differs.
  site: 'https://farseertech.com',
  integrations: [sitemap()],
  markdown: {
    // Code fences in articles get syntax highlighting out of the box.
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true,
    },
  },
});
