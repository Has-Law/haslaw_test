'use client';

import { useState } from 'react';
import Image, { StaticImageData } from "next/image";
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
    { id: 2, src: next26, title: `Hukumonline's NexGen Lawyers 2025` },
    { id: 3, src: iflr, title: "IFLR 1000 2024",subTitle:"Notable" , description: ["Project Development"] },
    { id: 4, src: star24, title: "ALB Litigators of Asia 2024", description: ["Rio Andre Winter Siahaan"] },
    { id: 5, src: alb23, title: "Thomson Reuters Asia Legal Business 2023", subTitle:"Finalist", description: ["Insurance Law Firm", "Rising Law Firm", "Litigation Law Firm"] },
    { id: 6, src: hukum, title: "Hukumonline", description: ["Top 100 Indonesian Law Firms", "Top 50 Largest-Full Service Law Firms"] },
    { id: 7, src: litigation, title: "Benchmark Litigation", subTitle: "Tier 3" , description: ["Commercial and Transactions Dispute"]},
    { id: 8, src: alb, title: "Thomson Reuters ALB Indonesia Law Awards 2024", subTitle: "Finalist" , description:["Litigation Law Firm of the Year", "Insurance Law Firm of the Year", "Rising Law Firm of the Year", "Dispute Resolution Lawyer of the Year"] }, 
    { id: 9, src: leader23, title: "Hukumonline" }, 
    { id: 10, src: leader24, title: "Practice Leaders 2023", subTitle: "Practice Leaders 2023", description:["Elite I", "Arbitration, Litigation & Dispute Resolution", "Insurance", "Elite II", "Criminal Law"] },
    { id: 11, src: star25, title: "Indonesia Rising Stars 2025", description: ["Rio Andre Winter Siahaan"] },
    { id: 12, src: hukum24, title: "Hukumonline", subTitle: "Top 100 Indonesian Law Firms 2024", description:["Midsize Full Service Law Firms"] },
    { id: 13, src: next24, title: `Hukumonline's NexGen Lawyers 2024` },
    { id: 14, src: hukum23, title: "Hukumonline", subTitle: "Top 100 Indonesian Law Firms 2023"},
  ];

  const grid1 = achievements.slice(0, 5);
  const grid2 = achievements.slice(5, 10);
  const grid3 = achievements.slice(10, 14);

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
      className={`group flex flex-col items-center text-center gap-2 p-4 rounded-lg transition-all duration-300 cursor-pointer `}
    >
      <div className="w-full h-48 flex items-center justify-center">
        <Image src={item.src} alt={item.title} className="object-contain max-h-full max-w-full" />
      </div>
      
      <div className="text-[#4F000D] font_britanica_bold text-2xl leading-tight min-h-[3.5rem] flex items-center justify-center mt-4">
        {item.title}
      </div>
      
      <div 
        className={`h-0.5 bg-black transition-all duration-300 ${
          expandedIds.has(item.id) ? 'w-full my-2' : 'w-0 group-hover:w-full group-hover:my-2'
        }`}
      />

      {expandedIds.has(item.id) && (
        <div className="flex flex-col items-center text-center animate-fade-in">
          {item.subTitle && (
            <div className="text-xl text-[#A0001B] font_britanica_black leading-relaxed">
              {Array.isArray(item.subTitle) ? (
                item.subTitle.map((sub, i) => <span key={i} className="block">{sub}</span>)
              ) : (
                <span>{item.subTitle}</span>
              )}
            </div>
          )}
          {item.description && (
            <div className="mt-2 text-lg text-black font_britanica_regular leading-relaxed">
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
        <Image src={bg} alt="bg" className="w-full h-auto" priority />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F2F2F2] to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center pt-24 pb-8 text-center">
          <h1 className="text-white text-5xl md:text-4xl mt-10 font_britanica_bold tracking-wide">
            Achievements
          </h1>
          <p className="text-gray-200 text-2xl md:text-3xl max-w-7xl mt-4 font_britanica_regular px-4">
            Our commitment to excellence is consistently recognized by the
            industry. Below are some of the awards and achievements that mark
            our dedication to providing premier legal services.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 max-w-[80vw] mt-24 px-4 pb-20">
          <div className="w-full md:w-1/3 flex flex-col items-center gap-y-16">
            {grid1.map(item => renderAchievementCard(item))}
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center gap-y-16 ">
            {grid2.map(item => renderAchievementCard(item))}
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center gap-y-16">
            {grid3.map(item => renderAchievementCard(item))}
          </div>
        </div>
      </div>
    </div>
  );
}