import React from "react";
import "./Experince.css";

const Experience = () => {
  return (
    <div id="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-card">
        <div className="experience-header">
          <h3>Graduate Student Assistant</h3>
          <span className="experience-date">Jun 2023 - May 2024 </span>
        </div>
        <h4>Binghamton University</h4>
        <ul>
          <li>
            Assisted professors with coursework, grading, and technical support.
          </li>
          <li>
            Collaborated on research projects, providing technical guidance and
            tutoring.
          </li>
        </ul>
      </div>
      {/* Assistant System Engineer */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>Assistant System Engineer</h3>
          <span className="experience-date">Jan 2020 - Dec 2021</span>
        </div>
        <h4>RealPage</h4>
        <ul>
          <li>
            Developed secure RESTful APIs using Java and Spring Boot for backend
            services.
          </li>
          <li>
            Optimized database queries to enhance system efficiency using SQL.
          </li>
          <li>
            Collaborated with cross-functional teams to deliver data-driven
            solutions.
          </li>
          <li>Designed API-based dashboards to automate data processing.</li>
          <li>
            Automated workflows using Python scripts, ensuring OWASP security
            standards.
          </li>
        </ul>
      </div>

      {/* Junior Web Developer */}
      <div className="experience-card">
        <div className="experience-header">
          <h3>Junior Web Developer</h3>
          <span className="experience-date">Apr 2019 - Dec 2019</span>
        </div>
        <h4>Vaishnavi Pvt Limited</h4>
        <ul>
          <li>
            Developed and maintained responsive web applications using React and
            JavaScript.
          </li>
          <li>
            Transformed UI/UX designs into functional web pages using CSS and
            Bootstrap.
          </li>
          <li>
            Integrated RESTful APIs for real-time dynamic content rendering.
          </li>
          <li>
            Collaborated in Git version control, pull requests, and code
            reviews.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
