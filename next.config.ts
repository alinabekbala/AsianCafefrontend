/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asiancafebackend.onrender.com",
        pathname: "/static/images/**",
      },
    ],
  },
};

export default nextConfig;
