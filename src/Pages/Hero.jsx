import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-hero bg-cover bg-center flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-light font-heading mb-4">
        Hi, I’m Redoy
      </h1>
      <h2 className="text-2xl md:text-3xl text-light">
        I am a{" "}
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
      <p className="mt-6 text-light/70 max-w-xl text-center">
        I create modern and responsive web applications with React and Tailwind CSS.
      </p>
    </section>
  );
};

export default Hero;
