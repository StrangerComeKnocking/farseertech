# Deployment

The site deploys itself on every push, via [`.github/workflows/deploy.yml`](../../.github/workflows/deploy.yml).

## The pipeline at a glance

```text
push / PR ─▶ build job (always)        npm ci → npm run build → upload dist/ artifact
                 │
push to main/staging ─▶ deploy job     download dist/ → wrangler pages deploy
                                          --branch=main    → PRODUCTION  (farseertech.com)
                                          --branch=staging → PREVIEW     (staging.farseertech.pages.dev)
```

- **`build`** runs on every push and pull request — fast feedback that the site compiles.
- **`deploy`** runs only on pushes to `main` or `staging` (and manual `workflow_dispatch`), and only
  when Cloudflare is configured (it's gated on the `CLOUDFLARE_ACCOUNT_ID` repo variable). The branch
  name is passed straight to Wrangler, so the same job produces production or preview depending on the
  branch.

It deploys via `cloudflare/wrangler-action` — no API token ever leaves GitHub's encrypted secret store.

## Environments

| Branch | Cloudflare deployment | URL |
| --- | --- | --- |
| `main` | Production | **farseertech.com** (and `farseertech.pages.dev`) |
| `staging` | Preview | **staging.farseertech.pages.dev** |
| anything else | (build only) | — |

The Pages project's **production branch is `main`**, so only `main` updates the custom domain.

## The workflow: ship a change

1. **Work on `staging`:**
   ```bash
   git checkout staging
   # ...edit, then:
   npm run build            # sanity check locally
   git commit -am "Describe the change"
   git push                 # → deploys to staging.farseertech.pages.dev
   ```
2. **Review** the change on `https://staging.farseertech.pages.dev`.
3. **Promote to production** with a fast-forward merge:
   ```bash
   git checkout main
   git merge staging --ff-only
   git push                 # → deploys to farseertech.com
   git checkout staging     # go back to keep working
   ```

> Keep `staging` ahead of (or equal to) `main`. Promotions are simple fast-forwards as long as you
> don't commit to `main` directly.

## Watching a deploy

With the GitHub CLI:

```bash
gh run list --workflow=deploy.yml --branch=main --limit 5
gh run watch <run-id> --exit-status
```

> **Match the run to your commit.** Right after a push the newest run may not be listed yet — filter
> by `headSha` to be sure you're watching *your* deploy, not the previous one.

## First-time / one-time setup

Already done for this project, but for reference:

- The Cloudflare Pages project `farseertech` must exist (it's a **Direct Upload** project, created
  once via the API). Wrangler can't create it on the fly in CI.
- The repo needs the `CLOUDFLARE_API_TOKEN` secret and `CLOUDFLARE_ACCOUNT_ID` variable — see
  [infrastructure.md](infrastructure.md).

## Rollback

Cloudflare Pages keeps every deployment. To roll back, either **re-promote a previous commit**
(`git revert` or reset `main` to a known-good SHA and push) or use the Pages dashboard to **roll back
to a prior deployment**. See [runbook.md](runbook.md#roll-back-a-bad-production-deploy).

## Note on action versions

GitHub may warn that the `actions/*@v4` and `wrangler-action@v3` steps run on Node 20, which is being
phased out. They're first-party/compatible, so the pipeline keeps working; bump the action major
versions when convenient.
