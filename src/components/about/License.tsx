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
    {
        img: ojk,
        title: "Financial Services Authority of the Republic of Indonesia",
        alt: "OJK Logo"
    },
    {
        img: hkhsk,
        title: "Association of Financial Sector Legal Consultants (HKHSK)",
        alt: "HKHSK Logo"
    },
    {
        img: peradi,
        title: "Indonesia Advocates Association",
        alt: "Peradi Logo"
    },
    {
        img: appdi,
        title: "Indonesian Data Protection Practioners Association",
        alt: "APPDI Logo"
    },
    {
        img: asahi,
        title: "Indonesia Legal Auditors Association",
        alt: "ASAHI Logo"
    }
];


const LicenseCard = ({ item }: { item: LicenseItem }) => (
    <div className="group flex flex-col items-center justify-center text-center bg-white rounded-xl p-[2vw] w-full h-[20vw] gap-y-[1vw] transition-color duration-300 hover:bg-[#A0001B] "
        style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
        <div className="relative h-2/3 w-full">
            <Image
                src={item.img}
                alt={item.alt}
                layout="fill"
                objectFit="contain"
            />
        </div>
        <h3 className="font_britanica_bold text-[clamp(1.8vw,1.8vw,4rem)] text-black transition-colors duration-300 group-hover:text-white">
            {item.title}
        </h3>
    </div>
);


const License = () => {
    return (
        <div className="relative py-[3.5vw] mt-[5vw] px-[5vw]">
            <Image src={license} alt="Background Image" className="w-full absolute top-0 left-0 z-0" />

            {/* Konten Utama */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-y-[2vw]">
                <h2 className="font_britanica_black text-white text-center text-[clamp(5vw,5vw,10rem)] ">
                    Organizational & Licenses
                </h2>

                <div className="w-full max-w-[90vw] mx-auto">
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
    );
};
export default License;