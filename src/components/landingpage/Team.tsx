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
        <div className="flex flex-col items-center gap-y-[1vw]  w-[50%] mx-auto">
            <h1 className="font_britanica_black text-[#131313]  text-[clamp(0.5rem,3vw,5rem)] tracking-[0.1rem]">Our Team</h1>
            <div className="flex flex-col items-center w-full">
                
             
                <div
                    onMouseEnter={() => setHoveredSection('senior')}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`relative overflow-hidden w-full cursor-pointer flex flex-row px-[4vw] items-center rounded-t-[2vw] py-[3vw] transition-all duration-300 ease-in-out ${hoveredSection === 'senior' ? 'justify-between' : 'justify-center'}`}
                >
                   
                    <div className={`absolute inset-0 bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'senior' ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'senior' ? 'opacity-100' : 'opacity-0'}`} />

               
                    <h2 className={`z-10 font_britanica_black text-white text-[clamp(0.5rem,2vw,4rem)] py-[2vw] absolute transition-all duration-500 ease-in-out ${hoveredSection === 'senior' ? 'left-[5vw] -translate-x-0' : 'left-1/2 -translate-x-1/2'}`}>
                        SENIOR PARTNER
                    </h2>
                    <div className="relative z-10 ml-auto">
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'senior' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <div className="flex flex-col gap-y-[1vw]">
                                    {seniorPartners.map((partner, index) => (
                                        <h3 key={index} className="font_britanica_bold text-white text-left text-[clamp(0.5rem,1.5vw,2rem)]">
                                            {partner.name}
                                        </h3>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    onMouseEnter={() => setHoveredSection('partner')}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`relative overflow-hidden w-full cursor-pointer flex flex-row px-[4vw] items-center py-[3vw] border-t border-gray-400 border-b transition-all duration-300 ease-in-out ${hoveredSection === 'partner' ? 'justify-between' : 'justify-center'}`}
                >
               
                    <div className={`absolute inset-0 bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'partner' ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`absolute inset-0 bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)] transition-opacity duration-300 ease-in-out ${hoveredSection === 'partner' ? 'opacity-100' : 'opacity-0'}`} />
                    
               
                    <h2 className={`z-10 font_britanica_black text-white text-[clamp(0.5rem,2vw,4rem)] py-[2vw] absolute transition-all duration-500 ease-in-out ${hoveredSection === 'partner' ? 'left-[5vw] -translate-x-0' : 'left-1/2 -translate-x-1/2'}`}>
                        PARTNER
                    </h2>
                    <div className="relative z-10 ml-auto">
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'partner' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <div className="flex flex-col gap-y-[1vw]">
                                    {partners.map((partner, index) => (
                                        <h3 key={index} className="font_britanica_bold text-white text-left text-[clamp(0.5rem,1.5vw,2rem)]">
                                            {partner.name}
                                        </h3>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <Link
                    href="/member"
                    onMouseEnter={() => setHoveredSection('discover')}
                    onMouseLeave={() => setHoveredSection(null)}
                    className="relative overflow-hidden font_britanica_black text-white flex justify-center text-[clamp(0.5rem,2vw,4rem)] w-full items-center rounded-b-[2vw] py-[1vw]"
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