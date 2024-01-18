import "./HeroImg2Style.css";
import IntroImg from "../assets/field.jpg"
import React from "react";

const HeroImg2 = ({heading , text}) => {
  return (
    <div className="hero-img">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroImg2;
