import React from "react";

import styles from "./AboutSection.module.scss";

import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";
import { titleAnimation } from "../../animation";

import Me from "../../assets/images/Me.png";

const AboutSection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.about}
    >
      <div className={styles.description}>
        <div className="title">
          <div className={styles.hide}>
            <motion.h2 variants={titleAnimation}>About</motion.h2>
          </div>
          <div className={styles.hide}>
            <motion.h2 variants={titleAnimation}>
              Hello! I'm <span>Ian</span>, and I'm a{" "}
            </motion.h2>
          </div>
          <div className={styles.hide}>
            <motion.h2 variants={titleAnimation}> web developer</motion.h2>
          </div>
        </div>
        <p>I have recently completed... FILLER</p>
        <button>Contact Me</button>
      </div>
      <div className={styles.image}>
        <img src={Me} alt="Ian" />
      </div>
    </motion.div>
  );
};

export default AboutSection;
