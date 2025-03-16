import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[30vh]  bg-slate-900 text-white flex justify-center items-center">
      <span className=" pt-8 pl-5 flex gap-5 sm:pt-5">
        <FaGithub size={20} />
        <FaLinkedin size={20} />
        <FaTwitter size={20} />
      </span>
    </div>
  );
};

export default Footer;
