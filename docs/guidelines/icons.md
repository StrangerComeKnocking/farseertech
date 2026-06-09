# FarseerTech Icon Set

> ⚠️ **Historical brief — superseded.** The original monoline icon set below is *not* what ships. The
> site uses the circular "Trajectory F" logo + favicon/PWA set in `public/icons/`. See
> [../design-system.md](../design-system.md#icons).

## Icon Style Rules

- SVG only.
- 24x24 viewBox by default.
- 2px stroke.
- Rounded line caps and joins.
- No filled icons except tiny accent marks.
- Use `currentColor` for the main stroke.
- Use one accent color only when needed.
- Icons should look authored, not from a generic library.
- Avoid playful emoji-like icons.

---

## Farseer Mark

```html
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M3.5 16C6.8 10.8 11 8.2 16 8.2C21 8.2 25.2 10.8 28.5 16C25.2 21.2 21 23.8 16 23.8C11 23.8 6.8 21.2 3.5 16Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="16" cy="16" r="4.2" stroke="currentColor" stroke-width="2"/>
  <path d="M7 26H25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle cx="23.5" cy="8.5" r="2" fill="#f5634f"/>
</svg>
```

---

## Field Notes

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M7 3H17C18.1 3 19 3.9 19 5V21L16 19.5L13 21L10 19.5L7 21L5 20V5C5 3.9 5.9 3 7 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M9 8H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M9 12H14" stroke="#f5634f" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## Building Organizations

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="12" cy="5" r="2.5" stroke="currentColor" stroke-width="2"/>
  <circle cx="6" cy="18" r="2.5" stroke="currentColor" stroke-width="2"/>
  <circle cx="18" cy="18" r="2.5" stroke="currentColor" stroke-width="2"/>
  <path d="M12 7.5V11.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 11.5L6 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 11.5L18 15.5" stroke="#15a99b" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## Building Product

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" stroke-width="2"/>
  <path d="M8 9H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M8 13H12" stroke="#5f6ff0" stroke-width="2" stroke-linecap="round"/>
  <circle cx="17" cy="16" r="1.5" fill="#f5634f"/>
</svg>
```

---

## Building Software

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/>
  <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/>
  <rect x="9" y="14" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="2"/>
  <path d="M10 7H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M7 10L10.5 14" stroke="#5f6ff0" stroke-width="2" stroke-linecap="round"/>
  <path d="M17 10L13.5 14" stroke="#5f6ff0" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## TTL / Expiry

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="12" cy="13" r="7" stroke="currentColor" stroke-width="2"/>
  <path d="M9 3H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M12 13L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M16.5 17.5L20.5 21.5" stroke="#f5634f" stroke-width="2" stroke-linecap="round"/>
  <path d="M20.5 17.5L16.5 21.5" stroke="#f5634f" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## Ownership

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="2"/>
  <path d="M5 20C5.8 16.7 8.4 15 12 15C15.6 15 18.2 16.7 19 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M17.5 6.5L20 9L23 5" stroke="#15a99b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## Usage Signal

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M4 18V10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M9.3 18V6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M14.7 18V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M20 18V8" stroke="#5f6ff0" stroke-width="2" stroke-linecap="round"/>
  <path d="M3 20H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
```

---

## Agentic System

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="5" y="7" width="14" height="11" rx="3" stroke="currentColor" stroke-width="2"/>
  <path d="M9 7V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <path d="M15 7V4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle cx="10" cy="12.5" r="1" fill="currentColor"/>
  <circle cx="14" cy="12.5" r="1" fill="currentColor"/>
  <path d="M9.5 16H14.5" stroke="#f5634f" stroke-width="2" stroke-linecap="round"/>
</svg>
```
