import React, { useState } from "react";
import PortfolioImg from "../assets/Portfolio.png";
import PortfolioImg1 from "../assets/Portfolio1.png";
import PortfolioImg2 from "../assets/Portfolio2.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const items = [
    { id: 1, image: PortfolioImg },
    { id: 2, image: PortfolioImg1 },
    { id: 3, image: PortfolioImg2 },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 1) {
        alert("That's all you can go back");
        return prev; // Stop at 1
      } else {
        return prev - 1; // Decrement for all values greater than 1
      }
    });
  };
  const nextSlide = (prev) => {
    setCurrentSlide((prev) => {
      if (prev < 3) {
        return prev + 1;
      } else {
        alert("there are only three image");
        return prev;
      }
    });
    console.log(currentSlide);
  };
  return (
    <div className="h-full">
      <div className="flex  h-full items-center">
        <span className="flex justify-center pr-5">
          <FaArrowAltCircleLeft
            className=" size-8 sm:size-9 "
            onClick={prevSlide}
          />
        </span>
        {items.map((item) => {
          return (
            <div key={item.id}>
              {currentSlide === item.id && (
                <img
                  height={700}
                  width={700}
                  className=" object-cover "
                  src={item.image}
                  alt=""
                />
              )}
            </div>
          );
        })}
        <span className="flex justify-center pl-5">
          <FaArrowAltCircleRight
            className=" size-8 sm:size-9 "
            onClick={nextSlide}
          />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
