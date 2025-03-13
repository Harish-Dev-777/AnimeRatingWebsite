import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="title">
          <TypeAnimation
            sequence={[
              "Welcome to Hk-aniWatch!", 
              2000, 
              "",
              1000,
            ]}
            speed={30} 
            deletionSpeed={30} 
            repeat={Infinity}
          />
        </div>
        <NavLink to="/home" className="explore-btn">
          Explore Now
        </NavLink>
      </div>
    </>
  );
};

export default LandingPage;
