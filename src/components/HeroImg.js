import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../assets/programming.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I am Shamna Sherin P</p>
        <h1>Software Developer</h1>

        <div>
          <Link to="/Projects" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className=" btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
