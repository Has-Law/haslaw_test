import Hero from "@/components/service/Hero"
import Main from "@/components/service/Main"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : 'service',
    description: "Has Attorneys at Law offers two core service lines comprising litigation services and corporate services designed to support both complex disputes and day-to-day business needs in South Jakarta.",
}

const Services = () => {
    return(
        <div className="bg-[#F2F2F2] pb-[2vw]">
            <Hero/>
            <Main/>
        </div>
    )
}
export default Services