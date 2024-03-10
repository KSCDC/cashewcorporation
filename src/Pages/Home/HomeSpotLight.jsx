import React from "react";
import Loading from "../../Components/Loading";
import useGetApi from "../../Hook/useGetApi";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineFiberNew } from "react-icons/md";
import "./style/HomeSpotLight.css";

// Function to format date in "Month Date, Year" format
function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

// Opener component with animation
function Opener({ path }) {
  return (
    <div className="h-full w-12 hidden bg-red-500 group-hover:flex items-center justify-center transition-opacity duration-300 ease-in-out">
      <Link to={path}>
        <h1 className="text-2xl text-white">
          <FaArrowRight />
        </h1>
      </Link>
    </div>
  );
}

// Main component
function HomeSpotLight() {
  const { language } = useLanguage();
  const { response: tenderResponse } = useGetApi("tenders");
  const { response: whatsNewResponse } = useGetApi("whatsnew");
  const { response: careerResponse } = useGetApi("career");

  // Check if any of the responses are still loading
  if (!tenderResponse || !whatsNewResponse || !careerResponse) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-start justify-center">
      {/* latest tenders */}
      <h2 data-aos="fade-right" className="bg-red-500 text-white p-2 rounded-tr-2xl text-xl font-bold">Latest Tenders</h2>
      {/* main table */}
      <div data-aos="fade-up" className="w-full h-44 lg:w-[30rem] border border-gray-300 shadow-lg p-2 overflow-hidden bg-red-100">
        {/* box open */}
        {tenderResponse.map((_, index) => (
          <Link
            to="/tender"
            key={index}
            className="flex justify-between items-center border-b border-red-500 p-2 spotlight bg-red-100"
          >
            <div className="flex flex-col">
              <span className="font-medium ">
                {language
                  ? tenderResponse[index].title_en
                  : tenderResponse[index].title_ml}
              </span>
              <span className="text-sm text-red-500">{formatDate(tenderResponse[index].published_date)}</span>
            </div>
            <span className="text-4xl text-red-500">
              <MdOutlineFiberNew />
            </span>
          </Link>
        ))}
        {/* box closes */}
      </div>
      <div className="mt-5">
        {/* latest news */}
        <h2 data-aos="fade-left" className="bg-red-500 text-white w-44 p-2 text-xl font-bold rounded-tr-2xl">Latest News</h2>
        {/* main table */}
        <div data-aos="fade-down" className="w-full h-24 lg:w-[30rem] border shadow-lg p-2 overflow-hidden bg-red-100">
          {/* box open */}
          {whatsNewResponse.map((_, index) => (
            <Link
              to="/whats-new"
              key={index}
              className="flex justify-between items-center border-b border-red-500 p-2 spotlight bg-red-100"
            >
              <div className="flex flex-col">
                <span className="font-medium">
                  {language
                    ? whatsNewResponse[index].title_en
                    : whatsNewResponse[index].title_ml}
                </span>
              </div>
              <span className="text-4xl text-red-500">
                <MdOutlineFiberNew />
              </span>
            </Link>
          ))}
          {/* box closes */}
        </div>
      </div>
    </div>
  );
}

export default HomeSpotLight;
