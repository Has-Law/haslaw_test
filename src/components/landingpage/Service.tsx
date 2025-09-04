'use client';
import { useState } from "react";
import Image from "next/image";
import servicebg from "@/assets/landingpage/background/service.webp";
import handcuffs from "@/assets/landingpage/icon/handcuffs.webp";
import dolar from "@/assets/landingpage/icon/dolar.webp";
import administrator from "@/assets/landingpage/icon/administrator.webp";
import Link from "next/link";

const Service = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative flex flex-col items-center justify-center py-16 md:py-0 md:aspect-[1280/450] mt-12 md:mt-[3.2vw]">
            <Image 
                src={servicebg} 
                alt="Service Background" 
                layout="fill"
                objectFit="cover"
                className="z-0 md:rounded-[6rem] sm:rounded-4xl" 
            />
            <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-[8vw] gap-y-8 md:gap-y-[1.3vw]">
                <h1 className="font_lato_bold text-white text-4xl md:text-[clamp(0.35rem,3.5vw,3.5rem)] tracking-normal md:tracking-[0.07rem]">
                    Our Services
                </h1>
                <p className="font_britanica_regular text-white text-base md:text-[clamp(1.1vw,1.1vw,2.8rem)] leading-relaxed max-w-5xl">
                    At HAS Attorneys at Law, our identity is forged through powerful and strategic litigation. We exist to win your most critical disputes, supported by robust corporate services that strengthen your legal standing. To deliver this commitment, we provide a comprehensive suite of services designed to protect and advance your interests in every legal arena. Our focuses include:
                </p>
            
                <div className="flex flex-row items-start justify-around md:justify-center w-full gap-x-4 md:gap-x-[6.5vw] my-4 md:my-0">
                 
                    <div className="flex flex-col items-center justify-start w-1/4 md:w-[4vw]">
                        <Image src={handcuffs} alt="Handcuffs Icon" className="w-16 h-auto md:w-full mb-3 md:mb-[0.6vw]" />
                        <h2 className="font_britanica_black text-white text-sm md:text-[clamp(1.1vw,1.1vw,2.8rem)]">
                            Criminal litigation
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-start w-1/4 md:w-[4vw]">
                        <Image src={dolar} alt="Dolar Icon" className="w-16 h-auto md:w-full mb-3 md:mb-[0.6vw]" />
                        <h2 className="font_britanica_black text-white text-sm md:text-[clamp(1.1vw,1.1vw,2.8rem)]">
                            Commercial litigation
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-start w-1/4 md:w-[4vw]">
                        <Image src={administrator} alt="Administrator Icon" className="w-16 h-auto md:w-full mb-3 md:mb-[0.6vw]" />
                        <h2 className="font_britanica_black text-white text-sm md:text-[clamp(1.1vw,1.1vw,2.8rem)]">
                            Administrative litigation
                        </h2>
                    </div>
                </div>
                
                <Link
                    href="/service"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`font_britanica_black border-2 md:border-[0.12vw] rounded-full transition-colors duration-300 ease-in-out cursor-pointer 
                               text-base md:text-[clamp(1vw,1vw,2.5rem)] 
                               px-8 py-3 md:p-[0.6vw]
                               ${isHovered ? 'bg-white text-[#A0001B]' : 'text-white border-white'}`}
                >
                    See Our Services
                </Link>
            </div>
        </div>
    );
};

export default Service;