import React from "react";

import styles from "./AboutSection.module.scss";

import { motion } from "framer-motion";
import { pageAnimation, fade } from "../../animation";

import Me from "../../assets/images/Me.jpg";
import Wave from "../Wave/Wave";

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
        <div className={styles.hide}>
          <motion.h2 variants={fade}>About</motion.h2>
        </div>

        <motion.p variants={fade}>
          I have recently completed a 12 week... (tbc)
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </div>
      <div className={styles.image}>
        <motion.img variants={fade} src={Me} alt="Ian" />
      </div>
      <Wave />
    </motion.div>
  );
};

export default AboutSection;
