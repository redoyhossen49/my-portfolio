import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import { IoIosStar } from "react-icons/io";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="min-h-screen  flex flex-col md:flex-row  justify-center px-4  md:px-8 lg:px-16  py-4 gap-6 relative animate-topScaleIn">
        <div className=" max-w-6xl mx-auto text-center  space-y-4 animate-fade-in">
          <p className="inline-block bg-black text-sm  px-4 py-2 border-4 text-white  rounded-full  font-medium shadow-lightShadow animate-borderColorChange">
            <IoIosStar className="text-yellow-500 text-xl inline-block mr-4 animate-spinSlow " />
            Welcome To My Universe
          </p>

          <h2 className="text-4xl  md:text-8xl text-white animate-textColorChange ">
            Frontend Developer <span className="text-white">& Creative</span>
            <span className="animate-textColorChange1 ml-6">Coder</span>
          </h2>
          <hr className="h-[10px] w-[20%] mx-auto  rounded-full   animate-backGroundColorChange" />

          <p className="text-xl text-white md:text-2xl max-w-3xl  mx-auto">
            I craft
            <span className="animate-textColorChange mx-2 font-bold ">
              beautiful
            </span>
            ,
            <span className="animate-textColorChange1 mx-2 font-bold">
              interactive
            </span>
            web experiences with modern technologies.
            <br /> Passionate about clean code, stunning designs, and seamless
            user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center  gap-4 py-6">
            <Link
              to="/projects"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white duration-300 shadow-sm text-sm sm:text-base"
            >
              💻 Explore My Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 duration-300 shadow-md text-sm sm:text-base animate-buttonFlow"
            >
              📄 Download Resume
            </a>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white duration-300 shadow-sm text-sm sm:text-base"
            >
              📩 Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 py-2 justify-center  text-2xl md:text-4xl text-blue-600 ">
            <a
              href="https://github.com/redoyhossen49"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-white duration-300 animate-wave" />
            </a>
            <a
              href="https://linkedin.com/in/redoyhossen49"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-white duration-300 animate-wave" />
            </a>
            <a
              href="https://fiverr.com/hridoy000111"
              target="_blank"
              rel="noreferrer"
            >
              <SiFiverr className="hover:text-white duration-300 border border-blue-500  rounded-lg px-2 bg-gray-700 animate-wave" />
            </a>
          </div>
          <div className="hover:scale-105 transition duration-500">
            <About></About>
          </div>
          <div className="hover:scale-105 transition duration-500">
            <Skills></Skills>
          </div>
          <div className="hover:scale-105 transition duration-500">
            <Projects></Projects>
          </div>
          <div className="hover:scale-105 transition duration-500">
            <Contact></Contact>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
