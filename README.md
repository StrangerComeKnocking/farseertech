<div align="center">

# FarseerTech

**Solving complicated engineering problems, frugally.**

The source for **[farseertech.com](https://farseertech.com)** — the site and field notes of
FarseerTech, an engineering practice run by Yusuf Tinwala.

[![CI · Deploy](https://github.com/StrangerComeKnocking/farseertech/actions/workflows/deploy.yml/badge.svg)](https://github.com/StrangerComeKnocking/farseertech/actions/workflows/deploy.yml)
&nbsp;·&nbsp; [Live site](https://farseertech.com)
&nbsp;·&nbsp; [Docs](docs/)

</div>

---

## What this is

A small, fast, statically-generated site built with [Astro](https://astro.build). It's a
**publication**, not a SaaS app: a low-scroll, content-first design with one polished field
note today and room to grow. Output is plain static files served from Cloudflare's edge.

- **Framework** — Astro 5 (static output, near-zero client JS)
- **Type** — Inter (UI/body) + IBM Plex Mono (labels/code)
- **Hosting** — Cloudflare Pages, custom domain `farseertech.com`
- **CI/CD** — GitHub Actions → Cloudflare Pages, with a `staging` preview before production

## Quickstart

Requires **Node.js 20** (pinned in [`.nvmrc`](.nvmrc) and used by CI; 18.17+ should also work, but 20 is what's tested).

```bash
git clone https://github.com/StrangerComeKnocking/farseertech.git
cd farseertech
npm install
npm run dev          # http://localhost:4321
```

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Local dev server with hot reload              |
| `npm run build`   | Production build into `dist/`                 |
| `npm run preview` | Serve the built `dist/` locally               |
| `npm run check`   | Type-check the project (`astro check`)        |

> On Windows, if `node` isn't found after a fresh install, open a **new** terminal so the PATH
> picks it up. See [docs/operations/local-development.md](docs/operations/local-development.md).

## Project structure

```text
src/
  components/   TopBar (logo · breadcrumbs · search), Sidebar (left nav),
                Footer, BaseHead (SEO/icons)
  layouts/      BaseLayout — the top-bar + left-sidebar app shell
  pages/        index · about · 404 · rss.xml · field-notes/<the one note>.astro
  styles/       tokens.css (design tokens) · global.css (base + shell)
  consts.ts     SITE, NAV, FEATURED / FIELD_NOTES — the single source of truth
public/         icons/ (favicon + PWA + OG), images/, robots.txt, site.webmanifest
docs/           ← you are encouraged to start here
.github/workflows/deploy.yml   CI build + Cloudflare Pages deploy
```

## Content

Today the site features a single, bespoke field note. Site text and the note's metadata live
in [`src/consts.ts`](src/consts.ts); the note itself is a self-contained page under
`src/pages/field-notes/`. Full guide: **[docs/content-authoring.md](docs/content-authoring.md)**.

## Deploying

Pushes are deployed automatically:

- **`main`** → production at **farseertech.com**
- **`staging`** → a preview at **staging.farseertech.pages.dev** (review before promoting)

Promote staging to production with a `staging → main` merge. Full pipeline, infrastructure, DNS,
and runbook: **[docs/operations/](docs/operations/)**.

## Documentation

| Doc | What's in it |
| --- | --- |
| [docs/architecture.md](docs/architecture.md) | How the site is built and why |
| [docs/design-system.md](docs/design-system.md) | Tokens, type, color, layout |
| [docs/content-authoring.md](docs/content-authoring.md) | Writing & editing field notes |
| [docs/operations/](docs/operations/) | Local dev, deployment, infra, DNS/email, runbook |
| [docs/guidelines/](docs/guidelines/) | The original brand & design brief |

---

<div align="center"><sub>© Yusuf Tinwala · FarseerTech</sub></div>
