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
const Projects = () => {
  const ListOfProjects = [
    {
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
      name: "Weather App",
      imgSrc: weather,
      alt: "weather app",
      description:
        "An application that allows you to check the weather for a specific location using a weather API.",
      yt: "",
      github: "https://github.com/PatrykSiemieniec/weather_app",
      website: "https://psweatherapp.netlify.app/",
      technologies: [html, ts, react, tailwind, redux, reactquery, chartjs, headlessui],
    },
    {
      name: "Internship Project",
      imgSrc: internship_project,
      alt: "internship project",
      description:
        " An internship project demonstrating proficiency in required technologies. Adding table fields using a form, data validation, data operations such as edit, delete, delete multiple, and displaying data.",
      yt: "",
      github: "https://github.com/PatrykSiemieniec/internship_project",
      website: "https://psinternshipproject.netlify.app/",
      technologies: [html, ts, react, sass,redux, reacthookform, antd],
    },
    {
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
      className=" relative flex h-auto w-full flex-col items-center justify-center gap-4 bg-black p-2 xl:flex-row   "
    >
      <div className=" flex flex-col items-center justify-center ">
        <p className=" text-4xl text-white">Projects</p>
        <div className="mt-10 flex  flex-col flex-wrap justify-evenly gap-4 p-6 lg:mt-0 lg:flex-row ">
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
              />
            );
          })}
        </div>
        <a
          href="#contact"
          className="animate-bounce cursor-pointer    p-6 text-white md:p-0 "
        >
          <RxDoubleArrowDown size={35} />
        </a>
      </div>
    </div>
  );
};

export default Projects;

const Project = ({
  name,
  imgSrc,
  alt,
  description,
  yt,
  github,
  website,
  technologies,
}) => {
  return (
    <div className="flex flex-col items-center justify-evenly rounded-lg bg-white bg-opacity-20 p-6 shadow-md shadow-neonblue drop-shadow-lg xl:w-2/5 xl:p-3">
      <span className="text-center text-3xl text-white">{name}</span>
      <div className="flex w-full flex-col items-center  gap-4 p-2 lg:flex-row ">
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
        <div className="flex gap-2 flex-wrap items-center justify-center ">
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
    </div>
  );
};
