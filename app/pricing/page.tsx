import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeros from "@/components/otherHeros";
import Plugin from "@/components/plugin";
import PricingPlan from "@/components/pricing-plan";
import React from "react";

const Pricing = () => {
  return (
    <div>
      <Header />
      <OtherHeros text="Pricing Plans" />
      <PricingPlan />
      <Plugin />
      <Footer />
    </div>
  );
};

export default Pricing;
