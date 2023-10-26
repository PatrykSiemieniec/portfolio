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
        <div className=" flex min-h-[800px] w-11/12 flex-col gap-4 rounded-xl  border  border-neonblue bg-white bg-opacity-20 p-5 shadow-2xl  shadow-neonblue transition duration-1000 lg:min-h-fit md:w-2/3  lg:flex-row">
          <div className=" flex w-full flex-col items-center justify-around lg:w-1/2  ">
            <div className="flex items-center justify-center">
              <div className="flex w-max flex-col items-center  justify-center  text-5xl text-white">
                <h2 className="animate-typing overflow-hidden whitespace-nowrap  text-5xl font-bold text-white">
                  <span className=" text-6xl text-neonblue">Hi!</span> I'm
                  Patryk
                </h2>
                <h3 className="text-xl md:text-2xl">
                  Junior Frontend Developer
                </h3>
              </div>
            </div>
            <img
              className="w-full rounded-lg border border-neonblue drop-shadow-lg  md:w-2/3 lg:w-5/6 "
              src={photo}
              alt="photo"
            />
          </div>
          <div className=" flex w-full  flex-col items-center justify-center lg:w-1/2  ">
            <div className=" flex flex-col gap-4 rounded-lg border border-neonblue bg-white bg-opacity-20 p-6  text-white w-full md:w-2/3 lg:w-5/6  ">
              <span className=" flex flex-col  text-white">
                <span className="w-max text-xl">
                  <b className="text-neonblue">About Me</b>
                  <hr></hr>
                </span>
                I'm Bachelor of Computer Science and self-educated Frontend
                Developer with a huge willingness to learn technologies. Perhaps
                the graphics aren't my best side as you can see, but don't worry
                I can handle every under the hood technical problem.
              </span>
              <span className=" flex flex-col">
                <span className="w-max text-xl">
                  <b className="text-neonblue">Soft Skils</b>
                  <hr></hr>
                </span>
                Communicativeness
                <br />
                Teamwork skills
                <br />
                Responsibility and Conscientiousness
                <br />
                Ability to solve problems independently
              </span>
              <span className="flex flex-col ">
                <span className="w-max text-xl">
                  <b className="text-neonblue">Languages</b>
                  <hr></hr>
                </span>
                Polish - native
                <br />
                English - B2
              </span>
            </div>

            
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
