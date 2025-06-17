import React from "react";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } flex flex-col h-[89vh] justify-center gap-10 items-center px-6`}
    >
      <div className="flex flex-col gap-5 items-center text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold">Need a website?</h1>
        <p className="text-lg leading-relaxed">
          I build sleek, responsive websites and apps that turn ideas into
          impact. Clean code. Intuitive design. Great performance.
        </p>
      </div>

      <nav className="grid sm:flex gap-5 relative z-10">
        <Link
          to="/resume"
          className={`${
            isDark ? "bg-white text-black" : "bg-slate-800 text-white"
          } px-6 py-3 rounded-lg font-medium hover:opacity-90 transition`}
        >
          View Resume
        </Link>

        <a
          href="mailto:youremail@example.com"
          className={`${
            isDark ? "bg-white text-black" : "bg-slate-800 text-white"
          } px-6 py-3 rounded-lg font-medium hover:opacity-90 transition`}
        >
          Email Me
        </a>
      </nav>

      {/* SVG divider */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill={isDark ? "#1e293b" : "#f9fafb"}
          d="M0,256L48,250.7C96,245,192,235,288,229.3C384,224,480,224,576,208C672,192,768,160,864,154.7C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
