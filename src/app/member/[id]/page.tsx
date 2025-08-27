import Image from "next/image";
import Link from "next/link";
import bg from "@/assets/member/bg-detail.webp";
import foto from "@/assets/member/foto-detail.webp";
import mail from "@/assets/member/icon/mail.png";
import phone from "@/assets/member/icon/phone.png";
import linkedin from "@/assets/member/icon/linkedin.png";
import download from "@/assets/member/icon/download.png";
import ornaments from "@/assets/member/ornaments.png";
import { getMemberById } from "@/lib/members";
import { notFound } from "next/navigation";

interface MemberDetailProps {
    params: {
        id: string;
    }
}

export default async function MemberDetail({ params }: MemberDetailProps) {
    const member = await getMemberById(params.id);

    if (!member) {
        notFound();
    }





    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    return (
        <div className=" bg-gray-100 min-h-screen w-full relative flex flex-col items-center justify-center gap-y-[5vw]">
            <div className="absolute top-0 ">
                <Image src={bg} alt="bg" className="w-full h-full" />
            </div>

            <div className="flex flex-row items-center  gap-x-[2vw] w-[90vw] z-10 mt-[5vw] z-10">
                {/* <Image
                        src={`${API_BASE_URL}/${member.display_image}`}
                        alt={member.full_name}
                        width={200}
                        height={200}
                        className=" w-[50vw]"  
                    /> */}

                <Image src={foto} alt="bg" className=" w-[40vw] h-[40vw]" />
                <div className="flex flex-col justify-between h-[40vw]">
                    <div className="flex flex-col ">
                        <h1 className="text-[#F5F5F5] font_britanica_heavy text-[clamp(4vw,4vw,10vw)] w-full leading-tight">{member.full_name}</h1>
                        <p className="text-[#DBDBDB] font_britanica_regular text-[clamp(2vw,2.6vw,5vw)]">{member.title_position}</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="flex flex-row gap-x-[1vw] items-center">
                            <Image src={mail} alt="mail icon" className="w-[2.5vw] h-[2.5vw]" />
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`}
                                target="_blank"
                                rel="noopener noreferrer" className="text-[#F5F5F5] font_britanica_regular text-[clamp(1.5vw,1.5vw,5vw)] hover:underline">
                                Email
                            </a>
                        </div>
                        <div className="flex flex-row gap-x-[1vw] items-center">
                            <Image src={phone} alt="phone icon" className="w-[2.5vw] h-[2.5vw]" />
                            <p className="text-[#F5F5F5] font_britanica_regular text-[clamp(1.5vw,1.5vw,5vw)]">{member.phone_number}</p>
                        </div>

                       
                        <div className="flex flex-row gap-x-[1vw] items-center">
                            <Image src={linkedin} alt="linkedin icon" className="w-[2.5vw] h-[2.5vw]" />
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F5F5F5] font_britanica_regular text-[clamp(1.5vw,1.5vw,5vw)] hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>

                        <div className="flex flex-row gap-x-[1vw] items-center">
                            <Image src={download} alt="download icon" className="w-[2.5vw] h-[2.5vw]" />
                            <a
                                href={`${API_BASE_URL}/${member.business_card}`}
                                
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F5F5F5] font_britanica_regular text-[clamp(1.5vw,1.5vw,5vw)] hover:underline"
                            >
                                Download Business Card
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[90vw] flex flex-row gap-x-[10vw] items-start z-10">
                <div className="flex flex-col text-justify w-[50vw]">
                    <p className="text-[#131313] font_britanica_regular text-[clamp(1vw,1.5vw,3vw)] whitespace-pre-wrap">{member.biography}</p>
                </div>

                <div className="flex flex-col gap-y-[2vw]">
                    <div className="flex flex-col items-start">
                        <h2 className="text-[#C90021] font_britanica_black text-[clamp(2vw,2.3vw,5vw)]">Practice Focus</h2>
                        <ul className="text-[#131313] font_britanica_regular text-[clamp(1.5vw,1.5vw,3vw)]  space-y-2">
                            {member.practice_focus?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-[#C90021] font_britanica_black text-[clamp(2vw,2.3vw,5vw)]">Education</h2>
                        <ul className="text-[#131313] font_britanica_regular text-[clamp(1.5vw,1.5vw,5vw)] space-y-2">
                            {member.education?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="text-[#C90021] font_britanica_black text-[clamp(2vw,2.3vw,5vw)]">Language</h2>
                        <ul className="text-[#131313] font_britanica_regular text-[clamp(1.5vw,1.5vw,5vw)] space-y-2">
                            {member.language?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}