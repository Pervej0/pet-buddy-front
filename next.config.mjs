/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false,
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
