/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    // Tambahkan baris ini untuk menonaktifkan optimasi gambar
    unoptimized: true,

    // Konfigurasi domain Anda tetap ada
    domains: ['api.has-law.com'],
  },
}

module.exports = nextConfig