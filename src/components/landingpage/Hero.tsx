'use client';
import { useState } from "react";
import Image from "next/image";
import herobg from "@/assets/landingpage/background/bg-new.webp";
import contact from "@/assets/landingpage/icon/contact.webp";
import contactwhite from "@/assets/landingpage/icon/contactwhite.svg";
import text from "@/assets/landingpage/image/text-contact.webp";
import BgMobile from "@/assets/landingpage/background/bg-mobile.png";

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            {/* Mobile Layout */}
            <div className="md:hidden relative flex flex-col justify-center min-h-screen">
                <Image 
                    src={BgMobile} 
                    alt="Hero Background Mobile" 
                    className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="relative flex flex-col justify-between min-h-screen px-6 py-8">
                    <div className="flex-1 flex items-center">
                        <h1 className="text-white font_britanica_black text-3xl leading-tight max-w-xs">
                            Valuing Your Case.<br />
                            Persevering in Your Fight.<br />
                            Unlocking Your Future.
                        </h1>
                    </div>
                    
                    <div className="flex justify-end">
                        <div className="relative w-20 aspect-square">
                            <Image
                                src={text}
                                alt="Contact Us Text"
                                className="absolute inset-0 w-full h-auto"
                            />
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                           w-[50%] aspect-square rounded-full 
                                           flex items-center justify-center 
                                           transition-colors duration-300 ease-in-out cursor-pointer 
                                           ${isHovered ? 'bg-[#A0001B]' : 'bg-white'}`}
                            >
                                <Image
                                    src={isHovered ? contactwhite : contact}
                                    alt="Contact Us"
                                    className="w-[80%] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex relative flex-col justify-center aspect-[1280/670]">
                <Image 
                    src={herobg} 
                    alt="Hero Background" 
                    className=" absolute top-0 w-full h-full object-cover" 
                />
                <div className="relative flex justify-between mt px-10">
                    <h2 className="text-white font_britanica_black text-[clamp(2.5vw,2.5vw,4rem)] ml-[4vw] mt-[5vw] max-w-[30vw]">
                        Valuing Your Case.
                        Persevering in Your Fight.
                        Unlocking Your Future.
                    </h2>
                    <div className="relative w-[8vw] aspect-square mt-[25vw] mr-[2vw]">
                        <Image
                            src={text}
                            alt="Contact Us Text"
                            className="absolute inset-0 w-full h-auto"
                        />
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                       w-[50%] aspect-square rounded-full 
                                       flex items-center justify-center 
                                       transition-colors duration-300 ease-in-out cursor-pointer 
                                       ${isHovered ? 'bg-[#A0001B]' : 'bg-white'}`}
                        >
                            <Image
                                src={isHovered ? contactwhite : contact}
                                alt="Contact Us"
                                className="w-[80%] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;