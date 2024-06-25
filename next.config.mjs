/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nitelifenav.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["images.pexels.com"],
  },
};

export default nextConfig;
