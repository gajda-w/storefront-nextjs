/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "store-jibjen8y.eu.saleor.cloud" }],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
