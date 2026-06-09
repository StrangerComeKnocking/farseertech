# FarseerTech Documentation

Everything you need to understand, run, and operate this site.

## Build & design

| Doc | Read it when you want to… |
| --- | --- |
| [architecture.md](architecture.md) | Understand how the site is structured and the decisions behind it |
| [design-system.md](design-system.md) | Change colors, type, spacing, or the layout shell |
| [content-authoring.md](content-authoring.md) | Add or edit a field note, swap the home feature, update site text |

## Operations

| Doc | Read it when you want to… |
| --- | --- |
| [operations/local-development.md](operations/local-development.md) | Run the site on your machine |
| [operations/deployment.md](operations/deployment.md) | Understand the CI/CD pipeline and ship a change |
| [operations/infrastructure.md](operations/infrastructure.md) | Know what's hosted where, plus secrets & variables |
| [operations/dns-and-email.md](operations/dns-and-email.md) | Touch DNS, the domain, or email — without breaking mail |
| [operations/runbook.md](operations/runbook.md) | Do a specific task (promote, roll back, purge cache, rotate a token) or fix something |

## Reference

| Doc | What it is |
| --- | --- |
| [guidelines/](guidelines/) | The original brand & implementation brief the site was built from |

---

### The 60-second mental model

- **Static site** built with Astro → plain files in `dist/`.
- **One source of truth** for text/nav/content metadata: [`src/consts.ts`](../src/consts.ts).
- **Push to deploy:** `staging` branch → preview URL, `main` branch → production (`farseertech.com`).
- **Cloudflare** does three jobs: builds-host (Pages), DNS (the zone), and TLS/CDN. The domain is
  *registered* at Squarespace but *served* via Cloudflare.
- **Email still flows** through Mailgun because its DNS records were copied into the Cloudflare zone —
  treat those records as load-bearing.
