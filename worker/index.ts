import { renderCliPath } from "../lib/cli/routes";
import { isCliRequest } from "../lib/cli/user-agent";

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

// Match the routes handled by the original Next.js proxy, excluding assets.
const portfolioPath = /^\/((?!api|_next\/static|_next\/image|favicon\.ico|.*\.[^/]+$).*)$/;

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // This must run before HTTPS redirects and static asset handling.
    if (portfolioPath.test(url.pathname) && isCliRequest(request.headers.get("user-agent"))) {
      return new Response(request.method === "HEAD" ? null : renderCliPath(url.pathname), {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
          Vary: "User-Agent",
        },
      });
    }

    // Local Wrangler development uses HTTP. Production browsers use HTTPS.
    const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    if (url.protocol === "http:" && !local) {
      url.protocol = "https:";
      return new Response(null, {
        status: 307,
        headers: {
          Location: url.toString(),
          "Cache-Control": "no-store",
          Vary: "User-Agent",
        },
      });
    }

    const response = await env.ASSETS.fetch(request);
    if (!response.headers.get("Content-Type")?.includes("text/html")) return response;

    const headers = new Headers(response.headers);
    headers.append("Vary", "User-Agent");
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};

export default worker;
