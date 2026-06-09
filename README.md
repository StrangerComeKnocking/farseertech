# FarseerTech

Source for **[farseertech.com](https://farseertech.com)** — a personal technical
publication by **Yusuf Tinwala** on building hyperscale, agentic, production-grade
systems: AIOps, agentic architecture, reliability, product judgment, and
engineering leadership.

Built with [Astro](https://astro.build) to the brand packet in
[`docs/guidelines/`](docs/guidelines/): a low-scroll "publication console"
homepage, a sectioned article reader, command-palette search, warm-paper visual
system (Newsreader + IBM Plex Mono), and the authored monoline icon set. Output is
a static site for **Cloudflare Pages**.

---

## Run it

Requires **Node.js 18.17+** (or 20+).

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command           | Does                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with hot reload            |
| `npm run build`   | Build static site to `dist/`          |
| `npm run preview` | Serve the production build locally    |

---

## Content model

Four pillars (defined in `src/consts.ts`): **Field Notes**, **Building
Organizations**, **Building Product**, **Building Software**. Each post declares
its pillar and lives at `/<pillar>/<slug>`.

### Writing a post

Add a file to `src/content/posts/`. The **body is plain HTML, split into
`<section>` blocks** — the reader turns those sections into a navigable, low-scroll
reading experience (left-rail nav, next/previous, arrow keys).

```markdown
---
title: "Your headline"
description: "One or two high-signal sentences (cards, search, OG, RSS)."
pillar: "field-notes"   # field-notes | building-organizations | building-product | building-software
date: 2026-06-08
# Optional:
sections: ["Thesis", "Pattern", "Mechanism", "Failure Mode", "Control", "Final Take"]
quote: "A copyable pull quote shown in the right rail."
featured: true          # eligible to be the weekly highlight
pinned: true            # force the weekly highlight
accent: "coral"         # coral | indigo | teal | gold | violet (overrides pillar default)
draft: true             # hidden in prod, visible in `npm run dev`
---

<section data-title="Thesis">
  <h2>Your section heading</h2>
  <p>Body HTML. Use headings, lists, <code>code</code>, and…</p>
  <blockquote>…blockquotes become copyable pull quotes automatically.</blockquote>
</section>

<section data-title="Pattern">
  <h2>Next section</h2>
  <p>The <code>sections</code> frontmatter array should match these blocks in order.</p>
</section>
```

Notes:
- The reader is **progressive enhancement** — with JS it paginates by section; without JS the full article reads top-to-bottom. All sections are always in the HTML (good for SEO).
- Fenced code blocks (` ```js `) get syntax highlighting.
- Keep HTML flush-left (Markdown treats 4-space indents as code).

---

## Project structure

```text
src/
  components/   Header, SearchCommand, ArticleCard, PillarCard,
                SectionReader, QuoteCard, CopyQuoteButton, ShareBar, Icon, …
  content/posts/  the essays (HTML-sectioned)
  layouts/      BaseLayout, ArticleLayout
  pages/        index, about, [pillar]/index, [pillar]/[slug], rss.xml, 404
  styles/       tokens.css (design tokens), global.css (base + prose)
docs/guidelines/  the FarseerTech brand & implementation packet
```

Customize: site text in `src/consts.ts`, colors/fonts/scale in
`src/styles/tokens.css`, icons in `src/components/Icon.astro`.

---

## Deploy to Cloudflare Pages

Static Astro build — no adapter needed.

1. Push to GitHub.
2. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build command `npm run build`, output directory `dist`, framework preset **Astro**.
4. Add `farseertech.com` under **Custom domains**.

Every push to the main branch redeploys, with preview deploys for pull requests.

> CLI alternative: `npm run build && npx wrangler pages deploy dist`.
