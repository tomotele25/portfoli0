import React from "react";
import HeroImg from "../assets/Hero.png";
import { FiSend, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Hero = () => {
  return (
    <div className=" h-[100vh] sm:h-[80vh] ">
      <div className="grid px-10 sm:flex sm:justify-between sm:items-center  sm:px-30 h-full">
        <div>
          <span className="gap-5  sm:flex sm:flex-col sm:gap-2 pb-6">
            <p className="text-base pb-3 sm:pb-0 font-serif">Web Developer</p>
            <h1 className=" text-2xl sm:text-3xl pb-3 sm:pb-3 leading-relaxed font-bold font-serif">
              Hello,my name is <br /> Tomotele Christopher
            </h1>
            <p className=" leading-relaxed pb-8 sm:pb-0 font-serif font-medium ">
              Brief decription with insight into myself my vocational journey
              and what i <br /> engage in professionally
            </p>
          </span>
          <span
            className="flex sm:flex sm:flex-row gap-5 
        "
          >
            <button className=" flex items-center w-32 justify-center h-14 gap-2 sm:w-40 sm:h-14 bg-white shadow-md sm:p-5 rounded-lg">
              Contact me
              <FiSend />
            </button>
            <button className="flex items-center  w-32 justify-center h-14  sm:w-44 sm:h-14 gap-2 bg-white shadow-md sm:p-5 rounded-lg ">
              Download CV
              <FiDownload />
            </button>
          </span>
          <span className=" pt-8 pl-5 flex gap-5 sm:pt-5">
            <FaGithub size={20} />
            <FaLinkedin size={20} />
            <FaTwitter size={20} />
          </span>
        </div>
        <div className="flex justify-center">
          <img
            src={HeroImg}
            className="rounded-full w-52 h-52 sm:w-72 sm:h-72"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
