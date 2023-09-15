import { RxDoubleArrowDown } from "react-icons/rx";
import react from '../assets/technologiesLogo/react.png';
import ts from '../assets/technologiesLogo/ts.png';
import nodejs from '../assets/technologiesLogo/nodejs.png';
import tailwind from '../assets/technologiesLogo/tailwind.png';
import angular from '../assets/technologiesLogo/angular.png';
import htmlcssjs from '../assets/technologiesLogo/htmlcssjs.png';
import reactnative from '../assets/technologiesLogo/reactnative.png';
import mysql from '../assets/technologiesLogo/mysql.png';
import git from '../assets/technologiesLogo/git.png';
import redux from '../assets/technologiesLogo/redux.png';
import rxjs from '../assets/technologiesLogo/rxjs.png';
import sass from '../assets/technologiesLogo/sass.png';
import bootstrap from '../assets/technologiesLogo/bootstrap.png';
import nextjs from '../assets/technologiesLogo/nextjs.png';
import java from '../assets/technologiesLogo/java.png';

import { Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";

const Technologies = () => {

    const elementRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    // State for each element's visibility
    const [elementVisibility, setElementVisibility] = useState([false, false, false, false]);

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
            return new IntersectionObserver((entries) => {
                handleIntersection(entries, index);
            }, {
                threshold: 0.6, // Adjust the threshold as needed
            });
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

    return (
        <div id="technologies" className=' bg-cinereous flex flex-col lg:flex-row gap-4 items-center justify-center w-full h-auto relative lg:h-screen p-6 '>
            <p className="text-4xl absolute top-[10px] text-white">Technologies</p>
            <div className="flex flex-col lg:flex-row flex-wrap w-screen justify-evenly p-6 gap-4 mt-10 lg:mt-0 ">

                <div ref={elementRefs[0]} className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg p-4 rounded-lg lg:w-2/5 bg-white min-h-[200px]"><span className="text-white text-xl">I'm ready to work with</span>
                    <Transition
                        as={Fragment}
                        show={elementVisibility[0]}
                        enter="transition-opacity duration-500 transition-scale duration-500"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="flex p-4 justify-around flex-wrap gap-4 w-full min-h-[100px]">

                            <img src={htmlcssjs} alt="htmlcssjs" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={ts} alt="typescript" className=" object-contain hover:-translate-y-5 hover:scale-105 " />
                            <img src={react} alt="react" className="  object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={git} alt="git" className=" object-contain hover:-translate-y-5 hover:scale-105" />

                        </div>
                    </Transition>
                </div>


                <div ref={elementRefs[1]} className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg p-4 rounded-lg lg:w-2/5 bg-white min-h-[200px]"><span className="text-white text-xl">I'm learning currently</span>
                    <Transition
                        as={Fragment}
                        show={elementVisibility[1]}
                        enter="transition-opacity duration-500 transition-scale duration-500"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="flex p-4 justify-around flex-wrap gap-4 w-full min-h-[100px]">
                            <img src={tailwind} alt="tailwindcss" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={angular} alt="angular" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={rxjs} alt="rxjs" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={redux} alt="redux" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                        </div>
                    </Transition>
                    <p className="text-white text-center text-xl">And the technologies mentioned earlier, we must always learn!</p>
                </div>


                <div ref={elementRefs[2]} className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg p-4 rounded-lg lg:w-2/5 bg-white min-h-[200px]"><span className="text-white text-xl">I'm going to learn</span>
                    <Transition
                        as={Fragment}
                        show={elementVisibility[2]}
                        enter="transition-opacity duration-500 transition-scale duration-500"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="flex p-4 justify-around flex-wrap gap-4 w-full ">

                            <img src={bootstrap} alt="bootstrap" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={nextjs} alt="nextjs" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={sass} alt="sass" className=" object-contain hover:-translate-y-5 hover:scale-105" />

                        </div>
                    </Transition>
                    <p className="text-white text-center text-xl ">And any technology that will be needed!</p>
                </div>

                <div ref={elementRefs[3]} className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg p-4 rounded-lg lg:w-2/5 bg-white min-h-[200px]"><span className="text-white text-xl">Additional basic knowledge</span>
                    <Transition
                        as={Fragment}
                        show={elementVisibility[3]}
                        enter="transition-opacity duration-500 transition-scale duration-500"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="flex p-4 justify-around flex-wrap gap-4 w-full min-h-[100px]">
                            <img src={nodejs} alt="modejs" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={reactnative} alt="reactnative" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={mysql} alt="sql" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                            <img src={java} alt="java" className=" object-contain hover:-translate-y-5 hover:scale-105" />
                        </div>
                    </Transition>
                </div>

            </div>
            <a href="#projects" className='lg:absolute lg:bottom-[40px]    p-6 md:p-0 animate-bounce text-liver cursor-pointer'>
                <RxDoubleArrowDown size={35} />
            </a>
        </div >
    )
}

export default Technologies