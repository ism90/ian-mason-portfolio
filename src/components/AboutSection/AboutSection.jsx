import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../animation";

import Me from "../../assets/images/Me.png";

import styles from "./AboutSection.module.scss";

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
            <h2>About</h2>
          </div>
          <div className={styles.hide}>
            <h2>
              Hello! I'm <span>Ian</span>, and I'm a{" "}
            </h2>
          </div>
          <div className={styles.hide}>
            <h2> web developer</h2>
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
