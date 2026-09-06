import { useRef } from "react";

import AboutSection from "../../components/home/AboutSection";
import CTASection from "../../components/home/CTASection";
import HeroSection from "../../components/home/HeroSection";
import IndustriesSection from "../../components/home/IndustriesSection";
import LeadershipSection from "../../components/home/LeadershipSection";
import ProcessSection from "../../components/home/ProcessSection";
import ServicesSection from "../../components/home/ServicesSection";

import useReveal from "../../hooks/useReveals";

import SEO from "../../components/seo/SEO";
import { seo } from "../../data/seo";
import BusinessSchema from "../../components/seo/BusinessSchema";

const Home = () => {
  const pageRef = useRef(null);

  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <SEO {...seo.home} />
      <BusinessSchema />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <AboutSection />
      <LeadershipSection />
      <CTASection />
    </div>
  );
};

export default Home;
