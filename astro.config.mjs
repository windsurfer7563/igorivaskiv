// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Project site under the windsurer7563 account
  site: 'https://windsurfer7563.github.io',
  // Served from /igorivaskiv on GitHub Pages
  base: '/igorivaskiv',
  vite: {
    plugins: [tailwindcss()]
  }
});
