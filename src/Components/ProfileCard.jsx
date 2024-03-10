import React, { useEffect } from "react";
import "./style/profilecard.css";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

function ProfileCard({ id, name, image, position, content, link, title }) {
  const { language } = useLanguage();

  // Function to get the appropriate label based on position
  const getPositionLabel = (position) => {
    switch (position) {
      case "ചെയർമാൻ":
        return "ചെയർമാൻ്റെ സന്ദേശം";
      case "ബഹു. കേരള മുഖ്യമന്ത്രി":
        return "ബഹു.കേരള മുഖ്യമന്ത്രിയുടെ സന്ദേശം";
      case "ബഹു. കേരള വ്യവസായ വകുപ്പ് മന്ത്രി":
        return "ബഹു. വ്യവസായ മന്ത്രിയുടെ സന്ദേശം";
      case "മാനേജിംഗ് ഡയറക്ടർ":
        return "മാനേജിംഗ് ഡയറക്ടറുടെ സന്ദേശം";
      default:
        return `Message of ${position}` ; // Default label
    }
  };

  return (
    <section data-aos-duration="800" data-aos="zoom-in-right">
      <div className="container group">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={image} className="rounded-b-full" alt={name} />
            </div>
            <div className="contentBx">
              <h3 className="text-red-500 text-xl tracking-tighter font-bold group-hover:opacity-0">
                {name}
                <br />
                <span className="text-black">{position}</span>
              </h3>
            </div>
          </div>
          <ul className="sci ">
            <li className="bg-white max-w-64">
              <p className="font-extrabold mb-2">{getPositionLabel(position)}</p>
              <p className="text-center">{content.slice(0, 73)}....</p>
            </li>
            <li className="bg-white">
              {link ? (
                <Link to={`${link}/#${id}`}>
                  <button className="btn  bg-blue-500 text-white mt-2 border hover:border-blue-500 hover:bg-white hover:text-blue-500">
                    {language ? "Read More" : "കൂടുതൽ വായിക്കുക"}
                  </button>
                </Link>
              ) : (
                <button></button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
