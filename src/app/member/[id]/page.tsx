import { getAllMembers } from "@/lib/members";
import MemberDetailClient from "./MemberDetailClient";

// Untuk static export, hanya path yang di-generate saat build yang valid
export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const members = await getAllMembers();
        return members.map((member) => ({
            id: member.id.toString(),
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

export default function MemberDetailPage() {
    return <MemberDetailClient />;
}