import React, { Fragment, useEffect, useState } from "react";
import photo from "../assets/photo.jpg";
import resume from "../assets/CV_ENG_NODATA.pdf";
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
      className=" flex h-auto min-h-screen w-full flex-col items-center justify-center bg-black md:justify-start lg:h-screen  "
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
        <div className=" min-h-[800px] flex w-11/12 flex-col gap-4 rounded-xl  border  border-neonblue bg-white bg-opacity-20 p-5 shadow-neonblue  shadow-2xl transition duration-1000 lg:w-8/12 lg:flex-row lg:min-h-fit">
          <div className=" flex w-full flex-col items-center justify-center lg:w-1/2  ">
            <img
              className="rounded-lg  border border-neonblue  drop-shadow-lg  "
              src={photo}
              alt="photo"
            />
          </div>
          <div className=" flex w-full  flex-col items-center justify-between lg:w-1/2">
            <div className="flex items-center justify-center">
              <div className="flex w-max flex-col items-center  justify-center text-5xl p-6 text-white">
                <h2 className="animate-typing overflow-hidden whitespace-nowrap  text-5xl font-bold text-white">
                 <span className=" text-neonblue text-6xl">Hi!</span>  I'm Patryk
                </h2>
                <h3 className="text-xl md:text-2xl">
                  Junior Frontend Developer
                </h3>
              </div>
            </div>
            <div className=" flex flex-col gap-4 rounded-lg border border-neonblue bg-white bg-opacity-20 p-4 text-center text-white shadow-inner shadow-neonblue ">
              <span className=" text-lg text-white flex flex-col items-center">
                <p className="text-xl w-max">
                  <b className="text-neonblue">About Me</b>
                  <hr></hr>
                </p>
                I'm Bachelor of Computer Science and self-educated Frontend
                Developer with a huge willingness to learn technologies. Perhaps
                the graphics aren't my best side as you can see, but don't worry
                I can handle every under the hood technical problem.
              </span>
              <span className=" text-lg flex flex-col items-center">
                <p className="text-xl w-max">
                  <b className="text-neonblue">Soft Skils</b>
                  <hr  ></hr>
                </p>
                Communicativeness
                <br />
                Teamwork skills
                <br />
                Responsibility and Conscientiousness
                <br />
                Ability to solve problems independently
              </span>
              <span className="text-lg flex flex-col items-center">
                <p className="text-xl w-max">
                  <b className="text-neonblue">Languages</b>
                  <hr></hr>
                </p>
                Polish - native
                <br />
                English - B2
              </span>
            </div>

            <a
              className="text-white mt-10 w-48 rounded-md border border-neonblue bg-white bg-opacity-20 p-2 text-center  hover:shadow-sm hover:shadow-neonblue hover:bg-neonblue hover:font-bold hover:border-white "
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
        className=" mt-8 animate-bounce cursor-pointer p-6 text-white "
      >
        <RxDoubleArrowDown size={35} />
      </a>
    </div>
  );
};

export default Aboutme;
