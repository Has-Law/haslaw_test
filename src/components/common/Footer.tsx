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
      
        <footer className="bg-[#Ffffff] py-5 px-6 md:px-10 lg:px-32 font_britanica_regular">
            <div className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-24">
                    
                    <div className="lg:hidden">
                        <div className="flex flex-row justify-between items-center mb-6">
                            <Image 
                                src={logo} 
                                alt="HAS Law Logo" 
                                className="w-36 h-auto"
                            />
                            <div className="flex space-x-4">
                                <Link href="#" className="hover:opacity-75 transition-opacity">
                                    <Image src={instagram} alt="Instagram" className="w-8 h-8" />
                                </Link>
                                <Link href="#" className="hover:opacity-75 transition-opacity">
                                    <Image src={email} alt="Email" className="w-8 h-8" />
                                </Link>
                                <Link href="#" className="hover:opacity-75 transition-opacity">
                                    <Image src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                                </Link>
                            </div>
                        </div>
                        <h3 className="text-[#A0001B] font_britanica_bold text-xl mt-2 mb-2">About Us</h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            Securing your business with litigation excellence in court and precision in corporate strategy.
                        </p>
                    </div>

                  
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="mb-5">
                            <Image 
                                src={logo} 
                                alt="HAS Law Logo" 
                                width={320} 
                                height={110} 
                                className="mb-3"
                            />
                        </div>
                  
                        <h3 className="text-[#A0001B] font_britanica_bold text-2xl mb-2">About Us</h3> 
                        <p className="text-[#4F000D] text-xl leading-relaxed mb-12">
                            Securing your business with litigation excellence in court and precision in corporate strategy.
                        </p>
                        <div className="flex space-x-8">
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={instagram} alt="Instagram" width={48} height={48} />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={email} alt="Email" width={48} height={48} />
                            </Link>
                            <Link href="#" className="hover:opacity-80 transition-opacity">
                                <Image src={linkedin} alt="LinkedIn" width={48} height={48} />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-1 lg:ml-20">
                        <h3 className="text-[#4F000D] font-bold text-2xl mb-5">Our firm</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">Home</Link></li>
                            <li><Link href="/about" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">About Us</Link></li>
                            <li><Link href="/member" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">Members</Link></li>
                            <li><Link href="/achievements" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">Achievements</Link></li>
                            <li><Link href="/career" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">Careers</Link></li>
                            <li><Link href="/pro-bono" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">Pro Bono</Link></li>
                        </ul>
                    </div>
            
                    <div className="lg:col-span-1">
                        <h3 className="text-[#4F000D] font-bold text-2xl mb-5">Explore Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/service" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">Our Services</Link></li>
                            <li><Link href="/news" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">News & Insight</Link></li>
                            <li><Link href="/contact" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-[#4F000D] font-bold text-2xl mb-5">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-5">
                                <Image src={emailIcon} alt="Email" width={32} height={32} className="flex-shrink-0 mt-0.5" />
                                <a href="mailto:info@has-law.com" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">info@has-law.com</a>
                            </div>
                            <div className="flex items-start space-x-5">
                                <Image src={phoneIcon} alt="Phone" width={32} height={32} className="flex-shrink-0 mt-0.5" />
                                <a href="tel:+622157905183" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">+6221 5790 5183</a>
                            </div>
                            <div className="flex items-start space-x-5">
                                <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32} className="flex-shrink-0 mt-0.5" />
                                <a href="https://wa.me/6287857905183" className="text-[#4F000D] hover:text-[#7A0015] transition-colors text-xl">+62 8785 790 5183</a>
                            </div>
                            <div className="flex items-start space-x-5">
                                <Image src={locationIcon} alt="Location" width={32} height={32} className="flex-shrink-0 mt-0.5" />
                                <p className="text-[#4F000D] leading-relaxed text-xl">
                                    Plaza Sentral 15th Floor, Jln. Jendral Sudirman Kav 47 - 48, Jakarta Selatan 12930, Indonesia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#4F000D] mt-10 pt-5">
                    <div className="text-center">
                        <p className="text-[#4F000D] text-xl">
                            Copyright © 2025 - Has Law
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;