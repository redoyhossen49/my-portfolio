import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-slate-900  shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center rounded-b-lg shadow-lg">
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

        <ul className=" bg-black flex flex-wrap justify-center md:flex-row items-center gap-4 md:gap-6 text-white font-medium text-sm  md:text-lg border-2 border-black py-2 px-4 rounded-full">
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
