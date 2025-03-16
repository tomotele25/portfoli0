import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSend, FiDownload } from "react-icons/fi"; // Default menu icon with three lines
import { useState } from "react";
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="">
      <div className="h-[20vh] px-12 flex justify-between items-center sm:px-30 ">
        <div>
          <h1 className="text-2xl">CT</h1>
        </div>
        <div className=" hidden gap-5  sm:flex mr-10">
          <Link>Home</Link>
          <Link to="project">Projects</Link>
          <Link>Contact</Link>
        </div>

        <div
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          className="flex sm:hidden relative"
        >
          <FiMenu size={28} />
        </div>
        {isVisible && (
          <div className=" grid absolute left-0 bg-black top-20 h-[calc(100vh-20px)] w-full z-20 text-white items-center justify-center  py-60">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
