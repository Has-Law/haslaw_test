/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.has-law.com',
        pathname: '/uploads/news/**', 
      },
      {
        protocol: 'https',
        hostname: 'api.has-law.com',
        pathname: '/uploads/members/**', 
      },
    ],
  },
};

export default nextConfig;