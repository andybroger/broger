See [AGENTS.md](./AGENTS.md) for full instructions on running, editing, and
publishing this site. Key points:

- Single-page Astro + Tailwind site for broger.ch, hosted on GitHub Pages.
- Source of truth: `https://github.com/andybroger/broger`.
- Edit content in `src/data/site.js`; layout in `src/pages/index.astro`.
- Keep visitor-facing text in German (Swiss spelling: `ss`, not `ß`).
- Publish by committing to `main` and pushing to `origin` — GitHub Actions deploys to `https://broger.ch`.
- Always `npm run build` before committing. Use the existing `photo()` and
  `logo()` patterns for assets; never hard-code `/broger/...`.
- Do not make the repo private while GitHub Pages is the host; Pages for this
  setup needs the repository to stay public.
