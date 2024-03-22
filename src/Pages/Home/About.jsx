import ImageBackground from "./ImageBackground";
import "./style/home.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import useGetApi from "../../Hook/useGetApi"
import Loading from "../../Components/Loading";
import HomeSpotLight from "./HomeSpotLight";

function About() {
  const {language} = useLanguage()
  const {response} = useGetApi("home")
  if(!response){
    return <Loading/>
  }
  return (
    <div>
      <div className="">
        <div className="grid gap-3 lg:flex items-start gap-x-8 justify-evenly  m-6 about">
          <div className="">
          {response.about_us.map((about,index) => (
            <div
            key={index}
            data-aos="fade-right"
            className="flex flex-col items-start"
          >
            <div>
              <span className="text-2xl text-red-500 mb-6 border-l-2 px-2 font-bold border-red-500">
                {language ? "Welcome to KSCDC" : "കെ.എസ്.സി.ഡി.സിയിലേക്ക് സ്വാഗതം"}
              </span>
            </div>
            <h2 className=" text-xl max-w-md text-balance text-blue-500">
             {language ? "About Us" : "കാഷ്യൂ കോർപ്പറേഷനെക്കുറിച്ച്"}{" "}
            </h2>
           <div className="text-pretty lg:w-[800px] ">
           <p className="text-base leading-loose text-justify m-0 mb-4">
             {language ? about.description_en.slice(0,865) : about.description_ml.slice(0,865)}...
            </p>
           </div>
           <Link to={"/kscdc"}>
           <button className="mt-4 px-5 py-2 bg-red-500 font-bold text-white uppercase transform -translate-y-0 hover:-translate-y-3 hover:scale-110 transition duration-300 ease-in-out hover:shadow-2xl">
              {language ? "more about us" : "ഞങ്ങളെ കുറിച്ച് കൂടുതൽ അറിയാൻ"}
            </button>
           </Link>
          </div>
          ))}
          </div>
         <div className="lg:mt-14">
         <HomeSpotLight/>
         </div>
        </div>
        {/* section */}
        <div>
          <div className="p-3">
            <div className="grid gap-3">
              {/* Company  Image with background */}
              <ImageBackground image={response.about_us[0].image} />

{/* mission and vision */}
              <div>
                <div className="grid lg:flex justify-center items-center gap-8">
                  {/* Mission Card */}
              
                    <div
                    data-aos="fade-right"
                    className="p-6 min-h-72 bg-white w-full lg:max-w-md flex flex-col items-start rounded-lg shadow-md border-l-4 border-red-500 transform transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-3"
                  >
                    <h2 className="text-3xl font-bold mb-4">{language ? "Mission" : "ദൗത്യം"}</h2>
                    <p className={`text-gray-700 leading-relaxed ${language ? "text-justify": null}`}>
                      {language ? response.mission_en : response.mission_ml}
                    </p>
                  </div>

                  <div
                    data-aos="fade-left"
                    className="p-6 min-h-72 bg-white w-full lg:max-w-md flex flex-col items-start rounded-lg shadow-md border-l-4 border-red-500 transform transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-3"
                  >
                     <h2 className="text-3xl font-bold mb-4">{language ? "Vision" : "കാഴ്ചപ്പാട്"}</h2>
                    <p className={`text-gray-700 leading-relaxed ${language ? "text-justify": null}`}>
                      {language ? response.vision_en : response.vision_ml}
                    </p>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
