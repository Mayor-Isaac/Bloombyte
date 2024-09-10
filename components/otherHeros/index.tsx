import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const OtherHeros = ({ text }: { text: string }) => {
  return (
    <div className={styles.heroContain}>
      <h1>{text}</h1>

      <p>
        <Link href="/" className={styles.link}>
          <span className={styles.linkText}>Home</span>{" "}
        </Link>
        /{text}
      </p>
    </div>
  );
};

export default OtherHeros;
