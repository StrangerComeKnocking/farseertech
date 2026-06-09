# DNS & Email

> ⚠️ **Read this before touching DNS.** `farseertech.com` carries **live email**. Several DNS records
> are load-bearing for mail delivery. Removing or mis-editing them breaks email, not just the website.

## Who controls what

- **Registrar:** Squarespace (where the domain is registered/renewed).
- **DNS:** **Cloudflare** — the domain's nameservers were changed at Squarespace to Cloudflare's
  (`*.ns.cloudflare.com`), so the **Cloudflare zone is authoritative** for all records.
- **Email:** Mailgun, via MX/SPF/DKIM records that live **in the Cloudflare zone**.

To change DNS, edit the **Cloudflare zone** (dashboard or API). Changing records at Squarespace does
nothing now — Cloudflare is authoritative.

## The records (and why each exists)

| Type | Name | Points to | Why it's there |
| --- | --- | --- | --- |
| CNAME (proxied) | `farseertech.com` | `farseertech.pages.dev` | Apex → the site on Pages (CNAME-flattened) |
| CNAME (proxied) | `www` | `farseertech.pages.dev` | `www` → the site |
| MX | `farseertech.com` | `mxa.mailgun.org`, `mxb.mailgun.org` | **Inbound email** |
| TXT | `farseertech.com` | `v=spf1 include:mailgun.org ~all` | **SPF** — sender authorization |
| TXT | `krs._domainkey` | (DKIM public key) | **DKIM** — outbound signing |

The two CNAMEs are **proxied** (orange-cloud) so Pages serves them with Cloudflare TLS/CDN. The MX/TXT
records are **DNS-only** (they can't be proxied) — that's correct, don't "proxy" them.

> The DKIM record is the one most easily missed: Squarespace manages it automatically for its email
> forwarding, so it doesn't show in the editable record list — it was found by querying DNS directly
> and copied across. If you ever rebuild the zone, **re-check for `*._domainkey` TXT records.**

## Safe DNS changes — the checklist

1. **Inventory first.** Before changing anything, list the current records (Cloudflare API
   `GET /zones/<id>/dns_records`, or the dashboard). Know what email depends on.
2. **Never remove** MX, the SPF TXT, or the `*._domainkey` DKIM TXT unless you are *intentionally*
   moving email.
3. **Add/replace** web records (the apex/`www` CNAMEs) freely — they don't affect mail.
4. **Verify after:** check the apex serves over HTTPS *and* that `dig MX farseertech.com` /
   `dig TXT farseertech.com` still return the Mailgun records.

## If email ever breaks after a DNS change

Most likely an email record was dropped. Re-add the MX, SPF, and DKIM rows above. If you ever move
*off* Squarespace's forwarding, the clean replacement is **Cloudflare Email Routing** (free) — but it
requires swapping the MX records to Cloudflare's, so do it deliberately, not by accident.

## Moving the domain (future)

If you ever re-point `farseertech.com` elsewhere, do it at the **nameserver** level at Squarespace
(or by editing the Cloudflare zone if staying on Cloudflare). Propagation can take minutes to hours;
the Cloudflare zone shows **Active** once it detects its nameservers at the registry.
