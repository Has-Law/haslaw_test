import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsBySlug, getAllNews } from "@/lib/news"; 

interface NewsDetailProps {
    params: {
        slug: string;
    };
}

export default async function NewsDetail({ params }: NewsDetailProps) {
    const { slug } = params;

    const [newsItem, allNews] = await Promise.all([
        getNewsBySlug(slug),
        getAllNews()
    ]);

    if (!newsItem) {
        notFound();
    }

    const relatedNews = allNews.filter(item => item.slug !== slug).slice(0, 3);
    
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

 
    return (
        <div className="min-h-screen bg-gray-50">
  
            <div className="relative h-[80vw] md:h-[52vw]">
                <Image
                    src={`${API_BASE_URL}/${newsItem.image}`}
                    alt={newsItem.news_title}
                    fill
                    className="object-cover w-full"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:px-[8vw] md:py-[5vw] text-white flex flex-col gap-y-3 md:gap-y-[1vw]">
                    <p className="bg-[#A0001B] px-3 py-1 rounded-lg w-fit font_britanica_bold text-xs md:text-sm">
                        {newsItem.category}
                    </p>
                    <h1 className="font_britanica_black text-[clamp(1.75rem,5vw,4rem)] leading-tight">
                        {newsItem.news_title}
                    </h1>
                    <p className="text-gray-300 font_britanica_regular text-[clamp(0.875rem,3vw,1.25rem)]">
                        {new Date(newsItem.created_at).toLocaleDateString('id-ID', {
                            year: 'numeric', month: 'long', day: 'numeric'
                        })}
                    </p>
                </div>
            </div>

      
              <div className="px-[5vw]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[3vw] mt-12">
                    <div className="sm:col-span-2">
                    
                        <p className="font_britanica_regular text-gray-800 leading-relaxed 
                                   text-[clamp(1.1rem,2.5vw,1.25rem)] 
                                   whitespace-pre-wrap break-words">
                            {newsItem.content}
                        </p>
                    </div>

   
                    <div className="lg:col-span-1 mt-12 lg:mt-0">
                        <div className="sticky top-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1.5 h-10 bg-[#5E0503] rounded-r-xl"></div>
                                <h2 className="font_britanica_bold text-[clamp(1.75rem,4vw,2.5rem)] text-[#5E0503]">
                                    More News
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {relatedNews.map((item) => (
                                    <Link key={item.id} href={`/news/${item.slug}`} className="block group">
                                        <div className="flex flex-col gap-y-3">
                                            <div className="relative w-full aspect-video rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={`${API_BASE_URL}/${item.image}`}
                                                    alt={item.news_title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="w-fit bg-[#A0001B] text-white px-2 py-1 rounded-md font_britanica-bold mb-2 text-[clamp(0.65rem,1.5vw,0.75rem)]">
                                                    {item.category}
                                                </p>
                                                <h3 className="font_britanica_bold text-[clamp(2rem,3vw,2.5rem)] leading-tight text-[#131313] group-hover:text-[#A0001B] transition-colors duration-300 line-clamp-3 mb-2">
                                                    {item.news_title}
                                                </h3>
                                                <p className="text-[#848484] font_britanica_regular text-[clamp(1rem,2vw,1.5rem)]">
                                                    {new Date(item.created_at).toLocaleDateString('id-ID', {
                                                        month: 'long', day: 'numeric', year: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Link href="/news" className="block w-full text-center bg-[#A0001B] hover:bg-[#780014] text-white py-3 rounded-lg font_britanica_bold transition-colors duration-300">
                                    View All News
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};