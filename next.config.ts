/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    domains: ['api.has-law.com'],
  },
}

module.exports = nextConfig