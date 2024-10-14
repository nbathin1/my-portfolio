import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience />
      <Project />
      <Skills />
    </div>
  );
};

export default App;
