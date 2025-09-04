'use client';
import { useState } from "react";
import Image from "next/image";
import photo from "@/assets/landingpage/image/about.webp";
import Link from "next/link";

const AboutSec2 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <div className="flex flex-col sm:flex-row  justify-center 
                       p-8 sm:px-[5vw] sm:gap-x-[1vw]">

            <div className="hidden sm:block sm:w-[40vw]">
                <Image
                    src={photo}
                    alt="About Section Image"
                    className="w-[40vw] max-h-[45vw] rounded-lg"
                />
            </div>

            <div className="flex flex-col items-start gap-y-6 sm:gap-y-[2vw] sm:py-[2vw] w-full">
                <h1 className="text-3xl sm:text-[clamp(0.5vw,3vw,5rem)]">
                    <span className="font_britanica_regular text-gray-800 sm:text-[#131313]">Introducing</span>
                    <br />
                    <span className="font_britanica_black text-[#780014]">HAS Attorneys at Law</span>
                </h1>

                <p className="font_britanica_regular text-base sm:text-[clamp(1vw,1.5vw,4rem)] text-gray-700 sm:text-[#131313] text-justify leading-relaxed">
                    For nearly a decade, HAS Attorneys at Law has established itself as a trusted full-service law firm with a formidable reputation in litigation. Our primary strength lies in navigating high-stakes disputes, from complex commercial cases to sensitive anti-corruption matters. Backed by a team of seasoned lawyers, we are committed to delivering strategic and effective legal solutions to protect your most critical interests.
                </p>

                <Link
                    href="/about"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`font_britanica_black 
                               text-base sm:text-[clamp(1.5vw,1.5vw,4rem)] 
                               border-2 sm:border-[0.2vw] 
                               p-3 px-6 sm:p-[1vw] 
                               rounded-full transition-colors duration-300 ease-in-out cursor-pointer 
                               ${isHovered ? 'bg-[#A0001B] text-white border-[#A0001B]' : 'bg-transparent text-[#A0001B] border-[#A0001B]'}`}
                >
                    More About Us
                </Link>
            </div>
        </div>
    );
};

export default AboutSec2;