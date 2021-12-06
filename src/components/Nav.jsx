import React from "react";
import styled from "styled-components";
import Logo from "../images/Logo.png";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          <img src={Logo} alt="Ian Mason"></img>
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
  }

  #logo img {
    height: 50%;
    width: 50%;
  }
`;

export default Nav;
