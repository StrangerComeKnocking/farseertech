# Operations

Everything about running, shipping, and keeping this site alive.

| Doc | For |
| --- | --- |
| [local-development.md](local-development.md) | Running and building the site on your machine |
| [deployment.md](deployment.md) | The CI/CD pipeline, the staging→production flow, how to ship |
| [infrastructure.md](infrastructure.md) | What's hosted where; the secrets & variables the pipeline needs |
| [dns-and-email.md](dns-and-email.md) | The domain, DNS on Cloudflare, and **not** breaking email |
| [runbook.md](runbook.md) | Step-by-step for common tasks + troubleshooting |

## Who runs what

| Concern | Owner | Where |
| --- | --- | --- |
| Source & CI | GitHub | `StrangerComeKnocking/farseertech` |
| Build host + DNS + TLS/CDN | Cloudflare | Pages project `farseertech` + the `farseertech.com` zone |
| Domain registration | Squarespace | (nameservers delegated to Cloudflare) |
| Transactional email | Mailgun | MX/SPF/DKIM live in the Cloudflare zone |

## Golden rules

1. **Review on `staging` before `main`.** Production is `farseertech.com`; never your only test.
2. **Secrets live in GitHub, never in the repo.** This is a public repository.
3. **DNS email records are load-bearing.** Read [dns-and-email.md](dns-and-email.md) before touching DNS.
4. **A fresh deploy can serve one stale edge-cache hit.** Verify with a cache-buster — details in
   [runbook.md](runbook.md#a-deploy-succeeded-but-i-still-see-the-old-page).
