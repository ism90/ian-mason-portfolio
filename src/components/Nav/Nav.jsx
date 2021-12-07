import React from "react";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>
        <Link to="/ian-mason-portfolio" className={styles.logo}>
          <img src={Logo} alt="Ian Mason"></img>
        </Link>
      </h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="ian-mason-portfolio/projects" className={styles.link}>Projects</Link>
        </li>
        <li className={styles.li}>
          <Link to="ian-mason-portfolio/about" className={styles.link}>About</Link>
        </li>
        <li className={styles.li}>
          <Link to="ian-mason-portfolio/contact" className={styles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};



export default Nav;
