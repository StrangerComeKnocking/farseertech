# Architecture

How the FarseerTech site is built, and the reasoning behind the choices.

## Goals

1. **Fast and durable** — a content site should be static files on a CDN, not a running server.
2. **Authored, not templated** — it should read like a deliberate publication, not a SaaS landing page.
3. **Frugal** — few moving parts, almost no client-side JavaScript, nothing to operate at 2 a.m.
4. **Low-friction to write** — adding a note shouldn't require touching the framework.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Astro 5** (static output) | Content-first, ships ~0 JS by default, components without a runtime |
| Styling | Plain CSS + design tokens | No framework lock-in; the whole look lives in `tokens.css` |
| Hosting | **Cloudflare Pages** | Free, unlimited bandwidth, global edge, simple custom domain |
| CI/CD | **GitHub Actions** | Build once, deploy to a `staging` preview or `main` production |

Astro was chosen over Next.js (heavier for a pure content site) and Hugo (less ergonomic templating).
The original framework/hosting evaluation lives in the project history; this is the as-built result.

## The shell

Every page is wrapped by [`src/layouts/BaseLayout.astro`](../src/layouts/BaseLayout.astro), which
composes three pieces:

```text
┌──────────────────────────────────────────────────────┐
│ TopBar:  logo name · breadcrumbs · search             │   <- thin utility strip
├───────────────┬──────────────────────────────────────┤
│ Sidebar       │ <main> page content </main>           │
│ (left nav)    │ Footer                                │
└───────────────┴──────────────────────────────────────┘
```

- **[`TopBar.astro`](../src/components/TopBar.astro)** — brand name, breadcrumb trail (passed per page
  as a `crumbs` array), and a small client-side search over the site's pages.
- **[`Sidebar.astro`](../src/components/Sidebar.astro)** — the *only* navigation menu. "Field Notes"
  **expands** to list the specific note(s) when you're in that section.
- **[`Footer.astro`](../src/components/Footer.astro)** — a slim copyright/About line.

There is intentionally **one** navigation (left). The top bar carries location (breadcrumbs) and
search, not a second menu.

## Pages & routing

Astro file-based routing under `src/pages/`:

| Route | File |
| --- | --- |
| `/` | `index.astro` — home; features the latest field note |
| `/about` | `about.astro` |
| `/field-notes/ai-velocity-manufacturing-liabilities` | a **dedicated, self-contained** page |
| `/rss.xml` | `rss.xml.js` — feed endpoint |
| `404` | `404.astro` |

### Why the field note is a dedicated page (no content collection)

The note is a bespoke visual essay (custom masthead, an inline SVG, an image with a zoom lightbox,
scroll-reveal animation). Forcing that through a Markdown content collection + a generic article
layout fought the design and risked Markdown-in-HTML quirks. So the note is its own `.astro` page
with **scoped** styles and its own small script. Its *metadata* lives in `consts.ts` as a typed
`FieldNote` (`title`, `highlight`, `description`, `date`, `href`, `comic`, …) — `FEATURED` — so the
home feature, search, `<head>`/SEO, and RSS can all reference one source.

> When there are several notes, revisit this: a content collection becomes worth it once the
> per-note design converges. For one bespoke piece, a page is simpler and safer.

## Single source of truth: `consts.ts`

[`src/consts.ts`](../src/consts.ts) holds:

- `SITE` — title, owner, role, positioning/tagline, description, OG image, social.
- `FEATURED` / `FIELD_NOTES` — the note metadata that drives home, RSS, `<head>`, and the nav.
- `NAV` — the left-nav items; the Field Notes item declares its `section` and `children`.

Change site copy or nav here, not in markup.

## Client JavaScript

Deliberately tiny, and only where it earns its keep:

- **Search** (TopBar) — filters a small in-page index; no network calls.
- **Lightbox** (the field note) — click the comic to zoom.

Both are plain, dependency-free scripts. Note the gotcha documented in
[design-system.md](design-system.md#scoped-vs-global-styles): JS-injected DOM does **not** receive
Astro's scoped styles, so anything rendered by a script must be styled with `:global`/`is:global`.

## SEO & assets

- [`BaseHead.astro`](../src/components/BaseHead.astro) emits title/description, canonical, Open Graph
  + Twitter cards (using `social-card-1200x630.png`), the favicon/PWA icon set, and per-article JSON-LD.
- Icons, the OG card, and `site.webmanifest` live in `public/icons/` and `public/`.
- `@astrojs/sitemap` generates `sitemap-index.xml` at build.
