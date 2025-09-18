import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import GDPRCookieBanner from "@/components/common/GDPRCookieBanner";
import { CookieProvider } from "@/hooks/useCookies";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "HasLaw - %s", 
    default: "HasLaw - Leading Indonesian Law Firm | Legal Services", 
  },
  description: "HasLaw is a premier Indonesian law firm providing comprehensive legal services including corporate law, litigation, commercial transactions, and legal consulting. Trusted legal partners since establishment.",
  keywords: [
    "law firm Indonesia",
    "Indonesian lawyers",
    "legal services Jakarta",
    "corporate law Indonesia",
    "litigation lawyer",
    "commercial law",
    "legal consulting",
    "HasLaw",
    "pengacara Indonesia",
    "kantor hukum",
    "jasa hukum"
  ],
  authors: [{ name: "HasLaw" }],
  creator: "HasLaw",
  publisher: "HasLaw",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://has-law.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "HasLaw - Leading Indonesian Law Firm",
    description: "Premier Indonesian law firm providing comprehensive legal services including corporate law, litigation, and commercial transactions.",
    url: '/',
    siteName: 'HasLaw',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'HasLaw - Indonesian Law Firm',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "HasLaw - Leading Indonesian Law Firm",
    description: "Premier Indonesian law firm providing comprehensive legal services including corporate law, litigation, and commercial transactions.",
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
    yandex: process.env.YANDEX_VERIFICATION_ID,
    yahoo: process.env.YAHOO_VERIFICATION_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "HasLaw",
    "alternateName": "HasLaw Indonesian Law Firm",
    "description": "Premier Indonesian law firm providing comprehensive legal services including corporate law, litigation, commercial transactions, and legal consulting.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://has-law.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://has-law.com"}/assets/logo.png`,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://has-law.com"}/assets/logo.png`,
    "telephone": "+62-21-XXXXXXX", // Replace with actual phone
    "email": "info@has-law.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address", // Replace with actual address
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "postalCode": "XXXXX", // Replace with actual postal code
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.2088, // Replace with actual coordinates
      "longitude": 106.8456
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "serviceType": [
      "Corporate Law",
      "Litigation",
      "Commercial Law",
      "Legal Consulting",
      "Contract Law",
      "Business Law"
    ],
    "priceRange": "$$$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": "Mo-Fr 09:00-18:00",
    "founder": {
      "@type": "Person",
      "name": "Founder Name" // Replace with actual founder name
    },
    "numberOfEmployees": "10-50",
    "foundingDate": "YYYY", // Replace with actual founding year
    "sameAs": [
      "https://www.linkedin.com/company/haslaw", // Replace with actual social media
      "https://www.instagram.com/haslaw_official"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || "https://has-law.com"} />
        <meta name="theme-color" content="#A0001B" />
        <meta name="msapplication-TileColor" content="#A0001B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieProvider>
          <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer/>
          </div>
          
          <GDPRCookieBanner />
        </CookieProvider>
        
      </body>
    </html>
  );
}