import { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HasLaw - Indonesian Law Firm',
    short_name: 'HasLaw',
    description: 'Premier Indonesian law firm providing comprehensive legal services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#A0001B',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}