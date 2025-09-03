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
};

export default nextConfig;
