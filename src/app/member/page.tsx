import Main from "@/components/member/main";
import { getAllMembers } from "@/lib/members";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'Member'
}

const MemberPage = async () => {
    const allMembers = await getAllMembers();

    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <Main members={allMembers} />
        </div>
    );
}
export default MemberPage;