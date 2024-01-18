import "./WorkStyle.css";
import React from 'react'
// import pro1 from "../assets/react.png"
// import { NavLink } from "react-router-dom";
import Work from "./Work"; 
// import WorkCardData from "./WorkCardData";
import ProjectCardData from "./WorkCardData";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        {ProjectCardData.map((val,ind) => {
            return(
                <Work
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            );
        })}

        </div>
    </div>
  );
};

export default WorkCard