import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

function Client() {
  const {language} = useLanguage()
  return (
    <div className="mt-12 lg:mt-24 ">
      {/* backgriuynd image and search bar */}
      <div className="lg:relative">
        {/* search bar */}
        <div className="flex items-center justify-center">
          <div className="lg:absolute h-52 p-2 bg-red-500 w-full lg:w-3/4 text-white flex flex-col items-center justify-center">
            <div className="">
            <h2 className="font-bold text-2xl lg:text-3xl text-center">
            Let’s try our service now!
            </h2>
            <p className="lg:max-w-xl text-center mt-2">{
            
            language ?"KSCDC is committed to help out clients 24×7. Feel free to reach out to us for any queries and help" : "24×7 ഉപഭോക്താക്കളെ സഹായിക്കാൻ KSCDC പ്രതിജ്ഞാബദ്ധമാണ്. ഏത് അന്വേഷണത്തിനും സഹായത്തിനും ഞങ്ങളെ ബന്ധപ്പെടാൻ മടിക്കരുത്"}</p>
            </div>
            <div className="items-center justify-center relative mt-3">
              <a href="https://wa.me/+917736886026?text=Hello%20there!" target="_blank" className="mt-4">
              <button className="btn px-8 py-2 border border-white rounded-xl font-bold   bg-red-500 hover:bg-red-600 text-white">
                Contact Now
              </button>
              </a>
            </div>
          </div>
        </div>
        
        {/* background image */}
        <img
          src="/images/hero-1.jpg"
          className="h-44 w-full object-cover"
          alt="banner image"
        />
      </div>
    </div>
  );
}

export default Client;
