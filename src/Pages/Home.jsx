import React from "react";
import HeroImg from "../assets/Hero.png";
import { FiSend, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import About from "./About";
const Home = () => {
  return (
    <div className="">
      <div className=" grid sm:flex px-10 sm:px-30 items-center justify-between">
        <div>
          <span className="flex flex-col gap-2">
            <p className="text-base">Web Developer</p>
            <h1 className="text-3xl leading-relaxed font-bold">
              Hello,my name is <br /> Tomotele Christopher
            </h1>
            <p className="leading-relaxed">
              Brief decription with insight into myself my vocational <br />{" "}
              journey and what i engage in professionally
            </p>
          </span>
          <span
            className=" grid sm:flex gap-5 pt-5
        "
          >
            <button className=" flex items-center  gap-2 bg-white shadow-md p-5 rounded-full">
              Contact me
              <FiSend />
            </button>
            <button className="flex items-center gap-2 bg-white shadow-md p-5 rounded-full ">
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
        <div className="mt-10">
          <img src={HeroImg} width={300} className="rounded-full" alt="" />
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
