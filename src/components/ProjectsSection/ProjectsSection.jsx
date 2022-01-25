import React from "react";

import styles from "./ProjectSection.module.scss";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

import Lujam from "../../assets/images/Lujam.png";
import ConnectFour from "../../assets/images/ConnectFour.png";

const ProjectsSection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.projects}
    >
      <div className={styles.project}>
        <h2>LUJAM - Client Project</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/lujam">
          <img src={Lujam} alt="Lujam" />
        </Link>
      </div>
      <div className={styles.project}>
        <h2>Connect Four!</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <img src={ConnectFour} alt="Connect Four" />
        </Link>
      </div>
      <div className={styles.project}>
        <h2>Connect Four!</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <img src={ConnectFour} alt="Connect Four" />
        </Link>
      </div>
      <div className={styles.project}>
        <h2>Connect Four!</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <img src={ConnectFour} alt="Connect Four" />
        </Link>
      </div>
      <div className={styles.project}>
        <h2>Connect Four!</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <img src={ConnectFour} alt="Connect Four" />
        </Link>
      </div>
      <div className={styles.project}>
        <h2>Connect Four!</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <img src={ConnectFour} alt="Connect Four" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;  
