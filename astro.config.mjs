// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Production domain — drives canonical URLs + sitemap. Point DNS here at launch (Vercel).
  site: 'https://www.regainhopedetox.com',
  trailingSlash: 'always',      // clean, consistent URLs e.g. /programs/medical-detox/
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
