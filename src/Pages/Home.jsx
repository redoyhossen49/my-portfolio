import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100 to-black flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 md:py-20 gap-10 relative">
      
      <div className="w-full md:w-1/2 text-center md:text-left space-y-5 animate-fade-in">
       
        <p className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
          Front-End Developer | React | Tailwind CSS
        </p>

        
        <h2 className="text-sm sm:text-base md:text-lg text-gray-500">
          👋 Hello, I am
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-800 leading-tight">
          Redoy Khan
        </h1>

        
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium">
          <Typewriter
            words={[
              "I build modern websites",
              "I love working with React.js",
              "I create beautiful UIs",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {/* Bullet Points */}
        <ul className="text-left space-y-2 mt-2 text-gray-700 text-sm sm:text-base list-disc list-inside">
          <li>3+ years of experience in frontend development</li>
          <li>Responsive, mobile-first design expert</li>
          <li>Clean, scalable & pixel-perfect UI</li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-4">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 duration-300 shadow-md text-sm sm:text-base"
          >
            📄 Download Resume
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white duration-300 shadow-sm text-sm sm:text-base"
          >
            📩 Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-6 justify-center md:justify-start text-xl sm:text-2xl text-blue-600">
          <a
            href="https://github.com/hridoy000111"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-black duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-blue-800 duration-300" />
          </a>
          <a
            href="https://fiverr.com/hridoy000111"
            target="_blank"
            rel="noreferrer"
          >
            <SiFiverr className="hover:text-green-600 duration-300" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl hover:scale-105 duration-300">
          <img
            src={profile}
            alt="Redoy Khan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
