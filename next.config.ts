/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {

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