import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";


const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)
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

    return (
        <div className=" w-full h-[100px] flex justify-between items-center p-6 md:pl-20 md:pr-20 z-50 ">
            <div className=" text-caputmortuum text-xl md:text-4xl">Junior Fronted Developer</div>
            {width > 1024 ?
                <div className=" flex gap-12 text-white text-xl  ">
                    <a className=" text-center text-liver " href="#aboutme">About Me</a>
                    <a className=" text-center  text-liver   " href="#technologies">Technologies</a>
                    <a className=" text-center  text-liver " href="#projects">Projects</a>
                    <a className=" text-center  text-liver  " href="#contact">Contact</a>
                </div> : <Sidebar />}
        </div>
    );
};

export default Header;
