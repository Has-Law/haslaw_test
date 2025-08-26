import Hero from "@/components/corporate/Hero";
import Main from "@/components/corporate/Main";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'corporate'
}
const CorporateService = () => {
    return(
        <div className="bg-[#F2F2F2]">
            <Hero/>
            <Main/>
        </div>
    )
}
export default CorporateService;