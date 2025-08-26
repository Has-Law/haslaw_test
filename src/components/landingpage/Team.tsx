'use client'

import { useState } from "react";

const Team = () => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    const seniorPartners = [
        { name: "Henricus Herikes, S.H." },
        { name: "Alexander Frans, S.H." },
        { name: "Muzammi Merah Hakim, S.H., M.H." },
    ];

    const partners = [
        { name: "John Doe, S.H." },
        { name: "Jane Smith, S.H." },
    ];

    return (
        <div className="flex flex-col items-center gap-y-[2vw] mt-[4vw] w-[80%] mx-auto">
            <h1 className="font_lato_bold text-[#131313] text-[clamp(0.5rem,5vw,5rem)]">Our Team</h1>
            <div className="flex flex-col items-center w-full">
                <div
                    onMouseEnter={() => setHoveredSection('senior')}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`w-full cursor-pointer flex flex-row px-[5vw] items-center rounded-t-[2vw] py-[5vw]   transition-all duration-300 ease-in-out ${hoveredSection === 'senior' ? 'justify-between bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)]' : 'justify-center bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)]'}`}
                >
                    <h2 className={`font_britanica_black text-white text-[clamp(0.5rem,4vw,4rem)] py-[2vw] absolute transition-all duration-500 ease-in-out ${hoveredSection === 'senior' ? 'left-[15vw] -translate-x-0' : 'left-1/2 -translate-x-1/2'}`}>
                        SENIOR PARTNER
                    </h2>   

                    <div className="ml-auto">
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'senior' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <div className="flex flex-col gap-y-[1vw]">
                                    {seniorPartners.map((partner, index) => (
                                        <h3 key={index} className="font_britanica_bold text-white text-left text-[clamp(0.5rem,2vw,2rem)]">
                                            {partner.name}
                                        </h3>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    onMouseEnter={() => setHoveredSection("partner")}
                    onMouseLeave={() => setHoveredSection(null)}
                    className={`w-full cursor-pointer flex flex-row px-[5vw] items-center  py-[5vw]   transition-all duration-300 ease-in-out ${hoveredSection === 'partner' ? 'justify-between bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)] ' : 'justify-center bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] '}`}
                >
                    <h2 className={`font_britanica_black text-white text-[clamp(0.5rem,4vw,4rem)] absolute transition-all duration-500 ease-in-out ${hoveredSection === 'partner' ? 'left-[15vw] -translate-x-0' : 'left-1/2 -translate-x-1/2'}`}>
                        PARTNER
                    </h2>
                    
                    <div className="ml-auto">
                        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${hoveredSection === 'partner' ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className={`${hoveredSection === 'partner' ? 'overflow-hidden' : 'hidden'}`}>
                                <div className="overflow-hidden">
                                    {partners.map((partner, index) => (
                                        <h3 key={index} className="font_britanica_bold text-white text-left text-[clamp(0.5rem,2vw,2rem)]">
                                            {partner.name}
                                        </h3>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <h2 
                onMouseEnter={() => setHoveredSection('discover')}
                onMouseLeave={() => setHoveredSection(null)}
                className={`font_britanica_black text-white flex justify-center text-[clamp(0.5rem,4vw,4rem)] bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)] ${hoveredSection === 'discover' ? 'bg-[linear-gradient(270deg,_#A0001B_0%,_#3A000A_100%)]' : 'bg-[linear-gradient(90deg,_#A0001B_0%,_#3A000A_100%)]'} w-full items-center rounded-b-[2vw] py-[2vw]`}>
                    DISCOVER MORE
                </h2>
            </div>
        </div>
    )
}

export default Team;