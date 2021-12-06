import React from 'react'
import Me from "../../images/Me.png"
const AboutSection = () => {
  return(
      <div>
          <div className="description">
              <div className="title">
              <div className="hide">
                  <h2>About</h2>
              </div>
              <div className="hide">
                  <h2>Hello! I'm <span>Ian</span>, and I'm a </h2>
              </div>
              <div className="hide">
                  <h2> web developer</h2>
              </div>
              </div>
              <p>I have recently completed... FILLER</p>
              <button>Contact Me</button>
          </div>
          <div className="image">
              <img src={Me} alt="Ian"/>
          </div>
      </div>
  );
}

export default AboutSection;