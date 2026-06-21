// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `base` is '/' for local dev and the broger.ch custom domain.
// GH_PAGES_BASE exists only for manual/project-page experiments; production
// deploys must build at root so assets work on https://broger.ch.
// Normalize to a trailing slash so `${BASE_URL}images/...` joins cleanly.
const raw = process.env.GH_PAGES_BASE || '/';
const base = raw.endsWith('/') ? raw : raw + '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://broger.ch',
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
