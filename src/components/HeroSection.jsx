import React from "react";
import styled from "styled-components";


import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <StyledHero>
      <StyledHeroDescription>
        <div className="title">
          <StyledHeroHide>
            <h2>Hello.</h2>
          </StyledHeroHide>
          <StyledHeroHide>
            <h2>
              I'm <span>Ian</span>.
            </h2>
          </StyledHeroHide>
          <StyledHeroHide>
            <h2>A Web Developer.</h2>
          </StyledHeroHide>
        </div>
        <Link to="/projects">
          <StyledButton>My Projects</StyledButton>
        </Link>
      </StyledHeroDescription>
    </StyledHero>
  );
};



const StyledButton = styled.button`
  margin-top: 5rem;
`;

const StyledHero = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fafafafa;
`;
const StyledHeroDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
`;
const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 60%;
    height: 40vh;
    object-fit: cover;
  }
`;
const StyledHeroHide = styled.div`
  overflow: hidden;
`;


export default HeroSection;
