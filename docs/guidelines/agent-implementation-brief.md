# FarseerTech Agent Implementation Brief

> ⚠️ **Historical brief — SUPERSEDED. Do not follow as current instructions.** This was the original
> spec. The site has since diverged substantially (single field note, left-sidebar + top-bar nav,
> Inter typeface, frugal-consultancy positioning, no content collection). Build against the as-built
> docs: [../architecture.md](../architecture.md) and [../design-system.md](../design-system.md).

You are building the FarseerTech website, not a generic AI/SaaS landing page.

Treat FarseerTech as a premium personal technical publication for engineering leaders and executives. The brand is FarseerTech; Yusuf Tinwala is the owner and voice behind it.

## Non-negotiables

- Avoid excessive scrolling.
- Avoid generic AI-generated aesthetics.
- Avoid generic SaaS layouts.
- Avoid dark cyberpunk.
- Avoid overused gradients.
- Avoid walls of text.
- Avoid AI buzzword-heavy copy.
- Avoid decorative UI that adds height without meaning.
- Every page must feel authored and intentional.

## Primary design goal

Build a low-scroll, high-signal publication experience.

The homepage should fit mostly within 1–2 desktop viewports. Details should live in:

- Tabs
- Drawers
- Section readers
- Lightboxes
- Command search
- Compact cards

Do not create a long marketing homepage.

## Audience

Primary audience:

- Engineering leaders
- Executives
- Principal engineers
- Product/platform leaders
- Builders of hyperscale agentic systems

They should understand what FarseerTech is in under 10 seconds.

## Navigation

Use this top navigation:

```text
Field Notes
Building Organizations
Building Product
Building Software
About
```

No archive page for now.

## Homepage

Create a compact publication console:

- Header
- Positioning line
- Search / command box
- Weekly highlight / pinned article
- Four pillar cards
- Recent/pinned article cards that fit without long scroll
- Compact About/Yusuf card

## Article pages

Articles should avoid long undifferentiated scroll.

Use a sectioned reader:

```text
Left rail: section navigation
Main panel: current section
Right rail: quote / share / reading time / metadata
Bottom: previous/next section controls
```

Support:

- Next/previous buttons
- Keyboard navigation
- Copyable quotes
- Share controls
- Reading time
- Open Graph metadata

## Visual style

The site should feel:

- Futuristic but premium
- Editorial but technical
- Warm but precise
- Serious with occasional wit
- Manually crafted

Use a lighter warm paper background. Use subtle accents. Do not overdo color.

Preferred fonts:

```css
--serif: 'Newsreader', Georgia, serif;
--mono: 'IBM Plex Mono', ui-monospace, monospace;
```

## Core positioning

FarseerTech is about calm, senior engineering judgment for building hyperscale agentic products — the kind that operate at trillion-request scale and survive production reality.

Possible tagline direction:

```text
Seeing the production bill before it arrives.
```

## Astro implementation

Use Astro with content collections.

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

## Success criteria

The implementation is successful if:

- The homepage communicates the brand in under 10 seconds.
- The homepage does not feel scroll-heavy.
- The site does not look like AI slop.
- The site feels premium, serious, technical, and authored.
- Articles are shareable and visually distinctive.
- The site can grow into a serious technical publication without becoming cluttered.
