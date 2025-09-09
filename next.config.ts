import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Helpful for Turbopack/dev edge-cases; safe to keep
    clientSegmentCache: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
