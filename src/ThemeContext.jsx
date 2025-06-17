import { createContext, useContext, useEffect, useState } from "react";

// Create context
const ThemeContext = createContext();

// Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Hook
export const useTheme = () => useContext(ThemeContext);
