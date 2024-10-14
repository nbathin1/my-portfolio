import React from "react";
import "./Skills.css";
import java from "../assets/java-icon.png";
import python from "../assets/python.svg";
import C from "../assets/c.png";
import c from "../assets/c++.webp";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import html from "../assets/html.jpeg";
import aws from "../assets/aws.webp";
import azure from "../assets/azure.webp";
import spring from "../assets/Spring.png";
import mysql from "../assets/mysql.svg";

const Skills = () => {
  return (
    <div id="skills">
      <h1 align="center">My Skills</h1>
      <div className="skills-container">
        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <ul>
            <li>
              <img src={java} alt="Java" />
              Java
            </li>
            <li>
              <img src={python} alt="Python" />
              Python
            </li>
            <li>
              <img src={C} alt="C" />C
            </li>
            <li>
              {" "}
              <img src={c} alt="C++" />
              C++
            </li>
            <li>
              {" "}
              <img src={react} alt="React" />
              React.js
            </li>
            <li>
              <img src={nodejs} alt="NodeJs" />
              Node.js
            </li>
            <li>.Net</li>
          </ul>
        </div>

        {/* Web & Backend Technologies */}
        <div className="skill-card">
          <h3>Web & Backend Technologies</h3>
          <ul>
            <li>
              {" "}
              <img src={html} alt="html" />
              HTML,CSS, Javascript
            </li>
            <li>
              <img src={spring} alt="Spring" />
              Spring, Spring Boot
            </li>
            <li>JSP, JMS</li>
            <li>Django</li>
            <li>SOAP/REST</li>
            <li>Angular</li>
          </ul>
        </div>

        {/* Cloud Platforms */}
        <div className="skill-card">
          <h3>Cloud Platforms</h3>
          <ul>
            <li>
              <img src={aws} alt="AWS" />
              AWS
            </li>
            <li>
              <img src={azure} alt="AZURE" />
              Azure
            </li>
          </ul>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <h3>Databases</h3>
          <ul>
            <li>
              <img src={mysql} alt="MySql" />
              MySQL
            </li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Cloudant</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
