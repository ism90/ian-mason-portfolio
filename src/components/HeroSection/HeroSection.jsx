import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

import styles from "./HeroSection.module.scss";

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
        <motion.div>
          <div className={styles.hide}>
            <motion.h2>Hello.</motion.h2>
          </div>
          <div className={styles.hide}>
            <motion.h2>
              I'm <span>Ian</span>.
            </motion.h2>
          </div>
          <div className={styles.hide}>
            <motion.h2>A Web Developer.</motion.h2>
          </div>
        </motion.div>
        <Link to="ian-mason-portfolio/projects">
          <button className={styles.button}>My Projects</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroSection;
