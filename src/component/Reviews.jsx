import React from "react";
import { useTheme } from "../ThemeContext";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Oginni Jeremiah",
    role: "Founder, BrightTech",
    message:
      "Chris was incredible to work with. He built a sleek, fast site that exceeded our expectations!",
  },
  {
    name: "Taiwo Enoch",
    role: "Product Designer",
    message:
      "Reliable, clean code and pixel-perfect execution. Highly recommend him for any frontend project.",
  },
  {
    name: "Ajayi Samuel",
    role: "CEO, NaijaFoods",
    message:
      "Professional, fast, and friendly. Our website went live in record time thanks to Chris!",
  },
];

const Reviews = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 px-6 md:px-12 ${
        isDark ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Reviews</h2>
        <p className="text-lg max-w-xl mx-auto mb-12 opacity-80">
          What people are saying about working with me.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 border shadow-md hover:shadow-lg transition duration-300 ${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <FaQuoteLeft
                className={`text-2xl mb-4 ${
                  isDark ? "text-teal-400" : "text-blue-500"
                }`}
              />
              <p className="mb-4 italic">"{t.message}"</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm opacity-70">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
