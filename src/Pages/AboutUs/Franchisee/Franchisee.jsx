import Navbar from "../../../Components/Navbar";
import Banner from "../../../Components/Banner";
import FranchiseeTable from "./FranchiseeTable";
import TranslateButton from "../../../Components/TranslateButton";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useEffect } from "react";
import Footer from "../../../Components/Footer";

function Franchisee() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
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
      <Banner image="franchisee.jpg"/>
      <div className="p-3" id="franchisee">
        <h3 className="text-center text-4xl font-bold text-red-500">Our Franchisees</h3>
        <FranchiseeTable />
      </div>
      <Footer/>
    </div>
  );
}

export default Franchisee;
