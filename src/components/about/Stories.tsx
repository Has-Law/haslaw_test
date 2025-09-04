import Image from "next/image";
import ornament from "@/assets/landingpage/background/ornament-about.webp"
import stories1 from "@/assets/about/image/stories1.webp";
import stories2 from "@/assets/about/image/stories2.webp";
const Stories = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-center mt-[5vw]  gap-y-[4vw] sm:gap-y-0 sm:gap-x-[1.6vw] px-[5vw] relative">
  <div className="w-full sm:w-[42vw] h-auto sm:h-[28vw] relative pb-[4vw] sm:pb-0">
  <Image src={ornament} alt="Ornament Background" className="hidden sm:block w-[50vw] sm:w-[28vw] absolute top-0 right-0 z-0" />
  <Image src={ornament} alt="Ornament Background" className="hidden sm:block w-[50vw] sm:w-[28vw] absolute bottom-0 left-0 z-0 rotate-90 scale-y-[-1] -translate-x-1/3" />
  <Image src={stories1} alt="Storie 1" className="hidden sm:block w-[32vw] sm:w-[17.2vw]  absolute top-0 left-0 z-10 -translate-x-1/12 translate-y-1/12" />
  <Image src={stories2} alt="Storie 2" className="hidden sm:block w-[42vw] sm:w-[22.4vw]  absolute translate-y-[55%]  right-0 z-10  " />
  <div className="hidden sm:flex flex-col items-center justify-center absolute bottom-0 translate-x-1/3 z-20 py-[2.5vw] sm:py-[1.2vw]  font_britanica_black text-white bg-[#780014] rounded-lg"
        style={{boxShadow: "0px 0px 8px 0px #00000066"}}
        >
            <h2 className="text-[clamp(6vw,6vw,6rem)] sm:text-[clamp(3.2vw,3.2vw,3.2rem)]">10</h2>
            <h2 className="text-center text-[clamp(3.5vw,3.5vw,3.5rem)] sm:text-[clamp(1.8vw,1.8vw,1.6rem)] w-[99%]">Years Experience</h2>
        </div>
        </div>
        <div className="flex flex-col gap-y-[4vw] sm:gap-y-[1.6vw] w-full sm:w-[42vw]  ">
            <h1 className="font_britanica_bold text-[clamp(7vw,7vw,7rem)] sm:text-[clamp(4vw,4vw,3.2rem)] bg-gradient-to-t from-black to-[#F20028] bg-clip-text text-transparent">Our Stories</h1>
            <p className="font_britanica_regular text-[clamp(4vw,4vw,4vw)] sm:text-[clamp(1.1vw,1.1vw,1.6rem)] text-black text-justify">At HAS Attorneys Law we believe that effective legal counsel goes beyond merely reacting to problems; it&apos;s about proactively safeguarding your future. For nearly a decade, our firm has been built on the principle that deep litigation experience provides the most practical and insightful foundation for all legal advice, whether it&apos;s navigating complex disputes or structuring secure business transactions. We are a dynamic team of experienced lawyers committed to delivering innovative, real-world solutions that truly protect your interests.  </p>
        </div>
    </div>
  );
}
export default Stories;