import Hero from "@/components/landingpage/Hero";
import AboutSec2 from "@/components/landingpage/About-sec2";
import Service from "@/components/landingpage/Service";
import Team from "@/components/landingpage/Team";
import Achievement from "@/components/landingpage/Achievment";
import Address from "@/components/landingpage/Address";
const Home = () => {
  return (
    <div className="home bg-[#F2F2F2] ">
      <Hero />
      
      <AboutSec2 />
      <Service/>
      <Team />
      <Achievement />
      <Address />
    </div>
  );
}
export default Home;