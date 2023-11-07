import { RxDoubleArrowDown } from "react-icons/rx";
import react from "../assets/technologiesLogo/react.png";
import ts from "../assets/technologiesLogo/ts.png";
import nodejs from "../assets/technologiesLogo/nodejs.png";
import tailwind from "../assets/technologiesLogo/tailwind.png";
import angular from "../assets/technologiesLogo/angular.png";
import reactnative from "../assets/technologiesLogo/reactnative.png";
import mysql from "../assets/technologiesLogo/mysql.png";
import git from "../assets/technologiesLogo/git.png";
import redux from "../assets/technologiesLogo/redux.png";
import rxjs from "../assets/technologiesLogo/rxjs.png";
import sass from "../assets/technologiesLogo/sass.png";
import bootstrap from "../assets/technologiesLogo/bootstrap.png";
import ngrx from "../assets/technologiesLogo/ngrx.png";
import java from "../assets/technologiesLogo/java.png";
import html from "../assets/technologiesLogo/html.png";
import css from "../assets/technologiesLogo/css.png";
import js from "../assets/technologiesLogo/js.png";

import { Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState, forwardRef } from "react";

const Technologies = () => {
  const elementRefs = [useRef(null), useRef(null), useRef(null)];

  // State for each element's visibility
  const [elementVisibility, setElementVisibility] = useState([
    false,
    false,
    false,
  ]);

  // Callback function when an element intersects with the viewport
  const handleIntersection = (entries, index) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Update the visibility state for the corresponding element
        setElementVisibility((prevVisibility) => {
          const newVisibility = [...prevVisibility];
          newVisibility[index] = true;
          return newVisibility;
        });
      }
    });
  };

  // Create an Intersection Observer for each element
  useEffect(() => {
    const observers = elementRefs.map((ref, index) => {
      return new IntersectionObserver(
        (entries) => {
          handleIntersection(entries, index);
        },
        {
          threshold: 0.9, // Adjust the threshold as needed
          delay: 100,
        },
      );
    });

    // Observe the elements
    elementRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    // Clean up the observers when the component unmounts
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const TechnologySections = [
    {
      elementVisibility: elementVisibility[0],
      ref: elementRefs[0],
      header: "I'm ready to work with",
      technologies: [html, css, js, ts, react, angular, rxjs, tailwind, git],
      additionalText: "",
    },
    {
      elementVisibility: elementVisibility[1],
      ref: elementRefs[1],
      header: "I'm learning currently",
      technologies: [bootstrap, sass, ngrx],
      additionalText:
        "And the technologies mentioned earlier, we must always learn!",
    },

    {
      elementVisibility: elementVisibility[2],
      ref: elementRefs[2],
      header: "Additional basic knowledge",
      technologies: [nodejs, reactnative, mysql, java],
      additionalText: "",
    },
  ];

  return (
    <div
      id="technologies"
      className=" flex h-auto w-full flex-col items-center justify-center gap-4 bg-gray-900 p-4    "
    >
      <div className=" flex flex-col items-center justify-center ">
        <p className=" p-4 text-5xl text-white">Technologies</p>
        
        <div className="mt-10 flex  flex-col  items-center justify-evenly gap-4  lg:mt-0  ">
          {TechnologySections.map((item, idx) => (
            <TechnologySection
              key={idx}
              ref={item.ref}
              header={item.header}
              transitionShow={item.elementVisibility}
              technologies={item.technologies}
              additionalText={item.additionalText}
            />
          ))}
        </div>
        <span className="mt-12 text-center text-4xl text-white">
          And I'm going to learn any technology that will be needed!
        </span>
        <a
          href="#projects"
          className="mt-20 animate-bounce    cursor-pointer p-6 text-white md:p-0"
        >
          <RxDoubleArrowDown size={35} />
        </a>
      </div>
    </div>
  );
};

export default Technologies;

const TechnologySection = forwardRef(
  ({ header, technologies, additionalText, transitionShow }, ref) => {
    return (
      <div
        ref={ref}
        className="lg:min-h-250 flex min-h-[250px] w-full flex-col items-center justify-start  rounded-lg border border-neonblue bg-white bg-opacity-20 p-6 shadow-md shadow-neonblue drop-shadow-lg lg:min-w-[700px] xl:w-2/5 xl:p-3"
      >
        <span className="text-xl text-white">{header}</span>
        <Transition
          as={Fragment}
          show={transitionShow}
          enter="transform transition duration-1000 "
          enterFrom="opacity-0 scale-50  "
          enterTo="opacity-100 scale-100  "
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex min-h-[250px] w-full flex-wrap justify-around gap-4 p-4 lg:min-h-0">
            {technologies.map((item, idx) => (
              <img
                key={idx}
                src={item}
                alt={item}
                className=" max-w-[100px] object-contain transition duration-300 hover:-translate-y-5 hover:scale-105 hover:transition hover:duration-500"
              />
            ))}
          </div>
        </Transition>
        {additionalText && (
          <p className="text-center text-xl text-white ">{additionalText}</p>
        )}
      </div>
    );
  },
);
