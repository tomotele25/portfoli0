import React from "react";
import { useTheme } from "../ThemeContext";
// import PortfolioImg from "../assets/Portfolio.png";
// import Learnova from "../assets/Learnova.png";
// import PortfolioImg2 from "../assets/Portfolio2.png";

const projects = [
  {
    id: 1,
    image: "/assets/Portfolio.png",
    title: "Developer Portfolio",
    description: "A portfolio website",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://portfoli0-sigma.vercel.app/",
  },
  {
    id: 2,
    image: "/assets/Learnova.png",
    title: "Learnova",
    description: "Learning Platform",
    tech: ["Next.js", "MongoDB", "Node", "Express"],
    link: "https://rightminds-academy-risy.vercel.app/",
  },
  {
    id: 3,
    image: "/assets/Portfolio2.png",
    title: "Developer Portfolio 2",
    description: "A personal portfolio site showcasing skills and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/project3",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 px-6 md:px-12 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className={`min-w-[90%] sm:min-w-[500px] snap-center shrink-0 rounded-2xl overflow-hidden border transition-shadow duration-300 ${
              isDark
                ? "bg-slate-800 border-gray-700 hover:shadow-xl"
                : "bg-white border-gray-300 hover:shadow-lg"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm opacity-80 mb-4">{project.description}</p>
              <span
                className={`inline-block text-sm font-medium underline ${
                  isDark ? "text-green-400" : "text-blue-600"
                }`}
              >
                View Project
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
