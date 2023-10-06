import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWidth(width);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const titles = ["Bachelor of Computer Science"," Junior Frontend Developer",  "React.js Enthusiast", "Aspiring Angular Developer", ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index to display the next message
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [titles]);

  return (
    <div className=" z-50 flex h-[100px] w-full items-center justify-between p-6 text-white md:pl-12 md:pr-12  ">
      <h1 className=" text-xl md:text-3xl xl:text-4xl ">
        {titles[currentTitleIndex]}
      </h1>
      {width > 1024 ? (
        <div className=" flex gap-6 text-2xl xl:gap-12 ">
          <a className=" text-center" href="#aboutme">
            About Me
          </a>
          <a className=" text-center" href="#technologies">
            Technologies
          </a>
          <a className=" text-center" href="#projects">
            Projects
          </a>
          <a className=" text-center" href="#contact">
            Contact
          </a>
        </div>
      ) : (
        <Sidebar />
      )}
    </div>
  );
};

export default Header;
