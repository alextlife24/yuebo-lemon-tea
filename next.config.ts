import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // 之後若改用外部圖床（例如 CDN），在這裡加入 remotePatterns
    remotePatterns: [],
  },
};

export default nextConfig;
