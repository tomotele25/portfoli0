import React from "react";
import Carousel from "../component/Carousel";

const LatestProject = () => {
  return (
    <div className="px-10 sm:px-30 h-[50vh] sm:h-[100vh] ">
      <div className="flex justify-center   pt-5">
        <h1 className="text-4xl sm:text-5xl font-serif">Latest Projects</h1>
      </div>

      <div className="flex justify-center items-center h-full  ">
        <Carousel />
      </div>
    </div>
  );
};

export default LatestProject;
