import React from "react";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";
import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <h1>
        <Link to="/ian-mason-portfolio" className={styles.logo}>
          <img src={Logo} alt="Ian Mason"></img>
        </Link>
      </h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="ian-mason-portfolio/projects" className={styles.link}>
            Projects
          </Link>
          <motion.div
            className={styles.line}
            transition={{ duration: 0 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname.startsWith("/ian-mason-portfolio/projects")
                ? "8px"
                : "0%",
            }}
          ></motion.div>
        </li>

        <li className={styles.li}>
          <Link to="ian-mason-portfolio/about" className={styles.link}>
            About
          </Link>
          <motion.div
            className={styles.line}
            transition={{ duration: 0 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname.startsWith("/ian-mason-portfolio/about")
                ? "8px"
                : "0%",
            }}
          ></motion.div>
        </li>

        <li className={styles.li}>
          <Link to="ian-mason-portfolio/contact" className={styles.link}>
            Contact
          </Link>
          <motion.div
            className={styles.line}
            transition={{ duration: 0 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname.startsWith("/ian-mason-portfolio/contact")
                ? "8px"
                : "0%",
            }}
          ></motion.div>
        </li>

        {/* <li className={styles.li}>
          <Link to="/ian-mason-portfolio" className={styles.resume}>
            CV
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
