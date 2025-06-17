import React from "react";
import PortfolioImg from "../assets/Portfolio.png";
import Learnova from "../assets/Learnova.png";
import PortfolioImg2 from "../assets/Portfolio2.png";
import { useTheme } from "../ThemeContext";

const projects = [
  {
    id: 1,
    image: PortfolioImg,
    title: "Modern UI Website",
    description: "A sleek and responsive modern website built with React.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://example.com/project1",
  },
  {
    id: 2,
    image: Learnova,
    title: "Learnova",
    description: "Learning Platform",
    tech: ["Next.js", "MongoDB", "Node", "Express"],
    link: "https://rightminds-academy-risy.vercel.app/",
  },
  {
    id: 3,
    image: PortfolioImg2,
    title: "Developer Portfolio",
    description: "A personal portfolio site showcasing skills and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/project3",
  },
];

const LatestProject = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={` mx-auto px-4 py-16  ${
        isDark ? "bg-slate-700 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Latest Projects</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden border border-gray-300 bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full  h-fit object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-blue-600 text-sm underline group-hover:opacity-80">
                View Project
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
