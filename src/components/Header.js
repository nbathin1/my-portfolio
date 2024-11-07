// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="logo" align="left">
        Nikhil Bathini
      </div>
      <nav align="right">
        <a onClick={() => handleScroll("education")}>Education</a>
        <a onClick={() => handleScroll("experience-section")}>Experience</a>
        <a onClick={() => handleScroll("Project")}>Projects</a>
        <a onClick={() => handleScroll("skills")}>Skills</a>
      </nav>
    </header>
  );
};

export default Header;
