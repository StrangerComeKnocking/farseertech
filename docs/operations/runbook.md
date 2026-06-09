# Runbook

Copy-paste recipes for the things you'll actually do. Commands assume the repo root and a terminal
with `node`, `git`, and (for some) the GitHub CLI `gh` on PATH.

## Ship a change (the normal path)

```bash
git checkout staging
# ...make your edit...
npm run build                      # local sanity check
git commit -am "What changed"
git push                           # deploys to staging.farseertech.pages.dev
# review the preview, then promote (below)
```

## Promote staging → production

```bash
git checkout main
git merge staging --ff-only
git push                           # deploys to farseertech.com
git checkout staging               # resume work
```

Watch it:

```bash
gh run list --workflow=deploy.yml --branch=main --limit 3
gh run watch <run-id> --exit-status
```

## "A deploy succeeded but I still see the old page"

A freshly-promoted page can serve **one stale edge-cache HIT** at the moment of deploy. It's transient
— Pages serves HTML with `cache-control: must-revalidate, max-age=0`, so it self-corrects. Confirm
with a cache-buster:

```bash
#  ?cb=… forces a cache miss; CF-Cache-Status DYNAMIC = served fresh from origin
curl -s "https://farseertech.com/?cb=$RANDOM" | grep -o 'frugally'
```

If it still looks stale after a minute, purge the cache (below) or hard-refresh (Ctrl/Cmd-Shift-R).

## Roll back a bad production deploy

**Option A — via Git (preferred, keeps history honest):**
```bash
git checkout main
git revert <bad-sha>     # or: git reset --hard <good-sha>  (force-push only if you must)
git push
```

**Option B — via Cloudflare:** Pages dashboard → project `farseertech` → Deployments → pick a known-good
deployment → **Rollback**. Then fix forward in Git so the repo and live site agree.

## Re-run a failed deploy

If only the deploy step failed (build was fine):

```bash
gh run rerun <run-id> --failed
```

## Add a new field note

See [../content-authoring.md](../content-authoring.md#adding-a-new-field-note). In short: add a page
under `src/pages/field-notes/`, add its metadata to `FIELD_NOTES` in `src/consts.ts`, push to `staging`.

## Rotate the Cloudflare deploy token

1. Cloudflare dashboard → **My Profile → API Tokens** → create a new token using the
   **"Edit Cloudflare Pages"** template (Account · Cloudflare Pages · Edit).
2. GitHub → repo **Settings → Secrets and variables → Actions** → update `CLOUDFLARE_API_TOKEN`.
3. Trigger a deploy (push, or `gh workflow run deploy.yml`) to confirm it works.
4. Revoke the old token in Cloudflare.

## Purge the Cloudflare cache

The cleanest is the dashboard: zone `farseertech.com` → **Caching → Configuration → Purge Everything**.
(API purge needs a token with `Zone · Cache Purge`, which CI deliberately doesn't have.)

## Touch DNS / the domain

Don't freehand it — **[dns-and-email.md](dns-and-email.md)** has the records, the email caveat, and the
safe-change checklist. Email records are load-bearing.

## Common errors

| Symptom | Cause & fix |
| --- | --- |
| `Project not found … [code: 8000007]` in the deploy log | The Pages project doesn't exist. Create it once — see [infrastructure.md](infrastructure.md#creating-the-pages-project-one-time-for-reference) |
| Deploy job **skipped** | `CLOUDFLARE_ACCOUNT_ID` variable isn't set (the job is gated on it) |
| `Authentication error [code: 10000]` from the CF API | The token lacks the needed permission for that call (the CI token is Pages-only by design) |
| `node` not found after install (Windows) | Open a **new** terminal so PATH refreshes — see [local-development.md](local-development.md) |
| Git: `LF will be replaced by CRLF` | Harmless line-ending normalization on Windows |
