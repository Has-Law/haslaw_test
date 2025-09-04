'use client'

import Link from "next/link";
import { useState } from "react";

const Team = () => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    const seniorPartners = [
        { name: "Henricus Herikes, S.H." },
        { name: "Alexander Frans, S.H." },
        { name: "Muzammi Merah Hakim, S.H., M.H." },
    ];

    const partners = [
        { name: "Agus Askin Harta Mulya, S.H., M.H." },
        { name: "Yohannes Andryanus, S.H." },
        { name: "Rio Andre Winter Siahaan, S.H., M.H." },
    ];

    return (
        <div className="flex flex-col items-center gap-y-8 sm:gap-y-[1.6vw] mt-8 sm:mt-[3.2vw] w-[90%] sm:w-[60%] mx-auto">
            <h1 className="font_lato_bold text-[#131313] text-4xl sm:text-[clamp(1.5rem,4vw,3rem)]">Our Team</h1>
            <div className="flex flex-col items-center w-full">
                
           
                <div
                    onMouseEnter={() => setHoveredSection('senior')}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`relative overflow-hidden w-full cursor-pointer rounded-t-xl sm:rounded-t-[1.6vw] transition-all duration-300 ease-in-out ${hoveredSection === 'senior' ? 'sm:justify-between' : ''}`}
                >
          
                    <div className={`absolute inset-0 bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'senior' ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'senior' ? 'opacity-100' : 'opacity-0'}`} />

              
                    <div className={`hidden sm:flex flex-row px-6 sm:px-[4vw] items-center py-6 sm:py-[3vw] ${hoveredSection === 'senior' ? 'justify-between' : 'justify-center'}`}>
                        <h2 className={`z-10 font_britanica_black text-white text-2xl sm:text-[clamp(0.4rem,3vw,2.4rem)] py-4 sm:py-[1.6vw] absolute transition-all duration-500 ease-in-out ${hoveredSection === 'senior' ? 'left-6 sm:left-[4vw] -translate-x-0' : 'left-1/2 -translate-x-1/2'}`}>
                            SENIOR PARTNER
                        </h2>
                        <div className="relative z-10 ml-auto">
                            <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'senior' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="flex flex-col gap-y-2 sm:gap-y-[0.8vw]">
                                        {seniorPartners.map((partner, index) => (
                                            <h3 key={index} className="font_britanica_bold text-white text-left text-lg sm:text-[clamp(0.4rem,1.6vw,1.6rem)]">
                                                {partner.name}
                                            </h3>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

         
                    <div className="sm:hidden flex flex-col px-6 py-2">
                        <div className="flex justify-center">
                            <h2 className="z-10 font_britanica_black text-white text-2xl py-4">
                                SENIOR PARTNER
                            </h2>
                        </div>
                        <div className="relative z-10">
                            <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'senior' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="flex flex-col gap-y-2 ">
                                        {seniorPartners.map((partner, index) => (
                                            <h3 key={index} className="font_britanica_bold text-white text-center text-lg">
                                                {partner.name}
                                            </h3>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

         
                <div
                    onMouseEnter={() => setHoveredSection('partner')}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`relative overflow-hidden w-full cursor-pointer border-t border-gray-400 border-b transition-all duration-300 ease-in-out ${hoveredSection === 'partner' ? 'sm:justify-between' : ''}`}
                >
         
                    <div className={`absolute inset-0 bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'partner' ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'partner' ? 'opacity-100' : 'opacity-0'}`} />
                    
         
                    <div className={`hidden sm:flex flex-row px-6 sm:px-[4vw] items-center py-6 sm:py-[3vw] ${hoveredSection === 'partner' ? 'justify-between' : 'justify-center'}`}>
                        <h2 className={`z-10 font_britanica_black text-white text-2xl sm:text-[clamp(0.4rem,3vw,2.4rem)] py-4 sm:py-[1.6vw] absolute transition-all duration-500 ease-in-out ${hoveredSection === 'partner' ? 'left-6 sm:left-[4vw] -translate-x-0' : 'left-1/2 -translate-x-1/2'}`}>
                            PARTNER
                        </h2>
                        <div className="relative z-10 ml-auto">
                            <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'partner' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="flex flex-col gap-y-2 sm:gap-y-[0.8vw]">
                                        {partners.map((partner, index) => (
                                            <h3 key={index} className="font_britanica_bold text-white text-left text-lg sm:text-[clamp(0.4rem,1.6vw,1.6rem)]">
                                                {partner.name}
                                            </h3>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:hidden flex flex-col px-6 py-2">
                        <div className="flex justify-center">
                            <h2 className="z-10 font_britanica_black text-white text-2xl py-4">
                                PARTNER
                            </h2>
                        </div>
                        <div className="relative z-10">
                            <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'partner' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="flex flex-col gap-y-2 ">
                                        {partners.map((partner, index) => (
                                            <h3 key={index} className="font_britanica_bold text-white text-center text-lg">
                                                {partner.name}
                                            </h3>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        
                <Link
                    href="/member"
                    onMouseEnter={() => setHoveredSection('discover')}
                    onMouseLeave={() => setHoveredSection(null)}
                    className="relative overflow-hidden font_britanica_black text-white flex justify-center text-2xl sm:text-[clamp(0.4rem,3vw,2.4rem)] w-full items-center rounded-b-xl sm:rounded-b-[1.6vw] py-4 sm:py-[1.6vw]"
                >
                    <div className={`absolute inset-0 bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'discover' ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'discover' ? 'opacity-100' : 'opacity-0'}`} />
                    <span className="relative z-10">DISCOVER MORE</span>
                </Link>
            </div>
        </div>
    )
}

export default Team;