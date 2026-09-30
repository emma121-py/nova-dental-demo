import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [480, 768, 900, 1536],
    imageSizes: [],
  },
};
export default nextConfig;
