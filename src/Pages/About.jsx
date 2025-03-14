import React, { useState } from "react";
import HeroImg from "../assets/Hero.png";

const tabs = [
  { id: "tab1", tabTitle: "Personal info" },
  { id: "tab2", tabTitle: "Skill" },
  { id: "tab3", tabTitle: "Experience" },
];

const content = {
  tab1: (
    <div>
      <p>
        Name <br /> Tomotele christopher{" "}
      </p>
      <p>
        school <br /> Fedral University of Abeokuta{" "}
      </p>
      <p>
        Name <br /> Tomotele christopher{" "}
      </p>
    </div>
  ),
  tab2: (
    <div>
      <p>Hello this is tab 2</p>
    </div>
  ),
  tab3: (
    <div>
      <p>hello this is tab 3</p>
    </div>
  ),
};

const About = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className=" px-10 mt-16 sm:px-30 ">
      <div>
        <h1 className="text-4xl flex justify-center ">About Me</h1>
      </div>
      <div className="grid  sm:flex justify-between  sm:p-10">
        <div className="hidden sm:flex">
          <img src={HeroImg} width={300} className="rounded-full" alt="" />
        </div>
        <div>
          <div className="flex gap-9 pt-10 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg-blue-200 p-3  shadow-md"
                    : "bg-slate-50"
                } sm:w-33 rounded-md`}
                onClick={() => {
                  setActiveTab(tab.id);
                }}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div>{content[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
