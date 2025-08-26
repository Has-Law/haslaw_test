'use client';
import { useState } from "react";
import Image from "next/image";
import photo from "@/assets/landingpage/image/about.webp"; 
const AboutSec2 = () => {
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className="flex flex-row items-center justify-center gap-x-[3vw] px-[5vw] ">
            
            <Image src={photo} alt="About Section Image" className="w-[40vw]  max-h-[50vw]"
            />
            <div className="flex flex-col gap-y-[2vw] py-[2vw]  items-start">
                <h1 className="font_britanica_black text-[clamp(0.5rem,5vw,5rem)] text-[#131313]">Introducing <br />HAS Attorneys at Law</h1>
                <p className="font_britanica_regular text-[clamp(2vw,2vw,4rem)] text-[#131313]">For nearly a decade, HAS Attorneys at Law has established itself as a trusted full-service law firm with a formidable reputation in litigation. Our primary strength lies in navigating high-stakes disputes, from complex commercial cases to sensitive anti-corruption matters. Backed by a team of seasoned lawyers, we are committed to delivering strategic and effective legal solutions to protect your most critical interests.</p>
                <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`text-[#A0001B] font_britanica_black text-[clamp(2vw,2vw,4rem)] border-[#A0001B] border-[0.2vw] p-[1vw] rounded-full transition-colors duration-300 ease-in-out cursor-pointer  ${isHovered ? 'bg-[#A0001B] text-white' : 'bg-white'} `}
                
                >More About Us</button>
            </div>
        </div>
    )
};
export default AboutSec2;  