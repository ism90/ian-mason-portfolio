import React from "react";
import Me from "../images/Me.png";

import {
  StyledLayout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>About</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              Hello! I'm <span>Ian</span>, and I'm a{" "}
            </h2>
          </StyledHide>
          <StyledHide>
            <h2> web developer</h2>
          </StyledHide>
        </div>
        <p>I have recently completed... FILLER</p>
        <button>Contact Me</button>
      </StyledDescription>
      <StyledImage>
        <img src={Me} alt="Ian" />
      </StyledImage>
    </StyledLayout>
  );
};

export default AboutSection;
