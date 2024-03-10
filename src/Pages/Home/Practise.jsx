import { Link } from "react-router-dom";

import { enHomeBlog } from "./Language/en";
import { mlHomeBlog } from "./Language/ml";
import useLanguageData from "../../Hook/useLanguageData";
import { useLanguage } from "../../contexts/LanguageContext";
import { blogDetils, malayalamBlog } from "./constants";

function Practise() {
  const {language} = useLanguage()
  // malaylam of english choosing with the useLanguageData hook
  let blogContent = language ? blogDetils : malayalamBlog
  const aosEffect = ["zoom-in","fade-up","zoom-in"]
  return (
    <div className="p-3">
      <h3 data-aos="fade-right" className="text-2xl font-bold m-4 text-center text-red-500">
        {language ? "Blog & News Updates" : "ബ്ലോഗ് & വാർത്താ അപ്ഡേറ്റ്"}
      </h3>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center">
      {blogContent.map((value,index) => (
        <PractiseCard 
        id={value.id}
        key={value.image} 
        aosanimation={aosEffect[index]}
        image={value.image}
        title={value.title}
        caption={value.caption}
        link={value.link}
        />
      ))}
      </div>
    </div>
  );
}

const PractiseCard = ({ image,id, title, caption,aosanimation }) => {
  const {language} = useLanguage()  
  return (
      <div data-aos={aosanimation} data-aos-duration="500" className="w-80 overflow-hidden  flex flex-col items-start">
        <figure className="p-4">
          <img
            src={image}
            alt={title}
            className="object-cover w-80 h-64 rounded-md"
          />
        </figure>
        <div className="p-4">
          <h2 className=" font-bold mb-2">{title}</h2>
          <p className={`text-gray-600 `}>{caption.slice(0,75)}...</p>
          <Link to="/read-blog" state={{id:id}}>
          <button className="mt-4 px-5 py-1 border border-black">
          {language ? "Read More" : "കൂടുതൽ വായിക്കുക"}
          </button>
          </Link>
        </div>
      </div>
    );
  };
  



export default Practise;
