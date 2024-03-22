import React, { useEffect } from "react";
import Navbar from "../../../Components/Navbar";
import Banner from "../../../Components/Banner";
import TranslateButton from "../../../Components/TranslateButton";
import { useLanguage } from "../../../contexts/LanguageContext";
import mlKSCDC from "./mlKSCDC.json";
import enKSCDC from "./enKSCDC.json";
import useLanguageData from "../../../Hook/useLanguageData";
import useGetApi from "../../../Hook/useGetApi";
import Loading from "../../../Components/Loading";
import { BACKEND_DOMAIN } from "../../../utils";
import Footer from "../../../Components/Footer";

function Kscdc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  const { language, setLanguage } = useLanguage();
  const data = useLanguageData(enKSCDC, mlKSCDC);
  const { response } = useGetApi("home");
  if (!response) {
    return <Loading />;
  }

  return (
    <div>
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <Navbar />
      <Banner image="about.jpg" />
      {/* Body content */}
      <div className="p-6">
        <section data-aos="fade-up" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {language ? " About KSCDC" : "കാഷ്യൂ കോർപ്പറേഷനെക്കുറിച്ച്"}
          </h2>
          <p className={`text-gray-700 leading-7 text-justify`}>
            {language ? response.about_us[0].description_en : response.about_us[0].description_ml}
          </p>
        </section>
        <div data-aos="zoom-in-down">
          <img
            src={`${BACKEND_DOMAIN}/${response.about_us[0].image}`}
            alt="Company Image"
          />
        </div>
        <div className="mt-4 flex flex-col items-start justify-center ">
          <h3 className="text-2xl font-bold">
            {" "}
            {language ? response.about_us[0].subtitle_en : response.about_us[0].subtitle_ml}
          </h3>
          <p className="w-full">
          {language ? response.about_us[0].subcontent_en : response.about_us[0].subcontent_ml}

          </p>
        </div>
        <div>
          <div className="mt-8 grid lg:flex justify-center items-center gap-8">
            {/* Mission Card */}
            <div data-aos="fade-right" className="w-full ">
              <h2 className="text-3xl font-bold mb-4">{data[2].mission}</h2>
              <p className="text-gray-700 leading-relaxed">
                {language ? response.mission_en : response.mission_ml}
              </p>
            </div>

            {/* Vision Card */}
            <div data-aos="fade-left" className="w-full">
              <h2 className="text-3xl font-bold mb-4">{data[2].vision}</h2>
              <p className="text-gray-700 leading-relaxed">
                {language ? response.vision_en : response.vision_ml}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Kscdc;
