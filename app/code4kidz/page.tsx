import CodeKidzs from "@/components/code4kidz";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeros from "@/components/otherHeros";
import React from "react";

const Code4Kidz = () => {
  return (
    <div>
      <Header />
      <OtherHeros text="Code4Kidz" />
      <CodeKidzs />
      <Footer />
    </div>
  );
};

export default Code4Kidz;
