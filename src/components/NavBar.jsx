import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-slate-900  shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center rounded-b-lg shadow-lg">
        <div className="">
          <h1
            className="text-xl animate-textColorChange
    sm:text-2xl 
    md:text-3xl 
    lg:text-3xl  font-bold tracking-wide text-white drop-shadow-md transition duration-300 hover:drop-shadow-xl hover:text-red-300 hover:scale-105 cursor-pointer"
          >
            RH
          </h1>
          <h2 className="text-white animate-textColorChange">
            Front-end Developer
          </h2>
        </div>

        <ul className=" bg-black flex flex-col md:flex-row items-center gap-4 md:gap-6 text-yellow-300 font-medium text-base sm:text-lg md:text-base lg:text-lg border-2 border-black py-3 px-4 rounded-full">
          <li>
            <Link className="hover:text-yellow-500 " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
