'use client';

import { useState } from 'react';
import Image, { StaticImageData } from "next/image";
import bg from "@/assets/achievments/bg-detail-achievements.svg"; 
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
import bgMobile from "@/assets/achievments/bg-mobile.webp";

interface Achievement {
  id: number;
  src: StaticImageData;
  title: string;
  subTitle?: string | string[];
  description?: string | string[];
}

export default function Achievements() {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const achievements: Achievement[] = [
    { id: 1, src: hukum25, title: "Practice Leaders 2025", subTitle: ["Practice Leaders 2025"], description: ["Elite I", "Criminal Law", "Insurance", "Arbitration, Ligitation & Dispute Resolution", "Elite III", "Bankruptcy, Insolvency & Restructuring", "Project, Mining, Energy & Renewable Energy"] },
    { id: 2, src: alb25, title: "ALB Indonesia Law Awards 2025", subTitle: "Finalist" , description:["Young Lawyer of the Year (Law Firm)", "InsurraDispute Resolution Boutique Law Fir of the Yearnce", "Insurance Law Firm of the Year", "Litigation Law Firm of the Year", "Indonesia Law Firm of the Year"] },
    { id: 3, src: next26, title: `Hukumonline's NexGen Lawyers 2025` },
    { id: 4, src: iflr, title: "IFLR 1000 2024",subTitle:"Notable" , description: ["Project Development"] },
    { id: 5, src: star24, title: "ALB Litigators of Asia 2024", description: ["Rio Andre Winter Siahaan"] },
    { id: 6, src: alb23, title: "Thomson Reuters Asia Legal Business 2023", subTitle:"Finalist", description: ["Insurance Law Firm", "Rising Law Firm", "Litigation Law Firm"] },
    { id: 7, src: hukum, title: "Hukumonline", description: ["Top 100 Indonesian Law Firms", "Top 50 Largest-Full Service Law Firms"] },
    { id: 8, src: litigation, title: "Benchmark Litigation", subTitle: "Tier 3" , description: ["Commercial and Transactions Dispute"]},
    { id: 9, src: alb, title: "Thomson Reuters ALB Indonesia Law Awards 2024", subTitle: "Finalist" , description:["Litigation Law Firm of the Year", "Insurance Law Firm of the Year", "Rising Law Firm of the Year", "Dispute Resolution Lawyer of the Year"] }, 
    { id: 10, src: leader23, title: "Hukumonline" }, 
    { id: 11, src: leader23, title: "Practice Leaders 2023", subTitle: "Practice Leaders 2023", description:["Elite I", "Arbitration, Litigation & Dispute Resolution", "Insurance", "Elite II", "Criminal Law"] },
    { id: 12, src: star25, title: "Indonesia Rising Stars 2025", description: ["Rio Andre Winter Siahaan"] },
    { id: 13, src: hukum24, title: "Hukumonline", subTitle: "Top 100 Indonesian Law Firms 2024", description:["Midsize Full Service Law Firms"] },
    { id: 14, src: next24, title: `Hukumonline's NexGen Lawyers 2024` },
    { id: 15, src: hukum23, title: "Hukumonline", subTitle: "Top 100 Indonesian Law Firms 2023"},
    { id: 16, src: iflr, title: "IFLR 1000 2025", subTitle: "Notable", description: ["Project Development"] },
  ];

  const grid1 = achievements.slice(0, 6);
  const grid2 = achievements.slice(6, 11);
  const grid3 = achievements.slice(11, 16);

  const handleToggleDescription = (id: number) => {
    setExpandedIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        newIds.add(id);
      }
      return newIds;
    });
  };

  const renderAchievementCard = (item: Achievement) => (
    <div
      key={item.id}
      onClick={() => (item.description || item.subTitle) && handleToggleDescription(item.id)}
      className={`group flex flex-col transition-all duration-300 cursor-pointer h-full`}
    >
 
      <div className="w-full h-[clamp(6rem,20vw,10rem)] sm:h-[clamp(8rem,25vw,12rem)] flex items-center justify-center p-2 mb-4">
        <Image src={item.src} alt={item.title} className="object-contain max-h-full max-w-full" />
      </div>
      
    
      <div className="text-[#4F000D] font_britanica_bold text-[clamp(0.8rem,2.2vw,1.25rem)] sm:text-[clamp(1rem,2.5vw,1.5rem)] leading-tight min-h-[clamp(2.5rem,6vw,3rem)] sm:min-h-[clamp(3rem,8vw,3.5rem)] flex items-center justify-center text-center px-1">
        {item.title}
      </div>
      
     
      <div className="flex justify-center my-2">
        <div 
          className={`h-0.5 bg-black transition-all duration-300 ${
            expandedIds.has(item.id) ? 'w-full' : 'w-0 group-hover:w-full'
          }`}
        />
      </div>

      {expandedIds.has(item.id) && (
        <div className="flex flex-col items-center text-center animate-fade-in mt-2">
          {item.subTitle && (
            <div className="text-[clamp(0.9rem,2vw,1.125rem)] sm:text-xl text-[#A0001B] font_britanica_black leading-relaxed mb-2">
              {Array.isArray(item.subTitle) ? (
                item.subTitle.map((sub, i) => <span key={i} className="block">{sub}</span>)
              ) : (
                <span>{item.subTitle}</span>
              )}
            </div>
          )}
          {item.description && (
            <div className="text-[clamp(0.8rem,1.8vw,1rem)] sm:text-lg text-black font_britanica_regular leading-relaxed">
              {Array.isArray(item.description) ? (
                item.description.map((desc, i) => <span key={i} className="block">{desc}</span>)
              ) : (
                <span>{item.description}</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-[#F2F2F2] min-h-screen w-full relative font_britanica_reguler">
      <div className="absolute top-0 w-full">
        <Image src={bg} alt="bg" className="w-full h-auto sm:block hidden" priority />
        <Image src={bgMobile} alt="bg" className="w-full h-auto sm:hidden block" priority />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F2F2F2] to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center pt-[clamp(2rem,6vw,6rem)] pb-[clamp(1rem,3vw,2rem)] text-center">
          <h1 className="text-white text-[clamp(1.5rem,6vw,6rem)] sm:text-[clamp(1.8vw,3vw,4.5rem)] mt-[clamp(1rem,3vw,2.5rem)] font_britanica_black tracking-wide">
            Achievements
          </h1>
          <p className="text-gray-200 font_britanica_regular text-[clamp(0.85rem,4vw,1.2rem)] sm:text-[clamp(1vw,2vw,1.5rem)] text-justify text-[#131313] max-w-6xl">
            Our commitment to excellence is consistently recognized by the
            industry. Below are some of the awards and achievements that mark
            our dedication to providing premier legal services.
          </p>
        </div>

        <div className="w-full max-w-[95vw] mt-8 px-4 pb-20">
          {/* Desktop Layout - 3 columns */}
          <div className="hidden sm:flex flex-row justify-center items-start gap-8">
            <div className="w-full md:w-1/3 flex flex-col items-center gap-y-16">
              {grid1.map(item => renderAchievementCard(item))}
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center gap-y-16">
              {grid2.map(item => renderAchievementCard(item))}
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center gap-y-16">
              {grid3.map(item => renderAchievementCard(item))}
            </div>
          </div>
          
          {/* Mobile Layout - 2 columns with perfect alignment */}
          <div className="sm:hidden grid grid-cols-2 gap-x-3 gap-y-6 items-start">
            {achievements.map(item => (
              <div key={item.id} className="w-full">
                {renderAchievementCard(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}