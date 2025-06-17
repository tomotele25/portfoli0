import React from "react";
import { useTheme } from "../ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`${
        isDark ? "bg-slate-700 text-white" : "bg-gray-50 text-gray-900"
      } py-20 px-6 md:px-12`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-85">
          I'm a passionate developer focused on clean code, responsive design,
          and performance. Whether it’s building from scratch or breathing life
          into a design, I aim to create great digital experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
          {[
            {
              title: "Tech Stack",
              content:
                "React, Next.js, Tailwind CSS, Node.js, MongoDB, Express, Git & GitHub.",
            },
            {
              title: "Focus Areas",
              content:
                "Frontend development, UI/UX design, responsive layout, performance optimization.",
            },
            {
              title: "Goals",
              content:
                "To collaborate on impactful projects, learn continuously, and build solutions that matter.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 border rounded-xl shadow-sm hover:shadow-lg transition ${
                isDark
                  ? "border-gray-600 bg-gray-800"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
