import MemberDetailClient from "./MemberDetailClient";

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';

export default function MemberDetailPage() {
    return <MemberDetailClient />;
}