import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    skillsAndtechnologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "FormSpree",
      "Custom Cursor",
    ],
    description:
      "I’m a frontend developer skilled in React, JavaScript, and Tailwind CSS. My portfolio features interactive projects with smooth animations, dynamic backgrounds, custom cursors, and seamless form handling using FormSpree. I focus on clean code and engaging user experiences.",
    imageUrl: "/src/assets/images/home.png",
    liveUrl: "https://my-portfolio-ashen-psi-30.vercel.app",
    githubUrl: "https://github.com/redoyhossen49/my-portfolio",
  },
  {
    id: 2,
    title: "Shopping Website",
    skillsAndtechnologies: ["React.js", "JavaScript", "Tailwind CSS"],
    description:
      "This is a modern and responsive shopping website built with React and Tailwind CSS. The project features a clean UI, smooth navigation, and an interactive shopping experience. Users can browse various products, view details, and explore the site seamlessly on both desktop and mobile devices.",
    imageUrl: "/shopping-image.PNG",
    liveUrl: "https://shopping-website-fjox.vercel.app/ ",
    githubUrl: "https://github.com/redoyhossen49/shopping-website",
  },
  {
    id: 3,
    title: "Blood donation Website",
    skillsAndtechnologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",

      "LocalStorage ",
      "Typewriter Effect ",
      " Context API",
    ],
    description:
      " Built a full-featured Blood Donation website allowing users to post blood   requests and donors to respond.  Built user-friendly interfaces with React and Tailwind CSS, using Context API for smooth state management and dynamic updates, ensuring responsive layouts and seamless navigation.",
    imageUrl: "/bloodWebsite.png",
    liveUrl: "https://blood-donation-website-omega.vercel.app/",
    githubUrl: "https://github.com/redoyhossen49/Blood-Donation-Website",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-8  px-6  md:px-12 animate-topScaleIn">
      <div className="max-w-7xl mx-auto">
        <p className=" bg-black text-xl max-w-sm mx-auto  px-2 py-4 mb-8 border-4 text-white text-center  rounded-full  font-extrabold shadow-lightShadow animate-borderColorChange">
          Explore My Projects
        </p>

        <div className="grid gap-16 lg:gap-10  lg:grid-cols-3">
          {projects.map(
            ({
              id,
              title,
              description,
              imageUrl,
              liveUrl,
              githubUrl,
              skillsAndtechnologies,
            }) => (
              <div
                key={id}
                className="bg-gray-600   rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-1000 ease-in-out
"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-200 mb-4">{description}</p>
                  <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-200">
                    {skillsAndtechnologies.map((skill, index) => (
                      <li
                        key={index}
                        className="border rounded-full px-2 py-1  "
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-8">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-800 font-medium "
                    >
                      Live Demo
                    </a>
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-800 font-medium "
                      aria-label={`${title} GitHub Repository`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
