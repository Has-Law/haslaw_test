const Hero = () => {
    return(
        <div className="flex flex-col sm:flex-row items-center justify-center bg-[#871614] w-full p-[8vw] gap-x-[4vw]">
            <h1 className="font_britanica_black text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(5vw,5vw,5rem)] text-white leading-tight">Corporate Service</h1>
            <p className="font_britanica_regular text-[clamp(3vw,3.8vw,4rem)] text-justify sm:text-[clamp(1.5vw,1.52vw,4rem)] text-white">Beyond disputes, every successful business is built upon a solid legal foundation. Our corporate services provide comprehensive support for your entire business lifecycle, from company establishment and commercial contracts to major transactions like mergers and acquisitions. Our proactive, business-savvy counsel ensures your operations are compliant, your transactions secure, and your company is structured for sustainable growth.</p>
        </div>
    )
}
export default Hero
