import Hero from "@/components/service/Hero"
import Main from "@/components/service/Main"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : 'service'
}

const Services = () => {
    return(
        <div className="bg-[#F2F2F2]">
            <Hero/>
            <Main/>
        </div>
    )
}
export default Services