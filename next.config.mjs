import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: fileURLToPath(new URL(".", import.meta.url)),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rqn9s3axsdbjmfou.sharepoint.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
