# Design System

The whole look is driven by tokens in [`src/styles/tokens.css`](../src/styles/tokens.css). Change a
token and it propagates everywhere. Base styles and the app shell live in
[`src/styles/global.css`](../src/styles/global.css); component-specific styles are scoped inside
each `.astro` component.

> This documents the **as-built** system. The original brief is in [guidelines/](guidelines/) — the
> palette and a few choices have since evolved (e.g. Inter replaced the original serif).

## Typography

| Variable | Value | Used for |
| --- | --- | --- |
| `--sans` | **Inter** | Everything — UI, body, headings (clean, minimal) |
| `--serif` | aliased to `--sans` | Legacy alias; kept so existing rules resolve to the sans |
| `--mono` | **IBM Plex Mono** | Labels, breadcrumbs, the note masthead, code |

Fonts load from Google Fonts in `BaseHead.astro`. To switch the typeface, change `--sans` (and the
Google Fonts `<link>`); nothing else needs touching.

## Color

Warm paper surfaces with restrained, single-accent-per-context color.

| Token | Hex | Meaning |
| --- | --- | --- |
| `--paper` | `#fbf8f0` | Page background |
| `--card` | `#fffdf8` | Cards, panels, the search dropdown |
| `--ink` | `#2b2a33` | Primary text |
| `--ink-soft` | `#5f5d6b` | Secondary text |
| `--faint` | `#9b98a6` | Meta, captions |
| `--line` / `--line-strong` | `#e6e0d3` / `#ddd4c2` | Borders |
| `--coral` | `#f5634f` | The brand accent (risk, the "bill", emphasis) |
| `--teal` `--gold` `--indigo` `--violet` `--mint` | — | Secondary accents (used sparingly in the note) |

Rule of thumb: **one dominant accent per page**, color guides attention rather than decorates.

## Spacing, radius, elevation

Tokens cover spacing (`--sp-*`), radii (`--r-sm/--r/--r-lg`), and shadows (`--shadow*`). Layout
tokens worth knowing:

- `--sidebar-w` — left nav width.
- `--topbar-h` — top bar height; the sidebar sticks below it (`top: var(--topbar-h)`).
- `--measure` — comfortable reading width.

## Layout & responsiveness

- **Desktop:** top bar across the top; left sidebar + content below it (`.shell` is a 2-column grid).
- **Mobile (`< 60rem`):** the sidebar collapses into a horizontal nav strip under the top bar; the
  breadcrumb trail hides to keep the bar minimal.

## Motion

Subtle and optional: a scroll-reveal "rise" on the field note, soft hovers, a small dropdown pop.
All of it respects `prefers-reduced-motion` (see the reduced-motion block in `global.css`).

## Scoped vs. global styles

A real gotcha worth remembering:

> **Astro scopes component styles to elements that exist at build time.** DOM created later by a
> client script (e.g. the search results, or the lightbox copy button) does **not** get the scoping
> attribute, so scoped rules won't match it.

Style script-injected DOM with a `<style is:global>` block (or `:global(...)`). The search dropdown
rows in `TopBar.astro` are the canonical example — they live in a global block precisely because the
result rows are injected by JavaScript.

## Icons

The brand mark is a circular "Trajectory F". The favicon/PWA/OG set is pre-exported in
`public/icons/` (see [guidelines/icons.md](guidelines/icons.md) for the original monoline icon rules).
Wire-up (favicon, apple-touch, manifest, OG) is in `BaseHead.astro`.
