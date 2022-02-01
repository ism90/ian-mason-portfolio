import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, fade } from "../../animation";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.bg}>
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.hero}
      >
        <div className={styles.description}>
          <div className="hero-content">
            <div className={styles.hide}>
              <motion.h2 variants={titleAnimation}>
                Hello! I'm <span>Ian</span>.
              </motion.h2>
            </div>
            <div className={styles.hide}>
              <motion.h2 variants={titleAnimation}> A Web Developer.</motion.h2>
            </div>
          </div>
          <div className={styles.hide}>
            <Link to="projects">
              <motion.button variants={fade} className={styles.button}>
                My Projects
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
