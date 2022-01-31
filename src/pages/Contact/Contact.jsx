import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, fade } from "../../animation";
import styles from "./Contact.module.scss";

import Wave from "../../components/Wave/Wave";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className={styles.contact}
    >
      <motion.div className={styles.social}>
        <motion.h2 variants={fade} className={styles.title}>
          Get in Touch
        </motion.h2>
        <motion.p variants={fade}>I'd love to hear from you.</motion.p>
      </motion.div>
      <motion.div variants={fade} className={styles.links}>
        <div className={styles.grid}>
          <a href="mailto:ianmason5@gmail.com">
            {" "}
            <FontAwesomeIcon
              icon={faEnvelope}
              size="5x"
              className={styles.icon}
            />
          </a>
          <a href="https://www.linkedin.com/in/ism90/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="5x"
              className={styles.icon}
            />
          </a>
          <a href="https://github.com/ism90/">
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              size="5x"
              className={styles.icon}
            />
          </a>
          <li>
            <button className={styles.cv}>My CV</button>
          </li>
          <li className={styles.email}>ianmason5@gmail.com</li>
        </div>
      </motion.div>
      <Wave className={styles.wave} />
    </motion.div>
  );
};

export default Contact;
