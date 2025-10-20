'use client';
import { useState } from "react";
import Image from "next/image";
import herobg from "@/assets/landingpage/background/bg-new.png";
import contact from "@/assets/landingpage/icon/contact.webp";
import contactwhite from "@/assets/landingpage/icon/contactwhite.svg";
import text from "@/assets/landingpage/image/text-contact.webp";
import BgMobile from "@/assets/landingpage/background/bg-mobile.png";
import Link from "next/link";

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappLink = "https://wa.me/6287857905183";

    return (
        <>
            {/* Mobile Layout */}
            <div className="md:hidden relative flex flex-col justify-end min-h-screen">
                <Image
                    src={BgMobile}
                    alt="Hero Background Mobile"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative flex flex-col justify-between  w-full px-6 py-8">
                    <div className="flex items-center justify-between pb-10">
                        <div className=" flex items-start">
                            <h1 className="text-white font_britanica_black text-3xl  max-w-xs">
                                <p className="tracking-none"><span className="text-[#FF8A9D]">C</span>ompassionate</p>
                                <p className=" tracking-none"><span className="text-[#FF8A9D]">A</span>gility</p>
                                <p className=" tracking-none"><span className="text-[#FF8A9D]">R</span>eliable</p>
                                <p className=" tracking-none"><span className="text-[#FF8A9D]">E</span>arnest</p>
                            </h1>
                        </div>

                        <div className="flex justify-end">
                            <Link
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-20 aspect-square"
                            >
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex relative flex-col justify-end aspect-[1280/610]">
                <Image
                    src={herobg}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative flex flex-col justify-between w-full  px-10">
                    <div className="flex items-center justify-between pb-16">
                        <div className=" flex items-start">
                            <h2 className="text-white font_britanica_black leading-tight text-[clamp(2.5vw,2.5vw,4rem)] ml-[4vw]    ">
                                <p className="tracking-none"><span className="text-[#FF8A9D]">C</span>ompassionate</p>
                                <p className=" tracking-none"><span className="text-[#FF8A9D]">A</span>gility</p>
                                <p className=" tracking-none"><span className="text-[#FF8A9D]">R</span>eliable</p>
                                <p className=" tracking-none"><span className="text-[#FF8A9D]">E</span>arnest</p>
                            </h2>
                        </div>
                        <div className="flex justify-end items-center ">
                            <Link
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-[8vw] aspect-square"
                            >
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
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Hero;