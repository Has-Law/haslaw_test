import Probono from "@/components/pro-bono/main"
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'probono',
    description: "Committed to justice for all. Explore HAS Attorneys at Law's Pro Bono initiatives, providing accessible legal aid to underrepresented communities in Indonesia.",
}
const ProBono = () => {
    return(
        <div className="bg-[#F2F2F2] pb-[2vw]">
            <Probono/>
        </div>
    )
}
export default ProBono;