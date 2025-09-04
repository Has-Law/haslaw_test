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
    default: "HasLaw", 
  },
  description: "Official Website for HasLaw Firm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieProvider>
          <div className="flex flex-col min-h-screen ">
            <Navbar/>
            <main className="flex-grow">
              {children}
            </main>
            <Footer/>
          </div>
          
          {/* GDPR/CCPA Compliant Cookie Components */}
          <GDPRCookieBanner />
        </CookieProvider>
        
      </body>
    </html>
  );
}
