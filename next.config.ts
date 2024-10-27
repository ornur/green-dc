import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbo: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
