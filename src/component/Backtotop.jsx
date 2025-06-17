import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import { FaArrowCircleUp } from "react-icons/fa";
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    show && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50   p-5 rounded-full shadow-lg  transition duration-300  ${
          isDark ? "bg-slate-800 text-white" : "bg-white text-black"
        }`}
      >
        <FaArrowCircleUp
          className={`${isDark ? "font-light" : "font-black"}`}
        />
      </button>
    )
  );
};

export default BackToTop;
