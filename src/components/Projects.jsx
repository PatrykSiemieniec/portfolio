import { RxDoubleArrowDown } from "react-icons/rx";
import {
  AiOutlineGlobal,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";

import quiz from "../assets/projects/irregularFull.png";
import weather from "../assets/projects/weather.png";
import internship_project from "../assets/projects/internship_project.png";
import restaurantapp from "../assets/projects/restaurantapp.png";
import portfolio from "../assets/projects/portfolio.png";
import expenses from "../assets/projects/expenses_tracker.png"

import react from "../assets/technologiesLogo/react.png";
import ts from "../assets/technologiesLogo/ts.png";
import tailwind from "../assets/technologiesLogo/tailwind.png";
import redux from "../assets/technologiesLogo/redux.png";
import html from "../assets/technologiesLogo/html.png";
import css from "../assets/technologiesLogo/css.png";
import js from "../assets/technologiesLogo/js.png";
import sass from "../assets/technologiesLogo/sass.png";
import reactquery from "../assets/technologiesLogo/reactquery.png";
import chartjs from "../assets/technologiesLogo/chartjs.png";
import reacthookform from "../assets/technologiesLogo/reacthookform.png";
import antd from "../assets/technologiesLogo/antd.png";
import headlessui from "../assets/technologiesLogo/headlessui.png";
import firebase from "../assets/technologiesLogo/firebase.png";
import angular from "../assets/technologiesLogo/angular.png"
import rxjs from "../assets/technologiesLogo/rxjs.png"
import ngrx from "../assets/technologiesLogo/ngrx.png"
import bootstrap from "../assets/technologiesLogo/bootstrap.png"

import { forwardRef, useRef, useState, useEffect, Fragment } from "react";
import { Transition } from "@headlessui/react";
const Projects = () => {
  const elementRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // State for each element's visibility
  const [elementVisibility, setElementVisibility] = useState([
    false,
    false,
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
          threshold: 0.3, // Adjust the threshold as needed
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

  const ListOfProjects = [
    {
      elementVisibility: elementVisibility[0],
      ref: elementRefs[0],
      name: "Expenses Tracker",
      imgSrc: expenses,
      alt: "expenses",
      description:
        "My first app using Angular, rxjs and ngrx. Expenses Tracker let you save your expenses and check your budget by the end of the month. Let's try, save some money! ",
      yt: "",
      github: "https://github.com/PatrykSiemieniec/ANGULAR_expenses_tracker",
      website: "https://expense-trackerps.netlify.app/",
      technologies: [html, ts, angular, rxjs, ngrx, bootstrap],
    },
    {
      elementVisibility: elementVisibility[1],
      ref: elementRefs[1],
      name: "Irregular Verbs Quiz",
      imgSrc: quiz,
      alt: "quiz",
      description:
        "Simple quiz for now only dedicated to polish students where you can check your knowledge about irregular verbs!",
      yt: "",
      github: "https://github.com/PatrykSiemieniec/irregularVerbsQuiz",
      website: "https://irregularverbsquiz.netlify.app/",
      technologies: [html, css, ts, react],
    },
    {
      elementVisibility: elementVisibility[2],
      ref: elementRefs[2],
      name: "Weather App",
      imgSrc: weather,
      alt: "weather app",
      description:
        "An application that allows you to check the weather for a specific location using a weather API.",
      yt: "",
      github: "https://github.com/PatrykSiemieniec/weather_app",
      website: "https://psweatherapp.netlify.app/",
      technologies: [
        html,
        ts,
        react,
        tailwind,
        redux,
        reactquery,
        chartjs,
        headlessui,
      ],
    },
    {
      elementVisibility: elementVisibility[3],
      ref: elementRefs[3],
      name: "Internship Project",
      imgSrc: internship_project,
      alt: "internship project",
      description:
        " An internship project demonstrating proficiency in required technologies. Adding table fields using a form, data validation, data operations such as edit, delete, delete multiple, and displaying data.",
      yt: "",
      github: "https://github.com/PatrykSiemieniec/internship_project",
      website: "https://psinternshipproject.netlify.app/",
      technologies: [html, ts, react, sass, redux, reacthookform, antd],
    },
    {
      elementVisibility: elementVisibility[4],
      ref: elementRefs[4],
      name: "Restaurant management system",
      imgSrc: restaurantapp,
      alt: "Restaurant management system",
      description:
        "A system enabling the user to handle incoming orders, add, edit, and delete them. The system should also have the ability for user registration and customization, tailored to suit the user's own business.",
      yt: "https://www.youtube.com/watch?v=NqsrQ7-LdsI&ab_channel=PatrykSiemieniec",
      github: "https://github.com/PatrykSiemieniec/engineering_project",
      website: "",
      technologies: [html, css, js, react, firebase],
    },
    {
      elementVisibility: elementVisibility[5],
      ref: elementRefs[5],
      name: "Portfolio",
      imgSrc: portfolio,
      alt: "Portfolio",
      description:
        "It's portfolio you are seeing right now, created to group any information about me which I want to share with you.",
      yt: "",
      github: "https://github.com/PatrykSiemieniec/portfolio",
      website: "https://patryksiemieniecportfolio.netlify.app/",
      technologies: [html, tailwind, js, react, headlessui],
    },
  ];
  return (
    <div
      id="projects"
      className=" flex h-auto w-full flex-col items-center justify-center gap-4 bg-black p-4    "
    >
      <div className=" flex flex-col items-center justify-center ">
        <p className=" text-5xl text-white p-4">Projects</p>
        <div className="mt-10 flex  flex-col flex-wrap justify-evenly items-center gap-4  lg:mt-0 lg:flex-row ">
          {ListOfProjects.map((item, idx) => {
            return (
              <Project
                key={idx}
                name={item.name}
                imgSrc={item.imgSrc}
                alt={item.alt}
                description={item.description}
                yt={item.yt}
                github={item.github}
                website={item.website}
                technologies={item.technologies}
                ref={item.ref}
                transitionShow={item.elementVisibility}
              />
            );
          })}
        </div>
        <a
          href="#contact"
          className="animate-bounce cursor-pointer    p-6 text-white md:p-0 mt-20 "
        >
          <RxDoubleArrowDown size={35} />
        </a>
      </div>
    </div>
  );
};

export default Projects;

const Project = forwardRef(
  (
    {
      name,
      imgSrc,
      alt,
      description,
      yt,
      github,
      website,
      technologies,
      transitionShow,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className="flex min-h-[500px] w-10/12 flex-col items-center justify-start rounded-lg  border border-neonblue bg-white bg-opacity-20 p-6 shadow-md shadow-neonblue drop-shadow-lg lg:min-h-[300px] lg:min-w-[700px] xl:w-2/5 xl:p-3"
      >
        <span className="text-center text-3xl text-white">{name}</span>
        <Transition
          show={transitionShow}
          enter="transform transition duration-1000 "
          enterFrom="opacity-0 scale-50  "
          enterTo="opacity-100 scale-100  "
          leave="transition-opacity duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="flex w-full flex-col items-center  gap-4 p-2 lg:flex-row  ">
            <img
              className=" w-full rounded object-cover transition duration-700 hover:scale-105 lg:w-3/5"
              src={imgSrc}
              alt={alt}
            />
            <div className="w-full text-center text-lg lg:w-2/5">
              <span className="text-white">{description}</span>
              <div className="mt-4 flex justify-center gap-6 text-white">
                {website && (
                  <a target="_blank" alt={website} href={website}>
                    <AiOutlineGlobal
                      size={35}
                      className="hover:scale-110 hover:drop-shadow"
                    />
                  </a>
                )}
                {yt && (
                  <a target="_blank" alt={yt} href={yt}>
                    <AiOutlineYoutube
                      size={35}
                      className="hover:scale-110 hover:drop-shadow"
                    />
                  </a>
                )}

                {github && (
                  <a target="_blank" alt={github} href={github}>
                    <AiOutlineGithub
                      size={35}
                      className="hover:scale-110 hover:drop-shadow"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center  p-1 text-white">
            <p>Technologies</p>
            <div className="flex flex-wrap items-center justify-center gap-2 ">
              {technologies.map((item, idx) => (
                <img
                  key={idx}
                  src={item}
                  width={50}
                  className="aspect-square object-contain"
                />
              ))}
            </div>
          </div>
        </Transition>
      </div>
    );
  },
);
