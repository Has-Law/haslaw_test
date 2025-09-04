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
   
    const [isHovered, setIsHovered] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('');

    const firmDropdownRef = useRef<HTMLDivElement>(null);
    const serviceDropdownRef = useRef<HTMLDivElement>(null);
    const memberSubmenuRef = useRef<HTMLDivElement>(null);

   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearch = () => {
        if (!searchQuery.trim()) return;

    };

   
    useEffect(() => {
        gsap.to(firmDropdownRef.current, {
            duration: 0.3,
            opacity: isActive === 'firm' ? 1 : 0,
            scale: isActive === 'firm' ? 1 : 0.95,
            y: isActive === 'firm' ? 0 : -10,
            visibility: isActive === 'firm' ? 'visible' : 'hidden',
            pointerEvents: isActive === 'firm' ? 'auto' : 'none',
            ease: "power2.out"
        });
        
        gsap.to(serviceDropdownRef.current, {
            duration: 0.3,
            opacity: isActive === 'service' ? 1 : 0,
            scale: isActive === 'service' ? 1 : 0.95,
            y: isActive === 'service' ? 0 : -10,
            visibility: isActive === 'service' ? 'visible' : 'hidden',
            pointerEvents: isActive === 'service' ? 'auto' : 'none',
            ease: "power2.out"
        });
    }, [isActive]);

 
    useEffect(() => {
        if (memberSubmenuRef.current) {
            gsap.to(memberSubmenuRef.current, {
                duration: 0.25,
                maxHeight: isHovered === "member" ? "200px" : "0px",
                opacity: isHovered === "member" ? 1 : 0,
                ease: "power2.out"
            });
        }
    }, [isHovered]);

    return (
      <nav className="flex flex-row bg-white w-full justify-center items-center pt-[1vw] px-[5vw] sticky top-0 z-50 shadow-md">
          
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

           
            <div className="lg:hidden flex items-center justify-between w-full pb-[1vw] border-b-[0.2vw] border-[#A0001B]">
               
                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -ml-2">
                    <svg className="w-8 h-8 text-[#5E0503]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <Link href="/" className="cursor-pointer hover:scale-105 transition-transform duration-200">
                    <Image src={logo} alt="Logo" className="w-[100px] h-auto" /> 
                </Link>

                <button className="p-2 -mr-2">
                    <Image src={search} alt="Search Icon" className="w-8 h-8 text-[#5E0503]" />
                </button>
            </div>

     
            <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col p-6">
                    {/* Close Button */}
                    <button onClick={() => setIsMobileMenuOpen(false)} className="self-end p-2 text-[#A0001B] hover:text-[#780014] transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                
                    <div className="flex flex-col gap-y-4 mt-6 font_britanica_regular text-xs text-[#5E0503]">
                        <Link href="/" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/member" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Members</Link>
                        <Link href="/achievements" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Achievements</Link>
                        <Link href="/service" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
                        <Link href="/pro-bono" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pro Bono</Link>
                        <Link href="/news" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>News & Insights</Link>
                        <Link href="/career" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                        <Link href="/contact" className="hover:text-[#A0001B] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                    </div>
                </div>
            </div>

          
            <div className="hidden lg:flex flex-row w-[90vw] items-center justify-center gap-x-[8vw] border-b-[0.2vw] border-[#A0001B] pb-[1vw]">
                <Link href="/" className="cursor-pointer hover:scale-105 transition-transform duration-200 w-[5vw]">
                    <Image src={logo} alt="Logo" />
                </Link>
                
                <div className="flex flex-row items-center font_britanica_regular text-[clamp(1.2vw,1.2vw,4rem)] gap-x-[3vw]">
                
                    <Link 
                        href="/" 
                        className="relative hover:text-[#A0001B] cursor-pointer transition-all duration-300 ease-out group"
                    >
                        <span className="relative z-10">Home</span>
                        <div className="transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0 absolute bottom-0 h-[0.1vw] bg-[#A0001B]"></div>
                    </Link>

                
                    <div className="relative">
                        <div 
                            className="flex flex-row items-center cursor-pointer w-[7.5vw] transition-all duration-300 ease-out group relative"
                            onClick={() => setIsActive(isActive === "firm" ? null : "firm")}
                        >
                            <h2 className="text-nowrap group-hover:text-[#A0001B] transition-colors duration-300">Our Firm</h2>
                            <Image 
                                src={arrow} 
                                alt="Arrow Icon" 
                                className={`w-[2.5vw] pb-[0.2vw] transition-all duration-300 group-hover:scale-110 ${isActive === 'firm' ? 'rotate-180' : 'rotate-0'}`} 
                            />
                            <div className="transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0 absolute bottom-0 h-[0.1vw] bg-[#A0001B]"></div>
                        </div>
                        
                        <div 
                            ref={firmDropdownRef} 
                            className="absolute top-full left-1/6 flex flex-col mx-auto bg-white rounded-lg border-2 border-[#A0001B]/20 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden"
                            style={{ minWidth: '150px' }}
                        >
                            <Link 
                                href="/about" 
                                className="hover:text-white w-full text-center px-[1vw] py-[0.3vw] text-[#A0001B] text-nowrap hover:bg-[#A0001B]  border-b-[0.01vw] border-[#A0001B]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-sm"
                            >
                                About Us
                            </Link>
                            
                            <div
                                className="relative"
                                onMouseEnter={() => setIsHovered("member")}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                <Link 
                                    href="/member" 
                                    className="block transition-all duration-300 text-center px-[1vw] py-[0.3vw] text-black hover:bg-[#A0001B] hover:text-white border-b-[0.01vw] border-[#A0001B]/20  hover:scale-[1.02] hover:shadow-sm"
                                >
                                    Member
                                </Link>
                                
                                <div 
                                    ref={memberSubmenuRef}
                                    className="overflow-hidden bg-[#f8f9fa] border-t border-[#A0001B]/10"
                                    style={{ maxHeight: '0px', opacity: 0 }}
                                >
                                    <Link 
                                        href="/member" 
                                        className="block transition-all duration-300 text-center py-[0.2vw] text-black hover:bg-[#A0001B] hover:text-white  hover:scale-[1.02] border-b-[0.01vw] border-[#A0001B]/10"
                                    >
                                        Agus Askin
                                    </Link>
                                    <Link 
                                        href="/member" 
                                        className="block transition-all duration-300 text-center py-[0.2vw] text-black hover:bg-[#A0001B] hover:text-white  hover:scale-[1.02]"
                                    >
                                        Others
                                    </Link>
                                </div>
                            </div>
                            
                            <Link 
                                href="/achievements" 
                                className="block transition-all duration-300 text-center px-[1vw] py-[0.3vw] text-black hover:bg-[#A0001B] hover:text-white  hover:scale-[1.02] hover:shadow-sm"
                            >
                                Achievements
                            </Link>
                        </div>
                    </div>

               
                    <div className="relative">
                        <div 
                            className="flex flex-row items-center w-[6.5vw] cursor-pointer transition-all duration-300 ease-out group relative"
                            onClick={() => setIsActive(isActive === "service" ? null : "service")}
                        >
                            <h2 className="group-hover:text-[#A0001B] transition-colors duration-300">Service</h2>
                            <Image 
                                src={arrow} 
                                alt="Arrow Icon" 
                                className={`w-[2.5vw] pb-[0.2vw] transition-all duration-300 group-hover:scale-110 ${isActive === 'service' ? 'rotate-180' : 'rotate-0'}`} 
                            />
                            <div className="transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0 absolute bottom-0 h-[0.1vw] bg-[#A0001B]"></div>
                        </div>
                        
                        <div
                            ref={serviceDropdownRef}
                            className="absolute top-full left-1/5 flex flex-col mx-auto bg-white rounded-lg border-2 border-[#A0001B]/20 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden"
                            style={{ minWidth: '150px' }}
                        >
                            <Link 
                                href="/service" 
                                className="text-center px-[1vw] py-[0.3vw] hover:text-white text-black hover:bg-[#A0001B]  transition-all duration-300 text-nowrap hover:scale-[1.02] hover:shadow-sm border-b-[0.01vw] border-[#A0001B]/20"
                            >
                                Our Service
                            </Link>
                            <Link 
                                href="/pro-bono" 
                                className="text-center px-[1vw] py-[0.3vw] hover:text-white text-black hover:bg-[#A0001B]  transition-all duration-300 text-nowrap hover:scale-[1.02] hover:shadow-sm"
                            >
                                Pro Bono
                            </Link>
                        </div>
                    </div>

                   
                    <Link 
                        href="/news" 
                        className="hover:text-[#A0001B] text-nowrap transition-all duration-300 ease-out group relative"
                    >
                        <span className="relative z-10">News & Insight</span>
                        <div className="transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0 absolute bottom-0 h-[0.1vw] bg-[#A0001B]"></div>
                    </Link>
                    
                    <Link 
                        href="/career" 
                        className="hover:text-[#A0001B] transition-all duration-300 ease-out group relative"
                    >
                        <span className="relative z-10">Career</span>
                        <div className="transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0 absolute bottom-0 h-[0.1vw] bg-[#A0001B]"></div>
                    </Link>
                    
                    <Link 
                        href="/contact" 
                        className="hover:text-[#A0001B] text-nowrap transition-all duration-300 ease-out group relative"
                    >
                        <span className="relative z-10">Contact Us</span>
                        <div className="transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:origin-left right-0 origin-right w-0 absolute bottom-0 h-[0.1vw] bg-[#A0001B]"></div>
                    </Link>
                </div>

               
                <div className="relative flex items-center group">
                    <input 
                        type="text" 
                        className="border-[0.15vw] rounded-full placeholder:text-[#5E0503]/58 font_britanica_regular w-[12vw] pl-[1vw] pr-[3vw] py-[0.2vw] text-[clamp(1.2vw,1.2vw,4rem)] outline-none transition-all duration-300 focus:border-[#A0001B] focus:shadow-lg focus:scale-105" 
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
                        className="absolute top-1/2 -translate-y-1/2 right-[0.5vw] w-[2vw] cursor-pointer transition-all duration-300 hover:scale-110 hover:filter hover:brightness-75"
                        onClick={handleSearch} 
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar