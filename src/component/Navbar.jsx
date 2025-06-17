import { useTheme } from "../ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full px-6 py-4 shadow-md flex justify-between items-center sticky top-0 z-50 transition-colors duration-300 ${
        isDark
          ? "bg-gray-900 text-white border-b border-gray-700"
          : "bg-white text-gray-900 border-b border-gray-200"
      }`}
    >
      {/* Logo or Brand */}
      <h1 className="text-2xl font-bold tracking-tight">DevChris</h1>

      {/* Navigation Links (Desktop) */}
      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6 font-medium">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative hover:text-indigo-500 transition duration-200"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
