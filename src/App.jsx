import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
