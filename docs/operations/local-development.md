# Local Development

## Prerequisites

- **Node.js 20** and npm — pinned in [`.nvmrc`](../../.nvmrc) and used by CI (`nvm use` picks it up).
  18.17+ should also work, but 20 is the tested version. Check with `node --version`.
- Git.

> **Windows note:** Node here was installed via `winget install OpenJS.NodeJS.LTS`. After a fresh
> install, **already-open terminals won't have `node` on their PATH** — open a *new* terminal (the
> MSI updates the machine PATH, which existing shells don't re-read). Same applies after installing
> the GitHub CLI.

## Run it

```bash
npm install          # first time only
npm run dev          # http://localhost:4321, hot reload
```

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the built `dist/` locally (closest to production) |
| `npm run check` | Type-check (`astro check`) |

## Verifying a build without a browser

The build is static, so you can sanity-check output by inspecting `dist/`:

```bash
npm run build
# e.g. confirm a string is present in the built home page:
#   PowerShell:  Select-String -Path dist/index.html -Pattern 'frugally'
#   bash:        grep -o 'frugally' dist/index.html
```

## Conventions

- **Edit text/nav/content metadata in `src/consts.ts`**, not in markup.
- **Design tokens in `src/styles/tokens.css`** drive the whole look.
- **Script-injected DOM needs global styles** (`is:global`/`:global`) — Astro scoped styles only
  apply to build-time elements. See [../design-system.md](../design-system.md#scoped-vs-global-styles).

## Line endings

On Windows you'll see `LF will be replaced by CRLF` warnings from Git. They're harmless — the repo
content is normal; Git is just normalizing line endings on checkout.
