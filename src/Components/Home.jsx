import React from "react";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Education from "./Education";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Education />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
