import resume from "../assets/CV_ENG_NODATA.pdf";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" flex h-screen w-full flex-col items-center justify-center gap-6 bg-gray-900 text-white"
    >
      <span className="flex items-center gap-3 text-xl">
        {" "}
        <MdOutlineEmail size={35} /> patryk.siemieniec99@gmail.com
      </span>
      <div className=" flex gap-3">
        <a target="_blank" href="https://github.com/PatrykSiemieniec"></a>
        <BsGithub className=" cursor-pointer" size={35} />
        <a
          target="_blank"
          href="https://www.linkedin.com/in/patryksiemieniec99/"
        ></a>{" "}
        <BsLinkedin className=" cursor-pointer" size={35} />
      </div>

      <a
        className="text-white mt-10 w-48 rounded-md border border-white bg-white bg-opacity-20 p-2 text-center hover:shadow-md hover:shadow-neonblue "
        href={resume}
        download="PS_CV"
      >
        Download CV
      </a>
    </div>
  );
};

export default Contact;
