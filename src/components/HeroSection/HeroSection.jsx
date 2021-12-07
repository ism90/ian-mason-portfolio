import React from "react";
import styles from "./HeroSection.module.scss";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <div className="title">
          <div className={styles.hide}>
            <h2>Hello.</h2>
          </div>
          <div className={styles.hide}>
            <h2>
              I'm <span>Ian</span>.
            </h2>
          </div>
          <div className={styles.hide}>
            <h2>A Web Developer.</h2>
          </div>
        </div>
        <Link to="ian-mason-portfolio/projects">
          <button className={styles.button}>My Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
