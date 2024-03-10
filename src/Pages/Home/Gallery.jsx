import React from "react";
import { Link } from "react-router-dom";
import GalleryImage from "./GalleryImage";
import { useLanguage } from '../../contexts/LanguageContext'


function Gallery() {
  const {language} = useLanguage()
  return (
    <div className="text-center p-4 ">
      <h1 className="text-3xl text-red-500 font-bold my-8">
        {language ? "Gallery" : "ഗാലറി"}
      </h1>

      <div data-aos="zoom-out-up" className="grid lg:flex items-center gap-4 ">
        {/* Image Section */}
        <GalleryImage/>

        {/* Video Section */}
        <div className="w-full rounded-md shadow-md p-6">
        <h2 className="text-center text-xl font-bold mb-2">
          {language ? "Videos" : "വീഡിയോകൾ"}</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/YsURvpPEpMQ?si=WN68AcLt-EUxxIJ4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-wRTIe; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-80"
            ></iframe>
          </div>
          <Link to="/gallery">
            <button className="px-5 py-2 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600 transition duration-300">
          {language ? "Visit Videos" : "വീഡിയോകൾ സന്ദർശിക്കുക"}
              
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
