import Image from "next/image"
import hero from "@/assets/service/background/hero.webp"
import heroMobile from "@/assets/service/background/hero-mobile.webp"
const Hero = () => {
    return (
        <div className="relative aspect-[393/608] sm:aspect-[1280/529] flex flex-col justify-center ">
            <Image src={hero} alt="Hero Image" className="w-full absolute top-0 right-0 z-0 sm:block hidden" />
            <Image src={heroMobile} alt="Hero Image" className="sm:hidden block w-full absolute top-0 right-0 z-0 " />
            <div className="relative z-10 flex flex-col w-[60vw] sm:w-[42vw] translate-x-1/8">
                <h1 className="relative z-10 font_britanica_heavy text-white text-[clamp(6vw,7vw,6rem)] sm:text-[clamp(4vw,4vw,4rem)]">Services</h1>
                <p className="font_britanica_bold sm:font_britanica_regular text-white text-[clamp(4vw,4vw,4rem)] sm:text-[clamp(1.9vw,1.9vw,4rem)] z-10">At HAS Attorneys at Law, our identity is forged through powerful and strategic litigation. We exist to win your most critical disputes, supported by robust corporate services that strengthen your legal standing.</p>
            </div>
        </div>
    )
}
export default Hero