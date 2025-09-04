import Image, { StaticImageData } from "next/image";

import ojk from "@/assets/about/image/ojk.webp";
import appdi from "@/assets/about/image/appdi.webp";
import peradi from "@/assets/about/image/peradi.webp";
import hkhsk from "@/assets/about/image/hkhsk.webp";
import asahi from "@/assets/about/image/asahi.webp";
import license from "@/assets/about/background/license.webp";

interface LicenseItem {
    img: StaticImageData;
    title: string;
    alt: string;
}

const licenseData: LicenseItem[] = [
    { img: ojk, title: "Financial Services Authority of the Republic of Indonesia", alt: "OJK Logo" },
    { img: hkhsk, title: "Association of Financial Sector Legal Consultants (HKHSK)", alt: "HKHSK Logo" },
    { img: peradi, title: "Indonesia Advocates Association", alt: "Peradi Logo" },
    { img: appdi, title: "Indonesian Data Protection Practioners Association", alt: "APPDI Logo" },
    { img: asahi, title: "Indonesia Legal Auditors Association", alt: "ASAHI Logo" }
];

const LicenseCard = ({ item }: { item: LicenseItem }) => (

    <div 
        className="group relative overflow-hidden flex flex-col items-center justify-center text-center 
                   bg-[#F0F0F0] sm:bg-white                         
                   rounded-3xl sm:rounded-xl                         
                   py-[1vw]                                   
                   h-[15vw]                           
                   gap-y-4 sm:gap-y-[1vw]"
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
   
        <div 
            className="absolute inset-0 bg-[#A0001B] transform translate-y-full 
                       group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <div className="relative h-[20vw] w-[20vw]">
                <Image
                    src={item.img}
                    alt={item.alt}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <h3 className="font_britanica_black 
                           text-gray-800 sm:text-black                     
                           text-[clamp(1.3vw,1.3vw,4rem)] max-w-xs
                           transition-colors duration-300 group-hover:text-white">
                {item.title}
            </h3>
        </div>
    </div>
);

const License = () => {
    return (
        <div className="relative  mb-[1vw] mt-[3vw]  px-[5vw]">
            <Image 
                src={license} 
                alt="Background Image" 

                className="absolute h-[46vw] top-0 left-0 z-0" 
            />

            <div className="relative z-10 flex flex-col items-center justify-center py-[3vw] gap-y-[2vw]">
                <h2 className="font_britanica_black text-white text-center text-[clamp(3vw,3vw,10rem)] ">
                    Organizational & Licenses
                </h2>

                <div className="w-full max-w-[90vw] mx-auto">
                   
                    <div className="grid grid-cols-1 gap-6 sm:hidden">
                        {licenseData.map((item, index) => (
                            <LicenseCard key={index} item={item} />
                        ))}
                    </div>

               
                    <div className="hidden sm:block">
                        <div className="grid grid-cols-3 gap-[2.5vw] mb-[2.5vw]">
                            <LicenseCard item={licenseData[0]} />
                            <LicenseCard item={licenseData[1]} />
                            <LicenseCard item={licenseData[2]} />
                        </div>
                        <div className="grid grid-cols-6 gap-[2.5vw]">
                            <div className="col-start-2 col-span-2">
                                <LicenseCard item={licenseData[3]} />
                            </div>
                            <div className="col-start-4 col-span-2">
                                <LicenseCard item={licenseData[4]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default License;