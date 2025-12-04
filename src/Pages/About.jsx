import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/images/profile.jpg";

const About = () => {
  const strongClass = "text-xl font-semibold animate-textColorChange";
  return (
    <section
      id="about"
      className="min-h-screen py-2  px-6  md:px-16 flex justify-center animate-topScaleIn"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div className=" w-44 h-44  md:w-72 md:h-72 rounded-full overflow-hidden border-8  animate-borderColorChange  transition-transform duration-500 hover:scale-105">
          <img
            src={profile}
            alt="Redoy Khan"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-5xl font-extrabold drop-shadow-lg tracking-wide animate-textColorChange">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed tracking-wide">
            <span className="inline-block animate-wave text-2xl">👋</span> Hi, I
            am <strong className={strongClass}>Redoy Hossen</strong>, I'm a
            passionate Front End developer with experience developing web
            applications with <strong className={strongClass}> React.js</strong>
            , <strong className={strongClass}>Next.js</strong>,{" "}
            <strong className={strongClass}>Redux.js</strong>,{" "}
            <strong className={strongClass}>Tailwind CSS</strong>,
            <strong className={strongClass}>JavaScript</strong>,
            <strong className={strongClass}>TypeScript & React Query</strong>{" "}
            etc. Technologies. I am strongly interested in learning new
            technologies and implementing them in my projects. I'm a
            self-motivated,disciplined and hardworking individual who is always
            ready to learn new things and work in a team.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed tracking-wide">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or learning about the latest
            trends in web development. I believe in continuous learning and
            pushing the boundaries of what's possible on the web.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed tracking-wide">
            My goal is to bridge the gap between design and development,
            creating seamless user experiences that are both visually stunning
            and highly functional.
          </p>

          <p className="text-white text-base italic tracking-wide animate-textColorChange">
            <span className="inline-block text-2xl animate-spinSlow">✨</span>{" "}
            <Typewriter
              words={["Let's work together and build something amazing!"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
