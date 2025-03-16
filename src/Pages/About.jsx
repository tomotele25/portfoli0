import React, { useState } from "react";
import HeroImg from "../assets/Hero.png";
import { FaCheckCircle } from "react-icons/fa";
const tabs = [
  { id: "tab1", tabTitle: "Personal info" },
  { id: "tab2", tabTitle: "Skill" },
  { id: "tab3", tabTitle: "Experience" },
];

const content = {
  tab1: (
    <div className="grid gap-5  font-serif">
      <span>
        <h1 className="text-2xl font-bold">
          Unmatched service quality for over 3years
        </h1>
        <p className="text-sm">
          I specialize in crafting intuitive website with cutting edge
          technology delivering <br /> dyncmic and engaging user experience{" "}
        </p>
      </span>
      <span className="grid gap-7 sm:flex sm:gap-20">
        <span className=" list-none text-sm">
          <li> Tomotele Christopher </li>
          <li> Tomotelechristopher25@gmail.com</li>
          <li> Maseter on computer science </li>
        </span>
        <span className=" list-none text-sm">
          <li>09152580773</li>
          <li>Born on 25th december 2005</li>
          <li>Lagos nigeria</li>
        </span>
      </span>
      <span className="grid gap-2">
        <h1 className="border-b-2 pb-5 text-sm">Language</h1>

        <p className="text-sm">English</p>
      </span>
    </div>
  ),
  tab2: (
    <div className="flex justify-between sm:gap-40  border-black  border-2 rounded-lg p-5">
      <div className="grid gap-3  text-sm">
        <h1>Frontend</h1>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
      </div>
      <div className="grid gap-3  text-sm">
        <h1>Backend</h1>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
      </div>
    </div>
  ),
  tab3: (
    <div className="flex justify-between sm:gap-40  border-black  border-2 rounded-lg p-5">
      <div className="grid gap-3  text-sm">
        <h1>Frontend</h1>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
      </div>
      <div className="grid gap-3  text-sm">
        <h1>Backend</h1>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
        <span className="flex items-center gap-1">
          <span>
            <FaCheckCircle />
          </span>
          <span>
            {" "}
            <p>HTML</p>
            <p>Experienced</p>
          </span>
        </span>
      </div>
    </div>
  ),
};

const About = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className=" h-[100vh]">
      <div>
        <h1 className="text-4xl flex justify-center ">About Me</h1>
      </div>
      <div className=" flex   h-full items-center justify-between px-10  sm:px-30 ">
        <div className="hidden sm:flex h-72">
          <img src={HeroImg} className="rounded-full " alt="" />
        </div>
        <div className="flex flex-col gap-5 ">
          <div className=" grid gap-5">
            <div className="flex flex-wrap  gap-2 pt-10 ">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={` ${
                    activeTab === tab.id
                      ? "bg-blue-200 p-3  shadow-md"
                      : "bg-slate-50"
                  }  rounded-md p-3 sm:w-33`}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
            <div className="sm:h-fit sm:w-fit">{content[activeTab]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
