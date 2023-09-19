import React, { Fragment, useEffect, useState } from "react";
import photo from "../assets/photo.jpg";
import resume from "../assets/CV_ANG_dane.pdf";
import { RxDoubleArrowDown } from "react-icons/rx";
import { Transition } from "@headlessui/react";

const Aboutme = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    return () => setVisible(false);
  }, []);
  return (
    <div
      id="aboutme"
      className=" mt-10 flex h-auto w-full flex-col items-center justify-center bg-silver md:justify-start lg:h-screen "
    >
      <Transition
        as={Fragment}
        show={visible}
        enter="transition duration-1000"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="  flex w-11/12 flex-col gap-4 rounded-xl  bg-cinereous  p-5 shadow-2xl shadow-liver transition duration-1000 hover:scale-105 hover:transition hover:duration-1000 lg:w-8/12 lg:flex-row">
          <div className=" w-full lg:w-1/2 ">
            <img className="rounded-lg " src={photo} alt="photo" />
          </div>
          <div className=" flex w-full  flex-col items-center justify-between lg:w-1/2">
            <div>
              <div className="flex items-center justify-center">
                <div className="flex w-max flex-col items-center  justify-center text-5xl text-white">
                  <b className="animate-typing overflow-hidden whitespace-nowrap  text-5xl font-bold text-white">
                    Hi! I'm Patryk
                  </b>
                  <span className="text-xl md:text-2xl">
                    Junior Fronted Developer
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-4 rounded-lg bg-white bg-opacity-20 p-4 text-center text-white shadow-xl shadow-cinereous drop-shadow-lg">
                <span className="text-lg text-white">
                  <p className="text-xl">
                    <b>About Me</b>
                  </p>{" "}
                  I'm Bachelor of Computer Science and self-educated Fronted
                  Developer with a huge willingness to learn technologies.
                  Perhaps the graphics aren't my best side as you can see, but
                  don't worry I can handle every under the hood technical
                  problem.{" "}
                </span>
                <span>
                  <p className="text-xl">
                    <b>Soft Skils</b>
                  </p>
                  Communicativeness
                  <br />
                  Teamwork skills
                  <br />
                  Responsibility and Conscientiousness
                  <br />
                  Ability to solve problems independently
                </span>
                <span>
                  <p className="text-xl">
                    <b>Languages</b>
                  </p>
                  Polish - native
                  <br />
                  English - B2
                </span>
              </div>
            </div>
            <a
              className="text-caputmortuun mt-10 w-48 rounded-md border border-caputmortuum bg-white bg-opacity-20 p-2 text-center drop-shadow-lg hover:bg-liver hover:text-silver"
              href={resume}
              download="PS_CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </Transition>
      <a
        href="#technologies"
        className="mt-12 animate-bounce cursor-pointer p-6 text-liver md:p-0 lg:mt-32"
      >
        <RxDoubleArrowDown size={35} />
      </a>
    </div>
  );
};

export default Aboutme;
