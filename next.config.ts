import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare serves the exported pages; worker/index.ts handles terminal requests.
  output: "export",
};

export default nextConfig;
