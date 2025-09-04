import Hero from "@/components/service/Hero"
import Main from "@/components/service/Main"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : 'service'
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