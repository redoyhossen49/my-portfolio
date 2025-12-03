import React from "react";

const Resume = () => {
  return (
    <section
      id="resume"
      className=" min-h-screen py-8 px-6 md:px-20 flex flex-col items-center justify-center animate-topScaleIn"
    >
      <h2 className="inline-block  bg-black text-4xl mb-8 text-center font-extrabold px-8 py-2 border-4 text-gray-200  rounded-full   shadow-lightShadow animate-borderColorChange">
        My Resume
      </h2>

      <p className="max-w-3xl text-center animate-textColorChange mb-8 leading-relaxed text-lg">
        Download my professional resume to learn more about my skills,
        experiences, and projects.
      </p>

      <a
        href="/resume.pdf"
        download
        className="inline-block bg-gray-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default Resume;
