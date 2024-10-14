import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div id="Project">
      <h2 className="section-title"> Projects </h2>
      <div className="projects-container">
        {/* Datamining Project */}
        <div className="project-card">
          <h3>Datamining</h3>
          <p>
            Stock price prediction for a large data set using Jupyter Notebook.
          </p>
          <a
            href="https://github.com/nbathin1/datamining"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        {/* Movie Suggestions Project */}
        <div className="project-card">
          <h3>Movie Suggestions</h3>
          <p>
            Interactive webpage using HTML, CSS, and JavaScript for suggesting
            movies based on the genre.
          </p>
          <a
            href="https://github.com/nbathin1/movie-suggestions"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        {/* Java Projects */}
        <div className="project-card">
          <h3>Java Projects</h3>
          <p>Collection of various Java projects.</p>
          <a
            href="https://github.com/nbathin1/JavaProjects"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        {/* My Portfolio */}
        <div className="project-card">
          <h3>My Portfolio</h3>
          <p>
            Personal portfolio website showcasing skills and experience using
            JavaScript.
          </p>
          <a
            href="https://github.com/nbathin1/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        {/* CPU Simulator */}
        <div className="project-card">
          <h3>CPU Simulator</h3>
          <p>
            CPU Simulator project for CS520 Computer Architecture, written in C.
          </p>
          <a
            href="https://github.com/nbathin1/CPU-Simulator-"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        {/* Web Proxy Server */}
        <div className="project-card">
          <h3>Web Proxy Server</h3>
          <p>
            This project implements a multi-threaded web proxy server in Python.
          </p>
          <a
            href="https://github.com/nbathin1/Web-Proxy-Server"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
