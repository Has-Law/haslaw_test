import Main from "@/components/member/main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Member'
}

const MemberPage = () => {
    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <Main />
        </div>
    );
}
export default MemberPage;