import React from "react";

import styles from "./AboutSection.module.scss";

import { Link } from "react-router-dom";

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
        <div className={styles.contents}>
          <motion.p variants={fade}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </motion.p>

          <Link to="ian-mason-portfolio/contact">
            {" "}
            <motion.button variants={fade}>Contact</motion.button>{" "}
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
