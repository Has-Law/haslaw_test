const Hero = () => {
    return(
        <div className="flex flex-col sm:flex-row items-center justify-center bg-[#871614] w-full py-[3vw] px-[8vw] gap-x-[4vw]">
            <h1 className="font_britanica_black text-[clamp(6vw,7vw,6rem)] sm:text-[clamp(3vw,3vw,5rem)] text-white leading-tight">Litigation Service</h1>
            <p className="font_britanica_regular text-[clamp(0.85rem,4vw,1.2rem)]  sm:text-[clamp(1.3vw,1.3vw,4rem)] text-justify text-white">We transform complexity into advantage, using sharp case assessments, disciplined execution, and evidence-driven analysis to build compelling narratives. From courts and regulators to arbitral tribunals and negotiations, we safeguard your interests in major disputes spanning anti-corruption, shareholder battles, energy, finance, and technology—with clear strategy and measurable results.</p>
        </div>
    )
}
export default Hero
