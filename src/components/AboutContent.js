import "./AboutContentStyle.css";
import { Link } from "react-router-dom";
import about from "../assets/about2.jpg"
import about2 from "../assets/about.jpg"
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am an enthusiastic and detail-oriented B.Tech Computer Science graduate
with a passion for creating efficient and scalable software solutions.
Possessing solid knowledge of software development principles,
algorithms, and data structures. Adept at coding, debugging, and
collaborating with cross-functional teams to drive project success.
</p>
<Link to="/contact">
    <button className="btn">Contact</button>
</Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={about} className="img" alt="aboutImg"/>
            </div>
            <div className="img-stack bottom">
                <img src={about2} className="img" alt="aboutImg"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
