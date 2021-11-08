import React from "react";
import hero from "../../images/hero.png";


const HeroSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Hello.</h2>
          </div>
          <div className="hide">
            <h2>
              I'm <span>Ian</span>.
            </h2>
          </div>
          <div className="hide">
            <h2>A Web Developer.</h2>
          </div>
        </div>
        <p>
          Take a look around!
        </p>
        <button>My Projects</button>
      </div>
      <div className="image">
        <img src={hero} alt="mountain range" />
      </div>
    </div>
  );
};

export default HeroSection;