import React from "react";
import styles from "./styles.module.css";

const OtherHeros = ({ text }: { text: string }) => {
  return (
    <div className={styles.heroContain}>
      <h1>{text}</h1>
      <p>
        Home/ <span className={styles.linkText}>{text}</span>
      </p>
    </div>
  );
};

export default OtherHeros;
