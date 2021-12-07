import React from "react";
import Me from "../images/Me.png";
import styled from "styled-components";



const AboutSection = () => {
  return (
    <StyledBasicLayout>
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
    </StyledBasicLayout>
  );
};



const StyledBasicLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fafafafa;
`;
const StyledDescription = styled.div`
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
const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;