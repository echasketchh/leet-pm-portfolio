import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow optimizing images from external domains when you add a real photo
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
