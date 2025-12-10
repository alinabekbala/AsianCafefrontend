/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asiancafebackend.onrender.com",
        port: "",
        pathname: "/static/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
