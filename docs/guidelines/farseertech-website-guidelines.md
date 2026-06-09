# FarseerTech Website Guidelines

## 1. Brand Definition

**FarseerTech** is a personal technical publication with the polish and credibility of a premium consulting firm.

It is not a SaaS landing page. It is not a generic AI blog. It is not a startup marketing site. It is a high-signal publication for engineering leaders and executives who care about building hyperscale, agentic, production-grade systems.

### Brand idea

FarseerTech should convey:

> Calm, senior engineering judgment for building hyperscale agentic products — the kind that operate at trillion-request scale and survive production reality.

### Voice

The site speaks in the first person where appropriate. FarseerTech is the brand; **Yusuf Tinwala** is the owner and voice behind it.

The tone should be:

- Calm
- Executive-readable
- Technically serious
- Opinionated
- Slightly witty when it improves readability
- Never buzzword-heavy
- Never breathless
- Never generic AI hype

### Avoid

Avoid like the plague:

- Generic AI-generated aesthetics
- Generic SaaS layouts
- Overused gradients
- Cyberpunk / dark hacker visuals
- Walls of text
- AI buzzword soup
- Excessive scrolling
- Stock-photo energy
- Template-looking cards
- Decorative UI that does not help comprehension

---

## 2. Site Purpose

The site exists for readers to:

1. Read high-quality technical essays.
2. Share posts.
3. Understand the thinking and credibility behind FarseerTech.
4. Associate Yusuf Tinwala with senior technical leadership in AI products, AIOps, agentic architecture, and hyperscale systems.

The site is **not currently optimized for lead capture**. Consulting/service positioning may come later, but should not dominate the initial experience.

---

## 3. Target Audience

Primary audience:

- Engineering leaders
- Principal engineers
- Directors / VPs of Engineering
- Product and platform executives
- Builders of AI-first, agentic, hyperscale systems

The audience is busy. They should understand the page in under **10 seconds**.

The site should reward deeper reading, but never require excessive navigation or scrolling to understand what FarseerTech is.

---

## 4. Content Pillars

The site has four primary content pillars:

1. **Field Notes**
   - Production lessons
   - Operating scars
   - Technical observations
   - Sharp essays like “Your AI velocity is manufacturing liabilities”

2. **Building Organizations**
   - Engineering leadership
   - Team design
   - Accountability models
   - Operating rhythms
   - Decision systems

3. **Building Product**
   - AI product strategy
   - Agentic product experiences
   - Product judgment
   - Customer value
   - Enterprise product design

4. **Building Software**
   - Architecture
   - AIOps
   - Agentic systems
   - Reliability
   - Scale
   - Production engineering

Navigation should be:

```text
Field Notes
Building Organizations
Building Product
Building Software
About
```

No archive page for now.

---

## 5. Core Site Structure

### Homepage

The homepage should be compact and high-density.

It should contain:

- Brand header
- Short positioning line
- Search box / command search
- Weekly highlight / pinned latest article
- Cards for the main content pillars
- A compact grid of recent/pinned posts that fit without excessive scrolling
- About teaser or compact owner card

The homepage should fit mostly within **1–2 desktop viewports**.

A “viewport” means the visible area of the browser window before the user scrolls. For example, on a laptop, everything visible from the top of the page to the bottom of the screen is one viewport.

### Article pages

Articles may scroll, but should avoid long unstructured vertical reading.

Preferred article model:

```text
Left rail: section navigation
Main panel: current article section
Right rail: quote / metadata / share / reading time
Bottom: next/previous section controls
```

Use:

- Section navigation
- Next/previous section buttons
- Keyboard navigation
- Optional drawers for additional detail
- Copyable pull quotes
- Lightboxes for visuals
- Reading time

Avoid:

- Endless scroll
- Long undifferentiated article bodies
- Full-page walls of text
- Too many tags
- Excessive inline metadata

---

## 6. Interaction Principles

### No excessive scrolling

This is a hard product constraint.

Use scrolling only where it serves reading. Do not make users scroll through hero sections, marketing bands, generic feature cards, or repeated content blocks.

Preferred interaction patterns:

- Tabs
- Section cards
- Drawers
- Lightboxes
- Command search
- Keyboard navigation
- Sticky local navigation
- “Next section” / “Previous section” controls
- Compact card grids

Allowed:

- Mobile can scroll more than desktop.
- Articles can scroll when necessary.
- Drawers and modals can scroll internally.

Not allowed:

- Long homepage scroll
- Infinite archive scroll
- Decorative sections that add height but no meaning
- Generic marketing page pacing

---

## 7. Homepage Layout Recommendation

Desktop homepage should use a compact “publication console” layout.

Suggested structure:

```text
┌──────────────────────────────────────────────────────────────┐
│ FarseerTech                             Search / Command      │
│ Calm technical judgment for hyperscale agentic products.      │
├──────────────────────────────────────────────────────────────┤
│ Weekly Highlight                                             │
│ [Large featured article card: title, summary, pillar, read]   │
├──────────────────────────────┬───────────────────────────────┤
│ Pillars                      │ Recent Field Notes            │
│ [4 compact pillar cards]     │ [compact article cards]        │
├──────────────────────────────┴───────────────────────────────┤
│ Yusuf Tinwala · Owner / Voice behind FarseerTech              │
└──────────────────────────────────────────────────────────────┘
```

The homepage should feel like a high-signal dashboard, not a marketing funnel.

---

## 8. Article Experience

Every article should be a standalone visual essay with the same level of depth as “Your AI velocity is manufacturing liabilities.”

Article requirements:

- Strong title
- Short, high-signal intro
- Reading time
- Pillar label
- Copyable quote moments
- One or more authored visuals when useful
- Section navigation
- Strong final thesis card
- Share controls
- Keyboard navigation

### Article section model

Recommended sections:

```text
1. Thesis
2. Pattern
3. Mechanism
4. Failure Mode
5. Control / Operating Model
6. Final Take
```

Do not force every article to use the exact same headings, but every article should have a clear progression.

### Article reading behavior

The default article should use a sectioned reader:

```text
[Section list] [Current section content] [Quote / share / metadata]
```

Users can move with:

- Next button
- Previous button
- Arrow keys
- Section rail

This reduces scroll while preserving depth.

---

## 9. Visual Style

### Overall aesthetic

FarseerTech should feel:

- Futuristic but premium
- Editorial but technical
- Warm but precise
- Serious with occasional wit
- Manually crafted

The design should feel closer to:

```text
premium engineering journal + production field notes + AI systems architecture
```

Not:

```text
AI startup SaaS template
```

### Background

Use a very light warm paper background.

Recommended:

```css
--paper: #fcfaf4;
--card: #fffdf8;
--ink: #26252d;
--ink-soft: #5f5d6b;
--faint: #9b98a6;
--line: #e8e1d4;
```

### Accent colors

Use subtle premium accents. Do not overuse color.

Recommended palette:

```css
--coral: #f5634f;   /* production bill, risk, liability */
--indigo: #5f6ff0;  /* systems, architecture, AI */
--teal: #15a99b;    /* health, renewal, living systems */
--gold: #e9a423;    /* warning, lessons */
--violet: #9e68df;  /* future, agentic systems */
```

Rules:

- One dominant accent per page.
- Accent color should guide attention, not decorate randomly.
- Avoid loud gradients.
- Avoid neon.
- Avoid cyberpunk.

### Gradients

Use only very subtle ambient gradients, if any.

Good:

```css
background:
  radial-gradient(ellipse 50% 38% at 10% 6%, rgba(245,166,35,.045), transparent 62%),
  radial-gradient(ellipse 46% 34% at 92% 16%, rgba(108,121,245,.045), transparent 62%),
  var(--paper);
```

Bad:

```text
large colorful AI blobs
neon gradients
purple-blue SaaS backgrounds
over-animated shimmer effects
```

---

## 10. Typography

Use typography that feels editorial, technical, and premium.

Recommended pairing:

```css
--serif: 'Newsreader', Georgia, serif;
--mono: 'IBM Plex Mono', ui-monospace, monospace;
```

Alternative premium option:

```css
--serif: 'Literata', Georgia, serif;
--sans: 'Inter', system-ui, sans-serif;
--mono: 'IBM Plex Mono', ui-monospace, monospace;
```

Default recommendation: keep **Newsreader + IBM Plex Mono**.

---

## 11. Icon System

Icons should be serious, monoline, and restrained.

Icon rules:

- SVG only.
- 24x24 viewBox by default.
- 2px stroke.
- Rounded line caps and joins.
- No filled icons except tiny accent marks.
- Use `currentColor` for the main stroke.
- Use one accent color only when needed.
- Icons should look authored, not from a generic library.
- Avoid playful emoji-like icons.

See `icons.md` for SVGs.

---

## 12. Content Card Design

Article cards should be dense but elegant.

Card content:

- Pillar
- Title
- One-sentence summary
- Reading time
- Date
- Optional icon
- Optional accent line

Example:

```text
FIELD NOTES · 5 MIN
Your AI velocity is manufacturing liabilities

Agents make creation cheap. They do not make ownership cheap.
```

Card rules:

- No huge thumbnails by default.
- Visuals are for articles, not every card.
- Cards should fit many posts without creating scroll bloat.
- Keep metadata useful and minimal.

---

## 13. Search / Command Palette

The homepage should include a search box.

Preferred behavior:

- Search by title, summary, pillar, and body excerpt.
- Keyboard shortcut: `/` to focus search.
- Optional command palette with `Cmd+K`.
- Results should appear in a compact overlay, not a new page.

---

## 14. SEO Guidance

SEO means **Search Engine Optimization**: making pages understandable and discoverable by Google and other search engines.

For FarseerTech, SEO should be clean but not noisy.

Use:

- Strong page titles
- Meta descriptions
- Open Graph images
- Semantic HTML
- JSON-LD for articles
- Canonical URLs
- Descriptive slugs
- Clean internal links

Do not overuse visible tags just for SEO. If tags add visual noise, keep them in metadata only.

---

## 15. Astro Implementation Guidance

Build the site in **Astro**.

Recommended structure:

```text
src/
  components/
    Header.astro
    SearchCommand.astro
    ArticleCard.astro
    PillarCard.astro
    SectionReader.astro
    QuoteCard.astro
    CopyQuoteButton.astro
    ShareBar.astro
    Icon.astro
  content/
    posts/
  layouts/
    BaseLayout.astro
    ArticleLayout.astro
  pages/
    index.astro
    about.astro
    field-notes/
    building-organizations/
    building-product/
    building-software/
  styles/
    tokens.css
    global.css
```

Use Astro content collections for posts.

Posts should support:

```ts
title
description
pillar
date
readingTime
featured
pinned
accent
sections
ogImage
```

Do not hard-code posts into the homepage.

---

## 16. Performance Rules

- Prefer optimized images.
- Use embedded images only when required.
- Avoid huge base64 images unless the artifact must be self-contained.
- Use lazy loading for article visuals.
- Avoid heavy client-side JS.
- Homepage should be fast and mostly static.
- Search can hydrate only when needed.
- No unnecessary animation libraries.

Animation should be subtle:

- Fade up
- Soft hover
- Light panel transition
- No parallax
- No scroll-jacking
- No constant motion

---

## 17. Accessibility Rules

- All interactive elements must be keyboard accessible.
- Article section navigation must work with keyboard.
- Search must be reachable with `/` or `Cmd+K`.
- Respect reduced motion.
- Use visible focus states.
- Provide alt text for visuals.
- Do not rely on color alone.
- Keep contrast high.

---

## 18. Sharing Features

Every article should include:

- Copy link
- Native share when supported
- Copyable quote blocks
- Open Graph preview
- LinkedIn-friendly title and description

Quote blocks should include a small copy icon and subtle confirmation state.

---

## 19. About Page

The About page should establish credibility without becoming a resume dump.

It should say:

- FarseerTech is a personal technical publication by Yusuf Tinwala.
- Yusuf writes about building hyperscale AI products, AIOps systems, agentic architecture, production engineering, and engineering leadership.
- The writing is grounded in real experience building and operating large-scale systems.

Suggested framing:

```text
FarseerTech is where I write about the parts of engineering that only become obvious after systems reach production scale: ownership, reliability, product judgment, agentic architecture, and the organizational machinery required to make software survive contact with reality.
```

---

## 20. Final Design Principles

1. **One screen should communicate the point.**
2. **Depth should be available, not forced.**
3. **No generic AI aesthetic.**
4. **No excessive scrolling.**
5. **Every page should feel authored.**
6. **Every visual should clarify an idea.**
7. **Every article should be shareable.**
8. **Every interaction should reduce cognitive load.**
9. **FarseerTech should feel calm, premium, futuristic, and technically serious.**
10. **The site should look like it belongs to someone who has operated real systems at scale.**
