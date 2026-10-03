/** @type {import('next').NextConfig} */
const nextConfig = {
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
