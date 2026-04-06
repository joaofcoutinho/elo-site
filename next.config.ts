import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "telemedicinamorsch.com.br",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "star.med.br",
      },
      {
        protocol: "https",
        hostname: "fcamara.com",
      },
    ],
  },
};

export default nextConfig;
