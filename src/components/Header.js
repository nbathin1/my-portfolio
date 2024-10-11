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
      <div className="logo">My Portfolio</div>
      <nav align="right">
        <a onClick={() => handleScroll("education")}>Education</a>
        <a onClick={() => handleScroll("Experience")}>Experience</a>
        <a onClick={() => handleScroll("Projects")}>Projects</a>
        <a onClick={() => handleScroll("skills")}>Skills</a>
        <a onClick={() => handleScroll("Contact")}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
