import React from "react";
import Me from "../images/Me.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAboutLayout>
      <StyledAboutDescription>
        <div className="title">
          <StyledAboutHide>
            <h2>About</h2>
          </StyledAboutHide>
          <StyledAboutHide>
            <h2>
              Hello! I'm <span>Ian</span>, and I'm a{" "}
            </h2>
          </StyledAboutHide>
          <StyledAboutHide>
            <h2> web developer</h2>
          </StyledAboutHide>
        </div>
        <p>I have recently completed... FILLER</p>
        <button>Contact Me</button>
      </StyledAboutDescription>
      <StyledAboutImage>
        <img src={Me} alt="Ian" />
      </StyledAboutImage>
    </StyledAboutLayout>
  );
};

const StyledAboutLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fafafafa;
`;
const StyledAboutDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
`;
const StyledAboutImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 60%;
    height: 40vh;
    object-fit: cover;
  }
`;
const StyledAboutHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
