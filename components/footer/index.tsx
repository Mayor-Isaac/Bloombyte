import React from "react";
import styles from "./styles.module.css";
import Facebook from "@/svgs/facebook";
import Linkedln from "@/svgs/linkedln";
import Location from "@/svgs/location";
import Gmail from "@/svgs/gmail";
import Phone from "@/svgs/phone";
import Whatsapp from "@/svgs/whatsapp";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerIcons}>
          <h1>Follow Us</h1>
          <div className={styles.footIcons}>
            <Facebook />
            <Linkedln />
            <Facebook />
            <Linkedln />
          </div>
        </div>
        <div className={styles.footerContact}>
          <h1>Contact Us</h1>
          <div className={styles.contactOne}>
            <Location />
            <Link
              href="https://maps.app.goo.gl/UqyTJV9RcyRCmrBQA"
              target="_blank"
              className={styles.link}
            >
              <p>
                After Bridge, B11 Akaraki/Falowo Layout, Aule Rd, Opposite Cele
                Junction, Off New Aule Road, Akure
              </p>
            </Link>
          </div>
          <div className={styles.contactOne}>
            <Gmail />
            <p>bloombytehub@gmail.com</p>
          </div>
          <div className={styles.contactOne}>
            <Phone />
            <p>+234 812 396 0422</p>
          </div>
          <div className={styles.contactOne}>
            <Whatsapp />
            <p>+234 814 624 2567</p>
          </div>
        </div>
        <div className={styles.footerSubscribe}>
          <div className={styles.subText}>
            <h1>Subscribe Now</h1>
            <p>Don’t miss our future updates! Get Subscribed Today!</p>
          </div>
          <div className={styles.inputTab}>
            <input
              type="email"
              className={styles.mailInput}
              placeholder="Email Address"
            />
            <div className={styles.inputbtn}>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2024 BloomByte | Powered by BloomByte</p>
      </div>
    </>
  );
};

export default Footer;
