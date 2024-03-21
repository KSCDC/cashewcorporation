import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { BACKEND_DOMAIN } from "../../utils";


function DirectorCard({ image, title, caption, email,phone }) {
  const {language} = useLanguage()
  return (
    <div className="w-full  lg:h-[260px] object-cover p-5 border bg-white hover:bg-red-300 group  lg:flex items-center gap-x-6 hover:shadow-xl place-items-center grid  justify-items-center">
      <img src={BACKEND_DOMAIN+image} className="h-48 w-44 rounded-b-full " alt="" />
      <div>
        <h3 className=" text-lg lg:text-2xl font-bold text-red-400 group-hover:text-white">
          {title}
        </h3>
        <p className="font-bold">{caption}</p>
       
          <div>
            <a
              href={`mailto: ${email}`}
              className="flex items-center gap-2 underline "
            >
              <IoMdMail className="hidden lg:block"/>
              {email}
            </a>
            <a
              href={`mailto: ${email}`}
              className="flex items-center gap-2 underline"
            >
              <FaPhoneAlt className="hidden lg:block"/>
              {phone}
            </a>
          </div>
       


        
      </div>
    </div>
  );
}

export default DirectorCard;
