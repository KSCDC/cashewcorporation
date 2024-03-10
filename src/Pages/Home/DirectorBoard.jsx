import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import useGetApi from "../../Hook/useGetApi";
import { BACKEND_DOMAIN } from "../../utils";
import Loading from "../../Components/Loading";
import { useLanguage } from "../../contexts/LanguageContext";

const ChooseCard = ({ image, name, caption,phone }) => {
  return (
    <div 
      data-aos="flip-down"
      className="relative flex flex-col items-center group bg-white w-72"
    >
      <img
        className="h-48 w-40  object-cover  rounded-b-full   hover:scale-125 transition duration-300 ease-in-out"
        src={BACKEND_DOMAIN + image}
        alt="Profile image"
      />
      <div className="relative -top-6 right-16 shadow-lg p-2 bg-white rounded-full transform transition ease-in-out delay-100 duration-300 group-hover:scale-125 group-hover:-translate-y-2">
        <a href={`tel:${phone}`} target="_blank">
          <BsWhatsapp/>
        </a>
      </div>
      <div className="relative text-center m-2">
        <p className=" font-bold text-red-600 uppercase">{name}</p>
        <p className="text-black">{caption}</p>
      </div>
    </div>
  );
};

function DirectorBoard() {
  const {language} = useLanguage()
  const { response  } = useGetApi("home");

  if (!response || !response.board_of_organisation) {
    return <Loading />;
  }

  return (
    <div>
      <div className="p-3">
        <h3 data-aos="fade-right" className="text-xl text-red-500 lg:text-2xl font-extrabold m-4 text-center">
         {language ? "Board Of Directors" : "ഭരണസമിതി അംഗങ്ങൾ"}
        </h3>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-3 p-2">
            {response.board_of_organisation.map((value, index) => (
              <ChooseCard
                key={value.id}
                image={value.image}
                name={language ? value.name_en : value.name_ml}
                phone={value.phone_number}
                caption={language ? value.designation_en : value.designation_ml}
              />
            ))}
          </div>
        </div>
        {/* <UseFulLinks/> */}
      </div>
    </div>
  );
}

export default DirectorBoard;
