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
          <h3>Associate Database Engineer</h3>
          <span className="experience-date">Apr 2019 - Dec 2019</span>
        </div>
        <h4>Softech</h4>
        <ul>
          <li>
            Developed an Employee Data Bank system to manage and streamline
            employee data, designed to store credentials and historical details,
            with automatic updates from the admin portal for new hires.
          </li>
          <li>
            Designed and implemented the backend architecture using Django and
            MySQL, creating a robust, efficient, and scalable database framework
            for secure data management.
          </li>
          <li>
            Enabled HR teams to perform dynamic search and sorting based on
            employee performance metrics, enhancing data accessibility and user
            productivity.
          </li>
          <li>
            Focused on database efficiency and operability, contributing to a
            sophisticated, user-friendly backend system.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
