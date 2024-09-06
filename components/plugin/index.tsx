import React from "react";
import styles from "./styles.module.css";
import Video from "../video";

const Plugin = () => {
  return (
    <div className={styles.pluginContain}>
      <h5>This is Where You</h5>
      <h1>Plug In, Power Up, Launch.​</h1>
      <Video />
      <button>Book A Space</button>
    </div>
  );
};

export default Plugin;
