import React from "react";
import styles from "./ProjectSection.module.scss";

import Lujam from "../../assets/images/Lujam.png";
import ConnectFour from "../../assets/images/ConnectFour.png";

const ProjectsSection = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.project}>
        <h2>LUJAM - Client Project</h2>
        <div className={styles.line}></div>
        <a href="https://lujam-jersey.web.app/dashboard">
          <img src={Lujam} alt="Lujam" />
        </a>
      </div>
      <div className={styles.project}>
        <h2>Connect Four!</h2>
        <div className={styles.line}></div>
        <a href="https://ism90.github.io/connect-four/">
          <img src={ConnectFour} alt="Connect Four" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
