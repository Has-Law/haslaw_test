import NewsDetailClient from './NewsDetailClient';

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';

export default function NewsDetail() {
    return <NewsDetailClient />;
}