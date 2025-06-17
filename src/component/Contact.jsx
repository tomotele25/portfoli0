import React from "react";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 px-6 md:px-12 ${
        isDark ? "bg-slate-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Let's Work Together
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto opacity-80">
          Have a question, idea, or project in mind? Reach out — I'd love to
          hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="opacity-80">devchris@email.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Location</h4>
              <p className="opacity-80">Lagos, Nigeria</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Availability</h4>
              <p className="opacity-80">
                Open for freelance or full-time roles
              </p>
            </div>
          </div>

          {/* Contact Form (UI only) */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md border outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-md border outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-md font-semibold ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              } transition`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
