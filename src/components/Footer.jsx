import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900  border-t border-gray-200">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center rounded-b-lg shadow-lg">
          <div className="text-white flex gap-6 items-center ">
            <span className="hidden  md:inline-flex md:block  md:items-center md:justify-center md:w-12 md:h-12 md:rounded-full  md:text-white md:font-extrabold md:animate-combinedbackGroundAndspinSlow">
              {"</>"}
            </span>
            <div className="">
              <h1
                className="hidden text-xl animate-textColorChange
    sm:text-2xl 
    md:text-3xl 
    lg:text-3xl  font-bold tracking-wide drop-shadow-md transition duration-300 hover:drop-shadow-xl hover:text-red-300 hover:scale-105 cursor-pointer"
              >
                REDOY HOSSEN
              </h1>
              <h1
                className=" md:hidden text-xl animate-textColorChange
    sm:text-2xl 
    md:text-3xl 
    lg:text-3xl  font-bold tracking-wide drop-shadow-md transition duration-300 hover:drop-shadow-xl hover:text-red-300 hover:scale-105 cursor-pointer"
              >
                RH
              </h1>
              <h2>Front-end Developer</h2>
            </div>
          </div>
          <div className="flex gap-6 py-2 justify-center  text-2xl md:text-4xl text-blue-600 ">
            <a
              href="https://github.com/hridoy000111"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-white duration-300 animate-wave" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
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
          <div className="text-gray-300 px-4 py-8 ">
            <p>&copy; 2025 Redoy Hossen</p>
            <p>Made with ❤️ & Code</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
