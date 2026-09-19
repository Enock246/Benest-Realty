import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [],
    formats: ["image/webp"],
  },
};

export default nextConfig;
