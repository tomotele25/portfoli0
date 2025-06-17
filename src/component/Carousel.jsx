import React from "react";

const projects = [
  {
    id: 1,
    image: "https://via.placeholder.com/600x400?text=Project+1",
    title: "Modern UI Website",
    description: "A sleek and responsive modern website built with React.",
    tech: ["React", "Tailwind", "Vite"],
    link: "https://example.com/project1",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x400?text=Project+2",
    title: "Ecommerce App",
    description:
      "A full-featured ecommerce app with cart, authentication, and payment integration.",
    tech: ["Next.js", "MongoDB", "Stripe"],
    link: "https://example.com/project2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x400?text=Project+3",
    title: "Developer Portfolio",
    description: "A personal portfolio site showcasing skills and projects.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/project3",
  },
];

const Carousel = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
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
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
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

export default Carousel;
