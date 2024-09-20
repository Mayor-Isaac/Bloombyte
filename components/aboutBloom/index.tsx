import React from "react";
import styles from "./styles.module.css";
import { aboutBloom } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

const AboutBloom = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contain}>
        <h2>Our Story</h2>
        <p>
          BloomByte is a registered technical company located in Akure -
          Nigeria. We are registered under the Nigerian government. We are well
          equipped to:
        </p>
        <div className={styles.section}>
          {aboutBloom?.map((item, index) => {
            return (
              <div className={styles.textContain} key={index}>
                <h2>{item.head}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.otherText}>
        <div className={styles.colOne}>
          <p>
            Bloombyte is equipped with conducive environment for idea
            development and innovation creation. The experience and knowledge
            acquired lead to skill development in all fields or areas of study.
            We are set to offer software training such as programming languages
            and application software, rendering and designs, etc. Hardware
            training in electronics, embedded systems, and smart systems.
            BloomByte is based on hands-on training, providing the enabling
            environment to learn, develop and innovate with 24 hours of
            electricity and internet availability. Components and tools to
            innovate are readily available. The Centre also has a refreshment
            and snacks area.
          </p>
          <p>
            At BloomByte®, we are passionate about pursuing excellence with
            uncompromising services and integrity. We are optimistic that our
            values and quality of service will help us drive our Centre to
            enviable heights and help us attract clients. As a company, we are
            willing to go the extra mile to invest in, and partner with some of
            the finest professionals we can find, and we have put processes and
            structures in place that ensure that we are always at the top of our
            game when it comes to imparting knowledge.
          </p>
          <Link href="/contact">
            <button className={styles.textBtn}>Contact Us</button>
          </Link>
        </div>
        <div className={styles.colTwo}>
          <Image
            src="/images/bloombytehub.png"
            width={500}
            height={600}
            alt="image"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBloom;
