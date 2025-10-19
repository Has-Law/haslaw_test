'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import achievementBg from "@/assets/landingpage/background/achievement.webp";
import alb from "@/assets/achievments/alb.png";
import alb25 from "@/assets/achievments/alb25.png";
import hukum from "@/assets/achievments/hukum.png";
import next24 from "@/assets/achievments/next24.png";
import next26 from "@/assets/achievments/next26.png";
import litigation from "@/assets/achievments/litigation.png";
import hukum23 from "@/assets/achievments/hukum23.png";
import iflr from "@/assets/achievments/iflr.png";
import alb23 from "@/assets/achievments/alb23.png";

import leader23 from "@/assets/achievments/leader23.png";
import hukum24 from "@/assets/achievments/hukum24.png";
import hukum25 from "@/assets/achievments/hukum25.png";
import star25 from "@/assets/achievments/star25.png";
import star24 from "@/assets/achievments/star24.png";
import Link from "next/link";

const achievements = [
  { image: alb23 },
  { image: alb25 },
  { image: hukum },
  { image: next24 },
  { image: next26 },
  { image: litigation },
  { image: hukum23 },
  { image: iflr },
  { image: hukum24 },
  { image: hukum25 },
  { image: star25 },
  { image: star24 },
  { image: alb },
  { image: leader23 },
];

const Achievement = () => {
  const duplicateAchievements = [...achievements, ...achievements, ...achievements];

    return (
    <div className="relative flex flex-col items-center justify-center 
               py-12 md:py-0 md:aspect-[1280/400] mt-8 md:mt-[5.6vw]">
            <Image 
                src={achievementBg} 
                alt="Achievement Background" 
                fill
                style={{ objectFit: 'cover' }}
                className="absolute top-0 left-0 z-0 md:rounded-[6rem] sm:rounded-3xl" 
            />
            
            <div className="relative z-10 flex flex-col items-center 
                           px-6 md:px-[8vw] py-8 md:py-[1.3vw] 
                           gap-y-8 md:gap-y-[1.3vw] w-full">
                
                <h1 className="font_britanica_black text-white text-center
                               text-3xl md:text-[clamp(2.8vw,2.8vw,3rem)] 
                               tracking-wide md:tracking-[0.1vw]">
                    Achievements
                </h1>
                
                <div className="w-full overflow-hidden relative">
                    <motion.div
                        className="flex"
                        animate={{
                           
                            x: [0, '-100%'], 
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30, 
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicateAchievements.map((achievement, index) => (
                            <div 
                                key={index} 
                                className="flex-shrink-0 px-1 md:px-[0.4vw] flex items-center justify-center w-20 md:w-[7.5vw]"
                            >
                                <Image
                                    src={achievement.image}
                                    alt={`Achievement award ${index + 1}`}
                                    className="w-20 md:w-[5.5vw]"
                                    priority={index < achievements.length} 
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
                
                <p className="font_britanica_regular text-white text-center 
                              text-base md:text-[clamp(1.4vw,1.4vw,1.3rem)] max-w-4xl">
                    Our history of favorable outcomes speaks for itself. We are defined by the results 
                    we deliver for our clients in their most critical and complex matters.
                </p>
                
                <Link 
                    href="/achievements"
                    className="bg-transparent font_britanica_black border-2 md:border-[0.12vw] 
                               border-white text-white px-6 py-2 md:p-[0.6vw]
                               text-base md:text-[clamp(1.1vw,1.1vw,1.3rem)] 
                               cursor-pointer rounded-full hover:bg-white hover:text-gray-800 
                               transition-all duration-300"
                >
                    See Detail Achievements
                </Link>
            </div>
        </div>
    );
};

export default Achievement;