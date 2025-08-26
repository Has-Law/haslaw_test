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
            <div className="relative h-[52vw]">
                <Image
                    src={`${API_BASE_URL}/${newsItem.image}`}
                    alt={newsItem.news_title}
                    fill
                    className="object-cover w-full"
                    priority
                />
                <div className="absolute bottom-0 left-0 right-0 px-[8vw] py-[5vw] text-white flex flex-col gap-y-[1vw]">
                    <p className="bg-[#A0001B] px-[1vw] py-[0.5vw] rounded-lg w-fit font_britanica_bold text-sm">
                        {newsItem.category}
                    </p>
                    <h1 className="font_britanica_black text-[clamp(3vw,3.5vw,4rem)] leading-tight">
                        {newsItem.news_title}
                    </h1>
                    <p className="text-gray-300 font_britanica_regular text-[clamp(2vw,2vw,2rem)]">
                        {new Date(newsItem.created_at).toLocaleDateString('id-ID', {
                            year: 'numeric', month: 'long', day: 'numeric'
                        })}
                    </p>
                </div>
            </div>

            <div className="px-[5vw]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-[3vw] mt-12">
                    <div className="sm:col-span-2">
                        <div
                            // className="[&_h2]:text-black [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-[2vw] [&_h2]:mt-[3vw] [&_h2]:!font-[family-name:'BritanicaBlack',sans-serif] [&_p]:text-black [&_p]:mb-[2vw] [&_p]:leading-relaxed [&_p]:text-lg [&_p]:!font-[family-name:'BritanicaRegular',sans-serif] [&_strong]:!font-[family-name:'BritanicaBlack',sans-serif] [&_strong]:text-black [&_ul]:mb-[2.5vw] [&_ul]:mt-[2vw] [&_ul]:list-disc [&_ul]:pl-[3vw] [&_li]:mb-[1vw] [&_li]:!font-[family-name:'BritanicaRegular',sans-serif] [&_li]:text-black [&_li]:list-item [&_li]:marker:text-black"
                            className='font_britanica_black'
                            dangerouslySetInnerHTML={{ __html: newsItem.content || '' }}
                        />
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-1 h-[4vw] sm:h-[2.5vw] bg-[#5E0503] rounded-r-xl"></div>
                                <h2 className="font_britanica_bold text-[clamp(2.5vw,2.5vw,3rem)] text-[#5E0503]">
                                    More News
                                </h2>
                            </div>
                            <div className="space-y-6">
                                {relatedNews.map((item) => (
                                    <Link key={item.id} href={`/news/${item.slug}`} className="block group">
                                        <div className="flex flex-col gap-y-[1vw]">
                                            <div className="relative w-full h-[25vw] sm:h-[15vw] rounded-lg overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={`${API_BASE_URL}/${item.image}`}
                                                    alt={item.news_title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="w-fit bg-[#A0001B] text-white px-2 py-1 rounded-md text-xs font_britanica-bold mb-2">
                                                    {item.category}
                                                </p>
                                                <h3 className="font_britanica_bold text-lg leading-tight text-[#131313] group-hover:text-[#A0001B] transition-colors duration-300 line-clamp-3 mb-2">
                                                    {item.news_title}
                                                </h3>
                                                <p className="text-xs text-[#848484] font_britanica_regular">
                                                    {new Date(item.created_at).toLocaleDateString('id-ID', {
                                                        month: 'long', day: 'numeric'
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