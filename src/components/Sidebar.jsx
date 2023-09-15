import { Menu, Transition } from "@headlessui/react";

import { Fragment } from "react";

import {
    AiOutlineClose,

} from "react-icons/ai";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
function Sidebar() {
    return (
        <Menu>
            <Menu.Button>
                <div className="rounded-lg p-3  bg-cinereous text-caputmortuum"><RxHamburgerMenu /></div>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" bg-silver h-full flex flex-col gap-4 fixed z-50 right-0 top-0 p-5  text-white border-l border-caputmortuum ">
                    <Menu.Item>
                        {({ close }) => (
                            <div
                                className="flex justify-end text-2xl h-20 mt-4 -mr-2"
                                onClick={close}
                            >
                                <AiOutlineClose />
                            </div>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#aboutme"
                            className="text-xl lg:text-2xl p-1 flex gap-2 items-center  "
                        >

                            <b>About Me</b>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#technologies"
                            className="text-xl lg:text-2xl p-1 flex gap-2 items-center  "
                        >

                            <b>Technologies</b>
                        </a>
                    </Menu.Item>

                    <Menu.Item>
                        <a
                            href="#projects"
                            className="text-xl lg:text-2xl p-1 flex gap-2 items-center  "
                        >

                            <b>Projects</b>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="#contact"
                            className="text-xl lg:text-2xl p-1  flex gap-2 items-center"
                        >

                            <b>Contact</b>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="https://github.com/PatrykSiemieniec"
                            className="text-xl lg:text-2xl p-1  flex gap-2 items-center mt-auto"
                        >
                            <BsGithub />
                            <b>Github</b>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a
                            href="https://www.linkedin.com/in/patryksiemieniec99/"
                            className="text-xl lg:text-2xl p-1  flex gap-2 items-center"
                        >
                            <BsLinkedin />
                            <b>LinkedIn</b>
                        </a>
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default Sidebar;
