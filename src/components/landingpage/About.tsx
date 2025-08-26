import Image from "next/image";
import chess from "@/assets/landingpage/icon/chess.webp";
import brain from "@/assets/landingpage/icon/brain.webp";
import atom from "@/assets/landingpage/icon/atom.webp";
import ornament from "@/assets/landingpage/background/ornament-about.webp"
const About = () => {
    return (
        <div className="flex flex-row items-center justify-center h-[40vw] mt-[-5vw] gap-x-[5vw] relative ">
            <Image src={ornament} alt="Ornament Background" className="w-[40vw] absolute top-0 left-0 z-0" />
            <Image src={ornament} alt="Ornament Background" className="w-[40vw] absolute bottom-0 right-0 z-0 rotate-180" />
            <div className="flex flex-col items-center justify-center bg-white w-[25vw] h-[20vw] p-[1vw] gap-y-[1vw] relative z-10"
                style={{
                    boxShadow: "0px 4px 4px 0px #00000040"
                }}>
                    <div className="rounded-full bg-[#A0001B] p-[1.5vw]">
                  <Image src={brain} alt="brain Icon" className="w-[8vw] " />  
                  </div>
                <h3 className="font_britanica_bold text-[clamp(0.5rem,2vw,4rem)] text-black text-center">Proactive & Practical Counsel</h3>
            </div>

            <div className="flex flex-col items-center justify-center bg-white w-[25vw] h-[20vw] p-[1vw] gap-y-[1vw] relative z-10"
                style={{
                    boxShadow: "0px 4px 4px 0px #00000040"
                }}>
                   <div className="rounded-full bg-[#A0001B] p-[1.5vw]">
                  <Image src={atom} alt="atom Icon" className=" w-[8vw] " />  
                  </div>
                <h3 className="font_britanica_bold text-[clamp(0.5rem,2vw,4rem)] text-black text-center">Dynamic & Applicable Expertise </h3>
            </div> 

            <div className="flex flex-col items-center justify-center bg-white w-[25vw] h-[20vw] p-[1vw] gap-y-[1vw] relative z-10"
                style={{
                    boxShadow: "0px 4px 4px 0px #00000040"
                }}>
                   <div className="rounded-full bg-[#A0001B] p-[1.5vw]">
                  <Image src={chess} alt="Chess Icon" className="w-[8vw] " />  
                  </div>
                <h3 className="font_britanica_bold text-[clamp(0.5rem,2vw,4rem)] text-black text-center">Strategic & Solution-Oriented Advocacy</h3>
            </div>  
           

        </div>
    )
}
export default About;