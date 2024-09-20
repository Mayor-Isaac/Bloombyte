import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { codeKidzData } from "@/utils/data";
import Link from "next/link";

const CodeKidzs = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.tabContain}>
        <div className={styles.colOne}>
          <h2>Student Digital Holiday</h2>
          <p>
            Bloombyte offers a diverse range of courses designed to cater to
            students&apos; interests and career aspirations. These courses
            provide a comprehensive understanding of various subjects, from
            programming to digital literacy and design. By taking advantage of
            these opportunities during school breaks, students can deepen their
            knowledge and develop new skill explore career paths and gain
            competitive advantage. The courses are designed to be engaging and
            interactive, making learning a fun and enjoyable experience.
            Students can work independently or collaborate with peers, fostering
            a supportive and collaborative learning environment. With a strong
            foundation in Bloombyte&apos;s courses, students are well-prepared
            to pursue successful careers and achieve their personal goals.
          </p>
          <Link href="/contact">
            <button>Get in Touch</button>
          </Link>
        </div>
        <div className={styles.colTwo}>
          <Image
            src="/images/bloom01.png"
            width={500}
            height={600}
            alt="image"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.container}>
        <h2>Courses Available Include</h2>
        <div className={styles.tab2Contain}>
          {codeKidzData?.map((item, index) => {
            return (
              <div className={styles.tabGrid} key={index}>
                {item.icon}
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CodeKidzs;
