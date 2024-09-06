import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeros from "@/components/otherHeros";
import ServicesTab from "@/components/services";
import React from "react";

const Services = () => {
  return (
    <div>
      <Header />
      <OtherHeros text="Our Services" />
      <ServicesTab />
      <Footer />
    </div>
  );
};

export default Services;
