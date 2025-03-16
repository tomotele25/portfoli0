import React from "react";
import Card from "../component/Card";
const Services = () => {
  return (
    <div className="   sm:h-[90vh]">
      <div className="flex justify-center">
        <h1 className="text-4xl font-serif">Services</h1>
      </div>
      <div className="grid px-10 py-10 gap-5 sm:flex  items-center h-full sm:pt-0 sm:px-30">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Services;
