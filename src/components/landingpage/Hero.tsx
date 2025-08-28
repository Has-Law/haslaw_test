'use client';
import { useState } from "react";
import Image from "next/image";
import herobg from "@/assets/landingpage/background/hero-bg.png";
import contact from "@/assets/landingpage/icon/contact.webp";
import contactwhite from "@/assets/landingpage/icon/contactwhite.svg";
import text from "@/assets/landingpage/image/text-contact.webp";

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className=" relative flex flex-col justify-center aspect-[1280/758]">
            <Image src={herobg} alt="Hero Background" className="mt-[-5vw] absolute top-0" />
            <div className="relative flex justify-between px-10">
                <h2 className="text-white font_britanica_black text-[clamp(2.5vw,2.5vw,4rem)]  max-w-[30vw]">
                    Valuing Your Case.
                    Persevering in Your Fight.
                    Unlocking Your Future.
                </h2>
                <div className="relative w-[15vw] aspect-square mt-[15vw]">
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
                            className="w-[80%] h-auto fixed "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;