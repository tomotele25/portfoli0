import React from "react";
import { FiCode, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const Services = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const iconColor = isDark ? "text-teal-400" : "text-blue-500";

  return (
    <section
      className={`py-20 px-6 md:px-12 ${
        isDark ? "bg-slate-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          I provide modern solutions to help businesses and individuals succeed
          online.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: <FiCode className={`text-4xl mb-4 ${iconColor}`} />,
              title: "Web Development",
              desc: "I build fast, responsive, and dynamic websites using modern frameworks like React and Next.js.",
            },
            {
              icon: <FiSmartphone className={`text-4xl mb-4 ${iconColor}`} />,
              title: "Mobile Optimization",
              desc: "Every site I create is fully optimized for mobile, ensuring a seamless experience across devices.",
            },
            {
              icon: <FiTrendingUp className={`text-4xl mb-4 ${iconColor}`} />,
              title: "Performance & SEO",
              desc: "I focus on speed and discoverability, helping your site rank better and load faster for users.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border ${
                isDark
                  ? "border-gray-600 bg-slate-700"
                  : "border-gray-200 bg-white"
              }`}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
