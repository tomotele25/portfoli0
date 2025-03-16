import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import LatestProject from "./LatestProject";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <div className="">
        <About />
      </div>
      <div className=" ">
        <Services />
      </div>
      <div className="">
        <LatestProject />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
