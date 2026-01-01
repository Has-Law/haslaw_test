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

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.has-law.com';
export async function getAllNews(): Promise<News[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/news`, {
            // Untuk static export, gunakan force-cache
            cache: 'force-cache' 
        });
        if (!response.ok) return [];
        const result: ApiResponse<News[]> = await response.json();
        return result.data;
    } catch (error) {
        console.error("Failed to fetch news:", error);
        return [];
    }
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/news/slug/${slug}`, {
            // Untuk static export, gunakan force-cache
            cache: 'force-cache'
        });
        if (!response.ok) return null;
        const result: ApiResponse<News> = await response.json();
        return result.data;
    } catch (error) {
        console.error(`Failed to fetch news by slug ${slug}:`, error);
        return null;
    }
}