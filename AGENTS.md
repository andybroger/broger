# AGENTS.md — operating guide for AI coding agents

This file tells an AI agent (OpenAI Codex, Claude Code, etc.) everything it
needs to run, change, and **publish** this website on behalf of a non-technical
owner. If you are such an agent, read this fully before acting.

## What this project is

The personal website of **Jakob „Köbi" Broger**, a retired skikjöring (ski-joring)
racer — `broger.ch`. It is a **single-page** static site built with
[Astro](https://astro.build) + Tailwind CSS. It is hosted on **GitHub Pages** and
deploys automatically via GitHub Actions whenever changes land on the `main`
branch. The site language is **German** — keep all visitor-facing text in German.

Current source of truth:

- Local working tree used by the owner: `/Users/nd/broger-site`
- Primary GitHub repository: `https://github.com/andybroger/broger`
- Live site: `https://broger.ch`
- Primary remote name: `origin`
- Historical remote name, if present: `hyprsh`

Do not copy or merge content from old temporary worktrees unless the owner
explicitly asks. In particular, ignore earlier scaffolds such as
`/Users/nd/Code/broger.ch`; this repository is the ground truth.

## Golden rules for working with the owner

- The owner is **not technical**. They will describe changes in plain language
  ("update the bio", "add a 2025 race", "swap the hero photo"). Translate that
  into the right file edit yourself — do not ask them about tools or code.
- **Almost all text and data lives in one file: `src/data/site.js`.** Prefer
  editing there over touching page markup. It holds the profile, career timeline,
  statistics table, top horses, sponsors, and the retirement statement.
- Jakob is **retired** (after the 2022 season). Keep visitor-facing copy in the
  past tense; the `retirement` block in `src/data/site.js` is his farewell.
- After ANY change, you MUST (1) build successfully and (2) publish (see below).
- Keep changes small and verifiable. Always run the build before publishing.
- Use **npm** and `package-lock.json`. Do not introduce pnpm/yarn unless the
  owner explicitly requests a package-manager change.
- The GitHub repository must remain **public** while GitHub Pages is used for
  `broger.ch`. Making it private disables or breaks public Pages for this setup.

## 1. Reconstruct the dev environment

On a fresh clone, proactively prepare the local computer before making or
previewing changes:

1. Run `node --version` and confirm Node.js is version 22 or newer.
2. Run `npm --version` to confirm npm is available.
3. Run `npm install` from the project root to install dependencies.
4. If Node.js or npm is missing or too old, explain the exact manual install step
   the non-technical owner needs before continuing. Do not ask them to choose
   between technical setup options unless there is no safe default.

Requirements: **Node.js 22+** and **npm** (Node ships with npm). Check with
`node --version`. If Node is missing, install it from <https://nodejs.org> (LTS)
or via a version manager (`nvm install 22`).

Then, from the project root:

```bash
npm install        # installs Astro, Tailwind, etc. (reads package-lock.json)
```

That's the entire setup. There is no database, no secret keys, no external
services to configure.

## 2. Run / preview locally

```bash
npm run dev        # live dev server at http://localhost:4321  (auto-reloads)
npm run build      # produces the static site in dist/
npm run preview    # serves the built dist/ at http://localhost:4321
```

Use `npm run dev` while editing; share the localhost URL with the owner if they
want to review before publishing.

## 3. Where things are

| You want to change… | Edit… |
| --- | --- |
| Any text, bio, stats, retirement note, sponsors | `src/data/site.js` |
| Page structure / section order / layout | `src/pages/index.astro` |
| Top navigation links | `src/components/Nav.astro` |
| Site-wide `<head>`, fonts, meta tags | `src/layouts/Base.astro` |
| Colors, fonts, animations | `src/styles/global.css` |
| Photos optimized by Astro | `src/assets/photos/` |
| Sponsor logos | `public/images/logos/` |
| Favicon / static root assets | `public/` |

It is one page; the nav items are anchor links (`#person`, `#resultate`, …) that
scroll to sections within `src/pages/index.astro`.

### Adding a photo
Drop the file into `src/assets/photos/` (NOT `public/`). Astro optimizes
everything there at build time — resizing, WebP, and responsive `srcset` are
automatic, so you can use a large original and it will be served efficiently.
Reference it via the `photo('yourfile.jpg')` helper passed to `<Image>` in
`index.astro`. Sponsor logos are the exception: they stay in
`public/images/logos/` and use the `logo()` helper.

## 4. Publish changes (deploy)

Publishing = commit to `main` and push to `origin`. GitHub Actions
(`.github/workflows/deploy.yml`) then builds and deploys to GitHub Pages
automatically (about 1–2 minutes).

```bash
npm run build                      # 1. confirm it builds with no errors
git add -A
git commit -m "Describe the change in plain language"
git push origin main               # 2. triggers the deploy
```

Watch the deploy with `gh run watch` (or the repo's **Actions** tab). When it
finishes, the change is live. Tell the owner it's published and give them the URL.

- **Live URL:** `https://broger.ch`
- **Repository:** `https://github.com/andybroger/broger`

If `gh` is not authenticated, run `gh auth login` once.

## 5. Custom domain and base path

The site is deployed to the custom domain `https://broger.ch`, so it must build
for the root path `/`.

- `astro.config.mjs` still supports `GH_PAGES_BASE` for local experiments, but
  `.github/workflows/deploy.yml` must **not** set `GH_PAGES_BASE`.
- Do not build production for `/broger`; that was only for the temporary GitHub
  project URL before the custom domain was connected.
- All static logo/favicon URLs should use `import.meta.env.BASE_URL` or the
  existing `logo()` helper. Do not hard-code `/broger/...`.
- Photos imported from `src/assets/photos/` are handled by Astro assets and do
  not need manual URL prefixing.

GitHub Pages is configured with:

- Custom domain: `broger.ch`
- HTTPS: enforced
- DNS: apex `broger.ch` points to GitHub Pages A records; `www` may CNAME to
  `broger.ch` or `andybroger.github.io` depending on DNS provider behavior.

## 6. House style

- German, Swiss spelling (use `ss`, not `ß` — e.g. "Stockmass", "Schluss").
- Keep the alpine/winter palette defined in `src/styles/global.css` (glacier
  teal, gold accents, deep ink, snow background).
- New sections should use the `reveal` class to get the scroll-in animation, and
  an `id` if they need a nav anchor.
- Run `npm run build` before every commit; never push a build that fails.
- Do not commit generated folders (`dist/`, `.astro/`, `node_modules/`) or local
  machine files (`.DS_Store`).
