import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
          isDark
            ? "bg-slate-800 text-white border-slate-700 hover:bg-slate-700"
            : "bg-white text-black border-gray-300 hover:bg-gray-100"
        }`}
      >
        <FaArrowCircleUp size={24} />
      </button>
    )
  );
};

export default BackToTop;
