import React from "react";
import "./style/topleader.css"
import ProfileCard from "../../Components/ProfileCard";
import useGetApi from "../../Hook/useGetApi"
import { BACKEND_DOMAIN } from "../../utils";
import Loading from "../../Components/Loading";
import { useLanguage } from "../../contexts/LanguageContext";

function LeaderTopImages() {
  const {language} = useLanguage()
  const {response} = useGetApi("home")
  if(!response || !response.person_cards){
    return <Loading/>
  }

  return (
    <div className="mt-4 box-wrapper grid md:grid-cols-2 gap-3 lg:grid-cols-4 place-items-center  w-full">
         {response.person_cards.map((value,index) => (
          <ProfileCard
            key={index}
            id={index+1}
            name={language ? value.name_en : value.name_ml}
            image={BACKEND_DOMAIN+value.image}
            position={language ? value.designation_en : value.designation_ml}
            content={language ? value.description_en : value.description_ml}
            title={language ? value.title_en : value.title_ml}
            link="/message"
          />
         ))}
    </div>
  );
}



export default LeaderTopImages;
