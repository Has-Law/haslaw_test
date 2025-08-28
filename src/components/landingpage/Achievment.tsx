'use client';
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import achievementBg from "@/assets/landingpage/background/achievement.webp";
import alb23 from "@/assets/landingpage/image/alb23.webp";
import alb24 from "@/assets/landingpage/image/alb24.webp";
import leader23 from "@/assets/landingpage/image/leader23.webp";
import bench24 from "@/assets/landingpage/image/bench24.webp";
import top23 from "@/assets/landingpage/image/top23.webp";
import top24 from "@/assets/landingpage/image/top24.webp";
import iflr24 from "@/assets/landingpage/image/IFLR24.webp";
import Link from "next/link";

const achievements = [
  { image: alb23 },
  { image: alb24 },
  { image: leader23 },
  { image: bench24 },
  { image: top23 },
  { image: top24 },
  { image: iflr24 }
];

const Achievement = () => {
  const duplicateAchievements = [...achievements, ...achievements, ...achievements];

    return (
        <div className="relative flex flex-col items-center justify-center 
                       py-16 md:py-0 md:aspect-[1280/534] mt-12 md:mt-[5vw]">
            <Image 
                src={achievementBg} 
                alt="Achievement Background" 
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 z-0" 
            />
            
            <div className="relative z-10 flex flex-col items-center 
                           px-6 md:px-[10vw] py-8 md:py-[2vw] 
                           gap-y-8 md:gap-y-[2vw] w-full">
                
                <h1 className="font_lato_bold text-white text-center
                               text-4xl md:text-[clamp(5vw,5vw,5rem)] 
                               tracking-wide md:tracking-[0.2vw]">
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
                            
                                className="flex-shrink-0 px-2 md:px-[1vw] flex items-center justify-center w-24 md:w-[13vw]"
                            >
                                <Image
                                    src={achievement.image}
                                    alt={`Achievement award ${index + 1}`}
                               
                                    className="w-24 md:w-[10vw]"
                                    priority={index < achievements.length} 
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
                
                <p className="font_britanica_regular text-white text-center 
                              text-base md:text-[clamp(2.3vw,2.3vw,2rem)] max-w-5xl">
                    Our history of favorable outcomes speaks for itself. We are defined by the results 
                    we deliver for our clients in their most critical and complex matters.
                </p>
                
                <Link 
                    href="/achievements"
                    className="bg-transparent font_britanica_black border-2 md:border-[0.2vw] 
                               border-white text-white px-6 py-2 md:p-[1vw]
                               text-base md:text-[clamp(1.7vw,1.7vw,2rem)] 
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