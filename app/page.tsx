import Footer from "@/components/footer";
import GrowthSection from "@/components/growthSection";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Plugin from "@/components/plugin";
import Team from "@/components/team";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <GrowthSection />
      <Plugin />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
