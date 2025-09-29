import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export for hosting
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;