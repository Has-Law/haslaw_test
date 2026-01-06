import Main from "@/components/member/main";
import { Metadata } from "next";

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Member',
    description: "Meet the experienced attorneys at HAS Law. Our team of dedicated partners and associates specializes in corporate law, litigation, and commercial dispute resolution in Indonesia.",
}

const MemberPage = () => {
    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <Main />
        </div>
    );
}
export default MemberPage;