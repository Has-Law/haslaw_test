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
        <div className=" flex flex-col items-center  relative aspect-[1280/549] mt-[5vw]">
            <Image src={servicebg} alt="Service Background" className="w-full h-auto object-cover  absolute top-0 left-0 z-0" />
            <div className="flex flex-col items-center py-[2vw] px-[10vw] relative z-10 gap-y-[2vw]">
                <h1 className="font_lato_bold text-white text-[clamp(0.5rem,5vw,5rem)] tracking-[0.1rem]">Our Services</h1>
                <p className="font_britanica_regular text-white text-[clamp(1.6vw,1.6vw,4rem)] text-center">At HAS Attorneys at Law, our identity is forged through powerful and strategic litigation. We exist to win your most critical disputes, supported by robust corporate services that strengthen your legal standing. To deliver this commitment, we provide a comprehensive suite of services designed to protect and advance your interests in every legal arena. Our focuses include:</p>
                    
                <div className="flex flex-row items-center justify-center gap-x-[10vw]">
                    <div className="flex flex-col items-center justify-center w-[6vw]">
                        <Image src={handcuffs} alt="Handcuffs Icon" className="w-full  mb-[1vw]" />
                        <h2 className="font_britanica_black text-white text-[clamp(1.6vw,1.6vw,4rem)] text-center">Criminal litigation</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[6vw]">
                        <Image src={dolar} alt="Handcuffs Icon" className="w-full  mb-[1vw]" />
                        <h2 className="font_britanica_black text-white text-[clamp(1.6vw,1.6vw,4rem)] text-center">Commercial litigation</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[6vw]">
                        <Image src={administrator} alt="Handcuffs Icon" className="w-full  mb-[1vw]" />
                        <h2 className="font_britanica_black text-white text-[clamp(1.6vw,1.6vw,4rem)] text-center">Administrative litigation</h2>
                    </div>
                </div>
            <Link
              href="/service"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={` font_britanica_black text-[clamp(1.5vw,1.5vw,4rem)] border-white border-[0.2vw] p-[1vw] rounded-full transition-colors duration-300 ease-in-out cursor-pointer ${isHovered ? 'bg-white text-[#A0001B]' : 'text-white'}`}>See Our Services
            </Link>
            </div>
        </div>
    );
}
export default Service;