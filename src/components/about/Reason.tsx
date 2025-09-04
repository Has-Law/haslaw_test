import Image from "next/image";
import shield from "@/assets/about/icon/shield.webp";
import dart from "@/assets/about/icon/dart.webp";
import atom from "@/assets/about/icon/atom.webp";
const Reason = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full  px-[5vw] mt-[5vw] gap-y-[2vw]">
            <h1 className="font_britanica-bold bg-clip-text text-transparent bg-gradient-to-t from-black to-[#F20028] text-[clamp(5vw,5vw,4rem)]">Why Choose Us</h1>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-x-[3vw]">
                <div className="flex flex-col items-center gap-y-[1vw]">
                    <div className="flex items-center justify-center bg-[linear-gradient(180deg,_#A0001B_0%,_#3A000A_100%)] p-[1.5vw] rounded-full">
                    <Image src={shield} alt="Shield Icon" className="w-[5vw]  " />
                    </div>
                    <h2 className="font_britanica_black text-[clamp(4vw,4vw,3rem)] sm:text-[clamp(2vw,2vw,2rem)] text-[#4F4F4F] sm:text-black ">Experience-Driven Prevention</h2>
                    <p className="font_britanica_regular text-[clamp(3vw,3.6vw,3rem)] sm:text-[clamp(1.3vw,1.3vw,2rem)] text-[#4F4F4F] sm:text-black  text-center sm:text-justify">Our core strength in litigation gives us a unique perspective on avoiding legal pitfalls. We know where problems arise and how to build strong, preventative frameworks for your business and personal affairs.</p>
                </div>
                <div className="flex flex-col items-center gap-y-[1vw] ">
                    <div className="flex items-center justify-center bg-[linear-gradient(180deg,_#A0001B_0%,_#3A000A_100%)] p-[1.5vw] rounded-full">
                    <Image src={dart} alt="Shield Icon" className="w-[5vw]  " />
                    </div>
                     <h2 className="font_britanica_black text-[clamp(4vw,4vw,3rem)] sm:text-[clamp(2vw,2vw,2rem)] text-[#4F4F4F] sm:text-black ">Result-Focused Advocacy</h2>
                    <p className="font_britanica_regular text-[clamp(3vw,3.6vw,3rem)] sm:text-[clamp(1.3vw,1.3vw,2rem)] text-[#4F4F4F] sm:text-black  text-center sm:text-justify">We are not just advisors; we are relentless advocates. Our strategic approach is always geared towards achieving the most favorable and practical outcomes for our clients.</p>
                </div>
                <div className="flex flex-col items-center gap-y-[1vw] ">
                    <div className="flex items-center justify-center bg-[linear-gradient(180deg,_#A0001B_0%,_#3A000A_100%)] p-[1.5vw] rounded-full">
                    <Image src={atom} alt="Shield Icon" className="w-[5vw]  " />
                    </div>
                     <h2 className="font_britanica_black text-[clamp(4vw,4vw,3rem)] sm:text-[clamp(2vw,2vw,2rem)] text-[#4F4F4F] sm:text-black ">Agile & Forward-Thinking</h2>
                    <p className="font_britanica_regular text-[clamp(3vw,3.6vw,3rem)] sm:text-[clamp(1.3vw,1.3vw,2rem)] text-[#4F4F4F] sm:text-black  text-center sm:text-justify">Our team of young, experienced, and creative lawyers ensures that we provide dynamic, innovative, and highly applicable solutions tailored to the complexities of modern law and business.</p>
                </div>
            </div>
        </div>
    );
}
export default Reason;