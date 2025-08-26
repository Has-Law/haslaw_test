import Hero from "@/components/litigation/Hero"
import Main from "@/components/litigation/Main"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : 'litigation'
}
const LitigationService = () => {
    return(
        <div className="bg-[#F2F2F2]">
            <Hero/>
            <Main/>
        </div>
    )
}
export default LitigationService