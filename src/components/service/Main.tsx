import Image from "next/image";
import arrow from "@/assets/service/icon/arrow.webp";
import shield from "@/assets/service/image/shield.webp";
import contract from "@/assets/service/image/contract.webp";
import Link from "next/link";
const Main = () => {
    return(
        <div className="mt-[5vw] gap-y-[5vw] relative px-[5vw] flex-col flex items-center justify-center  ">
            <h1 className=" font_britanica_black text-[clamp(6vw,6vw,5rem)] sm:text-[clamp(4vw,4vw,4rem)]">Advocacy at Our Core</h1>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-x-[1vw] gap-y-[1vw]">
               <Link href="/service/litigation" className="w-full  sm:h-[35vw] bg-[linear-gradient(180deg,_#A0001B_0%,_#4F000D_100%)] flex flex-row pl-[7vw] py-[7vw] sm:pl-[2vw] sm:py-[5vw] items-center rounded-xl">
                    <div className="flex flex-col gap-y-[3vw] justify-between">
                        <h1 className="text-white text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(5vw,5vw,6rem)] font_britanica_black leading-tight">Litigation Service</h1>
                        <p className="text-white font_britanica_regular text-[clamp(3vw,3.7vw,4rem)] sm:w-full w-[90%] sm:text-[clamp(1.6vw,1.6vw,2rem)]">Resolving complex business disputes through expert litigation and strategic alternative dispute resolution (ADR).</p>
                        <Image src={arrow} alt="Arrow Icon" className="w-[30vw] sm:w-[20vw]  " />
                    </div>
                    <Image src={shield} alt="Shield Icon" className="w-[30vw] sm:w-[20vw]  " />
                </Link>
               <Link href="/service/corporate" className="w-full  sm:h-[35vw] bg-[linear-gradient(180deg,_#A0001B_0%,_#4F000D_100%)] flex flex-row pl-[7vw] py-[7vw] sm:pl-[2vw] sm:py-[5vw] items-center rounded-xl">
                    <div className="flex flex-col gap-y-[3vw] justify-between">
                        <h1 className="text-white text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(5vw,5vw,6rem)] font_britanica_black leading-tight">Corporate Service</h1>
                        <p className="text-white font_britanica_regular text-[clamp(3vw,3.7vw,4rem)] sm:w-full w-[80%] sm:text-[clamp(1.6vw,1.6vw,2rem)]">Comprehensive legal support for your day-to-day operations and major corporate transactions.</p>
                        <Image src={arrow} alt="Arrow Icon" className="w-[30vw] sm:w-[20vw]  " />
                    </div>
                    <Image src={contract} alt="Shield Icon" className="w-[30vw] sm:w-[20vw]  " />
                </Link>
            </div>
        </div>
    )
}
export default Main