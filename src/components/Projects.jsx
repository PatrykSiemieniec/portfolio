import { RxDoubleArrowDown } from "react-icons/rx";
import { AiOutlineGlobal, AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";


import quiz from '../assets/projects/irregularFull.png';
import weather from '../assets/projects/weather.png';
import internship_project from '../assets/projects/internship_project.png';
import restaurantapp from '../assets/projects/restaurantapp.png';


const Projects = () => {
    return (
        <div id="projects" className=' bg-silver flex flex-col lg:flex-row gap-4 items-center justify-center w-full h-auto relative lg:h-screen p-5  '>
            <p className="text-4xl absolute top-[10px] text-caputmortuum">Projects</p>
            <div className="flex flex-col lg:flex-row flex-wrap w-screen justify-evenly p-6 gap-4 mt-10 lg:mt-0 ">
                <div className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg rounded-lg lg:w-2/5 bg-white p-2"><span className="text-caputmortuum text-3xl">Irregular Verbs Quiz</span>
                    <div className="flex flex-col lg:flex-row p-2  w-full gap-4 items-center ">
                        <img className=" w-full lg:w-1/2 object-contain rounded" src={quiz} alt='quiz' />
                        <div className="w-full lg:w-1/2 text-center text-lg"><span className="text-liver" >Simple quiz for now only dedicated to polish students where you can check your knowledge about irregular verbs!</span>
                            <div className="flex justify-center gap-6 mt-4 text-liver">
                                <a target="_blank" alt="irregularVerbsQuiz webpage link" href="https://irregularverbsquiz.netlify.app/"><AiOutlineGlobal size={35} /> </a>
                                <a target="_blank" alt="irregularVerbsQuiz github link" href="https://github.com/PatrykSiemieniec/irregularVerbsQuiz"><AiOutlineGithub size={35} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg rounded-lg lg:w-2/5 bg-white p-2"><span className="text-caputmortuum text-3xl">Weather App</span>
                    <div className="flex flex-col lg:flex-row p-2  w-full gap-4 items-center ">
                        <img className=" w-full lg:w-1/2 object-contain rounded" src={weather} alt='weather' />
                        <div className="w-full lg:w-1/2 text-center text-lg"><span className="text-liver" >An application that allows you to check the weather for a specific location using a
                            weather API.</span>
                            <div className="flex justify-center gap-6 mt-4 text-liver">
                                <a target="_blank" alt="weather webpage link" href="https://psweatherapp.netlify.app/"><AiOutlineGlobal size={35} /> </a>
                                <a target="_blank" alt="weather github link" href="https://github.com/PatrykSiemieniec/weather_app"><AiOutlineGithub size={35} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg rounded-lg lg:w-2/5 bg-white p-2"><span className="text-caputmortuum text-3xl">Internship Project</span>
                    <div className="flex flex-col lg:flex-row p-2  w-full gap-4 items-center ">
                        <img className=" w-full lg:w-1/2 object-contain rounded" src={internship_project} alt='internship_project' />
                        <div className="w-full lg:w-1/2 text-center text-lg"><span className="text-liver" >An internship project demonstrating proficiency in required technologies. Adding
                            table fields using a form, data validation, data operations such as edit, delete,
                            delete multiple, and displaying data.</span>
                            <div className="flex justify-center gap-6 mt-4 text-liver">
                                <a target="_blank" alt="internship_project webpage link" href="https://psinternshipproject.netlify.app/"><AiOutlineGlobal size={35} /> </a>
                                <a target="_blank" alt="internship_project github link" href="https://github.com/PatrykSiemieniec/internship_project"><AiOutlineGithub size={35} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly items-center bg-opacity-20 drop-shadow-lg rounded-lg lg:w-2/5 bg-white p-2"><span className="text-caputmortuum text-3xl text-center">Restaurant management system
                </span>
                    <div className="flex flex-col lg:flex-row p-2  w-full gap-4 items-center ">
                        <img className=" w-full lg:w-1/2 object-contain rounded" src={restaurantapp} alt='restaurantapp' />
                        <div className="w-full lg:w-1/2 text-center text-lg"><span className="text-liver" >A system enabling the user to handle incoming orders, add, edit, and delete them.
                            The system should also have the ability for user registration and customization,
                            tailored to suit the user's own business.</span>
                            <div className="flex justify-center gap-6 mt-4 text-liver">
                                {/* <a target="_blank" alt="irregularVerbsQuiz webpage link" href="https://irregularverbsquiz.netlify.app/"><AiOutlineGlobal size={35} /> </a> */}
                                <a target="_blank" alt="restaurantapp youtube link" href="https://www.youtube.com/watch?v=NqsrQ7-LdsI&ab_channel=PatrykSiemieniec"><AiOutlineYoutube size={35} /> </a>

                                <a target="_blank" alt="restaurantapp github link" href="https://github.com/PatrykSiemieniec/engineering_project"><AiOutlineGithub size={35} /> </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <a href="#contact" className='lg:absolute lg:bottom-[40px]    p-6 md:p-0 animate-bounce text-liver cursor-pointer'>
                <RxDoubleArrowDown size={35} />
            </a>
        </div>
    )
}

export default Projects