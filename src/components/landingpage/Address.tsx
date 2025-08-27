import Image from "next/image";
import phoneIcon from "@/assets/common/footer/phone-footer.svg"; 
import waIcon from "@/assets/common/footer/wa-footer.svg";

const Address = () => {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3531296021315!2d106.81378637540331!3d-6.21707626089426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7b8132100b7%3A0xa648aba444960aa8!2sPlaza%20Sentral!5e0!3m2!1sid!2sid!4v1754407995784!5m2!1sid!2sid";

    return (
        <div className="bg-[#f2f2f2] w-full flex justify-center items-center py-28 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-screen-2xl gap-y-16 lg:gap-x-20">
             
                <h1 className="font_britanica_black w-full text-[clamp(3rem,8vw,5rem)] leading-none lg:hidden">
                    Find Us
                </h1>

          
                <div className="w-full lg:w-2/3 flex justify-center order-2 lg:order-1">
                    <iframe
                        src={mapSrc}
                        className="w-full h-[75vw] max-h-[80vw] lg:h-[30vw] rounded-2xl shadow-xl"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>

                <div className="w-full lg:w-1/3 flex-col items-start justify-center gap-y-7 lg:gap-y-7 hidden lg:flex order-1 lg:order-2">
                    <h1 className="font_britanica_black text-[clamp(3rem,8vw,5rem)] leading-none">Find Us</h1>
                    
                    <div className="flex flex-col gap-y-8">
                
                        <div>
                            <h3 className="font_montserrat_bold text-[#780014] text-[clamp(1.25rem,3vw,2rem)]">Email</h3>
                            <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)]">info@has-law.com</p>
                        </div>
                        
             
                        <div>
                            <h3 className="font_montserrat_bold text-[#780014] text-[clamp(1.25rem,3vw,2rem)]">Telephone</h3>
                            <div className="flex flex-col gap-3 mt-2">
                                <div className="flex items-center gap-3">
                                    <Image src={phoneIcon} alt="phone" width={28} height={28} />
                                    <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)]">+6221 5790 5183</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src={waIcon} alt="whatsapp" width={28} height={28} />
                                    <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)]">+62 8785 790 5183</p>
                                </div>
                            </div>
                        </div>
                        
                  
                        <div>
                            <h3 className="font_montserrat_bold text-[#780014] text-[clamp(1.25rem,3vw,2rem)]">Address</h3>
                            <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)] leading-relaxed">
                                Plaza Sentral 15th Floor, Jln. Jendral Sudirman Kav 47 - 48, Jakarta Selatan 12930, Indonesia
                            </p>
                        </div>
                    </div>
                </div>

              
                <div className="w-full flex flex-col items-start justify-center gap-y-7 lg:gap-y-7 lg:hidden order-3">
                    <div className="flex flex-col gap-y-8">
                    
                        <div>
                            <h3 className="font_montserrat_bold text-[#780014] text-[clamp(1.25rem,3vw,2rem)]">Email</h3>
                            <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)]">info@has-law.com</p>
                        </div>
                        
                    
                        <div>
                            <h3 className="font_montserrat_bold text-[#780014] text-[clamp(1.25rem,3vw,2rem)]">Telephone</h3>
                            <div className="flex flex-col gap-3 mt-2">
                                <div className="flex items-center gap-3">
                                    <Image src={phoneIcon} alt="phone" width={28} height={28} />
                                    <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)]">+6221 5790 5183</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image src={waIcon} alt="whatsapp" width={28} height={28} />
                                    <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)]">+62 8785 790 5183</p>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div>
                            <h3 className="font_montserrat_bold text-[#780014] text-[clamp(1.25rem,3vw,2rem)]">Address</h3>
                            <p className="font_britanica_bold text-black text-[clamp(1.125rem,2.5vw,1.625rem)] leading-relaxed">
                                Plaza Sentral 15th Floor, Jln. Jendral Sudirman Kav 47 - 48, Jakarta Selatan 12930, Indonesia
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Address;