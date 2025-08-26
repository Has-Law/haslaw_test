const Address = () => {
    return(
         <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-x-[3vw] px-[5vw] sm:px-[10vw] mt-[5vw] ">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3531296021315!2d106.81378637540331!3d-6.21707626089426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7b8132100b7%3A0xa648aba444960aa8!2sPlaza%20Sentral!5e0!3m2!1sid!2sid!4v1754407995784!5m2!1sid!2sid" 
                className="sm:w-[80vw] w-auto h-[80vw] sm:h-[40vw] "
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" 
            >
            </iframe>
            <div className="flex flex-col items-start justify-center gap-y-[1vw]">
                <h1 className="font_lato_bold text-black text-[clamp(10vw,10vw,10rem)] sm:text-[clamp(5vw,5vw,5rem)]">Find Us</h1>
                <div>
                    <h3 className="font_montserrat_bold text-[#780014] text-[clamp(5vw,5vw,5rem)] sm:text-[clamp(3vw,3vw,2rem)]">Email</h3>
                    <p className="font_britanica_bold text-black text-[clamp(3vw,3vw,4rem)] sm:text-[clamp(2vw,2vw,4rem)]">info@has-law.com</p>
                </div>
                <div>
                    <h3 className="font_montserrat_bold text-[#780014] text-[clamp(5vw,5vw,5rem)] sm:text-[clamp(3vw,3vw,2rem)]">Telephone</h3>
                    <p className="font_britanica_bold text-black text-[clamp(3vw,3vw,4rem)] sm:text-[clamp(2vw,2vw,4rem)]">info@has-law.com</p>
                </div>
                <div>
                    <h3 className="font_montserrat_bold text-[#780014] text-[clamp(5vw,5vw,5rem)] sm:text-[clamp(3vw,3vw,2rem)]">Address</h3>
                    <p className="font_britanica_bold text-black text-[clamp(3vw,3vw,4rem)] sm:text-[clamp(2vw,2vw,4rem)] text-justify pr-[5vw]">Plaza Sentral 15th Floor, Jln. Jendral Sudirman Kav 47 - 48, Jakarta Selatan 12930, Indonesia</p>
                </div>
                
            </div>

        </div>
    );
};

export default Address;