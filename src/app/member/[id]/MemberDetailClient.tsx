'use client';

import Image from "next/image";
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import type { Member, ApiResponse } from "@/lib/members";

import bg from "@/assets/member/bg-detail.webp";

import phone_mobile from "@/assets/member/icon/phone-mobile.png";
import mail_mobile from "@/assets/member/icon/mail-mobile.png";
import download_mobile from "@/assets/member/icon/download-mobile.png";

import mail from "@/assets/member/icon/mail.png";
import phone from "@/assets/member/icon/phone.png";
import linkedin from "@/assets/member/icon/linkedin.png";
import download from "@/assets/member/icon/download.png";
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
        <>
            {/* ======================================================= */}
            {/* =================== MOBILE LAYOUT =================== */}
            {/* ======================================================= */}
            <div className="sm:hidden bg-gray-100  w-full flex flex-col   ">
                {/* Hero Section Mobile */}
                <div className="relative w-[90vw] mt-5 overflow-hidden mx-auto">
                    <Image src={`${API_BASE_URL}/${member.detail_image}`} width={500} height={500} alt="Member Photo" className="w-full h-auto rounded-2xl object-cover  " />
                    <div className="absolute flex flex-col gap-y-2 justify-center w-full items-center bottom-6  text-white text-center z-10">
                        <h1 className="font_britanica_heavy text-[clamp(4.5vw,4.5vw,4.5rem)] leading-tight">{member.full_name}</h1>
                        <p className="font_britanica_regular text-[clamp(4vw,4vw,1.8rem)]  opacity-90">{member.title_position}</p>
                    </div>

                    <div className="absolute bottom-0 w-full bg-[linear-gradient(0deg,_#5E0503_11.46%,_rgba(242,_242,_242,_0)_100%)] h-1/3 rounded-b-2xl">

                    </div>
                </div>

                <div className="flex flex-col items-start gap-y-[clamp(0.5rem,2vw,0rem)] pt-[clamp(5vw,6vw,8rem)] px-[clamp(1rem,4vw,5rem)]">
                    <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={mail_mobile} alt="mail icon" className="w-[clamp(1.2rem,4vw,2rem)] h-[clamp(1.2rem,4vw,2rem)]" /><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@has-law.com`} target="_blank" rel="noopener noreferrer" className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] hover:underline">Email</a></div>
                    <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={phone_mobile} alt="phone icon" className="w-[clamp(1.2rem,4vw,2rem)] h-[clamp(1.2rem,4vw,2rem)]" /><p className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)]">+62 8785 790 5183</p></div>
                    <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={download_mobile} alt="download icon" className={`w-[clamp(1.2rem,4vw,2rem)] h-[clamp(1.2rem,4vw,2rem)] ${!member.business_card || member.business_card.trim() === '' ? 'opacity-50' : ''}`} />{member.business_card && member.business_card.trim() !== '' ? (<a href={`${API_BASE_URL}/${member.business_card}`} target="_blank" rel="noopener noreferrer" className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] hover:underline">Download Business Card</a>) : (<span className="font_britanica_regular text-[clamp(0.8rem,3.5vw,1.2rem)] opacity-50 cursor-not-allowed">Business Card (Not Available)</span>)}</div>
                    <div className="h-[0.5px] w-full bg-[#780014] px-[clamp(1rem,4vw,5rem)] mt-5"/>

                </div>

                {/* Content Section Mobile */}
                <div className="py-[clamp(5vw,5vw,8rem)] px-[clamp(1rem,4vw,5rem)]">
                    <div className="mx-auto flex flex-col gap-y-[clamp(2rem,8vw,0rem)] items-start">
                        <div className="flex flex-col text-justify w-full"><p className="text-[#131313] font_britanica_regular text-[clamp(0.9rem,4vw,1.2rem)] leading-relaxed whitespace-pre-wrap">{member.biography}</p></div>
                        <div className="flex flex-col gap-y-[clamp(2rem,6vw,3rem)] w-full">
                            <div className="flex flex-col items-start">
                                <h2 className="text-[#C90021] font_britanica_black text-[clamp(1.3rem,5.5vw,2rem)] mb-[clamp(0.8rem,3vw,1.5rem)]">Practice Focus</h2>
                                <p className="text-[#131313] font_britanica_regular text-[clamp(0.85rem,4vw,1.1rem)] space-y-[clamp(0.3rem,1vw,0.8rem)] leading-relaxed text-justify">{member.practice_focus}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-[#C90021] font_britanica_black text-[clamp(1.3rem,5.5vw,2rem)] mb-[clamp(0.8rem,3vw,1.5rem)]">Education</h2>
                                <ul className="text-[#131313] font_britanica_regular text-[clamp(0.85rem,4vw,1.1rem)] space-y-[clamp(0.3rem,1vw,0.8rem)] leading-relaxed text-justify">
                                    {member.education?.map((item: string, index: number) => (<li key={index} className="relative pl-4"><span className="absolute left-0 text-[#C90021]">• </span>{item}</li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ======================================================= */}
            {/* =================== DESKTOP LAYOUT ================== */}
            {/* ======================================================= */}
            <div className="hidden sm:block bg-gray-100 min-h-screen w-full">
                {/* Hero Section Desktop */}
                <div className="relative w-full h-screen overflow-hidden">
                    <div className="absolute inset-0">
                        <Image src={bg} alt="bg" className="block w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center px-[clamp(1rem,4vw,5rem)] z-10">
                        <div className="flex flex-row items-center gap-x-[clamp(1rem,3vw,4rem)] w-full max-w-[80vw]">
                            <Image src={`${API_BASE_URL}/${member.detail_image}`} width={500} height={500} alt="Member Photo" className="w-[clamp(20vw,30vw,38rem)] h-auto rounded-2xl object-cover flex-shrink-0" />
                            <div className="flex flex-col justify-center text-white flex-1 text-left">
                                <h1 className="font_britanica_heavy text-[clamp(3vw,3vw,5rem)] leading-tight mb-[clamp(0.5rem,2vw,1rem)]">{member.full_name}</h1>
                                <p className="font_britanica_regular text-[clamp(1.2rem,2.2vw,2.2rem)] mb-[clamp(1vw,1vw,3rem)] opacity-90">{member.title_position}</p>
                                <div className="flex flex-col gap-y-[clamp(1.5vw,1.5vw,2rem)]">
                                    <div className="flex flex-col items-start gap-y-[clamp(0.5rem,2vw,0rem)]">
                                        <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={mail} alt="mail icon" className="w-[clamp(1.5rem,2.2vw,2.5rem)] h-[clamp(1.5rem,2.2vw,2.5rem)]" /><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@has-law.com`} target="_blank" rel="noopener noreferrer" className="font_britanica_regular text-[clamp(1rem,1.4vw,1.6rem)] hover:underline">Email</a></div>
                                        <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={phone} alt="phone icon" className="w-[clamp(1.5rem,2.2vw,2.5rem)] h-[clamp(1.5rem,2.2vw,2.5rem)]" /><p className="font_britanica_regular text-[clamp(1rem,1.4vw,1.6rem)]">+62 8785 790 5183</p></div>
                                        <div className="flex items-center gap-x-[clamp(0.8rem,2vw,1rem)]"><Image src={download} alt="download icon" className={`w-[clamp(1.5rem,2.2vw,2.5rem)] h-[clamp(1.5rem,2.2vw,2.5rem)] ${!member.business_card || member.business_card.trim() === '' ? 'opacity-50' : ''}`} />{member.business_card && member.business_card.trim() !== '' ? (<a href={`${API_BASE_URL}/${member.business_card}`} target="_blank" rel="noopener noreferrer" className="font_britanica_regular text-[clamp(1rem,1.4vw,1.6rem)] hover:underline">Download Business Card</a>) : (<span className="font_britanica_regular text-[clamp(1rem,1.4vw,1.6rem)] opacity-50 cursor-not-allowed">Business Card (Not Available)</span>)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content Section Desktop */}
                <div className="py-[clamp(5vw,5vw,8rem)] px-[5vw]">
                    <div className="mx-auto flex flex-row gap-x-[clamp(3rem,8vw,10rem)] items-start">
                        <div className="flex flex-col text-justify w-full lg:w-[clamp(100%,100%,100%)]"><p className="text-[#131313] font_britanica_regular text-[clamp(1rem,1.4vw,1.6rem)] leading-relaxed whitespace-pre-wrap">{member.biography}</p></div>
                        <div className="flex flex-col gap-y-[clamp(2rem,2.5vw,4rem)] w-full lg:w-[clamp(35%,40%,45%)]">
                            <div className="flex flex-col items-start">
                                <h2 className="text-[#C90021] font_britanica_black text-[clamp(1.5rem,2vw,2.2rem)] mb-[clamp(0.8rem,3vw,1.5rem)]">Practice Focus</h2>
                                <p className="text-[#131313] font_britanica_regular text-[clamp(0.9rem,1.3vw,1.4rem)] space-y-[clamp(0.3rem,1vw,0.8rem)] text-justify leading-relaxed">{member.practice_focus}</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-[#C90021] font_britanica_black text-[clamp(1.5rem,2vw,2.2rem)] mb-[clamp(0.8rem,3vw,1.5rem)]">Education</h2>
                                <ul className="text-[#131313] font_britanica_regular text-[clamp(0.9rem,1.3vw,1.4rem)] space-y-[clamp(0.3rem,1vw,0.8rem)] leading-relaxed text-justify">
                                    {member.education?.map((item: string, index: number) => (<li key={index} className="relative pl-4"><span className="absolute left-0 text-[#C90021]">• </span>{item}</li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}