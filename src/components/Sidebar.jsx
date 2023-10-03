import { Menu, Transition } from "@headlessui/react";

import { Fragment } from "react";

import { AiOutlineClose } from "react-icons/ai";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
function Sidebar() {
  return (
    <Menu>
      <Menu.Button>
        <div className="rounded-lg bg-white bg-opacity-20 p-3 text-white border border-neonblue">
          <RxHamburgerMenu />
        </div>
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
        <Menu.Items className=" fixed right-0 top-0 z-50 flex h-full flex-col gap-4 border-l border-neonblue  bg-black p-5 text-white ">
          <Menu.Item>
            {({ close }) => (
              <div
                className="mt-4 -mr-2 flex h-20 justify-end text-2xl"
                onClick={close}
              >
                <AiOutlineClose />
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            <a
              href="#aboutme"
              className="flex items-center gap-2 p-1 text-xl lg:text-2xl  "
            >
              <b>About Me</b>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#technologies"
              className="flex items-center gap-2 p-1 text-xl lg:text-2xl  "
            >
              <b>Technologies</b>
            </a>
          </Menu.Item>

          <Menu.Item>
            <a
              href="#projects"
              className="flex items-center gap-2 p-1 text-xl lg:text-2xl  "
            >
              <b>Projects</b>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="#contact"
              className="flex items-center gap-2  p-1 text-xl lg:text-2xl"
            >
              <b>Contact</b>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://github.com/PatrykSiemieniec"
              className="mt-auto flex items-center  gap-2 p-1 text-xl lg:text-2xl"
            >
              <BsGithub />
              <b>Github</b>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              href="https://www.linkedin.com/in/patryksiemieniec99/"
              className="flex items-center gap-2  p-1 text-xl lg:text-2xl"
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
