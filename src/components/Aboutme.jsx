import React from 'react'
import photo from '../assets/photo.jpg'
import resume from '../assets/CV_ANG_dane.pdf'
import { RxDoubleArrowDown } from "react-icons/rx";


const Aboutme = () => {
    return (
        <div id="aboutme" className=' bg-silver flex flex-col md:justify-start items-center justify-center w-full h-auto lg:h-screen mt-10'>
            <div className=' lg:w-8/12 w-11/12 flex lg:flex-row flex-col  bg-cinereous  rounded-xl p-5 gap-4'>
                <div className=' w-full lg:w-1/2 '><img className='rounded-lg' src={photo} alt="photo" /></div>
                <div className=' w-full lg:w-1/2  flex flex-col justify-between items-center'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <div className='text-5xl text-white flex flex-col  items-center justify-center w-max'>
                                <b className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold'>Hi! I'm Patryk</b>
                                <span className='text-xl md:text-2xl'>Junior Fronted Developer</span>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-4 text-white bg-white bg-opacity-20 drop-shadow-lg p-4 rounded-lg text-center'>
                            <span className='text-lg text-white' ><p className='text-xl'><b>About Me</b></p> I'm Bachelor of Computer Science and self-educated Fronted Developer with a huge willingness to learn technologies. Perhaps the graphics aren't my best side as you can see, but don't worry I can handle every under the hood technical problem. </span>
                            <span>
                                <p className='text-xl'><b>Soft Skils</b></p>
                                Communicativeness<br />
                                Teamwork skills<br />
                                Responsibility and Conscientiousness<br />
                                Ability to solve problems independently
                            </span><span>
                                <p className='text-xl'><b>Languages</b></p>
                                Polish - native<br />
                                English - B2

                            </span>
                        </div>
                    </div>
                    <a className='bg-white bg-opacity-20 drop-shadow-lg w-48 text-center p-2 rounded-md text-caputmortuun border border-caputmortuum mt-10 hover:bg-liver hover:text-silver' href={resume} download='PS_CV'>Download CV</a>
                </div>
            </div>
            <a href="#technologies" className='mt-10 p-6 md:p-0 animate-bounce text-liver cursor-pointer'>
                <RxDoubleArrowDown size={35} />
            </a>

        </div>
    )
}

export default Aboutme