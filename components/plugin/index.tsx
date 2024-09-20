import React from "react";
import styles from "./styles.module.css";
import Video from "../video";
import Link from "next/link";

const Plugin = () => {
  return (
    <div className={styles.pluginContain}>
      <h5>This is Where You</h5>
      <h1>Plug In, Power Up, Launch.​</h1>
      <Video />
      <Link href="/pricing" className={styles.btnLink}>
        <button>Book A Space</button>
      </Link>
    </div>
  );
};

export default Plugin;
