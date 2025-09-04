import Image from "next/image";
import compass from "@/assets/about/icon/compass.webp";

const Values = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-y-[4vw] sm:gap-y-0 sm:gap-x-[1.6vw] px-[5vw] relative items-center justify-center mt-[4vw]">

          
            <div className="flex sm:hidden w-full items-center justify-center mb-[4vw]">
                <h1 className="font_britanica_bold text-[clamp(7vw,7vw,10rem)] text-[#A0001B] text-center">Our Core Values</h1>
            </div>
            <div className="hidden sm:flex flex-col p-[2.4vw] bg-[#A0001B] relative w-[32vw] h-[36vw]">
                <h1 className="font_britanica_bold text-[clamp(4.8vw,4.8vw,8rem)] leading-tight text-white w-[99%]">Our Core Values</h1>
                <Image src={compass} alt="Compass Icon" className="w-[80%] absolute bottom-0 left-0 " />
            </div>

            <div
                className="overflow-y-auto h-[80vw] sm:h-[36vw] w-full sm:w-[48vw] relative flex flex-col sm:rounded-none rounded-xl bg-[#4F000D] sm:bg-white/20 p-[3vw] sm:p-[0]
                           scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-[#A0001B] scrollbar-track-gray-200"
                style={{ boxShadow: "0px -2px 4px 0px #F200281A inset" }}
            >

                <div className="group flex flex-col sm:items-start items-center sm:bg-white/20 sm:hover:bg-[#F9F2F3] transition-colors duration-300 ease-in-out cursor-pointer">
                    <h2 className="font_britanica_black text-[clamp(4vw,4vw,6rem)] sm:text-[clamp(2vw,2vw,3.2rem)] sm:p-[0.8vw] p-[2vw] text-white sm:text-[#4F4F4F] transition-colors duration-300 sm:group-hover:text-[#D4002C]">
                        Proactive & Practical Counsel
                    </h2>
                    <p className="font_britanica_regular text-[clamp(3.5vw,3.7vw,4rem)] sm:text-[clamp(1.6vw,1.6vw,3.2rem)] sm:p-[0.8vw] sm:px-[0.8vw] px-[2vw] text-white sm:text-[#4F4F4F] text-justify transition-colors duration-300 sm:group-hover:text-[#333333]">
                        We leverage our extensive litigation experience to provide insightful, preventative strategies that mitigate risk and protect your interests, rights, and business from the outset. When disputes arise, our deep understanding of legal challenges allows us to craft effective, real-world solutions.
                    </p>
                </div>


                <div className="group flex flex-col sm:items-start items-center sm:bg-white/20 sm:hover:bg-[#F9F2F3] transition-colors duration-300 ease-in-out cursor-pointer">
                    <h2 className="font_britanica_black text-[clamp(4vw,4vw,6rem)] sm:text-[clamp(2vw,2vw,3.2rem)] sm:p-[0.8vw] p-[2vw] text-white sm:text-[#4F4F4F] transition-colors duration-300 sm:group-hover:text-[#D4002C]">
                        Strategic & Solution-Oriented Advocacy
                    </h2>
                    <p className="font_britanica_regular text-[clamp(3.5vw,3.7vw,4rem)] sm:text-[clamp(1.6vw,1.6vw,3.2rem)] sm:p-[0.8vw] sm:px-[0.8vw] px-[2vw] text-white sm:text-[#4F4F4F] text-justify transition-colors duration-300 sm:group-hover:text-[#333333]">
                        Our primary focus on litigation, informed by nearly a decade of handling complex cases, means we approach every legal challenge with a strategic mindset. We anticipate potential issues, identify practical solutions, and relentlessly advocate to achieve the best possible outcomes for our clients.
                    </p>
                </div>

                <div className="group flex flex-col sm:items-start items-center sm:bg-white/20 sm:hover:bg-[#F9F2F3] transition-colors duration-300 ease-in-out cursor-pointer">
                    <h2 className="font_britanica_black text-[clamp(4vw,4vw,6rem)] sm:text-[clamp(2vw,2vw,3.2rem)] sm:p-[0.8vw] p-[2vw] text-white sm:text-[#4F4F4F] transition-colors duration-300 sm:group-hover:text-[#D4002C]">
                        Dynamic & Applicable Expertise
                    </h2>
                    <p className="font_britanica_regular text-[clamp(3.5vw,3.7vw,4rem)] sm:text-[clamp(1.6vw,1.6vw,3.2rem)] sm:p-[0.8vw] sm:px-[0.8vw] px-[2vw] text-white sm:text-[#4F4F4F] text-justify transition-colors duration-300 sm:group-hover:text-[#333333]">
                        Staffed by a team of experienced and forward-thinking lawyers, we offer creative and adaptable legal services. Our vibrant approach ensures that the advice and representation we provide are not only legally sound but also highly applicable and effective in today&apos;s evolving legal landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Values;