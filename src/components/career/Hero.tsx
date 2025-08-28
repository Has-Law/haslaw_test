'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getOpenBatches } from "@/lib/career";
import Image from "next/image";
import hero from "@/assets/career/hero.webp";
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

const Hero = () => {
    const [isHovered, setIsHovered] = useState<string | null>(null);
    const [batches, setBatches] = useState<{ [key: string]: number | null }>({ internship: null, lawyers: null, staff: null });
    const router = useRouter();

    useEffect(() => {
        getOpenBatches().then(list => {
            const map: { [key: string]: number | null } = { internship: null, lawyers: null, staff: null };
            for (const type of ["Internship", "Lawyers", "Staff"]) {
                const found = list.find(b => b.batch_type.toLowerCase() === type.toLowerCase());
                map[type.toLowerCase()] = found ? found.id : null;
            }
            setBatches(map);
        });
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-y-[5vw]">
            <div className="flex flex-col justify-center items-end relative aspect-[1280/739] w-full">
                <Image src={hero} alt="Hero Image" className="w-[65vw] absolute top-0 left-0 z-0" />
                <div className="flex flex-col relative z-30 w-[59vw] transform -translate-x-[10vw] items-end">
                    <div className="flex flex-row items-center gap-x-[1vw]">
                        <h1 className="bg-black h-[0.1vw] w-[3vw]" />
                        <h1 className="text-black font_britanica_black text-[clamp(2vw,2vw,4rem)]">Career</h1>
                    </div>
                    <h1 className="font_lato_bold text-[clamp(4vw,4vw,4vw)] text-[#780014] text-right">Shape the Future of Law With Us</h1>
                    <h2 className="font_britanica_regular text-[clamp(1.8vw,1.9vw,3vw)] text-right text-[#131313]">The world is constantly changing, and so is the law. Join our dynamic team that doesn&apos;t just adapt, but leads the change in Indonesia&apos;s legal landscape through intelligent and innovative solutions.</h2>
                </div>
            </div>

            <div className="relative items-center flex flex-col gap-y-[5vw]">
                <h1 className="font_britanica_bold text-[clamp(5vw,5vw,5vw)]">Who We&apos;re Looking For</h1>
                <div className="flex flex-row justify-center items-center px-[5vw]">
                    <div
                        onMouseEnter={() => setIsHovered('internship')}
                        onMouseLeave={() => setIsHovered(null)}
                        className="relative cursor-pointer"
                    >
                        <div className="relative overflow-hidden border-[0.01vw] border-white">
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

                            <div className="absolute inset-0 flex flex-col items-center justify-end z-30 text-center p-[2vw]">
                                <h2 className={`text-white font_britanica_black text-[clamp(3vw,4vw,4rem)] transition-transform duration-800 ease-in-out ${isHovered === 'internship' ? '-translate-y-2' : 'translate-y-0'}`}>Internship</h2>
                                <div className={`transition-all duration-300 ${isHovered === 'internship' ? 'block' : 'hidden'}`}>
                                    <button
                                        className="group/btn flex items-center gap-2 border-2 border-white text-white px-[1.5vw] py-[1vw] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                        onClick={() => {
                                            if (batches.internship) router.push(`/career/${batches.internship}`);
                                        }}
                                        disabled={!batches.internship}
                                    >
                                        <span className="font_britanica_regular text-[clamp(1.2vw,1.2vw,2rem)] ">Apply now</span>
                                        <svg className="w-[1vw] h-[1vw] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setIsHovered('lawyers')}
                        onMouseLeave={() => setIsHovered(null)}
                        className="relative cursor-pointer"
                    >
                        <div className="relative overflow-hidden border-[0.01vw] border-white">
                            <Image src={internship2} alt="Lawyers Default" className="w-full h-full object-cover" />
                            <Image src={intern2} alt="Internship Hover on Middle" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'internship' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={lawyer2} alt="Lawyers Hover" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'lawyers' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={staff2} alt="Staff Hover on Middle" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'staff' ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="absolute inset-0 flex flex-col items-center justify-end z-30 text-center p-[2vw]">
                                <h2 className={`text-white font_britanica_black text-[clamp(2.5vw,3vw,3rem)] transition-transform duration-800 ease-in-out ${isHovered === 'lawyers' ? '-translate-y-2' : 'translate-y-0'}`}>Lawyers</h2>
                                <div className={`transition-all duration-300 ${isHovered === 'lawyers' ? 'block' : 'hidden'}`}>
                                    <button
                                        className="group/btn flex items-center gap-2 border-2 border-white text-white px-[1.5vw] py-[1vw] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                        onClick={() => {
                                            if (batches.lawyers) router.push(`/career/${batches.lawyers}`);
                                        }}
                                        disabled={!batches.lawyers}
                                    >
                                        <span className="font_britanica_regular text-[clamp(1.2vw,1.2vw,2rem)]">Apply now</span>
                                        <svg className="w-[1vw] h-[1vw] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setIsHovered('staff')}
                        onMouseLeave={() => setIsHovered(null)}
                        className="relative cursor-pointer"
                    >
                        <div className="relative overflow-hidden border-[0.01vw] border-white">
                            <Image src={internship3} alt="Staff Default" className="w-full h-full object-cover" />
                            <Image src={intern3} alt="Internship Hover on Right" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'internship' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={lawyer3} alt="Lawyers Hover on Right" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'lawyers' ? 'opacity-100' : 'opacity-0'}`} />
                            <Image src={staff3} alt="Staff Hover" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isHovered === 'staff' ? 'opacity-100' : 'opacity-0'}`} />

                            <div className="absolute inset-0 flex flex-col items-center justify-end z-30 text-center p-[2vw]">
                                <h2 className={`text-white font_britanica_black text-[clamp(2.5vw,3vw,3rem)] transition-transform duration-800 ease-in-out ${isHovered === 'staff' ? '-translate-y-2' : 'translate-y-0'}`}>Staff</h2>
                                <div className={`transition-all duration-300 ${isHovered === 'staff' ? 'block' : 'hidden'}`}>
                                    <button
                                        className="group/btn flex items-center gap-2 border-2 border-white text-white px-[1.5vw] py-[1vw] rounded-full hover:bg-white hover:text-black transition-all duration-300"
                                        onClick={() => {
                                            if (batches.staff) router.push(`/career/${batches.staff}`);
                                        }}
                                        disabled={!batches.staff}
                                    >
                                        <span className="font_britanica_regular text-[clamp(1.2vw,1.2vw,2rem)]">Apply now</span>
                                        <svg className="w-[1vw] h-[1vw] transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;