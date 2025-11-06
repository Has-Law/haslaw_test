import Image from "next/image";
import hero from "@/assets/about/image/hero.webp";
import heroMobile from "@/assets/about/image/hero-mobile.webp";


const Hero = () => {
    return (
        <div className="flex flex-col  justify-center relative sm:aspect-[1280/550] ">
            <Image src={hero} alt="Hero Image" className="sm:block hidden w-[55vw] absolute top-0 right-0 z-0 " />
            <Image src={heroMobile} alt="Hero Image" className="sm:hidden block relative z-0  " />
            <div className="w-full bg-[linear-gradient(180deg,_#000000_0%,_#737373_100%)] h-[40vw] sm:hidden block" />

            <div className="flex flex-col sm:items-start items-center sm:relative z-30 sm:w-[40vw] w-[95vw] transform sm:translate-x-[8vw] absolute -translate-x-1/2  left-1/2 sm:left-0 bottom-[10%] ">
                <h2 className="font_britanica_black text-[clamp(7vw,7vw,7vw)] sm:text-[clamp(2.5vw,2.5vw,3vw)] sm:text-start text-center sm:text-black text-white leading-tight">More Than a Law Firm, <br />We Are Your Strategic Partner</h2>
            </div>
        </div>
    );
};
export default Hero;