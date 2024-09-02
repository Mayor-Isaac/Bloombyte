import React from "react";
import styles from "./styles.module.css";
import { menuLinks } from "../../utils/data";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headContain}>
      <div className={styles.logo}>
        <h2>BloomByte</h2>
      </div>
      <div className={styles.meunLinks}>
        {menuLinks?.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
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
