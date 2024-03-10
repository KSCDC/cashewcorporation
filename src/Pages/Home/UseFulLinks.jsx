import React from "react";
import "./style/usefullinks.css";
import { FaLink } from "react-icons/fa6";
import {useLanguage} from "../../contexts/LanguageContext"
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";


const Card = ({ link }) => {

  const hostname = new URL(link).hostname;

  return (
    <div className="cursor-pointer group bg-white  shadow-lg flex items-center justify-center p-4 mb-4 rounded-md transition-transform duration-300 transform hover:scale-105 ">
      <a
        href={link}
        className="font-bold text-center flex items-center gap-3 text-red-500 bg-gradient-to-r from-red-500 to-black bg-clip-text "
        target="_blank"
        rel="noopener noreferrer"
      >
        {hostname}
        <FaLink />
      </a>
    </div>
  );
};

function UseFulLinks() {
  const {response} = useGetApi("home")
  if(!response || !response.useful_links){
    return <Loading/>
  }
  const { language } = useLanguage()
  return (
    <div className="container mx-auto mt-12 mb-2">
      <h2 className="text-sm lg:text-3xl font-bold text-center mb-6 text-red-500">
        {language ? "Useful Links" : "ദ്രുത ലിങ്കുകൾ"}
      </h2>
      <p className="text-gray-700 text-center mb-8">
      {language ? "Collection of frequently used application pages by KSCDC" :
      "കെ.എസ്.സി.ഡി.സി പതിവായി ഉപയോഗിക്കുന്ന ആപ്ലിക്കേഷൻ പേജുകളിലേക്കുള്ള ഉപയോഗപ്രദമായ ലിങ്കുകളുടെ ഒരു ശേഖരം"
      }
      </p>

      <div className="grid gap-4 p-3">
        <div className="marquee">
          <ul className="flex gap-3">
            {response.useful_links.map((value, index) => (
                <Card key={value.index} link={value.name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default UseFulLinks;
