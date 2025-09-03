import Image from "next/image"
import ornaments from "@/assets/service/image/ornaments.webp"
const Main = () => {
    return (
        <div className="flex-row flex justify-between w-full min-h-screen">
            <div className="flex flex-col mt-[5vw] px-[5vw] gap-y-[2vw] items-center">
                <div className="flex flex-col sm:flex-row items-start justify-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(10vw,10vw,10rem)] leading-none w-[8vw]">1</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight w-[15vw]">Commercial litigation</h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            Business disputes can seriously disrupt your operations and impact your financial health. These conflicts can come from many places, like broken contracts, disagreements between partners, shareholder issues, or claims of unfair competition. Solving them needs not just legal smarts, but also a good understanding of your business goals.
                        </p>
                        <p>
                            We specialize in representing businesses of all sizes in complex commercial lawsuits across different industries. We start by fully understanding the dispute, weighing the business impact against the legal facts. We always look for strategic ways to resolve issues, often using mediation or arbitration for faster and more affordable solutions, keeping your business running smoothly.
                        </p>
                        <p>
                            When going to court is unavoidable, our skilled lawyers are ready to fiercely defend your interests. We build strong litigation plans, manage evidence carefully, and present convincing arguments to judges in court. Our focus remains on achieving solutions that protect your business, bring back stability, and help you thrive.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(10vw,10vw,10rem)] leading-none w-[8vw]">2</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight w-[15vw]">Criminal litigation</h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            When your freedom and reputation are on the line, you need powerful legal help. Criminal charges, big or small, can have huge impacts on you and your family. Handling the criminal justice system takes not just legal knowledge, but also a caring yet determined approach.
                        </p>
                        <p>
                            We represent clients across all types of criminal charges. Our service covers every part of the process, from thorough investigations before trial to carefully checking evidence and finding any mistakes in procedure.
                        </p>
                        <p>
                            If your case goes to trial, our experienced litigators are ready to defend you vigorously. We&apos;re dedicated to protecting your rights, challenging overreach by prosecutors, and making sure your voice is heard. Our main goal is to get the best outcome for you, whether it&apos;s an acquittal, dismissal, or lighter penalties, so you can move forward.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start text-[#4F000D]">
                    <div className="flex flex-row gap-x-[2vw] items-start w-[30vw]">
                        <p className="font_britanica_black text-[clamp(12vw,12vw,10rem)] sm:text-[clamp(10vw,10vw,10rem)] leading-none w-[8vw]">3</p>
                        <h2 className="font_britanica_black text-[clamp(2.5vw,3.5vw,3rem)] sm:text-[clamp(2.5vw,2.5vw,3rem)] leading-tight w-[15vw]">Administrative litigation</h2>
                    </div>
                    <div className="font_britanica_bold sm:font_britanica_regular text-[clamp(1.5vw,2.5vw,2rem)] sm:text-[clamp(1.5vw,1.5vw,1.5rem)] space-y-[1.5vw] text-justify sm:w-[40vw]">
                        <p>
                            Engaging with government agencies and regulatory bodies is a common part of business, but it can lead to tough disputes and legal actions. Administrative litigation means challenging or defending decisions made by government bodies, handling complex rules, and making sure you follow the law while protecting your rights.
                        </p>
                        <p>
                            We offer expert legal help to individuals, businesses, and groups facing disputes with administrative agencies at all levels. Our services include challenging bad administrative decisions, appealing fines, seeking judicial review of agency actions, and representing you in enforcement cases.
                        </p>
                        <p>
                            Our aim is to guide you through the often-confusing administrative legal world, giving you clear direction. We carefully prepare your case, argue effectively before administrative tribunals, and if needed, take your case to higher courts to ensure government actions are lawful and fair.
                        </p>
                    </div>
                </div>
            </div>
            <Image src={ornaments} alt="Ornaments" className="w-[20vw] right-0 z-0 " />
        </div>
    )
}
export default Main