import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Correct key
        pathname: "/images/**", // Specific path for Sanity images
      },
    ],
  },
};

export default nextConfig;
