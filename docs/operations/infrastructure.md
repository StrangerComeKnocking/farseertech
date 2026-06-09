# Infrastructure

What's hosted where, and the configuration the pipeline depends on.

> This is a **public** repository. Nothing here contains a secret value. Identifiers like the
> Cloudflare account/zone ID are not secrets, but they're not advertised here either — find them in
> the Cloudflare dashboard or the GitHub repo settings.

## Components

| Component | Provider | Notes |
| --- | --- | --- |
| Source + CI/CD | GitHub | `StrangerComeKnocking/farseertech`; Actions builds & deploys |
| Static host | Cloudflare **Pages** | Project **`farseertech`**, a *Direct Upload* project |
| DNS + TLS + CDN | Cloudflare | The `farseertech.com` zone (see [dns-and-email.md](dns-and-email.md)) |
| Domain registrar | Squarespace | Nameservers delegated to Cloudflare |
| Email | Mailgun | Records preserved in the Cloudflare zone |

## Cloudflare Pages project

- **Name:** `farseertech` · **Type:** Direct Upload · **Production branch:** `main`.
- Deployments come from GitHub Actions (`wrangler pages deploy`), **not** Cloudflare's built-in Git
  integration. Don't also connect the repo in the Pages dashboard, or you'll get double deploys.
- URLs: production `farseertech.com` / `farseertech.pages.dev`; previews `<branch>.farseertech.pages.dev`
  and per-deploy `<hash>.farseertech.pages.dev`.
- TLS is automatic. "Always Use HTTPS" is on at the zone level; Pages also redirects HTTP→HTTPS.

## Secrets & variables (GitHub → Settings → Secrets and variables → Actions)

| Name | Kind | Purpose |
| --- | --- | --- |
| `CLOUDFLARE_API_TOKEN` | **Secret** | Lets CI deploy to Pages. Scoped to **Account · Cloudflare Pages · Edit** — nothing more |
| `CLOUDFLARE_ACCOUNT_ID` | **Variable** | The Cloudflare account that owns the Pages project. Also gates the deploy job — if unset, deploys are skipped |

The deploy token is intentionally minimal: it can publish Pages and nothing else. Rotate it any time
(see [runbook.md](runbook.md#rotate-the-cloudflare-deploy-token)).

> Zone/DNS changes were done with a **separate, broader, temporary** token that was used once and
> revoked. CI never needs Zone or DNS permissions.

## Creating the Pages project (one-time, for reference)

Wrangler won't auto-create a project in non-interactive CI, so the Direct Upload project is created
once via the API:

```bash
# with a Cloudflare API token that has Pages:Edit
curl -sX POST "https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/pages/projects" \
  -H "Authorization: Bearer <TOKEN>" -H "Content-Type: application/json" \
  -d '{"name":"farseertech","production_branch":"main"}'
```

After it exists, every `wrangler pages deploy ... --project-name=farseertech` just publishes to it.

## Cost

Effectively $0: Cloudflare Pages (free tier, unlimited bandwidth), Cloudflare DNS (free), GitHub
Actions (free minutes for a public repo). Frugal by design.
