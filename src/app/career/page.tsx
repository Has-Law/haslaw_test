import Hero from "@/components/career/Hero"
import { Metadata } from "next"

export const metadata : Metadata = {
    title : "career",
    description: "Build your legal career with HAS Attorneys at Law. Explore current job openings, internships, and opportunities to join a premier law firm in Jakarta.",
}

const CareerPage = () => {
    return(
        <div className="bg-[#F2F2F2]">
            <Hero/>
        </div>
    )
}
export default CareerPage