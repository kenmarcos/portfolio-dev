/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "images.unsplash.com",
      "raw.githubusercontent.com",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
