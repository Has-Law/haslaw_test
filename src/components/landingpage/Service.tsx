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
        <div className="relative flex flex-col items-center  aspect-[1280/400] ">
            <Image 
                src={servicebg} 
                alt="Service Background" 
                className="z-0 relative h-[30vw]" 
            />
            <div className="absolute z-20 flex flex-col items-center text-center px-[10vw] py-[2vw] gap-y-[0.5vw]">
                <h1 className="font_britanica_black text-white text-[clamp(0.5rem,3vw,5rem)] tracking-[0.1rem]">
                    Our Services
                </h1>
                <p className="font_britanica_regular text-white text-[clamp(1vw,1.2vw,4rem)] leading-relaxed max-w-5xl">
                    At HAS Attorneys at Law, our identity is forged through powerful and strategic litigation. We exist to win your most critical disputes, supported by robust corporate services that strengthen your legal standing. To deliver this commitment, we provide a comprehensive suite of services designed to protect and advance your interests in every legal arena. Our focuses include:
                </p>
            
                <div className="flex flex-row items-start justify-center w-full gap-x-[10vw]  md:my-0">
                 
                    <div className="flex flex-col items-center justify-start w-[4vw]">
                        <Image src={handcuffs} alt="Handcuffs Icon" className=" h-auto w-full mb-[0.5vw]" />
                        <h2 className="font_britanica_black text-white text-[clamp(1.4vw,1.4vw,4rem)]">
                            Criminal litigation
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[4vw]">
                        <Image src={dolar} alt="Dolar Icon" className=" h-auto w-full mb-[0.5vw]" />
                        <h2 className="font_britanica_black text-white text-[clamp(1.4vw,1.4vw,4rem)]">
                            Commercial litigation
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[4vw]">
                        <Image src={administrator} alt="Administrator Icon" className=" h-auto w-full mb-[0.5vw]" />
                        <h2 className="font_britanica_black text-white text-[clamp(1.4vw,1.4vw,4rem)]">
                            Administrative litigation
                        </h2>
                    </div>
                </div>
                
                <Link
                    href="/service"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`font_britanica_black border-2 md:border-[0.2vw] rounded-full transition-colors duration-300 ease-in-out cursor-pointer 
                               text-[clamp(1.3vw,1.3vw,4rem)] 
                               p-[0.8vw]
                               ${isHovered ? 'bg-white text-[#A0001B]' : 'text-white border-white'}`}
                >
                    See Our Services
                </Link>
            </div>
        </div>
    );
};

export default Service;