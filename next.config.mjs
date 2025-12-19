/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "placeholder.com",
      "github-readme-stats-total-kinky-69.vercel.app",
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
