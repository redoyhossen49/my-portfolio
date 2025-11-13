import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" />, level: 85 },
    { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 80 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 80 },
    { name: "Redux", icon: <SiRedux className="text-purple-600" />, level: 70 },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600" />, level: 65 },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-purple-50 to-blue-50 py-24 px-6 sm:px-12 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 text-center">
          My Skills
        </h2>
        <p className="text-center text-gray-700 mb-12 text-lg md:text-xl">
          These are some of the technologies and tools I work with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{skill.level}% Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
