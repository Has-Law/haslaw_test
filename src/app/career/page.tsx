import Hero from "@/components/career/Hero"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "career"
}

const CareerPage = () => {
    return(
        <div className="bg-[#F2F2F2]">
            <Hero/>
        </div>
    )
}
export default CareerPage