import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aivalley.io',
        pathname: '/**',
      },
    ],
  },
  // Ensure trailing slashes for better compatibility
  trailingSlash: false,
  // Output standalone for Vercel
  output: process.env.VERCEL ? 'standalone' : undefined,
};

export default nextConfig;
