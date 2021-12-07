import React from "react";
import styled from "styled-components/macro";
import {
  StyledLayout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>Hello.</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              I'm <span>Ian</span>.
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>A Web Developer.</h2>
          </StyledHide>
        </div>
        <Link to="ian-mason-portfolio/projects">
          <StyledButton>My Projects</StyledButton>
        </Link>
      </StyledDescription>
    </StyledLayout>
  );
};

const StyledButton = styled.button`
  margin-top: 5rem;
`;

export default HeroSection;
