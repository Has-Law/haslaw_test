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
                            White Collar Defense
                        </h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            Facing accusations of corporate or financial misconduct can be overwhelming, putting your reputation and future at risk. In Indonesia, these cases often involve complex investigations by agencies like the KPK (Komisi Pemberantasan Korupsi/Corruption Eradication Commission), Police, or Attorney General&apos;s Office. We&apos;re experts at navigating these challenges, from initial inquiries to the prosecution phase.
                        </p>
                        <p>
                            We provide strong and smart defense for individuals and companies caught in white-collar cases, like fraud, embezzlement, insider trading, and corruption. We act fast and proactively, gathering evidence and developing robust defense strategies to protect your position.
                        </p>
                        <p>
                            Our goal is to reduce risks at every step. We aim for quick solutions through talks, or if needed, we advocate strongly for you in court. We know the stakes are high and are fully committed to protecting your rights and achieving the best possible results in these sensitive situations.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(5vw,5vw,10rem)] leading-none w-[8vw]">2</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight w-[15vw]">
                            Judicial Review
                        </h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            Judicial review is a key way to make sure public bodies act legally and are held accountable in Indonesia. It allows people and organizations to challenge regulations or decisions by government bodies – like ministerial regulations or administrative acts – if they are unlawful, illogical, or procedurally unfair. This includes reviews by the Supreme Court (Mahkamah Agung) on lower regulations, or appeals from administrative court decisions.
                        </p>
                        <p>
                            Our firm has deep knowledge in handling judicial review cases in various public law situations. We carefully look at your case details against public law principles, finding reasons like acting beyond legal powers, unfair procedures, or unreasonable decisions. We help clients through the strict rules and tight deadlines of judicial review.
                        </p>
                        <p>
                            We are committed to helping clients uphold the rule of law and protect their rights against unfair or illegal government actions. Whether you want to overturn a wrong decision, make an agency act, or stop an illegal action, our team offers smart advice and strong representation throughout the judicial review process, from initial steps to full court hearings.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(5vw,5vw,10rem)] leading-none w-[8vw]">3</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight sm:w-[15vw]">
                            Corporate & Commercial
                        </h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            Beyond solving disputes, a business&apos;s success relies on solid legal foundations and smart commercial operations. Our corporate and commercial services provide full legal support to protect your business, ensure you follow rules, and help you grow from start-up to complex deals. We do this by truly understanding your business model and market.
                        </p>
                        <p>
                            We offer extensive guidance on all parts of corporate law. This includes setting up your company (e.g., Limited Liability Companies/Perseroan Terbatas), writing and negotiating many types of commercial contracts (like agreements for supply, distribution, or services), and ensuring robust corporate governance. We also assist with crucial administrative and compliance tasks, including corporate secretarial services, to ensure your company adheres to all statutory requirements, manages its corporate records diligently, and maintains good standing with relevant authorities.
                        </p>
                        <p>
                            Our team also gives strategic advice on mergers, acquisitions, sales, and other complex corporate deals. We oversee everything from checking details to negotiating and closing deals, making sure transactions are smooth and legally sound. We are experienced in assisting a diverse range of clients, including State–Owned Enterprises (BUMN), domestic private companies (PT PMDN), and foreign investment companies (PT PMA), from small and medium–sized enterprises to multinational corporations. By combining our deep corporate knowledge with an awareness of business realities, we help your business operate securely, grow confidently, and reach its goals while avoiding legal problems.
                        </p>
                    </div>
                </div>
            </div>
            <Image src={ornaments} alt="Ornaments" className="w-[20vw] right-0 z-0" />
        </div>
    )
}

export default Main
