import Hero from "@/components/litigation/Hero"
import Main from "@/components/litigation/Main"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : 'litigation',
    description: "Robust legal representation for complex disputes. Specializing in commercial litigation, arbitration, bankruptcy, and criminal defense in Indonesian courts.",
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