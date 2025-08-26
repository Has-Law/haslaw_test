const Hero = () => {
    return(
        <div className="flex flex-col sm:flex-row items-center justify-center bg-[#871614] w-full p-[8vw] gap-x-[4vw]">
            <h1 className="font_britanica_black text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(5vw,5vw,5rem)] text-white leading-tight">Litigation Service</h1>
            <p className="font_britanica_regular text-[clamp(3vw,3.8vw,4rem)] text-justify sm:text-[clamp(1.5vw,1.52vw,4rem)] text-white">When disputes arise, you need more than just a lawyer, you need a formidable advocate. Our litigation team specializes in representing clients across a wide range of complex disputes, from commercial and administrative cases to high-stakes criminal defense. We combine meticulous case preparation with powerful courtroom advocacy to protect your rights and secure the most favorable outcome.</p>
        </div>
    )
}
export default Hero
