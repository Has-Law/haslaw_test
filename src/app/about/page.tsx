import Hero from "@/components/about/Hero";
import License from "@/components/about/License";
import Reason from "@/components/about/Reason";
import Stories from "@/components/about/Stories";
import Values from "@/components/about/Values";
import VisiMisi from "@/components/about/Visi-misi";
import { Metadata } from "next";
export const metadata : Metadata = {
    title : 'about'
}

const AboutPage = () => {
  return (
    <div className="bg-[#F2F2F2]">
    <Hero/>
    <Stories />
    <VisiMisi />
    <Values />
    <Reason />
    <License/>
    </div>
  );
}
export default AboutPage;
