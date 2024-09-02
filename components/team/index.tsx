import React from "react";
import styles from "./styles.module.css";
import TeamSingle from "../team-single";
import { teamMembers } from "@/utils/data";

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <h2>Our Team</h2>
      <div>
        {teamMembers?.map((item, index) => {
          return <TeamSingle key={index} name={item.name} position={item.position} img={item.img} text={item.text} />;
        })}
      </div>
    </div>
  );
};

export default Team;
