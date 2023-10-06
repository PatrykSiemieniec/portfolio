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
import nextjs from "../assets/technologiesLogo/nextjs.png";
import java from "../assets/technologiesLogo/java.png";
import html from "../assets/technologiesLogo/html.png";
import css from "../assets/technologiesLogo/css.png";
import js from "../assets/technologiesLogo/js.png";

import { Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState, forwardRef } from "react";

const Technologies = () => {
  const elementRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // State for each element's visibility
  const [elementVisibility, setElementVisibility] = useState([
    false,
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
          delay: 100
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
      technologies: [html, css, js, ts, react, git],
      additionalText: "",
    },
    {
      elementVisibility: elementVisibility[1],
      ref: elementRefs[1],
      header: "I'm learning currently",
      technologies: [tailwind, angular, rxjs, redux],
      additionalText:
        "And the technologies mentioned earlier, we must always learn!",
    },
    {
      elementVisibility: elementVisibility[2],
      ref: elementRefs[2],
      header: "I'm going to learn",
      technologies: [bootstrap, nextjs, sass],
      additionalText: "And any technology that will be needed!",
    },
    {
      elementVisibility: elementVisibility[3],
      ref: elementRefs[3],
      header: "Additional basic knowledge",
      technologies: [nodejs, reactnative, mysql, java],
      additionalText: "",
    },
  ];

  return (
    <div
      id="technologies"
      className=" relative flex h-auto w-full flex-col items-center justify-center gap-4 bg-gray-900 p-6 lg:h-screen lg:flex-row "
    >
      <p className="absolute top-[10px] text-5xl text-white p-4">Technologies</p>
      <div className="mt-10 flex w-screen flex-col flex-wrap justify-evenly gap-4 p-6 lg:mt-0 lg:flex-row  ">
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
      <a
        href="#projects"
        className="animate-bounce cursor-pointer    p-6 text-white md:p-0 lg:absolute lg:bottom-[40px]"
      >
        <RxDoubleArrowDown size={35} />
      </a>
    </div>
  );
};

export default Technologies;

const TechnologySection = forwardRef(
  ({ header, technologies, additionalText, transitionShow }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col min-h-[300px] items-center justify-between rounded-lg border border-neonblue bg-white bg-opacity-20 p-4 shadow-md shadow-neonblue drop-shadow-lg lg:min-h-[200px] lg:w-2/5 "
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
          <div className="flex min-h-[300px] w-full flex-wrap justify-around gap-4 p-4 lg:min-h-0">
            {technologies.map((item, idx) => (
              <img
                key={idx}
                src={item}
                alt={item}
                className=" object-contain transition duration-300 hover:-translate-y-5 hover:scale-105 hover:transition hover:duration-500 "
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
