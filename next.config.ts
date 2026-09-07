import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeps Turbopack from walking up past the project when resolving the lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  devIndicators: false,
};

export default nextConfig;
