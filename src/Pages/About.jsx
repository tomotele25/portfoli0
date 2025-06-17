import React from "react";
import { useTheme } from "../ThemeContext";

const About = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`${
        isDark ? "bg-slate-700 text-white" : "bg-white text-black"
      }  py-15 px-6 md:px-12`}
    >
      <div
        className={`max-w-5xl ${
          isDark ? " text-white" : " text-black"
        }  mx-auto text-center`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 `}>
          I'm a passionate developer who loves crafting responsive,
          user-friendly websites and applications. Whether it's building from
          scratch or bringing a design to life, I focus on clean code, great
          performance, and intuitive user experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition ">
            <h3 className="text-xl font-semibold mb-2"> Tech Stack</h3>
            <p className="">
              React, Next.js, Tailwind CSS, Node.js, MongoDB, Express, Git &
              GitHub.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition ">
            <h3 className="text-xl font-semibold mb-2"> Focus Areas</h3>
            <p className="">
              Frontend development, UI/UX design, responsive layout, performance
              optimization.
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition ">
            <h3 className="text-xl font-semibold mb-2"> Goals</h3>
            <p className="">
              To collaborate on impactful projects, learn continuously, and
              deliver solutions that help people and businesses thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
