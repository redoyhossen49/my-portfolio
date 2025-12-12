import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { menuContext } from "./context/MenuProvider";

const NavBar = () => {
  const { menuOpen, setMenuOpen } = useContext(menuContext);
  return (
    <nav className="bg-slate-900  shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center rounded-b-lg ">
        <div className="text-white flex gap-6 items-center ">
          <p className="hidden  md:inline-flex md:block  md:items-center md:justify-center md:w-12 md:h-12 md:rounded-full  md:text-white md:font-extrabold md:animate-combinedbackGroundAndspinSlow">
            {"</>"}
          </p>

          <div>
            <h1
              className="hidden  md:block text-xl animate-textColorChange
    sm:text-2xl 
    md:text-3xl 
    lg:text-3xl  font-bold tracking-wide drop-shadow-md transition duration-300 hover:drop-shadow-xl hover:text-red-300 hover:scale-105 cursor-pointer"
            >
              REDOY HOSSEN
            </h1>
            <h1
              className="  md:hidden text-xl animate-textColorChange
    sm:text-2xl 
    md:text-3xl 
    lg:text-3xl  font-bold tracking-wide drop-shadow-md transition duration-300 hover:drop-shadow-xl hover:text-red-300 hover:scale-105 cursor-pointer"
            >
              RH
            </h1>
            <h2>Front-end Developer</h2>
          </div>
        </div>

        <ul className="hidden text-white bg-black lg:flex  lg:flex-row lg:justify-center lg:items-center gap-4 lg:gap-6 text-white font-medium   lg:text-lg  py-2 px-4 rounded-full">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "hover:text-yellow-500"
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose className="w-6 h-6 text-white"></IoMdClose>
            ) : (
              <CiMenuBurger className="w-6 h-6 text-white"></CiMenuBurger>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`lg:hidden flex flex-col items-center space-y-2 py-4 font-josefin  overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
            menuOpen
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500`
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block ${
                isActive ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-500" : "text-white"
              } hover:text-yellow-500`
            }
          >
            Resume
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
