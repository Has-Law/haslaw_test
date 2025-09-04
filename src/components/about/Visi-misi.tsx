'use client';
import { useState } from "react";
import Image from "next/image";
import visi from "@/assets/about/background/visi.webp";
import misi from "@/assets/about/background/misi.webp";
const VisiMisi = () => {
    const [isHovered, setIsHovered] = useState<string | null>(null);
    return (
        <div className="flex flex-col items-center justify-center w-full mt-[4vw]  relative">
            <div
                onMouseEnter={() => setIsHovered('visi')}
                onMouseLeave={() => setIsHovered(null)}
                className="cursor-pointer w-full h-[50vw] sm:h-[16vw]  relative overflow-hidden "
            >
                <Image
                    src={visi}
                    alt="Visi Background"
                    fill
                    className="z-0 transition-transform duration-700 ease-in-out object-cover"
                />

                <div
                    className={`absolute inset-0 bg-gradient-to-l from-[#A0001B] to-[transparent] z-10 transition-all duration-500 ease-in-out
            ${isHovered === 'visi' ? 'opacity-100' : 'sm:opacity-0 opacity-100'}`}
                />

                <div className="absolute inset-0 z-20 flex flex-col sm:flex-row items-center justify-between w-full px-[8vw] sm:px-[8vw]">
                    <h1 className="font_britanica_black text-white text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(3.2vw,3.2vw,3.2rem)] py-[2vw] sm:py-[1.6vw]">
                        VISION
                    </h1>
                    <p className={`text-center mb-32 sm:text-right w-full sm:w-[70%] font_britanica_black text-white text-[clamp(3.5vw,3.5vw,3.5rem)] sm:text-[clamp(1.2vw,1.8vw,3.2rem)] sm:transition-all sm:duration-500 sm:ease-in-out opacity-100 translate-x-0 ${isHovered === 'visi' ? 'sm:opacity-100 sm:translate-x-0' : 'sm:opacity-0 sm:translate-x-1/2'}`}>
                        To be the most trusted and effective legal partner, empowering our clients to navigate legal complexities with confidence and achieve their strategic objectives.
                    </p>
                </div>
            </div>
            <div
                onMouseEnter={() => setIsHovered('misi')}
                onMouseLeave={() => setIsHovered(null)}
                className="cursor-pointer w-full h-[50vw] sm:h-[16vw]  relative overflow-hidden "
            >
                <Image
                    src={misi}
                    alt="Visi Background"
                    fill
                    className="z-0 transition-transform duration-700 ease-in-out object-cover"
                />

                <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#A0001B] to-[transparent] z-10 transition-all duration-500 ease-in-out
            ${isHovered === 'misi' ? 'opacity-100' : 'sm:opacity-0 opacity-100'}`}
                />

                <div className="absolute inset-0 z-20 flex flex-col-reverse sm:flex-row items-center justify-between w-full px-[8vw] sm:px-[8vw]">

                    <p className={`text-center mb-10 sm:text-left w-full sm:w-[70%] font_britanica_black text-white text-[clamp(3.5vw,3.5vw,3.5rem)] sm:text-[clamp(1.2vw,1.8vw,3.2rem)] sm:transition-all sm:duration-500 sm:ease-in-out opacity-100 translate-x-0 ${isHovered === 'misi' ? 'sm:opacity-100 sm:translate-x-0' : 'sm:opacity-0 sm:-translate-x-1/2'}`}>
                        We achieve our vision by providing proactive, practical and client-centric legal services, leveraging our extensive litigation background to offer strategic counsel and robust advocacy in an ever-evolving legal landscape.
                    </p>
                    <h1 className="font_britanica_black text-white text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(3.2vw,3.2vw,3.2rem)] py-[5vw]  sm:py-[1.6vw]">
                        MISSION
                    </h1>
                </div>
            </div>
        </div>


    );
}
export default VisiMisi;