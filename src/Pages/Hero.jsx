import React from "react";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={` ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }  flex flex-col h-[89vh] justify-center gap-10  items-center`}
    >
      <span className="flex flex-col gap-5  items-center">
        <h1 className="text-4xl sm:text-5xl font-bold ">Need a website </h1>
        <p className="min-w-2/3 p-2 md:w-3/4 lg:min-w-2/3  text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit
          aspernatur enim, libero praesentium totam molestias assumenda debitis
          accusamus soluta velit error optio excepturi ipsum, asperiores nostrum
          voluptatum quaerat deserunt?
        </p>
      </span>
      <span className="grid sm:flex gap-5">
        <Link
          className={`${
            isDark ? "bg-white text-black" : "bg-slate-800 text-white"
          } px-13 py-3 justify-center flex rounded-b-lg`}
        >
          View Resume
        </Link>
        <Link
          className={`${
            isDark ? "bg-white text-black" : "bg-slate-800 text-white"
          } px-13 py-3 justify-center flex rounded-b-lg`}
        >
          Email me
        </Link>
      </span>
    </div>
  );
};

export default Hero;
