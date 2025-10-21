import Image from "next/image"
import ornaments from "@/assets/service/image/ornaments.webp"
const Main = () => {
    return (
        <div className="flex-row flex justify-between w-full min-h-screen">
            <div className="flex flex-col mt-[5vw] px-[8vw] gap-y-[2vw] items-center">
                <div className="flex flex-col sm:flex-row items-start justify-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[1vw] items-start w-[23vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(4.5vw,4.5vw,10rem)] leading-none w-[8vw]">1</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2vw,2vw,3rem)] leading-tight w-[15vw]">Commercial Dispute</h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] lg:text-[clamp(1.3vw,1.3vw,4rem)] md:text-[clamp(1.5vw,1.5vw,4rem)] sm:text-[clamp(1.8vw,1.8vw,4rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            We collaborate closely with clients to fully understand their challenges and deliver solutions aligned with business objectives. With a strong record in complex commercial litigation, our advocates combine courtroom advocacy with alternative approaches such as mediation and ADR, ensuring disputes are resolved efficiently while safeguarding valuable business relationships.
                        </p>

                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[1vw] items-start w-[23vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(4.5vw,4.5vw,10rem)] leading-none w-[8vw]">2</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2vw,2vw,3rem)] leading-tight w-[15vw]">Administrative Litigation</h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] lg:text-[clamp(1.3vw,1.3vw,4rem)] md:text-[clamp(1.5vw,1.5vw,4rem)] sm:text-[clamp(1.8vw,1.8vw,4rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            We help clients navigate Indonesia’s dual legal system by reviewing government actions that impact individual and corporate rights. From securing permits and licenses to defending against administrative lawsuits, we offer strategic guidance, practical solutions, and effective representation to protect our clients’ interests before government authorities and regulatory bodies.
                        </p>

                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start text-[#4F000D] mb-[2vw]">
                    <div className="flex flex-row gap-x-[1vw] items-start w-[23vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(4.5vw,4.5vw,10rem)] leading-none w-[8vw]">3</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2vw,2vw,3rem)] leading-tight w-[15vw]">White Collar Defense</h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] lg:text-[clamp(1.3vw,1.3vw,4rem)] md:text-[clamp(1.5vw,1.5vw,4rem)] sm:text-[clamp(1.8vw,1.8vw,4rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            Our experienced team responds to crises with speed and precision, guiding clients through challenging, high-stakes cases. By combining creative legal strategies, thorough preparation, and strategic courtroom advocacy, we secure favorable results and help clients manage complex risks in both criminal and white-collar matters.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start text-[#4F000D] mb-[10vw]">
                    <div className="flex flex-row gap-x-[1vw] items-start w-[23vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(4.5vw,4.5vw,10rem)] leading-none w-[8vw]">4</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2vw,2vw,3rem)] leading-tight w-[15vw]">Tax Litigation Services</h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] lg:text-[clamp(1.3vw,1.3vw,4rem)] md:text-[clamp(1.5vw,1.5vw,4rem)] sm:text-[clamp(1.8vw,1.8vw,4rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            We represent clients in diverse tax disputes by combining legal expertise with practical strategies. Our team manages audits, objections, appeals, and judicial reviews while advising on mediation and arbitration to minimize risks. Skilled at resolving conflicts early, we help clients achieve favorable outcomes, avoid unnecessary disputes, and maintain compliance with tax authorities.
                        </p>

                    </div>
                </div>
            </div>
            <Image src={ornaments} alt="Ornaments" className="w-[20vw]  right-0 z-0 " />
        </div>
    )
}
export default Main