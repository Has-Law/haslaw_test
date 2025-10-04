'use client';

import Image from "next/image";
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import type { Member, ApiResponse } from "@/lib/members";

import bg from "@/assets/member/bg-detail.webp";
import mail from "@/assets/member/icon/mail.png";
import phone from "@/assets/member/icon/phone.png";
import linkedin from "@/assets/member/icon/linkedin.png";
import download from "@/assets/member/icon/download.png";
import bgMobile from "@/assets/member/bg-mobile.png";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetcher = async (url: string): Promise<Member> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Gagal mengambil data anggota.');
    const result: ApiResponse<Member> = await res.json();
    return result.data;
};

export default function MemberDetailClient() {
    const params = useParams();
    const id = params.id as string;

    const { data: member, error, isLoading } = useSWR(
        id ? `${API_BASE_URL}/api/v1/members/${id}` : null,
        fetcher
    );

    if (isLoading) return <div className="text-center py-40">Loading...</div>;
    if (error || !member) return <div className="text-center py-40">Failed to load member details.</div>;

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="relative w-full h-[clamp(25rem,200vh,100vh)] overflow-hidden">
                <div className="absolute inset-0">
                    <Image src={bg} alt="bg" className="hidden sm:block w-full h-full object-cover" />
                    <Image src={bgMobile} alt="bg mobile" className="block sm:hidden w-full h-full object-cover" />
                    <div className="absolute inset-0 "></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center px-[clamp(1rem,4vw,5rem)] z-10">
                    <div className="flex flex-col sm:flex-row items-center gap-x-[clamp(1rem,3vw,4rem)] gap-y-[clamp(1.5rem,6vw,0rem)] w-full max-w-[80vw]">
                        <Image src={`${API_BASE_URL}/${member.detail_image}`} width={500} height={500} alt="Member Photo" className="w-[clamp(12rem,50vw,25rem)] sm:w-[clamp(19rem,37vw,38rem)] h-auto rounded-2xl object-cover flex-shrink-0" />
                        <div className="flex flex-col justify-center text-white flex-1 text-center sm:text-left">
                            <h1 className="font_britanica_heavy text-[clamp(1.8rem,8vw,4.5rem)] sm:text-[clamp(2rem,4.5vw,5rem)] leading-tight mb-[clamp(0.5rem,2vw,1rem)]">{member.full_name}</h1>
                            <p className="font_britanica_regular text-[clamp(1rem,4.5vw,1.8rem)] sm:text-[clamp(1.2rem,2.2vw,2.2rem)] mb-[clamp(1.5rem,6vw,3rem)] opacity-90">{member.title_position}</p>
                            <div className="flex flex-col gap-y-[clamp(0.8rem,3vw,1.5rem)] sm:gap-y-[clamp(1rem,1.5vw,2rem)]">
                                <div className="flex flex-col gap-y-[clamp(0.5rem,2vw,0rem)] gap-x-[clamp(2rem,4vw,6rem)] items-center sm:items-start">
                                    <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={mail} alt="mail icon" className="w-[clamp(1.2rem,4vw,2rem)] sm:w-[clamp(1.5rem,2.2vw,2.5rem)] h-[clamp(1.2rem,4vw,2rem)] sm:h-[clamp(1.5rem,2.2vw,2.5rem)]" /><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@has-law.com`} target="_blank" rel="noopener noreferrer" className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] sm:text-[clamp(1rem,1.4vw,1.6rem)] hover:underline">Email</a></div>
                                    <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={phone} alt="phone icon" className="w-[clamp(1.2rem,4vw,2rem)] sm:w-[clamp(1.5rem,2.2vw,2.5rem)] h-[clamp(1.2rem,4vw,2rem)] sm:h-[clamp(1.5rem,2.2vw,2.5rem)]" /><p className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] sm:text-[clamp(1rem,1.4vw,1.6rem)]">+62 8785 790 5183</p></div>
                                    <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={linkedin} alt="linkedin icon" className={`w-[clamp(1.2rem,4vw,2rem)] sm:w-[clamp(1.5rem,2.2vw,2.5rem)] h-[clamp(1.2rem,4vw,2rem)] sm:h-[clamp(1.5rem,2.2vw,2.5rem)] ${!member.linkedin || member.linkedin.trim() === '' ? 'opacity-50' : ''}`} />{member.linkedin && member.linkedin.trim() !== '' ? (<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] sm:text-[clamp(1rem,1.4vw,1.6rem)] hover:underline">LinkedIn</a>) : (<span className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] sm:text-[clamp(1rem,1.4vw,1.6rem)] opacity-50 cursor-not-allowed" title="LinkedIn profile not available">LinkedIn (Not Available)</span>)}</div>
                                    <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={download} alt="download icon" className={`w-[clamp(1.2rem,4vw,2rem)] sm:w-[clamp(1.5rem,2.2vw,2.5rem)] h-[clamp(1.2rem,4vw,2rem)] sm:h-[clamp(1.5rem,2.2vw,2.5rem)] ${!member.business_card || member.business_card.trim() === '' ? 'opacity-50' : ''}`} />{member.business_card && member.business_card.trim() !== '' ? (<a href={`${API_BASE_URL}/${member.business_card}`} target="_blank" rel="noopener noreferrer" className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] sm:text-[clamp(1rem,1.4vw,1.6rem)] hover:underline">Download Business Card</a>) : (<span className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] sm:text-[clamp(1rem,1.4vw,1.6rem)] opacity-50 cursor-not-allowed" title="Business card not available">Business Card (Not Available)</span>)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[clamp(3rem,8vw,8rem)] px-[clamp(1rem,4vw,5rem)]">
                <div className=" mx-auto flex flex-col lg:flex-row gap-y-[clamp(2rem,8vw,0rem)] gap-x-[clamp(3rem,8vw,10rem)] items-start">
                    <div className="flex flex-col text-justify w-full lg:w-[clamp(100%,100%,100%)]"><p className="text-[#131313] font_britanica_regular text-[clamp(0.9rem,4vw,1.2rem)] sm:text-[clamp(1rem,1.4vw,1.6rem)] leading-relaxed whitespace-pre-wrap">{member.biography}</p></div>
                    <div className="flex flex-col gap-y-[clamp(2rem,6vw,3rem)] sm:gap-y-[clamp(2rem,2.5vw,4rem)] w-full lg:w-[clamp(35%,40%,45%)]">
                        <div className="flex flex-col items-start">
                            <h2 className="text-[#C90021] font_britanica_black text-[clamp(1.3rem,5.5vw,2rem)] sm:text-[clamp(1.5rem,2vw,2.2rem)] mb-[clamp(0.8rem,3vw,1.5rem)]">Practice Focus</h2>
                            <ul className="text-[#131313] font_britanica_regular text-[clamp(0.85rem,4vw,1.1rem)] sm:text-[clamp(0.9rem,1.3vw,1.4rem)] space-y-[clamp(0.3rem,1vw,0.8rem)] leading-relaxed">
                                {member.practice_focus?.map((item: string, index: number) => (<li key={index} className="relative pl-4"><span className="absolute left-0 text-[#C90021]">•</span>{item}</li>))}
                            </ul>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-[#C90021] font_britanica_black text-[clamp(1.3rem,5.5vw,2rem)] sm:text-[clamp(1.5rem,2vw,2.2rem)] mb-[clamp(0.8rem,3vw,1.5rem)]">Education</h2>
                            <ul className="text-[#131313] font_britanica_regular text-[clamp(0.85rem,4vw,1.1rem)] sm:text-[clamp(0.9rem,1.3vw,1.4rem)] space-y-[clamp(0.3rem,1vw,0.8rem)] leading-relaxed">
                                {member.education?.map((item: string, index: number) => (<li key={index} className="relative pl-4"><span className="absolute left-0 text-[#C90021]">• </span>{item}</li>))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}