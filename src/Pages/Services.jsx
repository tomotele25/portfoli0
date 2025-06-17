import React from "react";
import { FiCode, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { useTheme } from "../ThemeContext";

const Services = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={` ${
        isDark ? "bg-slate-800 text-white" : "bg-white text-gray-900"
      }  py-20 px-6 md:px-12`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
        <p className=" text-lg max-w-xl mx-auto mb-12">
          I provide modern solutions to help businesses and individuals succeed
          online.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Web Development */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <FiCode className="text-3xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="">
              I build fast, responsive, and dynamic websites using modern
              frameworks like React and Next.js.
            </p>
          </div>

          {/* Mobile Friendly */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <FiSmartphone className="text-3xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Optimization</h3>
            <p className="">
              Every site I create is fully optimized for mobile, ensuring a
              seamless experience across devices.
            </p>
          </div>

          {/* SEO & Performance */}
          <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <FiTrendingUp className="text-3xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance & SEO</h3>
            <p className="">
              I focus on speed and discoverability, helping your site rank
              better and load faster for users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
