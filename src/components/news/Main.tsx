'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { type News } from "@/lib/news"; 
import search from "@/assets/news/search.webp";


const NewsCard = ({ item }: { item: News }) => (
    <Link href={`/news/${item.slug}`} className="group block">
        <div className='relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer'>
            <Image
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${item.image}`}
                alt={item.news_title} 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-[2vw] text-white flex flex-row items-center sm:h-[12vw] h-[18vw] gap-x-[1vw]">
                <h1 className='h-full w-[0.5vw] sm:w-[0.5vw] bg-white rounded-r-[2vw]'></h1>
                <div className='flex flex-col w-full justify-between h-full'>
                    <h3 className="bg-[#A0001B] px-[1vw] py-[0.2vw] rounded text-[clamp(2vw,2vw,2rem)] sm:text-[clamp(1vw,1vw,1rem)] font_britanica_bold w-fit">
                        {item.category} 
                    </h3>
                    <h3 className="font_britanica_bold text-[clamp(3vw,3vw,3rem)] sm:text-[clamp(1.5vw,1.5vw,2rem)] text-[#F5F5F5] group-hover:text-[#A0001B] transition-colors duration-300">
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


const Main = ({ news }: { news: News[] }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredNews = news.filter(item =>
        item.news_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center justify-center gap-y-[1vw]">
            <div className="w-full p-[8vw] flex flex-col items-center justify-center gap-y-[2vw]">
                <h1 className="font_britanica_black text-[clamp(5vw,5vw,4rem)] text-[#780014] leading-none">
                    News & Insight
                </h1>
                <h3 className="font_britanica_regular text-[clamp(2vw,2vw,2rem)] text-center text-[#131313] max-w-4xl">
                    The legal landscape is constantly evolving. Follow the latest publications from our team to gain
                    valuable insights and stay one step ahead in anticipating regulatory changes and industry trends.
                </h3>
                <div className="relative min-w-[100px] w-[30vw] flex items-center">
                    <input
                        type="text"
                        placeholder="Search News..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded-full border-[#A0001B] w-full py-[1vw] px-[1vw] pr-10 text-black placeholder:text-[#5E0503]/50 outline-none transition-shadow duration-200 focus:shadow-lg"
                    />
                    <div className="absolute right-[1vw] top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image
                            src={search}
                            alt="Search icon"
                            className="w-8 h-8 text-gray-400"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[5vw] pb-[5vw]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
                    {filteredNews.map((item) => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>
                {filteredNews.length === 0 && searchQuery && (
                    <div className="text-center text-gray-500 mt-12">
                        <p className="text-lg">No news found matching "{searchQuery}".</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;