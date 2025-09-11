import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Helpful for Turbopack/dev edge-cases; safe to keep
    clientSegmentCache: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: "https://dev.ops.annovasolutions.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
