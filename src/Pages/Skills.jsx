import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      name: "React.js",
      icon: <FaReact className="text-blue-400" />,
      level: 80,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-blue-400" />,
      level: 80,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500" />,
      level: 85,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-yellow-500" />,
      level: 60,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-teal-400" />,
      level: 80,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, level: 70 },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-600" />,
      level: 65,
    },
  ];

  return (
    <section id="skills" className="py-8 px-6  md:px-20 animate-topScaleIn">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="inline-block  bg-black text-2xl md:text-4xl mb-8 text-center font-extrabold px-8 py-2 border-4 text-gray-200  rounded-full   shadow-lightShadow animate-borderColorChange">
          Skills & Technologies
        </h2>

        <p className=" text-gray-400 mb-12 text-lg md:text-xl">
          These are some of the technologies and tools I work with.
        </p>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 rounded-xl   flex flex-col items-center hover:shadow-lightShadow transition-transform duration-1000 hover:scale-105 ease-in-out"
            >
              <div className="text-4xl mb-4 animate-spinSlow">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 animate-textColorChange">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {skill.level}% Proficiency
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
