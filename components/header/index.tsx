"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { menuLinks } from "../../utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Bars from "@/svgs/bars";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [mobile, setMobile] = useState(false);
  return (
    <div
      className={
        mobile ? `${styles.mobile} ${styles.headContain}` : styles.headContain
      }
    >
      <div className={styles.logo}>
        <Image
          src="/images/bloombyte_horizontal.png"
          alt="Logo"
          width={80}
          height={25}
        />
        <div onClick={() => setMobile(!mobile)}>
          <Bars />
        </div>
      </div>
      <div className={styles.meunLinks}>
        {menuLinks?.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className={pathname === item.link ? styles.active : ""}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className={styles.headBtn}>
        <button>Book A Workspace</button>
      </div>
    </div>
  );
};

export default Header;
