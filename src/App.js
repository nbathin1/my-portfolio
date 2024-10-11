import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css"; // Include your main CSS file if you have one

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
    </div>
  );
};

export default App;
