
import resume from '../assets/CV_ANG_dane.pdf'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
    return (

        <div id="contact" className=' bg-cinereous flex flex-col items-center justify-center w-full h-screen gap-6 text-caputmortuum'>

            <span className='flex items-center text-xl gap-3'>  <MdOutlineEmail size={35} /> patryk.siemieniec99@gmail.com</span>
            <span className='flex items-center text-xl gap-3'>  <AiOutlinePhone size={35} /> 791-845-271</span>
            <div className=' flex gap-3'>
                <a target='_blank' href="https://github.com/PatrykSiemieniec"></a><BsGithub className=' cursor-pointer' size={35} />
                <a target='_blank' href="https://www.linkedin.com/in/patryksiemieniec99/"></a> <BsLinkedin className=' cursor-pointer' size={35} />
            </div>

            <a className='bg-white bg-opacity-20 drop-shadow-lg w-48 text-center p-2 rounded-md text-caputmortuun border border-caputmortuum mt-10' href={resume} download='PS_CV'>Download CV</a>

        </div>
    )
}

export default Contact