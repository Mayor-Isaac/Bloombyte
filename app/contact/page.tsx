import ContactBody from "@/components/contact-body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import OtherHeros from "@/components/otherHeros";
import React from "react";

const Contact = () => {
  return (
    <>
      <Header />
      <OtherHeros text="Contact Us" />
      <ContactBody />
      <Footer />
    </>
  );
};

export default Contact;
