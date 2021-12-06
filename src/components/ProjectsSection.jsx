import React from "react";
import styled from "styled-components";

import Lujam from "../images/Lujam.png";
import ConnectFour from "../images/ConnectFour.png";

const ProjectsSection = () => {
  return (
    <Projects>
      <Project>
        <h2>LUJAM - Client Project</h2>
        <div className="line"></div>
        <a href="https://lujam-jersey.web.app/dashboard">
          <img src={Lujam} alt="Lujam" />
        </a>
      </Project>
      <Project>
        <h2>Connect Four!</h2>
        <div className="line"></div>
        <a href="https://ism90.github.io/connect-four/">
          <img src={ConnectFour} alt="Connect Four" />
        </a>
      </Project>
    </Projects>
  );
};

const Projects = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 60%;
    height: 50vh;
    object-fit: scale-down;
  }
`;

export default ProjectsSection;
