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
      <nav>
        <a onClick={() => handleScroll("Education")}>Education</a>
        <a onClick={() => handleScroll("Experience")}>Experience</a>
        <a onClick={() => handleScroll("Projects")}>Projects</a>
        <a onClick={() => handleScroll("Skills")}>Skills</a>
        <a onClick={() => handleScroll("Contact")}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
