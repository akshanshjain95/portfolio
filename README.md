# akshan.sh

Personal portfolio built with Next.js. Cloudflare Workers serves the static
browser pages and the existing terminal portfolio from the same domain.
There is no Node.js server, database, or server sleep cycle in production.

## Development

Use Node.js 22 or newer, then `npm ci`.

- `npm run dev`: Next.js browser development with hot reload. CLI routing runs in
  the Cloudflare Worker, so use the preview below to test terminal requests.
- `npm run build`: exports all browser pages and assets to `out/`.
- `npm run preview` (or `npm start`): runs Wrangler locally against `out/`.

Wrangler commands use the official `wrangler@4` npm package through `npx`;
the first use requires internet access. No account is required for local preview.

## First deployment

1. Run `npm run build`, then `npm run preview`.
2. In another terminal, run `curl http://localhost:8787`. Open
   `http://localhost:8787` in a browser and check navigation through all five pages.
3. Authenticate with `npx --yes wrangler@4 login`.
4. Run `npm run deploy`. The initial configuration intentionally has no custom
   domain route: it deploys to the workers.dev address printed by Wrangler.
5. Verify that address in a browser, then run
   `curl https://YOUR-WORKER.workers.dev`.

Use the Cloudflare Workers Free plan. No paid add-ons are required. All requests
run through the Worker before assets so curl detection cannot be bypassed by
static HTML serving; these invocations count toward the Workers request quota.

## Move akshan.sh from AWS

Before changing DNS, record the current AWS endpoint and deployment configuration,
and export the existing DNS zone (including MX, TXT, CAA, and any subdomains).
The repository does not contain the EC2 or reverse proxy configuration; inspect
the running deployment separately. Keep it available until cutover is verified.

1. Add `akshan.sh` to Cloudflare on its free DNS plan. Copy and verify all existing
   DNS records before changing nameservers. Check DNSSEC with the registrar;
   follow Cloudflare's migration procedure so a stale DS record cannot break DNS.
2. In Spaceship, change nameservers to the exact pair Cloudflare assigns. Domain
   registration remains with Spaceship. Initially retain the AWS web records
   so traffic can continue reaching the current site during DNS activation.
3. Once the zone is active, ensure **Always Use HTTPS** and any redirect rules
   do not redirect HTTP requests to this hostname before the Worker executes.
   The Worker itself redirects non-CLI HTTP requests to HTTPS. Leave TLS enabled.
4. Attach `akshan.sh` as a Worker Custom Domain. Inspect any conflicting web DNS
   records before replacing them; preserve unrelated mail and verification records.
5. Add the following top-level property to `wrangler.jsonc` to keep the domain
   assignment in source control, then redeploy:

   ```json
   "routes": [{ "pattern": "akshan.sh", "custom_domain": true }]
   ```

6. Check the apex domain, without `-L`:

   ```bash
   curl -i http://akshan.sh
   curl -i http://akshan.sh/about
   curl -i https://akshan.sh
   curl -I -A 'Mozilla/5.0' http://akshan.sh/about
   ```

   CLI requests must return `200` and `text/plain`, with the portfolio body and
   no `Location` header. The HTTP browser request should redirect to HTTPS.
   Open `https://akshan.sh` and verify navigation, animations, and the profile image.
   Test `www` separately if it was part of the existing deployment.
7. Only after the new site and DNS propagation are verified, review AWS resources
   for retirement. Stopping EC2 alone may leave billable EBS storage or public IPs.
   Preserve anything needed for rollback before deleting resources.

If cutover fails, restore the recorded AWS web DNS records and remove the Worker
custom-domain assignment as needed. Do not terminate AWS before verification.

## Request handling

`worker/index.ts` checks curl, wget, and HTTPie before redirects and asset lookup.
It reuses `lib/cli/content.ts`, `routes.ts`, and `user-agent.ts`. Terminal content,
trailing-slash handling, and the existing unknown-command response are preserved.
Terminal output and redirects use `Cache-Control: no-store` and `Vary: User-Agent`
to avoid mixing terminal and browser responses. Static asset paths bypass CLI
formatting. Browser HTTP traffic redirects to HTTPS; local preview stays on HTTP.

The former Next.js `proxy.ts` and its NextResponse adapters are removed because
Next.js static export does not support Proxy. Browser components are unchanged.

References: [Worker-first asset routing](https://developers.cloudflare.com/workers/static-assets/routing/worker-script/),
[custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/),
[nameserver setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/).
