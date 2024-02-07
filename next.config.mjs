/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com"
      }
    ]
  },
  trailingSlash: false
};

export default nextConfig;
