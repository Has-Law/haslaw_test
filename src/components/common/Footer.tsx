import React from 'react';
import Link from 'next/link';
import logo from "@/assets/common/footer/footer-logo.svg";
import instagram from "@/assets/common/footer/instagram-footer.svg";
import email from "@/assets/common/footer/email-footer.svg";
import linkedin from "@/assets/common/footer/linkedin-footer.svg";
import emailIcon from "@/assets/common/footer/mail-footer.svg";
import phoneIcon from "@/assets/common/footer/phone-footer.svg";
import whatsappIcon from "@/assets/common/footer/wa-footer.svg";
import locationIcon from "@/assets/common/footer/location-footer.svg";
import Image from 'next/image';

const Footer = () => {
    return (
      
        <footer className="bg-[#Ffffff] py-[clamp(1.2rem,2.5vw,2rem)] px-[clamp(1.5rem,4vw,8rem)] font_britanica_regular">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[clamp(2.5rem,5vw,6rem)] lg:gap-[clamp(4rem,6vw,6rem)]">
                    
                    <div className="lg:hidden">
                        <div className="flex flex-row justify-between items-center mb-[clamp(1.5rem,4vw,2rem)]">
                            <Image 
                                src={logo} 
                                alt="HAS Law Logo" 
                                className="w-[clamp(8rem,20vw,9rem)] h-auto"
                            />
                            <div className="flex space-x-[clamp(0.8rem,3vw,1rem)]">
                                <Link href="#" className="hover:opacity-75 transition-opacity">
                                    <Image src={instagram} alt="Instagram" className="w-[clamp(1.8rem,6vw,2rem)] h-[clamp(1.8rem,6vw,2rem)]" />
                                </Link>
                                <Link href="#" className="hover:opacity-75 transition-opacity">
                                    <Image src={email} alt="Email" className="w-[clamp(1.8rem,6vw,2rem)] h-[clamp(1.8rem,6vw,2rem)]" />
                                </Link>
                                <Link href="#" className="hover:opacity-75 transition-opacity">
                                    <Image src={linkedin} alt="LinkedIn" className="w-[clamp(1.8rem,6vw,2rem)] h-[clamp(1.8rem,6vw,2rem)]" />
                                </Link>
                            </div>
                        </div>
                        <h3 className="text-[#A0001B] font_britanica_bold text-[clamp(1.2rem,4.5vw,1.5rem)] mt-2 mb-[clamp(0.5rem,2vw,0.8rem)]">About Us</h3>
                        <p className="text-gray-700 text-[clamp(0.9rem,3.5vw,1rem)] leading-relaxed">
                            Securing your business with litigation excellence in court and precision in corporate strategy.
                        </p>
                    </div>

                  
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="mb-[clamp(1.2rem,2.5vw,1.5rem)]">
                            <Image 
                                src={logo} 
                                alt="HAS Law Logo" 
                                width={320} 
                                height={110} 
                                className="mb-3 w-[clamp(16rem,20vw,20rem)] h-auto"
                            />
                        </div>
                  
                        <h3 className="text-[#A0001B] font_britanica_bold text-[clamp(1.5rem,2.5vw,2rem)] mb-[clamp(0.5rem,1vw,0.8rem)]">About Us</h3> 
                        <p className="text-[#4F000D] text-[clamp(1rem,1.8vw,1.5rem)] leading-relaxed mb-[clamp(2rem,4vw,3rem)]">
                            Securing your business with litigation excellence in court and precision in corporate strategy.
                        </p>
                        <div className="flex space-x-[clamp(1.5rem,2.5vw,2rem)]">
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={instagram} alt="Instagram" className="w-[clamp(2.5rem,4vw,3rem)] h-[clamp(2.5rem,4vw,3rem)]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={email} alt="Email" className="w-[clamp(2.5rem,4vw,3rem)] h-[clamp(2.5rem,4vw,3rem)]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={linkedin} alt="LinkedIn" className="w-[clamp(2.5rem,4vw,3rem)] h-[clamp(2.5rem,4vw,3rem)]" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-1 lg:ml-[clamp(3rem,5vw,5rem)]">
                        <h3 className="text-[#4F000D] font-bold text-[clamp(1.2rem,4.5vw,2rem)] lg:text-[clamp(1.5rem,2.2vw,2rem)] mb-[clamp(1.2rem,4vw,1.5rem)]">Our firm</h3>
                        <ul className="space-y-[clamp(0.5rem,1.5vw,0.8rem)]">
                            <li><Link href="/" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">Home</Link></li>
                            <li><Link href="/about" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">About Us</Link></li>
                            <li><Link href="/member" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">Members</Link></li>
                            <li><Link href="/achievements" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">Achievements</Link></li>
                            <li><Link href="/career" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">Careers</Link></li>
                            <li><Link href="/pro-bono" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">Pro Bono</Link></li>
                        </ul>
                    </div>
            
                    <div className="lg:col-span-1">
                        <h3 className="text-[#4F000D] font-bold text-[clamp(1.2rem,4.5vw,2rem)] lg:text-[clamp(1.5rem,2.2vw,2rem)] mb-[clamp(1.2rem,4vw,1.5rem)]">Explore Services</h3>
                        <ul className="space-y-[clamp(0.8rem,2.5vw,1rem)]">
                            <li><Link href="/service" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">Our Services</Link></li>
                            <li><Link href="/news" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">News & Insight</Link></li>
                            <li><Link href="/contact" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-[#4F000D] font-bold text-[clamp(1.2rem,4.5vw,2rem)] lg:text-[clamp(1.5rem,2.2vw,2rem)] mb-[clamp(1.2rem,4vw,1.5rem)]">Contact Us</h3>
                        <div className="space-y-[clamp(0.8rem,2.5vw,1rem)]">
                            <div className="flex items-start space-x-[clamp(1rem,3vw,1.5rem)]">
                                <Image src={emailIcon} alt="Email" className="w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)] flex-shrink-0 mt-0.5" />
                                <a href="mailto:info@has-law.com" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">info@has-law.com</a>
                            </div>
                            <div className="flex items-start space-x-[clamp(1rem,3vw,1.5rem)]">
                                <Image src={phoneIcon} alt="Phone" className="w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)] flex-shrink-0 mt-0.5" />
                                <a href="tel:+622157905183" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">+6221 5790 5183</a>
                            </div>
                            <div className="flex items-start space-x-[clamp(1rem,3vw,1.5rem)]">
                                <Image src={whatsappIcon} alt="WhatsApp" className="w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)] flex-shrink-0 mt-0.5" />
                                <a href="https://wa.me/6287857905183" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">+62 8785 790 5183</a>
                            </div>
                            <div className="flex items-start space-x-[clamp(1rem,3vw,1.5rem)]">
                                <Image src={locationIcon} alt="Location" className="w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)] flex-shrink-0 mt-0.5" />
                                <p className="text-[#4F000D] leading-relaxed text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">
                                    Plaza Sentral 15th Floor, Jln. Jendral Sudirman Kav 47 - 48, Jakarta Selatan 12930, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#4F000D] mt-[clamp(2.5rem,5vw,3rem)] pt-[clamp(1.2rem,2.5vw,1.5rem)]">
                    <div className="text-center">
                        <p className="text-[#4F000D] text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.5rem)]">
                            Copyright © 2025 - Has Law
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;