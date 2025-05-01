// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["example.com"],
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };
// module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.s3.*.amazonaws.com", // Optional: handles region-specific S3 URLs
        port: "",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
