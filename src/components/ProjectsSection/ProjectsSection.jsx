import React from "react";

import styles from "./ProjectSection.module.scss";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

import Lujam from "../../assets/images/Lujam.png";
import ConnectFour from "../../assets/images/ConnectFour.png";
import Calc from "../../assets/images/Calc.png";
import Morse from "../../assets/images/Morse.png";
import Punk from "../../assets/images/Punk.png";

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
        <ul className={styles.list}>
          <li>React</li>
          <li>JSX</li>
          <li>SCSS</li>
          <li>Firebase</li>
          <li>Version Control</li>
          <li>Agile</li>
          <li>Pair Programming</li>
        </ul>
      </div>
      <div className={styles.project}>
        <h2>Connect Four!</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <img src={ConnectFour} alt="Connect Four" />
        </Link>
        <ul className={styles.list}>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div className={styles.project}>
        <h2>Punk API</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/punk-api">
          <img src={Punk} alt="Punk API" />
        </Link>
        <ul className={styles.list}>
          <li>React</li>
          <li>SCSS</li>
          <li>JSX</li>
        </ul>
      </div>
      <div className={styles.project}>
        <h2>JS Calculator</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/js-calculator">
          <img src={Calc} alt="Calculator" />
        </Link>
      </div>
      <div className={styles.project}>
        <h2>Morse Code Translator</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/morse-code-translator">
          <img src={Morse} alt="Morse Code Translator" />
        </Link>
      </div>
      {/* <div className={styles.project}>
        <h2>JS Calculator</h2>
        <div className={styles.line}></div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <img src={ConnectFour} alt="Connect Four" />
        </Link>
      </div> */}
    </motion.div>
  );
};

export default ProjectsSection;
