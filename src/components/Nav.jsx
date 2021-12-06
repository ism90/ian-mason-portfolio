import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          <img src={Logo} alt="Ian Mason"></img>
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background-color: #131628;
  padding: 1rem 10rem;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: #d1d5e8;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.5s ease;
    &:hover {
      color: white;
      text-decoration: underline;
      text-decoration-color: #fd4370;
      text-decoration-thickness: 4px;
    }
  }

  #logo img {
    height: 5rem;
    width: 15rem;
  }
`;

export default Nav;
