# Rich Sykes — professional website

A React and TypeScript website with a homepage and a dedicated curriculum vitae page, built with Vite and Bun. Published at **https://rich-sykes.github.io/** from [rich-sykes/rich-sykes.github.io](https://github.com/rich-sykes/rich-sykes.github.io). GitHub Pages serves only the static files in `dist/`; no Node or Bun server runs in production.

## Run locally

Use **Node.js 24.21.0 LTS** (`.nvmrc` / `.node-version`) and **Bun 1.4.2** (`.bun-version` / `packageManager`). Node is required by the Vite toolchain; Bun manages dependencies and project commands. CI reads the same version files.

If using nvm, run `nvm install` and `nvm use`. Install the pinned Bun version with the [official Bun installer](https://bun.com/docs/installation):

```sh
curl -fsSL https://bun.com/install | bash -s 'bun-v1.4.2'
bun --version
node --version
bun install --frozen-lockfile
bun run dev
```

Open the local URL printed by Vite. Commands:

| Command | Purpose |
| --- | --- |
| `bun run dev` | Development server with live updates |
| `bun run typecheck` | Strict TypeScript check, no emitted files |
| `bun run lint` | Biome lint, accessibility rules and formatting check |
| `bun run format` | Format source files |
| `bun run build` | Explicit TypeScript check followed by Vite production build |
| `bun run preview` | Serve the built `dist/` locally for review |

## Update content

Edit **`src/content.ts`** for the homepage introduction, links, capability summaries, projects, case studies, engineering principles and background. Edit **`src/cv-content.ts`** for curriculum vitae experience, expertise, education and certifications, including personal Microsoft Learn verification URLs. Presentation lives in `src/App.tsx`, `src/CurriculumVitae.tsx` and the shared `src/components/SiteChrome.tsx`. `src/styles.css` contains the design tokens and responsive styles. Update `index.html` and `curriculum-vitae/index.html` when changing page titles, descriptions or canonical URLs.

See **`CONTENT-SOURCES.md`** for the evidence behind professional claims. The site presents its own curriculum vitae at `/curriculum-vitae/`. Projects lead the homepage’s project section; the earlier case studies remain inside the Professional delivery disclosure. Keep throughput figures in the case-study and experience detail; do not change 2–3 → 8 runs/day to “8×”.

Run lint and build before committing, then push to `main`. The workflow checks, builds and publishes automatically. Pull requests run the same checks without deployment. Commit `bun.lock` whenever dependencies change; keep Bun as the only package manager.

## GitHub Pages

In repository **Settings → Pages → Build and deployment**, the source must be **GitHub Actions**. The workflow uses GitHub's official configure, artifact upload and deployment actions. Its build job has read-only repository access; only the deployment job has Pages and OIDC write permissions. The deployment environment is `github-pages`.

Vite's base path is `/` for the account root domain. Vite builds two HTML entry points: `dist/index.html` and `dist/curriculum-vitae/index.html`. Both pages support direct visits and refreshes on GitHub Pages without a client-side router or a 404 workaround. Section links use anchors. No custom domain or Sites hosting is configured. The separate GitHub profile repository is a reference only.

## Verification

For a release, run `bun install --frozen-lockfile`, `bun run lint`, `bun run build`, then `bun run preview`. Check both routes, direct visits, refreshes, desktop and mobile layouts, 200% enlargement, visible keyboard focus, the skip link, navigation anchors, external links, favicon loading and browser console errors. Repeat a smoke check on the live Pages URL after the deployment succeeds.

No analytics, cookies, external fonts, third-party embeds or contact form are included. Contact is through LinkedIn. Browser loading requires JavaScript; the HTML includes a profile-link fallback when it is disabled.
