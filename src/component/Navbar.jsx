import { useTheme } from "../ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav
      className={`w-full px-6 py-4 border-b-2  flex justify-between items-center shadow-md ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Left side - Your name */}
      <h1 className="text-2xl font-bold">DevChris</h1>

      {/* Right side - Menu + Toggle */}
      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>

        {/* Toggle icon */}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
