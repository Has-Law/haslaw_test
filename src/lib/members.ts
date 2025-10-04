export interface Member {
    id: number;
    full_name: string;
    title_position: string;
    email: string;
    phone_number: string;
    linkedin: string;
    business_card: string;
    display_image: string;
    detail_image: string;
    biography: string;
    practice_focus: string[];
    education: string[];
    language: string[];
    created_at: string;
    updated_at: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllMembers(): Promise<Member[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/members`, {
            next: {
                tags: ['members']
            }
        });
        if (!response.ok) return [];
        const result: ApiResponse<Member[]> = await response.json();
        return result.data;
    } catch (error) {
        console.error("Failed to fetch members:", error);
        return [];
    }
}

export async function getMemberById(id: string): Promise<Member | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/members/${id}`, {
                cache: 'no-store'
        });
        if (!response.ok) return null;
        const result: ApiResponse<Member> = await response.json();
        return result.data;
    } catch (error) {
        console.error(`Failed to fetch member by ID ${id}:`, error);
        return null;
    }
}