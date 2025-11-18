'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr'; // Pastikan sudah install: npm install swr
import search from "@/assets/news/search.webp";

// --- 1. Definisi Tipe (Interfaces) ---
export interface News {
    id: number;
    news_title: string;
    slug: string;
    category: string;
    status: string;
    content: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// --- 2. Fetcher Function untuk SWR ---
// Kita tambahkan { cache: 'no-store' } agar browser tidak menyimpan cache lama
const fetcher = async (url: string): Promise<News[]> => {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch news');
    const result: ApiResponse<News[]> = await res.json();
    return result.data;
};

// --- 3. Sub-Component: NewsCard ---
const NewsCard = ({ item }: { item: News }) => (
    <Link href={`/news/${item.slug}`} className="group block">
        <div className='relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer'>
            <Image
                src={`${API_BASE_URL}/${item.image}`} // Pastikan slash handling aman
                alt={item.news_title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-[2vw] text-white flex flex-row items-stretch gap-x-[1vw]">
                <h1 className='w-1 bg-white rounded-r-[2vw]'></h1>
                <div className='flex flex-col w-full justify-between h-full'>
                    <h3 className="bg-[#A0001B] px-[1vw] py-[0.2vw] rounded text-[clamp(2vw,2vw,2rem)] sm:text-[clamp(1vw,1vw,1rem)] font_britanica_bold w-fit">
                        {item.category}
                    </h3>
                    <h3 className="font_britanica_black text-justify text-[clamp(3vw,3vw,3rem)] sm:text-[clamp(1.5vw,1.5vw,2rem)] text-[#F5F5F5] group-hover:text-[#A0001B] transition-colors duration-300 line-clamp-2">
                        {item.news_title}
                    </h3>
                    <p className="text-[#DBDBDB] font_britanica_regular text-[clamp(2vw,2vw,2rem)] sm:text-[clamp(1.2vw,1.2vw,1.2rem)]">
                        {new Date(item.created_at).toLocaleDateString('id-ID', {
                            year: 'numeric', month: 'long', day: 'numeric'
                        })}
                    </p>
                </div>
            </div>
        </div>
    </Link>
);

// --- 4. Component Utama ---
const Main = () => {
    // Mengambil data di Client Side
    const { data: newsData, error, isLoading } = useSWR(
        `${API_BASE_URL}/api/v1/news`,
        fetcher
    );

    const [searchQuery, setSearchQuery] = useState('');

    // Menangani Loading dan Error
    if (isLoading) return <div className="w-full h-screen flex justify-center items-center">Loading News...</div>;
    if (error) return <div className="w-full h-screen flex justify-center items-center">Failed to load news.</div>;

    // Fallback jika data kosong/undefined
    const newsList = newsData || [];

    // Filter Logic
    const filteredNews = newsList.filter(item =>
        item.news_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center justify-center sm:gap-y-4">
            <div className="w-full p-8 md:p-16 flex flex-col items-center justify-center text-center gap-y-6 md:gap-y-4">
                <h1 className="font_britanica_black text-[clamp(1.5rem,6vw,6rem)] sm:text-[clamp(1.8vw,3vw,4.5rem)] text-[#780014] leading-tight">
                    Insights
                </h1>

                <h3 className="font_britanica_regular text-[clamp(0.85rem,4vw,1.2rem)] sm:text-[clamp(1vw,2vw,1.25rem)] text-justify text-[#131313] max-w-4xl">
                    The legal landscape is constantly evolving. Follow the latest publications from our team to gain
                    valuable insights and stay one step ahead in anticipating regulatory changes and industry trends.
                </h3>
                
                {/* Search Bar */}
                <div className="relative w-full max-w-md flex items-center">
                    <input
                        type="text"
                        placeholder="Search News..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded-full border-[#A0001B] w-full py-2.5 px-5 pr-12 text-black placeholder:text-[#5E0503]/50 outline-none transition-shadow duration-200 focus:shadow-lg"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image
                            src={search}
                            alt="Search icon"
                            className="w-6 h-6 text-gray-400"
                        />
                    </div>
                </div>
            </div>

            {/* News Grid */}
            <div className="w-full px-[5vw] pb-[5vw]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
                    {filteredNews.map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>
                {filteredNews.length === 0 && (
                    <div className="text-center text-gray-500 mt-12">
                        <p className="text-lg">
                            {searchQuery ? `No news found matching "${searchQuery}".` : "No news available."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;