import AboutBloom from "@/components/aboutBloom";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeros from "@/components/otherHeros";
import React from "react";

const Aboutus = () => {
  return (
    <div>
      <Header />
      <OtherHeros text="About Us" />
      <AboutBloom />
      <Footer />
    </div>
  );
};

export default Aboutus;
