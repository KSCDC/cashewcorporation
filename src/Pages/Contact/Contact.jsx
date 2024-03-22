import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import "../Home/style/home.css";
import DefaultContact from "./DefaultContact";
import ContactUs from "./ContactUs"
import ContactFactory from "./ContactFactory";
import PostAQuery from "./PostAQuery";
import TranslateButton from "../../Components/TranslateButton";
import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../Components/Footer";

function Contact() {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [currentPage,setCurrentPage] = useState("default")
  const section = () => {
    switch (currentPage) {
      case "default":
         return <DefaultContact/>
      case "contactus":
          return <ContactUs/>
      case "headquaters":
        return <ContactFactory/>
      case "postaquery":
        return <PostAQuery/>
      default:
        return <DefaultContact/>;
    }
  }
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <main className="about ">
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2  gap-3 lg:flex items-center justify-center space-x-3 mt-4 mb-4">
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${currentPage === "default" ? 'bg-red-500 text-white' : "bg-transparent" }`} onClick={() => setCurrentPage("default")}>Locate KSCDC</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${currentPage === "contactus" ? 'bg-red-500 text-white' : "bg-transparent" }`} onClick={() => setCurrentPage("contactus")}>Contact Us</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${currentPage === "headquaters" ? 'bg-red-500 text-white' : "bg-transparent" }`} onClick={() => setCurrentPage("headquaters")}>HO/Factory</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${currentPage === "postaquery" ? 'bg-red-500 text-white' : "bg-transparent" }`} onClick={() => setCurrentPage("postaquery")}>Post A Query</button>
        </div>
       </div>
       {/* contact Sections */}

       {section()}
 
       <Footer/>
    </main>
  );
}

export default Contact;
