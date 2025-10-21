import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from "@/assets/common/footer/footer-logo.svg";
import logoMobile from "@/assets/common/footer/footer-logo-mobile.png";
import instagram from "@/assets/common/footer/instagram-footer.svg";
import email from "@/assets/common/footer/email-footer.svg";
import linkedin from "@/assets/common/footer/linkedin-footer.svg";
import emailIcon from "@/assets/common/footer/mail-footer.svg";
import phoneIcon from "@/assets/common/footer/phone-footer.svg";
import whatsappIcon from "@/assets/common/footer/wa-footer.svg";
import locationIcon from "@/assets/common/footer/location-footer.svg";
import business from "@/assets/common/footer/business.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-[clamp(1.2rem,2.5vw,2rem)] font_britanica_bold">
            <div className="mx-auto">

                <div className="lg:hidden flex flex-col gap-10 px-[clamp(1.5rem,4vw,8rem)]">
                    {/* Bagian Atas Mobile */}
                    <div>
                        <div className="flex flex-row justify-between items-center mb-[clamp(1.5rem,4vw,2rem)]">
                            <Image 
                                src={logoMobile} 
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
                                <Link href="#" className="hover:opacity-75 transition-opacity">
                                    <Image src={business} alt="LinkedIn" className="w-[clamp(1.8rem,6vw,2rem)] h-[clamp(1.8rem,6vw,2rem)]" />
                                </Link>
                            </div>
                        </div>
                        <p className="text-gray-700 text-[clamp(0.9rem,3.5vw,1rem)] leading-relaxed">
                            Securing your business with litigation excellence in court and precision in corporate strategy.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-[#4F000D] font_britanica_black text-[clamp(1.2rem,4.5vw,1.5rem)] mb-4">Our firm</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Home</Link></li>
                            <li><Link href="/about" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">About Us</Link></li>
                            <li><Link href="/member" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Lawyers</Link></li>
                            <li><Link href="/achievements" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Achievements</Link></li>
                            <li><Link href="/career" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Careers</Link></li>
                            <li><Link href="/pro-bono" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Pro Bono</Link></li>
                        </ul>
                    </div>
            
                    <div className="flex flex-col">
                        <h3 className="text-[#4F000D] font_britanica_black text-[clamp(1.2rem,4.5vw,1.5rem)] mb-4">Explore Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/service" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Our Services</Link></li>
                            <li><Link href="/news" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Insights</Link></li>
                            <li><Link href="/contact" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)]">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-[#4F000D] font_britanica_black text-[clamp(1.2rem,4.5vw,1.5rem)] mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <a href="mailto:info@has-law.com" className="flex items-start space-x-3 text-[#4F000D] hover:text-[#7A0015] transition-colors">
                                <Image src={emailIcon} alt="Email" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-[clamp(0.9rem,3.5vw,1.2rem)]">info@has-law.com</span>
                            </a>
                            <a href="tel:+622157905183" className="flex items-start space-x-3 text-[#4F000D] hover:text-[#7A0015] transition-colors">
                                <Image src={phoneIcon} alt="Phone" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-[clamp(0.9rem,3.5vw,1.2rem)]">+6221 5790 5183</span>
                            </a>
                            <a href="https://wa.me/6287857905183" className="flex items-start space-x-3 text-[#4F000D] hover:text-[#7A0015] transition-colors">
                                <Image src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-[clamp(0.9rem,3.5vw,1.2rem)]">+62 8785 790 5183</span>
                            </a>
                            <div className="flex items-start space-x-3">
                                <Image src={locationIcon} alt="Location" className="w-5 h-5 flex-shrink-0 mt-1" />
                                <p className="text-[#4F000D] leading-relaxed text-[clamp(0.9rem,3.5vw,1.2rem)] max-w-xs">
Plaza Sentral 15th Floor
Jln. Jendral Sudirman Kav 47-48
Jakarta Selatan 12930, Indonesia                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-row gap-[clamp(4rem,6vw,6rem)] lg:px-[clamp(1.5rem,10vw,15vw)]">
                    <div className="flex flex-col justify-start">
                        <div className="mb-[clamp(1.2rem,1.5vw,1.5rem)]">
                            <Image 
                                src={logo} 
                                alt="HAS Law Logo" 
                                width={320} 
                                height={110} 
                                className="mb-3 w-[clamp(15vw,25vw,20rem)] h-auto"
                            />
                        </div>
                        <p className="text-[#4F000D] text-[clamp(1vw,1vw,1.5rem)] leading-relaxed mb-[clamp(1.5vw,1.5vw,3rem)]">
                            Securing your business with litigation excellence in court and precision in corporate strategy.
                        </p>
                        <div className="flex space-x-[clamp(0.5vw,0.5vw,2rem)]">
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={instagram} alt="Instagram" className="w-[clamp(2.5vw,2.5vw,3rem)] h-[clamp(2.5vw,2.5vw,3rem)]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={email} alt="Email" className="w-[clamp(2.5vw,2.5vw,3rem)] h-[clamp(2.5vw,2.5vw,3rem)]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={linkedin} alt="LinkedIn" className="w-[clamp(2.5vw,2.6vw,3rem)] h-[clamp(2.5vw,2.6vw,3rem)]" />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={business} alt="Business" className="w-[clamp(2.5vw,2.6vw,3rem)] h-[clamp(2.5vw,2.6vw,3rem)]" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-[#4F000D] font_britanica_black text-[clamp(1.2rem,4.5vw,2rem)] lg:text-[clamp(1vw,1.5vw,2rem)] mb-[clamp(1vw,1vw,1.5rem)]">Our firm</h3>
                        <ul className="space-y-[clamp(0.5vw,0.5vw,0.8rem)]">
                            <li><Link href="/" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Home</Link></li>
                            <li><Link href="/about" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">About Us</Link></li>
                            <li><Link href="/member" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Lawyers</Link></li>
                            <li><Link href="/achievements" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Achievements</Link></li>
                            <li><Link href="/career" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Careers</Link></li>
                            <li><Link href="/pro-bono" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Pro Bono</Link></li>
                        </ul>
                    </div>
            
                    <div className="flex flex-col">
                        <h3 className="text-[#4F000D] font_britanica_black text-[clamp(1.2rem,4.5vw,2rem)] lg:text-[clamp(1vw,1.5vw,2rem)] text-nowrap mb-[clamp(1vw,1.5vw,1.5rem)]">Explore Services</h3>
                        <ul className="space-y-[clamp(0.5vw,0.5vw,1rem)]">
                            <li><Link href="/service" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Our Services</Link></li>
                            <li><Link href="/news" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Insights</Link></li>
                            <li><Link href="/contact" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-[#4F000D] font_britanica_black text-[clamp(1.2rem,4.5vw,2rem)] lg:text-[clamp(1vw,1.5vw,2rem)] mb-[clamp(1vw,1.5vw,1.5rem)]">Contact Us</h3>
                        <div className="space-y-[clamp(0.5vw,0.5vw,1rem)]">
                            <div className="flex items-start space-x-[clamp(1rem,1vw,1.5rem)]">
                                <Image src={emailIcon} alt="Email" className="w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)] flex-shrink-0 " />
                                <a href="mailto:info@has-law.com" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">info@has-law.com</a>
                            </div>
                            <div className="flex items-start space-x-[clamp(1rem,1vw,1.5rem)]">
                                <Image src={phoneIcon} alt="Phone" className="w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)] flex-shrink-0 " />
                                <a href="tel:+622157905183" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">+6221 5790 5183</a>
                            </div>
                            <div className="flex items-start space-x-[clamp(1rem,1vw,1.5rem)]">
                                <Image src={whatsappIcon} alt="WhatsApp" className="w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)] flex-shrink-0 " />
                                <a href="https://wa.me/6287857905183" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">+62 8785 790 5183</a>
                            </div>
                            <div className="flex items-start space-x-[clamp(1rem,1vw,1.5rem)]">
                                <Image src={locationIcon} alt="Location" className="w-[clamp(1.5rem,2vw,2rem)] h-[clamp(1.5rem,2vw,2rem)] flex-shrink-0 " />
                                <p className="text-[#4F000D] leading-relaxed text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)] max-w-xs">
Plaza Sentral 15th Floor
Jln. Jendral Sudirman Kav 47-48
Jakarta Selatan 12930, Indonesia                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#4F000D] mt-[clamp(2.5rem,5vw,3rem)] pt-[clamp(1.2rem,2.5vw,1.5rem)]">
                    <div className="text-center px-[clamp(1.5rem,4vw,8rem)] lg:px-0">
                        <p className="text-[#4F000D] text-[clamp(0.9rem,3.5vw,1.2rem)] lg:text-[clamp(1vw,1vw,1.5rem)]">
                            Copyright © {new Date().getFullYear()} - Has Law
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;