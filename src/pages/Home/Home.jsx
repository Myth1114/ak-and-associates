import { Link } from "react-router-dom";
import AboutSection from "../../components/home/AboutSection";
import CTASection from "../../components/home/CTASection";
import HeroSection from "../../components/home/HeroSection";

import IndustriesSection from "../../components/home/IndustriesSection";
import LeadershipSection from "../../components/home/LeadershipSection";
import ProcessSection from "../../components/home/ProcessSection";
import ServicesSection from "../../components/home/ServicesSection";

// import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <AboutSection />
      <LeadershipSection />
      <CTASection />
    </>
  );
};

export default Home;
