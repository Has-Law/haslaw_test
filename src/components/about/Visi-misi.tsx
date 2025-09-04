'use client';
import { useState } from "react";
import Image from "next/image";
import visi from "@/assets/about/background/visi.webp";
import misi from "@/assets/about/background/misi.webp";
const VisiMisi = () => {
    const [isHovered, setIsHovered] = useState<string | null>(null);
    return (
        <div className="flex flex-col items-center justify-center w-full mt-[5vw]  relative">
            <div
                onMouseEnter={() => setIsHovered('visi')}
                onMouseLeave={() => setIsHovered(null)}
                className="cursor-pointer w-full h-[20vw] sm:h-[15vw]  relative overflow-hidden "
            >
                <Image
                    src={visi}
                    alt="Visi Background"
                    fill
                    className="z-0 transition-transform duration-700 ease-in-out object-cover"
                />

                <div
                    className={`absolute inset-0 bg-gradient-to-l from-[#A0001B] to-[transparent] z-10 transition-all duration-500 ease-in-out
            ${isHovered === 'visi' ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="absolute inset-0 z-20 flex items-center justify-between w-full px-[10vw]">
                    <h1 className="font_britanica_black text-white text-[clamp(4vw,4vw,4rem)] py-[2vw]">
                        VISION
                    </h1>
                    <p className={`text-right w-[70%] font_britanica_black text-white text-[clamp(1.5vw,1.7vw,4rem)] transition-all duration-500 ease-in-out ${isHovered === 'visi' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1/2'}`}>
                        To be the most trusted and effective legal partner, empowering our clients to navigate legal complexities with confidence and achieve their strategic objectives.
                    </p>
                </div>
            </div>
            <div
                onMouseEnter={() => setIsHovered('misi')}
                onMouseLeave={() => setIsHovered(null)}
                className="cursor-pointer w-full  h-[20 vw] sm:h-[15vw]  relative overflow-hidden "
            >
                <Image
                    src={misi}
                    alt="Visi Background"
                    fill
                    className="z-0 transition-transform duration-700 ease-in-out object-cover"
                />

                <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#A0001B] to-[transparent] z-10 transition-all duration-500 ease-in-out
            ${isHovered === 'misi' ? 'opacity-100' : 'opacity-0'}`}
                />

                <div className="absolute inset-0 z-20 flex items-center justify-between w-full px-[10vw]">

                    <p className={`text-left w-[70%] font_britanica_black text-white text-[clamp(1.5vw,1.7vw,4rem)] transition-all duration-500 ease-in-out ${isHovered === 'misi' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/2'}`}>
                        We achieve our vision by providing proactive, practical and client-centric legal services, leveraging pur extensive litigation background to offer strategic counsel and robust advocacy in an ever-evolving legal landscape
                    </p>
                    <h1 className="font_britanica_black text-white text-[clamp(4vw,4vw,4rem)] py-[2vw]">
                        MISSION
                    </h1>
                </div>
            </div>
        </div>


    );
}
export default VisiMisi;