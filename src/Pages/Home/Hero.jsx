import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const images = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
  "/images/hero/hero-4.png",
  "/images/hero/hero-5.png",
];

function Hero() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }, 4000);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  const downImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const upImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="hero-container relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="lg:hidden w-full lg:p-3">
        <Navbar />
      </div>
      <div
        className="hero-background h-60 bg-center lg:h-screen lg:bg-contain bg-cover w-full bg-no-repeat relative"
        style={{
          backgroundImage: `url(${images[imageIndex]})`,
        }}
      >
        <div className="lg:absolute bg-black bg-opacity-10 inset-0"></div>
        <div className="lg:absolute hidden lg:block w-full lg:p-3">
          <Navbar />
        </div>

        <div className="relative top-3/4 flex justify-between p-3">
          <button
            onClick={downImage}
            className="text-2xl p-3 text-white/100 rounded-full shadow-lg"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={upImage}
            className="text-2xl p-3  text-white/100 rounded-full shadow-lg"
          >
            <FaAngleRight />
          </button>
        </div>
        <div className="relative top-3/4 lg:top-3/4 flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setImageIndex(index)}
              className={`${
                imageIndex === index ? "bg-blue-500" : ""
              } px-1 border border-blue-500 py-1 rounded-full`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
