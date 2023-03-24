/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gosafety.ca",
      },
      {
        protocol: "https",
        hostname: "cdn.worksitesafety.ca",
      },
    ],
  },
};

module.exports = nextConfig;
