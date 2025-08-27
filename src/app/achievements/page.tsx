import Image from "next/image";
import bg from "@/assets/achievments/bg-detail-achievements.svg"; 
import alb from "@/assets/achievments/alb.png";
import hukum from "@/assets/achievments/hukum.png";
import next24 from "@/assets/achievments/next24.png";
import next26 from "@/assets/achievments/next26.png";
import litigation from "@/assets/achievments/litigation.png";
import hukum23 from "@/assets/achievments/hukum23.png";
import iflr from "@/assets/achievments/iflr.png";
import alb23 from "@/assets/achievments/alb23.png";
import leader24 from "@/assets/achievments/leader24.png";
import leader23 from "@/assets/achievments/leader23.png";
import hukum24 from "@/assets/achievments/hukum24.png";
import hukum25 from "@/assets/achievments/hukum25.png";
import star25 from "@/assets/achievments/star25.png";
import star24 from "@/assets/achievments/star24.png";

export default function Achievements() {

  const achievements = [

    { src: hukum25, title: "Practice Leaders 2025" },
    { src: hukum, title: "Hukumonline" },
    { src: star25, title: "Indonesia Rising Stars 2025" },
    { src: next26, title: `Hukumonline's NexGen Lawyers 2025` },
    { src: litigation, title: "Benchmark Litigation" },
    { src: hukum24, title: "Hukumonline" },
    { src: iflr, title: "IFLR 1000 2024" },
    { src: alb, title: "Thomson Reuters ALB Indonesia Law Awards 2024 " }, 
    { src: next24, title: `Hukumonline's NexGen Lawyers 2024` },
    { src: star24, title: "ALB Litigators of Asia 2024" },
    { src: leader23, title: "Hukumonline" }, 
    { src: hukum23, title: "Hukumonline" },
    { src: alb23, title: "Thomson Reuters Asia Legal Business 2023" },
    { src: leader24, title: "Practice Leaders 2023" },
  ];

  return (
    <div className="bg-[#F2F2F2] min-h-screen w-full relative font_britanica_reguler ">
  
      <div className="absolute top-0 ">
        <Image src={bg} alt="bg" className="w-[100vw] h-[60vw]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F2F2F2] to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
     
        <div className="w-full flex flex-col items-center pt-24 pb-8 text-center">
          <h1 className="text-white text-5xl md:text-7xl mb-15 mt-10 font_britanica_bold tracking-wide">
            Achievements
          </h1>
          <p className="text-gray-200 text-4xl max-w-7xl mt-4 font_britanica_regular px-4">
            Our commitment to excellence is consistently recognized by the
            industry. Below are some of the awards and achievements that mark
            our dedication to providing premier legal services.
          </p>
        </div>

        <div className="w-full  grid grid-cols-2 md:grid-cols-3 gap-y-16 max-w-[80vw] mt-24 px-4 pb-20">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className=" w-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="object-contain max-h-full max-w-full"
                  width={300}
                  height={250}
                />
              </div>

              <div className="text-[#4F000D] font_britanica_reguler font-bold text-[clamp(1.25rem,4vw,1.75rem)] leading-tight break-words max-w-[20rem] flex items-center justify-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
