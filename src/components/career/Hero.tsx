'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAllBatches, type BatchListItem } from "@/lib/career";
import Image from "next/image";
import hero from "@/assets/career/hero.webp";
import heroMobile from "@/assets/career/hero-mobile.png";
import internship1 from "@/assets/career/image/internship-kiri.webp";
import internship2 from "@/assets/career/image/internship-tengah.webp";
import internship3 from "@/assets/career/image/internship-kanan.webp";
import intern1 from "@/assets/career/image/intern-kiri.webp";
import intern2 from "@/assets/career/image/intern-tengah.webp";
import intern3 from "@/assets/career/image/intern-kanan.webp";
import lawyer1 from "@/assets/career/image/lawyers-kiri.webp";
import lawyer2 from "@/assets/career/image/lawyers-tengah.webp";
import lawyer3 from "@/assets/career/image/lawyers-kanan.webp";
import staff1 from "@/assets/career/image/staff-kiri.webp";
import staff2 from "@/assets/career/image/staff-tengah.webp";
import staff3 from "@/assets/career/image/staff-kanan.webp";
import internshipfull from "@/assets/career/image/internship-full.jpg";
import lawyerfull from "@/assets/career/image/lawyers-full.jpg";
import stafffull from "@/assets/career/image/staff-full.jpg";

const Hero = () => {
    const [isHovered, setIsHovered] = useState<string | null>(null);
    const [batches, setBatches] = useState<{ [key: string]: { id: number | null; status: string | null } }>({ 
        internship: { id: null, status: null }, 
        lawyers: { id: null, status: null }, 
        staff: { id: null, status: null } 
    });
    const router = useRouter();

    useEffect(() => {
        getAllBatches().then((list: BatchListItem[]) => {
            const map: { [key: string]: { id: number | null; status: string | null } } = { 
                internship: { id: null, status: null }, 
                lawyers: { id: null, status: null }, 
                staff: { id: null, status: null } 
            };
            for (const type of ["Internship", "Lawyers", "Staff"]) {
                const found = list.find((b: BatchListItem) => b.batch_type.toLowerCase() === type.toLowerCase());
                map[type.toLowerCase()] = found ? { id: found.id, status: found.status } : { id: null, status: null };
            }
            setBatches(map);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-y-[clamp(3rem,5vw,4rem)] pb-[clamp(1rem,2vw,2rem)]">
            {/* Hero Section */}
            <div className="flex flex-col justify-center items-end relative w-full">
                {/* Desktop Hero */}
                <div className="hidden bg-[#F5F5F5] sm:flex flex-col justify-center items-end relative aspect-[1280/700] w-full">
                    <Image src={hero} alt="Hero Image" className="w-[clamp(50vw,60vw,65vw)] absolute top-0 left-0 z-0" />
                    <div className="flex flex-col relative z-30 w-[clamp(45vw,55vw,59vw)] transform -translate-x-[clamp(6vw,8vw,10vw)] -translate-y-[clamp(3vw,4vw,5vw)] items-end">
                        <div className="flex flex-row items-center gap-x-[clamp(0.5vw,1vw,1.5vw)]">
                            <h1 className="bg-black h-[clamp(0.05vw,0.1vw,0.2vw)] w-[clamp(2vw,3vw,4vw)]" />
                            <h1 className="text-black font_britanica_black text-[clamp(1rem,1.2vw,2rem)]">Career</h1>
                        </div>
                        <h1 className="font_lato_bold text-[clamp(1.8rem,2.5vw,3rem)] text-[#780014] text-right leading-tight">Shape the Future of Law With Us</h1>
                        <h2 className="font_britanica_regular text-[clamp(0.8rem,1.1vw,1.5rem)] max-w-2xl text-right text-[#131313] leading-relaxed">The world is constantly changing, and so is the law. Join our dynamic team that doesn&apos;t just adapt, but leads the change in Indonesia&apos;s legal landscape through intelligent and innovative solutions.</h2>
                    </div>
                </div>

                {/* Mobile Hero - Layout matching the image */}
                <div className="block sm:hidden w-full relative">
                    <div className="relative aspect-[9/16] w-full overflow-hidden">
                        <Image src={heroMobile} alt="Hero Mobile" className="w-[60vw] h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t  to-[#F5F5F5]"></div>
                        
                  
                        <div className="absolute inset-0 flex flex-col justify-center items-end p-[clamp(1.5rem,6vw,2rem)]">
                            <div className="w-full max-w-[85%] text-right text-white">
                                {/* Career label */}
                                <div className="flex flex-row items-center justify-end gap-x-[clamp(0.5rem,2vw,1rem)] mb-[clamp(1rem,4vw,1.5rem)]">
                                    <div className="bg-black h-[clamp(0.1rem,0.3vw,0.2rem)] w-[clamp(2rem,8vw,3rem)]" />
                                    <h1 className="font_britanica_black text-black text-[clamp(1rem,4vw,1.5rem)]">Careers</h1>
                                </div>
                                
                                {/* Main title */}
                                <h1 className="font_lato_bold text-[clamp(2.2rem,8vw,3.2rem)] text-[#780014] leading-tight mb-[clamp(1rem,4vw,1.5rem)]">
                                    Shape the Future of Law With Us
                                </h1>
                                
                                {/* Description */}
                                <p className="font_britanica_regular text-black text-[clamp(1rem,3.5vw,1.1rem)] leading-relaxed opacity-95 max-w-[60%] ml-auto">
                                    The world is constantly changing, and so is the law. Join our dynamic team that doesn&apos;t just adapt, but leads the change in Indonesia&apos;s legal landscape through intelligent and innovative solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Who We're Looking For Section */}
            <div className="relative items-center flex flex-col gap-y-[clamp(1.5rem,2vw,2rem)] pt-[clamp(1rem,2vw,2rem)] w-full px-[clamp(1rem,2vw,3rem)]">
                <h1 className="font_britanica_bold bg-gradient-to-t from-black via-[#860016] to-[#F20028] bg-clip-text text-transparent text-[clamp(1.8rem,3vw,5rem)] text-center">Who We&apos;re Looking For</h1>
                
                {/* Desktop Layout */}
                <div className="hidden sm:flex flex-row justify-center items-center ">
                    <div
                        onMouseEnter={() => setIsHovered('internship')}
                        onMouseLeave={() => setIsHovered(null)}
                        className="relative  flex-1"
                    >
                        <div className="relative overflow-hidden border-[clamp(0.05vw,0.1vw,0.2vw)] border-white ">
                            <Image src={internship1} alt="Internship Default" className="w-full h-full object-cover" />
                            <Image
                                src={intern1}
                                alt="Internship Hover"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'internship' ? 'opacity-100' : 'opacity-0'}`}
                            />
                            <Image
                                src={lawyer1}
                                alt="Lawyers Hover on Left"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'lawyers' ? 'opacity-100' : 'opacity-0'}`}
                            />
                            <Image
                                src={staff1}
                                alt="Staff Hover on Left"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'staff' ? 'opacity-100' : 'opacity-0'}`}
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-end z-30 text-center p-[clamp(1rem,2vw,2rem)]">
                                <h2 className={`text-white font_britanica_black text-[clamp(1.5rem,3vw,2.5rem)] transition-transform duration-800 ease-in-out ${isHovered === 'internship' ? '-translate-y-2' : 'translate-y-0'}`}>Internship</h2>
                                <div className={`transition-all duration-300 ${isHovered === 'internship' ? 'block' : 'hidden'}`}>
                                    {batches.internship.id && batches.internship.status === 'Open' ? (
                                        <button
                                            className="group/btn flex cursor-pointer items-center gap-2 border-2 border-white text-white px-[clamp(0.8rem,1.5vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                            onClick={() => router.push(`/career/${batches.internship.id}`)}
                                        >
                                            <span className="font_britanica_regular text-[clamp(0.8rem,1.2vw,1.2rem)]">Apply now</span>
                                            <svg className="w-[clamp(0.8rem,1vw,1rem)] h-[clamp(0.8rem,1vw,1rem)] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>
                                    ) : (
                                        <div className="border-2 border-gray-400 text-gray-400 px-[clamp(0.8rem,1.5vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)] rounded-full">
                                            <span className="font_britanica_regular text-[clamp(0.8rem,1.2vw,1.2rem)]">Batch Closed</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setIsHovered('lawyers')}
                        onMouseLeave={() => setIsHovered(null)}
                        className="relative  flex-1"
                    >
                        <div className="relative overflow-hidden border-[clamp(0.05vw,0.1vw,0.2vw)] border-white ">
                            <Image src={internship2} alt="Lawyers Default" className="w-full h-full object-cover" />
                            <Image src={intern2} alt="Internship Hover on Middle" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'internship' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={lawyer2} alt="Lawyers Hover" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'lawyers' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={staff2} alt="Staff Hover on Middle" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'staff' ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="absolute inset-0 flex flex-col items-center justify-end z-30 text-center p-[clamp(1rem,2vw,2rem)]">
                                <h2 className={`text-white font_britanica_black text-[clamp(1.3rem,2.5vw,2.2rem)] transition-transform duration-800 ease-in-out ${isHovered === 'lawyers' ? '-translate-y-2' : 'translate-y-0'}`}>Lawyers</h2>
                                <div className={`transition-all duration-300 ${isHovered === 'lawyers' ? 'block' : 'hidden'}`}>
                                    {batches.lawyers.id && batches.lawyers.status === 'Open' ? (
                                        <button
                                            className="group/btn cursor-pointer flex items-center gap-2 border-2 border-white text-white px-[clamp(0.8rem,1.5vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                            onClick={() => router.push(`/career/${batches.lawyers.id}`)}
                                        >
                                            <span className="font_britanica_regular text-[clamp(0.8rem,1.2vw,1.2rem)]">Apply now</span>
                                            <svg className="w-[clamp(0.8rem,1vw,1rem)] h-[clamp(0.8rem,1vw,1rem)] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>
                                    ) : (
                                        <div className="border-2 border-gray-400 text-gray-400 px-[clamp(0.8rem,1.5vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)] rounded-full">
                                            <span className="font_britanica_regular text-[clamp(0.8rem,1.2vw,1.2rem)]">Batch Closed</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setIsHovered('staff')}
                        onMouseLeave={() => setIsHovered(null)}
                        className="relative  flex-1"
                    >
                        <div className="relative overflow-hidden border-[clamp(0.05vw,0.1vw,0.2vw)] border-white ">
                            <Image src={internship3} alt="Staff Default" className="w-full h-full object-cover" />
                            <Image src={intern3} alt="Internship Hover on Right" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'internship' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={lawyer3} alt="Lawyers Hover on Right" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'lawyers' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={staff3} alt="Staff Hover" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'staff' ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="absolute inset-0 flex flex-col items-center justify-end z-30 text-center p-[clamp(1rem,2vw,2rem)]">
                                <h2 className={`text-white font_britanica_black text-[clamp(1.3rem,2.5vw,2.2rem)] transition-transform duration-800 ease-in-out ${isHovered === 'staff' ? '-translate-y-2' : 'translate-y-0'}`}>Staff</h2>
                                <div className={`transition-all duration-300 ${isHovered === 'staff' ? 'block' : 'hidden'}`}>
                                    {batches.staff.id && batches.staff.status === 'Open' ? (
                                        <button
                                            className="group/btn cursor-pointer flex items-center gap-2 border-2 border-white text-white px-[clamp(0.8rem,1.5vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                            onClick={() => router.push(`/career/${batches.staff.id}`)}
                                        >
                                            <span className="font_britanica_regular text-[clamp(0.8rem,1.2vw,1.2rem)]">Apply now</span>
                                            <svg className="w-[clamp(0.8rem,1vw,1rem)] h-[clamp(0.8rem,1vw,1rem)] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </button>
                                    ) : (
                                        <div className="border-2 border-gray-400 text-gray-400 px-[clamp(0.8rem,1.5vw,1.5rem)] py-[clamp(0.5rem,1vw,1rem)] rounded-full">
                                            <span className="font_britanica_regular text-[clamp(0.8rem,1.2vw,1.2rem)]">Batch Closed</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Full Width Cards */}
                <div className="block sm:hidden w-full space-y-[clamp(1.5rem,6vw,2rem)]">
                    {/* Internship Mobile */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                        <Image src={internshipfull} alt="Internship" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-[clamp(1.2rem,5vw,1.5rem)]">
                            <h2 className="text-white font_britanica_black text-[clamp(1.8rem,7vw,2.5rem)] mb-[clamp(0.8rem,3vw,1rem)]">Internship</h2>
                            {batches.internship.id && batches.internship.status === 'Open' ? (
                                <button
                                    className="group/btn flex items-center gap-2 border-2 border-white text-white px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.6rem,2.5vw,1rem)] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                    onClick={() => router.push(`/career/${batches.internship.id}`)}
                                >
                                    <span className="font_britanica_regular text-[clamp(0.9rem,3.5vw,1.2rem)]">Apply now</span>
                                    <svg className="w-[clamp(1rem,4vw,1.2rem)] h-[clamp(1rem,4vw,1.2rem)] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            ) : (
                                <div className="border-2 border-gray-400 text-gray-400 px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.6rem,2.5vw,1rem)] rounded-full">
                                    <span className="font_britanica_regular text-[clamp(0.9rem,3.5vw,1.2rem)]">Batch Closed</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Lawyers Mobile */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                        <Image src={lawyerfull} alt="Lawyers" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-[clamp(1.2rem,5vw,1.5rem)]">
                            <h2 className="text-white font_britanica_black text-[clamp(1.8rem,7vw,2.5rem)] mb-[clamp(0.8rem,3vw,1rem)]">Lawyers</h2>
                            {batches.lawyers.id && batches.lawyers.status === 'Open' ? (
                                <button
                                    className="group/btn flex items-center gap-2 border-2 border-white text-white px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.6rem,2.5vw,1rem)] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                    onClick={() => router.push(`/career/${batches.lawyers.id}`)}
                                >
                                    <span className="font_britanica_regular text-[clamp(0.9rem,3.5vw,1.2rem)]">Apply now</span>
                                    <svg className="w-[clamp(1rem,4vw,1.2rem)] h-[clamp(1rem,4vw,1.2rem)] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            ) : (
                                <div className="border-2 border-gray-400 text-gray-400 px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.6rem,2.5vw,1rem)] rounded-full">
                                    <span className="font_britanica_regular text-[clamp(0.9rem,3.5vw,1.2rem)]">Batch Closed</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Staff Mobile */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                        <Image src={stafffull} alt="Staff" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-[clamp(1.2rem,5vw,1.5rem)]">
                            <h2 className="text-white font_britanica_black text-[clamp(1.8rem,7vw,2.5rem)] mb-[clamp(0.8rem,3vw,1rem)]">Staff</h2>
                            {batches.staff.id && batches.staff.status === 'Open' ? (
                                <button
                                    className="group/btn flex items-center gap-2 border-2 border-white text-white px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.6rem,2.5vw,1rem)] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                    onClick={() => router.push(`/career/${batches.staff.id}`)}
                                >
                                    <span className="font_britanica_regular text-[clamp(0.9rem,3.5vw,1.2rem)]">Apply now</span>
                                    <svg className="w-[clamp(1rem,4vw,1.2rem)] h-[clamp(1rem,4vw,1.2rem)] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </button>
                            ) : (
                                <div className="border-2 border-gray-400 text-gray-400 px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.6rem,2.5vw,1rem)] rounded-full">
                                    <span className="font_britanica_regular text-[clamp(0.9rem,3.5vw,1.2rem)]">Batch Closed</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;