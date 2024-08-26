import React from "react";
import styles from "./styles.module.css"
import {MeunLinks} from "../../utils/data"

const Header = () => {
  return (
    <div className={styles.headContain}>
      <div className={styles.logo}>
        <h2>BloomByte</h2>
      </div>
      <div className={styles.meunLinks}>
      {MeunLinks?.map((item, index) => {
        return(
          <p key={index}>{item}</p>
        )
      })}
      </div>
      <div className={styles.headBtn}>
        <button>Book A Workspace</button>
      </div>
    </div>
  );
};

export default Header;
