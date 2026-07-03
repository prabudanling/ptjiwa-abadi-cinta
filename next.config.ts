import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Allow the sandbox preview panel (and local network) to access the dev server
  allowedDevOrigins: [
    "*.space-z.ai",
    "localhost",
    "127.0.0.1",
    "21.0.15.122",
  ],
};

export default nextConfig;
