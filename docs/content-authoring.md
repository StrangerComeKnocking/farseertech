# Content Authoring

How to change site text, the home feature, and the field notes.

## Site text, nav, and the title

All of it is in [`src/consts.ts`](../src/consts.ts):

- **`SITE`** — `title`, `owner`, `role` (e.g. "Founder"), `positioning`, `tagline`, `description`
  (used for `<meta>`/OG), `ogImage`, and `social` links.
- **`NAV`** — the left-sidebar items. The Field Notes item carries a `section` (path prefix that marks
  it active) and `children` (the notes shown nested beneath it when active).

Edit here; the sidebar, top bar, home, About, `<head>`, and RSS all read from it.

## The field note model

Today there is **one** bespoke field note. It has two halves:

1. **Metadata** in `consts.ts` → `FEATURED` (and `FIELD_NOTES`), typed as `FieldNote`:
   `series`, `number`, `kicker`, `title`, `highlight` (the coral phrase **inside** the title),
   `description`, `date`, `href`, `comic`. This drives the **home feature card**, **search**,
   **RSS**, **`<head>`/JSON-LD**, and the **nav**. (Every field is required — the `FieldNote`
   type means a missing one fails `npm run check`.)
2. **The page itself** at `src/pages/field-notes/<slug>.astro` — a self-contained Astro page with its
   own scoped `<style>` and a small lightbox script.

## Editing the existing note

- **Copy** (headline, paragraphs, the comic caption, the SVG table): edit the markup in
  `src/pages/field-notes/ai-velocity-manufacturing-liabilities.astro`.
- **Card teaser / SEO / nav label:** edit `FEATURED` in `consts.ts`.
- **The comic image:** replace `public/images/post01-comic.png` (keep the dimensions similar so the
  layout holds). The note references it at `/images/post01-comic.png`.

## Adding a *new* field note

Until there are enough notes to justify a content collection, follow the same pattern:

1. **Create the page** `src/pages/field-notes/<your-slug>.astro`. Start from the existing note as a
   template, or use a simpler layout — it just needs `<BaseLayout>` with a `title`, `description`,
   `type="article"`, a JSON-LD object, and a `crumbs` array.
2. **Add its metadata** to `consts.ts` using the **`FieldNote`** type — so a missing field fails
   `npm run check` (and CI) instead of silently rendering `undefined`. Rename the existing `FEATURED`
   object to `NOTE_01`, then:
   ```ts
   const NOTE_02: FieldNote = {
     series: 'Paid in Production', number: '№ 02', kicker: 'Field Note',
     title: 'Your headline', highlight: 'the coral phrase inside the title',
     description: 'One or two sentences — powers the home card, search, RSS, and SEO.',
     date: new Date('YYYY-MM-DD'),
     href: '/field-notes/your-slug', comic: '/images/your-image.png',
   };
   export const FIELD_NOTES: FieldNote[] = [NOTE_02, NOTE_01]; // newest first
   export const FEATURED: FieldNote = FIELD_NOTES[0];          // home features the newest
   ```
3. **Nav, search, and RSS update automatically** — all three are derived from `FIELD_NOTES`
   (the sidebar's Field Notes children, the top-bar search index, and `rss.xml.js`). Nothing to hand-edit.
4. **SEO** is per-page — each note's page carries its own `<head>` tags and JSON-LD, so there's
   nothing central to update.

> **When to switch to a content collection:** once notes share a layout and you're adding them often,
> move bodies to `src/content/` Markdown/MDX and render via a single dynamic route. See
> [architecture.md](architecture.md#why-the-field-note-is-a-dedicated-page-no-content-collection).

## Breadcrumbs

Each page passes a `crumbs` array to `BaseLayout`, e.g.:

```astro
<BaseLayout crumbs={[{ label: 'Home', href: '/' }, { label: 'Field Notes' }, { label: noteTitle }]}>
```

The last item is the current page (no `href`).

## Images & assets

- Put images in `public/images/` and reference them with an absolute path (`/images/...`).
- The Open Graph/social card is `public/icons/social-card-1200x630.png` (set as the default OG image).
- Keep large raster images out of the page source — reference files, don't inline base64.

## Local preview

```bash
npm run dev      # http://localhost:4321 — hot reloads as you edit
```

Then ship it via [operations/deployment.md](operations/deployment.md).
