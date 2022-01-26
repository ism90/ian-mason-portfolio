import React from "react";

import styles from "./ProjectSection.module.scss";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnimation } from "../../animation";

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
        <motion.div variants={fade} className={styles.title}>
          {" "}
          <h2>LUJAM - Client Project </h2>{" "}
          <div>
            <a href="https://lujam-jersey.web.app/">
              <button className={styles.button}>Live</button>
            </a>
            <a href="https://github.com/ism90/jersey-client-project">
              <button className={styles.button}>Code</button>
            </a>
          </div>
        </motion.div>
        <motion.div className={styles.line}></motion.div>
        <Link to="/ian-mason-portfolio/projects/lujam">
          <div className={styles.imgWrapper}>
            <motion.img variants={photoAnimation} src={Lujam} alt="Lujam" />
            <div className={styles.content}> Details</div>
          </div>
        </Link>
        <ul className={styles.list}>
          <li>React</li>
          <li>JSX</li>
          <li>SCSS</li>
          <li>Firebase</li>
          <li>Agile</li>
        </ul>
      </div>

      <div className={styles.project}>
        <motion.div variants={fade} className={styles.title}>
          <h2> Connect Four! </h2>
          <div>
            <a href="https://lujam-jersey.web.app/">
              <button className={styles.button}>Live</button>
            </a>
            <a href="https://github.com/ism90/jersey-client-project">
              <button className={styles.button}>Code</button>
            </a>
          </div>
        </motion.div>
        <motion.div className={styles.line}></motion.div>
        <Link to="/ian-mason-portfolio/projects/connect-four">
          <div className={styles.imgWrapper}>
            <motion.img
              variants={photoAnimation}
              src={ConnectFour}
              alt="Connect Four"
            />
          </div>
        </Link>
        <ul className={styles.list}>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className={styles.project}>
        <motion.div variants={fade} className={styles.title}>
          <h2> Punk API </h2>
          <div>
            <a href="https://lujam-jersey.web.app/">
              <button className={styles.button}>Live</button>
            </a>
            <a href="https://github.com/ism90/jersey-client-project">
              <button className={styles.button}>Code</button>
            </a>
          </div>
        </motion.div>
        <motion.div className={styles.line}></motion.div>
        <Link to="/ian-mason-portfolio/projects/punk-api">
          <div className={styles.imgWrapper}>
            <motion.img variants={photoAnimation} src={Punk} alt="Punk API" />
          </div>
        </Link>
        <ul className={styles.list}>
          <li>React</li>
          <li>SCSS</li>
          <li>JSX</li>
        </ul>
      </div>

      <div className={styles.project}>
        <motion.div variants={fade} className={styles.title}>
          <h2> JS Calculator </h2>
          <div>
            <a href="https://lujam-jersey.web.app/">
              <button className={styles.button}>Live</button>
            </a>
            <a href="https://github.com/ism90/jersey-client-project">
              <button className={styles.button}>Code</button>
            </a>
          </div>
        </motion.div>
        <motion.div className={styles.line}></motion.div>
        <Link to="/ian-mason-portfolio/projects/js-calculator">
          <div className={styles.imgWrapper}>
            <motion.img variants={photoAnimation} src={Calc} alt="Calculator" />
          </div>
        </Link>
        <ul className={styles.list}>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>E2E Testing</li>
          <li>Cypress</li>
        </ul>
      </div>

      <div className={styles.project}>
        <motion.div variants={fade} className={styles.title}>
          <h2> Morse Code Translator </h2>
          <div>
            <a href="https://lujam-jersey.web.app/">
              <button className={styles.button}>Live</button>
            </a>
            <a href="https://github.com/ism90/jersey-client-project">
              <button className={styles.button}>Code</button>
            </a>
          </div>
        </motion.div>
        <motion.div className={styles.line}></motion.div>
        <Link to="/ian-mason-portfolio/projects/morse-code-translator">
          <div className={styles.imgWrapper}>
            <motion.img
              variants={photoAnimation}
              src={Morse}
              alt="Morse Code Translator"
            />
          </div>
        </Link>
        <ul className={styles.list}>
          <li>HTML</li>
          <li>SCSS</li>
          <li>JavaScript</li>
          <li>TDD</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
