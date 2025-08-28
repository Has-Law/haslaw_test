'use-client'
import Image from "next/image";
import bgHero from "@/assets/contact/image/bg-hero.png";
import waIcon from "@/assets/contact/icon/wa-contact.svg";
import phoneIcon from "@/assets/contact/icon/phone-contact.svg";

export default function Contact() {
       const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3531296021315!2d106.81378637540331!3d-6.21707626089426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7b8132100b7%3A0xa648aba444960aa8!2sPlaza%20Sentral!5e0!3m2!1sid!2sid!4v1754407995784!5m2!1sid!2sid";

    return (
        <div className="bg-[#F2F2F2] min-h-screen w-full flex flex-col items-center">
        
            <div className="w-full relative h-[400px] md:h-[30vw] flex items-center justify-center">
                <Image src={bgHero} alt="Contact Hero" layout="fill" objectFit="cover" className="w-full h-full rounded-br-4xl rounded-bl-4xl" priority />
                <div className="absolute inset-0  flex flex-col items-center justify-center z-10 p-6 text-white">
                    <h1 className="text-[clamp(2.5rem,6vw,5rem)] font_britanica_black mb-4 tracking-wide text-center drop-shadow-lg">Contact Us</h1>
                    <p className="text-[clamp(1rem,2vw,1.8rem)] max-w-4xl text-center font_britanica_regular leading-relaxed opacity-90 drop-shadow-md">
                        We understand that every legal challenge is significant and often complex. Taking the first step to contact us is the key to finding clarity and a solution. Our team is ready to listen to your story with full confidentiality and provide the guidance you need.
                    </p>
                </div>
            </div>

            <div className="w-full lg:max-w-[80vw] mx-auto flex flex-col lg:flex-row items-start justify-center mt-42 px-6 md:px-10">
             
                <form className="bg-white rounded-2xl shadow-2xl p-[clamp(1rem,5vw,3rem)] w-full lg:w-[65%] order-2 lg:order-1 flex-shrink-0">
                    <h2 className="text-[#780014] text-[clamp(2rem,5vw,2.5rem)] font_britanica_black mb-3">Send Us Message</h2>
                    <p className="text-gray-700 font_britanica_bold text-[clamp(1rem,4vw,1.5rem)] mb-8">Leave your message below, and let&apos;s start finding a solution together.</p>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                            <div>
                                <label className="block text-[clamp(0.875rem,2vw,1rem)] text-gray-700 font-semibold mb-2">First name <span className="text-[#A0001B]">*</span></label>
                                <input type="text" className="w-full duration-300 border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder="Enter Name" required />
                            </div>
                            <div>
                                <label className="block text-[clamp(0.875rem,2vw,1rem)] text-gray-700 font-semibold mb-2">Last Name <span className="text-[#A0001B]">*</span></label>
                                <input type="text" className="w-full duration-300 border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder="Enter your Last Name" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                            <div>
                                <label className="block text-[clamp(0.875rem,2vw,1rem)] text-gray-700 font-semibold mb-2">Email Address <span className="text-[#A0001B]">*</span></label>
                                <input type="email" className="w-full duration-300 border-2 border-[#323232] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder="Enter your Email Address" required />
                            </div>
                            <div>
                                <label className="block text-[clamp(0.875rem,2vw,1rem)] text-gray-700 font-semibold mb-2">Phone Numbers <span className="text-[#A0001B]">*</span></label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-lg text-white bg-black font_britanica_bold border-2 border-r-0 border-[#323232] rounded-l-xl ">
                                        +62
                                    </span>
                                    <input type="tel" className="flex-1 duration-300 border-2 border-l-0 border-[#323232] rounded-r-xl px-4 py-3 text-[clamp(0.875rem,2vw,1rem)]focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder="Enter phone numbers" required />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-[clamp(0.875rem,2vw,1rem)] text-gray-700 font-semibold mb-2">Message <span className="text-[#A0001B]">*</span></label>
                            <textarea className="w-full duration-300 border-2 border-[#323232] rounded-xl px-4 py-3 text-lg min-h-[160px] focus:outline-none focus:ring-2 focus:ring-[#A0001B]/50 focus:border-[#A0001B]" placeholder="Write your message here" required />
                        </div>
                    </div>
                    
                    <button type="submit" className="bg-[#A0001B] text-white mt-8 px-10 py-4 rounded-full hover:bg-[#780014] transition-colors font_britanica_bold text-lg md:text-xl shadow-md">Send Message</button>
                </form>
                
            
                <div className="bg-[#780014] text-white rounded-2xl shadow-2xl p-[clamp(1.5rem,5vw,3rem)] w-full lg:w-[40%] order-2 lg:order-2 flex-shrink-0 
                               relative z-10 lg:mt-[clamp(2rem,8vw,6rem)] lg:ml-[-2%]">
                    <h3 className="font_britanica_black mb-6 text-[clamp(2.25rem,5vw,2.75rem)]">Our Office</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                          
                            <div>
                                <h4 className="font_britanica_black font-bold text-2xl mb-1">Address</h4>
                                <p className="text-white/90 font_britanica_regular break-words text-xl leading-relaxed">
                                    Plaza Sentral 15th Floor, Jln. Jendral Sudirman Kav 47 - 48, Jakarta Selatan 12930, Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div>
                                <h4 className="font_britanica_black text-2xl mb-1">Email</h4>
                                <p className="text-white/90 font_britanica_regular text-xl">info@has-law.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div>
                                <h4 className="font_britanica_black text-xl lg:text-2xl mb-1">Telephone</h4>
                             
                                <div className="flex flex-col gap-2 mt-1">
                                    <div className="flex items-center gap-3">
                                        <Image src={phoneIcon} alt="Phone" className="w-10 h-10 opacity-80" />
                                        <p className="text-white/90 font_britanica_regular text-xl lg:text-xl">+6221 5790 5183</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Image src={waIcon} alt="WhatsApp" className="w-10 h-10 opacity-80" />
                                        <p className="text-white/90 font_britanica_regular text-xl lg:text-xl">+62 8785 790 5183</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="w-full max-w-[83vw] mx-auto mt-16 mb-20 px-6 md:px-10">
                <iframe
                    src={mapSrc}
                    className="w-full h-[450px] md:h-[550px] rounded-2xl border-0 "
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}