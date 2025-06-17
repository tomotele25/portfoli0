import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold mb-6">My Resume</h2>

      <iframe
        src="/CV.pdf"
        title="Resume PDF"
        className="w-full max-w-4xl h-[80vh] border-2 rounded-xl shadow-lg"
      ></iframe>

      <a
        href="/CV.pdf"
        download
        className="mt-6 inline-block bg-slate-800 text-white px-6 py-3 rounded-md hover:opacity-90 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
