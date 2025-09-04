import Probono from "@/components/pro-bono/main"
import { Metadata } from "next";

export const metadata : Metadata = {
    title: 'probono'
}
const ProBono = () => {
    return(
        <div className="bg-[#F2F2F2] pb-[2vw]">
            <Probono/>
        </div>
    )
}
export default ProBono;