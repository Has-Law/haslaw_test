import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Full dynamic rendering di Vercel
  images: {
    unoptimized: true, // Disable image optimization untuk external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.has-law.com',
      },
    ],
  },
}

export default nextConfig