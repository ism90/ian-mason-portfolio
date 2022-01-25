import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, fade } from "../../animation";

import styles from "./HeroSection.module.scss";

// To Do:
// Take BG image outside of animation
// Remember to deploy!

const HeroSection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.hero}
    >
      <div className={styles.description}>
        <div className="hero">
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
  );
};

export default HeroSection;
