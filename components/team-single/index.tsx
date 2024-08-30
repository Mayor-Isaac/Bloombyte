import React, { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  text: string;
  name: string;
  img: string;
  position: string;
};

const TeamSingle: FC<Props> = ({ text, name, img, position }) => {
  return (
    <div className={styles.teamSingleContainer}>
      <h4>{text}</h4>
      <div className={styles.teamText}>
        <div>
          <p>{name}</p>
          <p>{position}</p>
        </div>
        <Image src={img} alt="Image" width={50} height={50} />
      </div>
    </div>
  );
};

export default TeamSingle;
