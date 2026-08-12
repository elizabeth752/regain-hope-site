// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { posts } from './src/data/blog.js';

const draftBlogPaths = posts
  .filter((p) => p.draft)
  .map((p) => `/blog/${p.slug}/`);

// https://astro.build/config
export default defineConfig({
  // Production domain — drives canonical URLs + sitemap. Point DNS here at launch (Vercel).
  site: 'https://www.regainhopedetox.com',
  trailingSlash: 'always',      // clean, consistent URLs e.g. /programs/medical-detox/
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      // Keep noindex / robots-disallowed utility pages and draft posts out of the sitemap
      filter: (page) =>
        ![
          '/thank-you/',
          '/privacy/',
          '/terms-of-use/',
          '/your-privacy-choices/',
          ...draftBlogPaths,
        ].some((path) => page.endsWith(path)),
    }),
  ],
});
