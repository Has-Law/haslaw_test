import { getAllNews } from "@/lib/news";
import NewsDetailClient from './NewsDetailClient';

// Untuk static export, hanya path yang di-generate saat build yang valid
export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const allNews = await getAllNews();

        if (!allNews || allNews.length === 0) {
            console.warn('No news found for generateStaticParams');
            return [];
        }

        return allNews.map((news) => ({
            slug: news.slug,
        }));
    } catch (error) {
        console.error('Error in generateStaticParams:', error);
        return [];
    }
}

export default function NewsDetail() {
    return <NewsDetailClient />;
}