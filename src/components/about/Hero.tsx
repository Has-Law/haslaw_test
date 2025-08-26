import Image from "next/image";
import hero from "@/assets/about/image/hero.webp";
import heroMobile from "@/assets/about/image/hero-mobile.webp";


const Hero = () => {
 return (
 <div className="flex flex-col  justify-center relative sm:aspect-[1280/650] ">
 <Image src={hero} alt="Hero Image" className="sm:block hidden w-[65vw] absolute top-0 right-0 z-0 " />
 <Image src={heroMobile} alt="Hero Image" className="sm:hidden block relative z-0  " />
 <div className="w-full bg-[linear-gradient(180deg,_#000000_0%,_#737373_100%)] h-[40vw] sm:hidden block"/>
 
    <div className="flex flex-col sm:items-start items-center sm:relative z-30 sm:w-[35vw] w-[70vw] transform sm:translate-x-[10vw] absolute -translate-x-1/2  left-1/2 sm:left-0 bottom-[5%] z-0 ">
        <div className="flex flex-row items-center gap-x-[1vw] ">
        <h1 className="text-white sm:text-black font_britanica_black text-[clamp(5vw,6.6vw,7vw)] sm:text-[clamp(2vw,2vw,4rem)] ">About</h1>
        <h1 className="bg-white sm:bg-black h-[0.1vw] sm:w-[3vw] w-[10vw]"/>
        </div>
        <h2 className="font_lato_bold text-[clamp(5vw,6.8vw,7vw)] sm:text-[clamp(3vw,3vw,3vw)] sm:text-start text-center sm:text-black text-white">More Than a Law Firm, We Are Your Strategic Partner</h2>
    </div>
 </div>
 );
};
export default Hero;