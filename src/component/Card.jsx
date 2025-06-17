import React from "react";

const Card = ({ description, title, icon }) => {
  return (
    <div className="bg-white shadow-lg h-96 p-5 rounded-md grid gap-5">
      <span className="flex justify-center">{icon}</span>
      <span>
        <h1 className="text-2xl font-medium  ">{title}</h1>
        <p className=" text-sm h-32 sm:text-md font-serif">{description}</p>
      </span>
    </div>
  );
};

export default Card;
