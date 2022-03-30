import React from "react";

import styles from "./AboutSection.module.scss";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { pageAnimation, fade } from "../../animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

import Me from "../../assets/images/Me.png";
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
        <div className={styles.contents}>
          <motion.p variants={fade}>
            I'm Ian, a Junior Dev based in London, UK. I have recently completed
            the 12-week Software Developer Course with{" "}
            <a href="https://nology.io/">
              <span>_nology.</span>
            </a>
          </motion.p>
          <div className={styles.hide}>
            <motion.h2 variants={fade}>Stack</motion.h2>
          </div>
          <motion.div className={styles.grid} variants={fade}>
            <FontAwesomeIcon icon={faHtml5} size="6x" className={styles.icon} />
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="6x"
              className={styles.icon}
            />
            <FontAwesomeIcon icon={faJs} size="6x" className={styles.icon} />
            <FontAwesomeIcon icon={faReact} size="6x" className={styles.icon} />
            <FontAwesomeIcon icon={faSass} size="6x" className={styles.icon} />
            <FontAwesomeIcon icon={faJava} size="6x" className={styles.icon} />
          </motion.div>

          <Link to="/ian-mason-portfolio/contact">
            {" "}
            <motion.button variants={fade} className={styles.button}>
              Contact
            </motion.button>{" "}
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <motion.img variants={fade} src={Me} alt="Ian" />
      </div>
      <Wave />
    </motion.div>
  );
};

export default AboutSection;
