// src/components/Education.js
import React from "react";
import "./Education.css";
import buLogo from "../assets/Bu.jpg"; // Ensure correct paths
import grietLogo from "../assets/griet.png";

const Education = () => {
  return (
    <div id="education">
      <h2 className="education-title" align="center">
        Education
      </h2>
      <div className="education-container">
        <div className="education-item">
          <img
            src={buLogo}
            alt="Binghamton University Logo"
            className="college-logo"
          />
          <div className="education-details">
            <h3>Binghamton University</h3>
            <p>Master of Science in Computer Science</p>
            <p>Graduated: Mar 2024</p>
          </div>
        </div>
        <div className="education-item">
          <img src={grietLogo} alt="Griet Logo" className="college-logo" />
          <div className="education-details">
            <h3>Gokaraju Rangaraju Institute of Technology</h3>
            <p>Bachelor of Technology in Computer Engineering</p>
            <p>Graduated: Sept 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
