import Image from "next/image"
import ornaments from "@/assets/service/image/ornaments.webp"

const Main = () => {
    return (
        <div className="flex-row flex justify-between w-full min-h-screen">
            <div className="flex flex-col mt-[5vw] px-[5vw] gap-y-[2vw] items-center">
                <div className="flex flex-col sm:flex-row items-start justify-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(5vw,5vw,10rem)] leading-none w-[8vw]">1</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight sm:w-[15vw]">
                            Corporate Secretarial Services
                        </h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            Efficient, stable, compliant entities and structures are the foundations of business success. We ensure that the necessary paperwork is provided to the boards ahead of meetings and that board procedures are abided by. We also assist companies in complying with the prevailing laws and regulations and proper conduct within company activities. We also inform our clients with updates on laws and regulations so that they can procure necessary action to keep their businesses interests.                        </p>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(5vw,5vw,10rem)] leading-none w-[8vw]">2</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight w-[15vw]">
                            Merger and Acquisition
                        </h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            The business has to adjust occasionally to meet global needs and standards. HAS Attorneys at Law has always been trusted by our clients to enable the resources of their companies sustainably and sufficiently. We assist companies through all kinds of instruments and help our clients to channel through our wide range of networks.                        </p>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start text-[#4F000D] mb-[2vw]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(5vw,5vw,10rem)] leading-none w-[8vw]">3</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight sm:w-[15vw]">
                            Corporate Restructuring
                        </h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            HAS Attorneys at Law has always been trusted to involve in mergers and acquisitions. With a deep understanding of our client’s business interests, we have witnessed many successful corporate mergers and acquisitions. HAS Attorneys at Law can work with inter-functional professionals to deliver practical yet efficient results that win both ends.                        </p>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start text-[#4F000D] mb-[2vw]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(5vw,5vw,10rem)] leading-none w-[8vw]">4</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight sm:w-[15vw]">
                            Capital Market
                        </h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            As part of our comprehensive services to our clients, we now offer services in capital market field. With a registered legal consultant in capital market as our partner, HAS is able to provide various kinds of services concerning the capital market. HAS Attorneys at Law’s extensive experience enables us to give highly insightful advice in securities according to the client’s financial position.                        </p>

                    </div>
                </div>
            </div>
            <Image src={ornaments} alt="Ornaments" className="w-[20vw] right-0 z-0" />
        </div>
    )
}

export default Main
