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
  const [isHovered, setIsHovered] = useState(false);
  
  const duplicateAchievements = [...achievements, ...achievements, ...achievements];

  return (
    <div className="flex flex-col relative items-center aspect-[1280/534] mt-[5vw]">
      <Image 
        src={achievementBg} 
        alt="Achievement Background" 
        className="w-full object-cover absolute top-0 left-0 z-0" 
      />
      
      <div className="flex flex-col items-center py-[2vw] px-[10vw] relative z-10 gap-y-[2vw] w-full">
        <h1 className="font_lato_bold text-white text-[clamp(5vw,5vw,5rem)] tracking-[0.2vw]">
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
                className="flex-shrink-0 px-[1vw] flex items-center justify-center w-[13vw]"
              >
                <Image
                  src={achievement.image}
                  alt={`Achievement award ${(index % achievements.length) + 1}`}
                  className="w-[10vw]"
                  priority={index < achievements.length} 
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        <p className="font_britanica_regular text-white text-[clamp(2.3vw,2.3vw,2rem)] text-left ">
          Our history of favorable outcomes speaks for itself. We are defined by the results 
          we deliver for our clients in their most critical and complex matters.
        </p>
        
         <Link 
          href="/achievements"
          className="bg-transparent font_britanica_black text-[clamp(1.7vw,1.7vw,2rem)] border-[0.2vw] border-white text-white p-[1vw] cursor-pointer rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 "
        >
          See Detail Achievements
        </Link>
      </div>
    </div>
  );
};

export default Achievement;

