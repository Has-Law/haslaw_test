import type { NextConfig } from 'next'

const isStaticExport = process.env.STATIC_EXPORT === 'true'

const nextConfig: NextConfig = {
  // Hanya gunakan static export jika STATIC_EXPORT=true (untuk cPanel)
  // Di Vercel, biarkan dynamic agar batch baru otomatis bisa diakses
  ...(isStaticExport && { output: 'export' }),

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.has-law.com',
      },
    ],
  },
}

export default nextConfig