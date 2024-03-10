import React from "react";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import CashewGradeTable from "./CashewGradeTable";
import {
  gradeAData,
  gradeBData,
  gradeCData,
  gradeDContData,
  gradeDData,
  gradeEData,
  gradeFData
} from ".";
import TranslateButton from "../../Components/TranslateButton";
import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../Components/Footer";

const ProductCharacteristic = () => {
  const { language, setLanguage } = useLanguage();
const toggleLanguage = () => {
  setLanguage((prev) => !prev);
};
  return (
    <div>
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <div className="">
        <Banner image={`cashew.jpg`} />
      </div>
      {/* body part */}
      <div className="p-3">
        <h1 className="text-3xl font-bold">General Characteristics:</h1>
        <p className="text-xl max-w-4xl mt-6 mb-6">
          Cashew Kernels shall have been obtained through roasting, shelling and
          peeling cashew nuts. (Anacardium occidentale L.)
        </p>
        <h2 className="font-semibold mt-2 text-xl">SPECIAL CHARACTERISTICS:</h2>
       <div className="lg:px-12 py-3 overflow-scroll  flex flex-col justify-center ">
       <CashewGradeTable gradeData={gradeAData} />
        <CashewGradeTable gradeData={gradeBData} />
        <CashewGradeTable gradeData={gradeCData} />
        <CashewGradeTable gradeData={gradeDData} />
        <CashewGradeTable gradeData={gradeDContData} />
        <CashewGradeTable gradeData={gradeEData} />
        <CashewGradeTable gradeData={gradeFData} />
       </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductCharacteristic;
