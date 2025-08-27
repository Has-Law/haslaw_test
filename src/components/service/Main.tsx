import Image from "next/image";
import arrow from "@/assets/service/icon/arrow.webp";
import shield from "@/assets/service/image/shield.webp";
import contract from "@/assets/service/image/contract.webp";
import Link from "next/link";

const ServiceCard = ({ href, title, description, imageSrc, imageAlt }) => {
    return (
        <Link 
            href={href} 
            
            className="group w-full h-auto sm:h-[35vw] bg-[linear-gradient(180deg,_#A0001B_0%,_#4F000D_100%)] 
                       flex flex-row pl-[7vw] py-[7vw] sm:pl-[2vw] sm:py-0 items-center rounded-xl 
                       overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:scale-[1.02]"
        >
            <div className="flex flex-col gap-y-[3vw] justify-center h-full w-full">
                <h1 className="text-white text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(3.5vw,3.5vw,4.5rem)] font_britanica_black leading-tight">
                    {title}
                </h1>
                <p className="text-white font_britanica_regular text-[clamp(3vw,3.7vw,4rem)] w-[90%] sm:w-full sm:text-[clamp(1.4vw,1.4vw,1.8rem)]">
                    {description}
                </p>
            
                <Image 
                    src={arrow} 
                    alt="Arrow Icon" 
                    className="w-[30vw] sm:w-[15vw] transition-transform duration-300 ease-out group-hover:translate-x-4" 
                />
            </div>
      
            <Image 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-[30vw] sm:w-[20vw] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3" 
            />
        </Link>
    );
};

const Main = () => {
    return (
        <div className="mt-[5vw] gap-y-8 relative px-[5vw] flex-col flex items-center justify-center">
            <h1 className="font_britanica_black text-[clamp(6vw,6vw,5rem)] sm:text-[clamp(4vw,4vw,4rem)] text-center">
                Advocacy at Our Core
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
                <ServiceCard
                    href="/service/litigation"
                    title="Litigation Service"
                    description="Resolving complex business disputes through expert litigation and strategic alternative dispute resolution (ADR)."
                    imageSrc={shield}
                    imageAlt="Shield Icon"
                />
                <ServiceCard
                    href="/service/corporate"
                    title="Corporate Service"
                    description="Comprehensive legal support for your day-to-day operations and major corporate transactions."
                    imageSrc={contract}
                    imageAlt="Contract Icon"
                />
            </div>
        </div>
    );
};

export default Main;