import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";
import { useLanguage } from "../../contexts/LanguageContext";
import TranslateButton from "../../Components/TranslateButton";
import Footer from "../../Components/Footer";

const Message = () => {
  useEffect(() => {
    window.scrollTo(0,0)
},[])
  const { response } = useGetApi("personcard");
  const {language,setLanguage} = useLanguage()
  if (!response) {
    return <Loading />;
  }
  const toggleLanguage = () => {
    setLanguage((prev) => !prev)
  }
  return (
    <main>
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton/>
      </button>
      <Navbar />
      
      <div className="mt-4 min-h-screen flex items-center justify-center bg-gray-100">
        <div className="grid  gap-4 p-3 lg:p-12">
          {response.map((leader, index) => (
            <div className="card card-side bg-base-100 shadow-xl w-full lg:flex grid">
              <figure>
                <img
                  src={leader.image}
                  alt="Movie"
                  className="w-96 h-96 p-2 rounded rounded-b-full"
                />
              </figure>
              <div className="card-body w-full">
                <h1 className="card-title">{language ? leader.name_en : leader.name_ml}</h1>
                <h3 className="text-red-500 font-bold">{language ? leader.designation_en : leader.designation_ml}</h3>
                <h2 className="card-title font-normal">{language ? leader.description_en : leader.description_ml}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Message;
