/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["example.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
