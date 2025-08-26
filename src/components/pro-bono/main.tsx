import Image from "next/image"
import hero from "@/assets/pro-bono/hero.webp"
import ornament from "@/assets/pro-bono/ornament.webp"
import mobile from "@/assets/pro-bono/mobile.webp"
const Main = () => {
    return (
        <div className="flex relative flex-col items-center justify-center gap-y-[5vw]">
            <Image src={hero} alt="hero" className="w-full h-full object-cover" />
            <div className="flex flex-col sm:flex-row items-center px-[8vw] gap-x-[3vw]">
                <h1 className="sm:font_lato_regular text-[clamp(6vw,6vw,10vw)] sm:text-[clamp(5vw,5vw,5vw)] sm:text-nowrap font_britanica_black">Pro Bono</h1>
                <p className="font_britanica_bold sm:text-[clamp(1.4vw,1.7vw,5vw)] text-[clamp(2vw,3.3vw,5vw)] sm:text-left text-center">At HAS Attorneys at Law, we believe that law is more than a profession, it is a calling to serve. We view our pro bono practice not as an obligation, but as the core of our responsibility to the community. This is how we translate our legal expertise into tangible acts of compassion, ensuring that justice is accessible to those who need it most.</p>
            </div>
            <div className="flex justify-center items-center text-center bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] p-[8vw] rounded-t-[2.4vw]">
                <h3 className="font_britanica_bold sm:text-[clamp(1.4vw,2.5vw,5vw)] text-[clamp(1.4vw,3.76vw,5vw)] text-white sm:text-left text-center">We dedicate our time, resources, and litigation expertise to accompany individuals and organizations who fight for justice but have limited access. Our team actively seeks pro bono cases where we can create a significant impact, provide a strong defense, and give a voice to the unheard.</h3>
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:px-[5vw] gap-x-[3vw]">
                <Image src={ornament} alt="ornament" className="w-[40%] sm:block hidden" />
                <Image src={mobile} alt="ornament-mobile" className="w-full sm:hidden block mt-[-5vw]"/>
                <div className="flex flex-col  gap-y-[4vw] sm:px-0 px-[5vw]  w-full">
                    <h1 className="font_britanica_bold flex justify-center bg-clip-text text-transparent bg-[linear-gradient(0deg,_#000000_-29.55%,_#F20028_128.41%)] text-[clamp(5vw,5vw,5vw)] sm:text-[clamp(3vw,3vw,5vw)]">Our Pro Bono Stories</h1>
                    <div className="flex flex-row items-start  gap-x-[2vw] ">
                        <h2 className="text-white bg-[#A0001B] rounded-full w-[5vw] h-[5vw] flex items-center justify-center text-[clamp(1.4vw,2.5vw,5vw)] flex-shrink-0" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>1</h2>
                        <h3 className="text-black font_britanica_bold text-[clamp(1.6vw,3vw,5vw)] sm:text-[clamp(1.6vw,1.6vw,5vw)]">Representing a father in a criminal lawsuit filed by his own son regarding the alleged embezzlement of assets. Through this case, HAS successfully carved out a new jurisprudence on civil law stating that assets purchased by parents on behalf of their children will remain the property of their parents as long as they are still alive.</h3>
                    </div>
                    <div className="flex flex-row items-center gap-x-[2vw] ">
                        <h2 className="text-white bg-[#A0001B] rounded-full w-[5vw] h-[5vw] flex items-center justify-center text-[clamp(1.4vw,2.5vw,5vw)] flex-shrink-0" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>2</h2>
                        <h3 className="text-black font_britanica_bold text-[clamp(1.6vw,3vw,5vw)] sm:text-[clamp(1.6vw,1.6vw,5vw)]">Representing a patient regarding the allegation of malpractice committed by the hospital for eye surgery.</h3>
                    </div>
                    <div className="flex flex-row items-center gap-x-[2vw] ">
                        <h2 className="text-white bg-[#A0001B] rounded-full w-[5vw] h-[5vw] flex items-center justify-center text-[clamp(1.4vw,2.5vw,5vw)] flex-shrink-0" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>3</h2>
                        <h3 className="text-black font_britanica_bold text-[clamp(1.6vw,3vw,5vw)] sm:text-[clamp(1.6vw,1.6vw,5vw)]">Representing a 9-year-old child who experienced alleged malpractice committed by the hospital for a tonsillectomy.</h3>
                    </div>
                    <div className="flex flex-row items-center gap-x-[2vw] ">
                        <h2 className="text-white bg-[#A0001B] rounded-full w-[5vw] h-[5vw] flex items-center justify-center text-[clamp(1.4vw,2.5vw,5vw)] flex-shrink-0" style={{ boxShadow: "0px 4px 4px 0px #00000040" }}>4</h2>
                        <h3 className="text-black font_britanica_bold text-[clamp(1.6vw,3vw,5vw)] sm:text-[clamp(1.6vw,1.6vw,5vw)]">Representing a teacher in South Tangerang who was unjustly terminated by their school. Our legal assistance resulted in a favorable recommendation from the Department of Labor, compelling the school to provide compensation for the wrongful dismissal.</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Main