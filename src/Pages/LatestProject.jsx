import React from "react";
import { useTheme } from "../ThemeContext";

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

const LatestProject = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`px-6 py-20 ${
        isDark ? "bg-slate-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl overflow-hidden group transition-transform transform hover:scale-[1.03] hover:shadow-lg duration-300 ${
                isDark ? "bg-slate-800" : "bg-gray-100"
              }`}
            >
              {/* Image */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4 opacity-80 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full border ${
                        isDark
                          ? "bg-slate-700 border-slate-600 text-white"
                          : "bg-white border-gray-300 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className={`text-sm font-medium underline group-hover:no-underline ${
                    isDark ? "text-teal-400" : "text-blue-600"
                  }`}
                >
                  View Project →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
