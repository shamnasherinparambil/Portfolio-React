import "./FooterStyle.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Malappuram, Kerala</p>
              <p>India.</p>
            </div>
          </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                +91-1234567890
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                shamnasherin@gmail.com
              </h4>
            </div>
          </div>
    
        <div className="right">
          <h4>About Me</h4>
          <p>
          I am dedicated to continuous learning and staying updated on industry trends to deliver cutting-edge solutions.
           Excited to embark on a challenging journey to contribute 
           my skills and collaborate with like-minded professionals 
           in a dynamic work environment. Eager to bring creativity, 
           problem-solving, and a strong work ethic to the forefront of every project.
          </p>
          <div className="social">
          <FaFacebook
                  size={30}
                  style={{ color: "#fff",
                  marginRight: "1rem" }}
                />
          <FaInstagram
                  size={30}
                  style={{ color: "#fff", 
                  marginRight: "1rem" }}
                />
          <FaLinkedin
                  size={30}
                  style={{ color: "#fff", 
                  marginRight: "1rem" }}
                />            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
