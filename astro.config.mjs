// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // site and base is currently set for github pages, update this once we get a domain.
  site: 'https/RiceWa.github.io',
  base: '/SnapFormWeb',
  vite: {
    plugins: [tailwindcss()]
  }
});