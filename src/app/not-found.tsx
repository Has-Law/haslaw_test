"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0ecee] to-[#660315] flex flex-col items-center justify-center px-4">
            <div className="text-center text-white max-w-2xl mx-auto">
                {/* Logo */}
                <div className="mb-8">
                    <Image 
                        src={logo} 
                        alt="Has & Associates Logo" 
                        className="w-[clamp(8rem,20vw,12rem)] h-auto mx-auto mb-6"
                    />
                </div>

                {/* 404 Number */}
                <div className="mb-6">
                    <h1 className="font_britanica_heavy text-[clamp(6rem,20vw,12rem)] leading-none opacity-20">
                        404
                    </h1>
                </div>

                {/* Main Message */}
                <div className="mb-8">
                    <h2 className="font_britanica_black text-[clamp(1.8rem,6vw,3rem)] mb-4 leading-tight">
                        Page Not Found
                    </h2>
                    <p className="font_britanica_regular text-[clamp(1rem,4vw,1.2rem)] opacity-90 leading-relaxed">
                        Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan, dihapus, atau URL yang Anda masukkan salah.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link 
                        href="/"
                        className="bg-white text-[#C90021] font_britanica_bold text-[clamp(0.9rem,3.5vw,1.1rem)] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                    >
                        Kembali ke Beranda
                    </Link>
                    <button 
                        onClick={() => window.history.back()}
                        className="border-2 border-white text-white font_britanica_bold text-[clamp(0.9rem,3.5vw,1.1rem)] px-8 py-3 rounded-lg hover:bg-white hover:text-[#C90021] transition-colors duration-300"
                    >
                        Halaman Sebelumnya
                    </button>
                </div>

                {/* Quick Links */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <p className="font_britanica_regular text-[clamp(0.85rem,3vw,1rem)] opacity-75 mb-4">
                        Atau kunjungi halaman lainnya:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-[clamp(0.8rem,2.8vw,0.95rem)]">
                        <Link 
                            href="/about" 
                            className="font_britanica_regular hover:underline opacity-75 hover:opacity-100 transition-opacity"
                        >
                            Tentang Kami
                        </Link>
                        <span className="opacity-50">|</span>
                        <Link 
                            href="/service" 
                            className="font_britanica_regular hover:underline opacity-75 hover:opacity-100 transition-opacity"
                        >
                            Layanan
                        </Link>
                        <span className="opacity-50">|</span>
                        <Link 
                            href="/member" 
                            className="font_britanica_regular hover:underline opacity-75 hover:opacity-100 transition-opacity"
                        >
                            Tim Kami
                        </Link>
                        <span className="opacity-50">|</span>
                        <Link 
                            href="/contact" 
                            className="font_britanica_regular hover:underline opacity-75 hover:opacity-100 transition-opacity"
                        >
                            Kontak
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="font_britanica_regular text-[clamp(0.8rem,3vw,0.9rem)] opacity-60">
                        Butuh bantuan? Hubungi kami di{' '}
                        <a 
                            href="mailto:info@has-law.com" 
                            className="underline hover:opacity-100 transition-opacity"
                        >
                            info@has-law.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
