import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["example.com"],
    // next.config.js
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
