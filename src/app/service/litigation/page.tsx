import Hero from "@/components/litigation/Hero"
import Main from "@/components/litigation/Main"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : 'litigation',
    description: "Has Attorneys at Law provides litigation focused representation for commercial disputes, regulatory matters, and high-stakes legal proceedings in South Jakarta.",
}
const LitigationService = () => {
    return(
        <div className="bg-[#F2F2F2] ">
            <Hero/>
            <Main/>
        </div>
    )
}
export default LitigationService