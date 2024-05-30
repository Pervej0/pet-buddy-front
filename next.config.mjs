/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    BACK_END_URL: process.env.BACK_END_URL,
    IMAGE_HOST: process.env.IMAGE_HOST,
  },
};

export default nextConfig;
