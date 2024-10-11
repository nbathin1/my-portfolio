// src/components/About.js
import React from "react";
import "./About.css";
import profilePic from "../assets/nikhil1.jpg"; // Replace with the path to your profile picture

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="text-content">
          <h2>About Me</h2>
          <p>
            I'm a proud Bearcat! I'm an experienced software developer currently
            pursuing opportunities in Full Stack Web Development and Machine
            Learning.
          </p>
          <p>
            I have a background in Computer Science, with hands-on experience in
            various technologies. I am looking for roles that challenge me and
            allow me to grow.
          </p>
          <div className="contact-info">
            <p>
              <strong>Email:</strong> nikhilbathini99@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (856) 924-0715
            </p>
            <p>
              <strong>Location:</strong> Aubery, TX
            </p>
          </div>
          <div className="buttons">
            <a
              href="/Nikhil_Bathini.pdf"
              className="button resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="https://www.linkedin.com/in/nikhilbathini18"
              className="button connect-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
