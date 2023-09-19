import React from "react";
import Aboutme from "./Aboutme";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
const Main = () => {
  return (
    <div className="flex flex-col items-center ">
      <Aboutme />
      <Technologies />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Main;
