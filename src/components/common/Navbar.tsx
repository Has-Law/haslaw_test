'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"
import arrow from "@/assets/arrow.png"
import search from "@/assets/search.png"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
const Navbar = () => {
    const [isActive, setIsActive] = useState<string | null>(null)
    const [isHoverd, setIsHovered] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('');
    const firmDropdownRef = useRef<HTMLDivElement>(null);
    const serviceDropdownRef = useRef<HTMLDivElement>(null);

    const handleSearch = () => {
        if (!searchQuery.trim()) return;
        console.log("Mencari untuk:", searchQuery);
    };

    useEffect(() => {
        gsap.to(firmDropdownRef.current, {
            duration: 0.1,
            opacity: isActive === 'firm' ? 1 : 0,
            scale: isActive === 'firm' ? 1 : 0.95,
            y: isActive === 'firm' ? 0 : -10,
            visibility: isActive === 'firm' ? 'visible' : 'hidden',
            pointerEvents: isActive === 'firm' ? 'auto' : 'none',
            ease: "power2.out"
        });
        gsap.to(serviceDropdownRef.current, {
            duration: 0.1,
            opacity: isActive === 'service' ? 1 : 0,
            scale: isActive === 'service' ? 1 : 0.95,
            y: isActive === 'service' ? 0 : -10,
            visibility: isActive === 'service' ? 'visible' : 'hidden',
            pointerEvents: isActive === 'service' ? 'auto' : 'none',
            ease: "power2.out"
        });
    }, [isActive]);

    return (
        <nav className="flex  flex-row bg-white w-full justify-center items-center pt-[2vw] px-[5vw] relative z-50 relative ">
            <div className="w-[90vw] flex flex-row items-center justify-center gap-x-[8vw] border-b-[0.2vw] border-[#A0001B] pb-[1vw] ">
            <Link href="/" className=" cursor-pointer" ><Image src={logo} alt="Logo" />
            </Link>
            <div className="flex flex-row items-center font_britanica_regular text-[clamp(1.5vw,1.5vw,4rem)]  hover:text-[#A0001B] gap-x-[3vw]">
                <Link href="/" className="hover:text-[#A0001B] cursor-pointer  hover:border-b-[0.1vw] hover:border-[#A0001B] leading-none transition-all duration-100 ease-in-out ">Home</Link>
                <div className="relative">
                    <div className="flex flex-row items-center cursor-pointer w-[7.5vw] hover:border-b-[0.1vw] hover:border-[#A0001B] leading-none transition-all duration-100 ease-in-out"
                        onClick={() => setIsActive(isActive === "firm" ? null : "firm")}
                    >
                        <h2 className="text-nowrap">Our Firm</h2>
                        <Image src={arrow} alt="Arrow Icon" className={`w-[2.5vw] pb-[0.2vw] transition-transform duration-300 ${isActive === 'firm' ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                    
                        <div ref={firmDropdownRef} className="absolute top-full left-1/6  flex flex-col  mx-auto bg-white rounded-lg border-2 transition-all duration-300 ease-in-out">
                            <Link href="/about" className="hover:text-white w-full text-center  px-[1vw] text-[#A0001B] text-nowrap hover:bg-[#A0001B] text-[clamp(1.5vw,1.5vw,4rem)] border-b-[0.01vw] border-[#A0001B]/20 transition-colors duration-300">About Us</Link>
                            <div
                                className="relative"
                                onMouseEnter={() => setIsHovered("member")}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                <Link href="/member" className="block transition-colors duration-300 text-center px-[1vw] text-black hover:bg-[#A0001B] hover:text-white border-b-[0.01vw] border-[#A0001B]/20 text-[clamp(1.5vw,1.5vw,4rem)]">
                                    Member
                                </Link>
                                {isHoverd === "member" && (
                                    <div className="flex flex-col items-center ">
                                        <Link href="/member" className="block transition-colors duration-300 text-center text-black hover:bg-[#A0001B] hover:text-white w-full border-b-[0.01vw] border-[#A0001B]/20 text-[clamp(1.5vw,1.5vw,4rem)]">Dzaky</Link>
                                        <Link href="/member" className="block transition-colors duration-300 text-center  text-black hover:bg-[#A0001B] hover:text-white  w-full border-b-[0.01vw] border-[#A0001B]/20 text-[clamp(1.5vw,1.5vw,4rem)]">Others</Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/achievements" className="block transition-colors duration-300 text-center px-[1vw] text-black hover:bg-[#A0001B] hover:text-white ">
                                Achievements
                            </Link>
                        </div>

                    

                </div>
                <div className="relative">
                    <div className="flex flex-row items-center w-[6.5vw] cursor-pointer hover:border-b-[0.1vw] hover:border-[#A0001B] leading-none transition-all duration-100 ease-in-out"
                         onClick={() => setIsActive(isActive === "service" ? null : "service")}
                    >
                        <h2 className="hover:text-[#A0001B] transition-colors duration-300">Service</h2>
                        <Image src={arrow} alt="Arrow Icon" className={`w-[2.5vw] pb-[0.2vw] transition-transform duration-300 ${isActive === 'service' ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                    <div
                        ref={serviceDropdownRef}
                        className="absolute top-full left-1/5 flex flex-col  mx-auto bg-white rounded-lg border-2 transition-all duration-300 ease-in-out"
                    >
                        <Link href="/service" className="text-center px-[1vw] hover:text-white text-black hover:bg-[#A0001B] text-[clamp(1.5vw,1.5vw,4rem)] transition-colors duration-300 text-nowrap">Our Service</Link>
                        <Link href="/pro-bono" className="text-center px-[1vw] hover:text-white text-black hover:bg-[#A0001B] text-[clamp(1.5vw,1.5vw,4rem)] transition-colors duration-300 text-nowrap">Pro Bono</Link>
                    </div>
                </div>
                <Link href="/news" className="hover:text-[#A0001B] text-nowrap hover:border-b-[0.1vw] hover:border-[#A0001B] leading-none transition-all duration-100 ease-in-out">News & Insight</Link>
                <Link href="/career" className=" hover:text-[#A0001B] hover:border-b-[0.1vw] hover:border-[#A0001B] leading-none transition-all duration-100 ease-in-out">Career</Link>
                <Link href="/contact" className="hover:text-[#A0001B] text-nowrap hover:border-b-[0.1vw] hover:border-[#A0001B] leading-none transition-all duration-100 ease-in-out">Contact Us</Link>
            </div>
            <div className="relative flex items-center">
                <input 
                    type="text" 
                    className="border-[0.15vw] rounded-full placeholder:text-[#5E0503]/58 font_britanica_regular w-[12vw] pl-[1vw] pr-[3vw] py-[0.2vw] text-[clamp(1.5vw,1.5vw,4rem)] pr-2 outline-none" 
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                />
                <Image 
                    src={search} 
                    alt="Search Icon" 
                    className="absolute top-1/2 -translate-y-1/2 right-[0.5vw] w-[2vw] cursor-pointer"
                    onClick={handleSearch} 
                />
            </div>
            </div>
        </nav>
    )
}

export default Navbar