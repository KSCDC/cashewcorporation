import { BsSend } from "react-icons/bs";
import { FaLocationPin, FaLocationPinLock,FaHeadset } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

const CompanyAddress = () => {
  return (
    <address>
      THE KERALA STATE CASHEW DEVELOPMENT CORPORATION LTD CASHEW HOUSE, MUNDAKKAL, KOLLAM - 691001, KERALA, INDIA 
      <span className="font-bold"><br/>CIN: U15493KL1969SGC002234</span>
    </address>
  );
};


const CustomerSupport = () => {
  return(
    <div>
      <h3 className="font-bold">FOR CUSTOMER SERVICE AND ASSISTANCE</h3>
      <a href="mailto:sales@cashewcorporation.com">sales@cashewcorporation.com</a><br />
      OR Call: 
      <a href=""> 0474-2742273</a>
      <br />
      <span className="p-2">(Exnt – 28) <br /> [10 am – 5 pm on all working days]</span>
    </div>
  )
}

const getInTouchData = [
  { icon: <FaHeadset />, firstMail: [<CustomerSupport/>], link: "/contact" },
  { icon: <FaLocationPin />, firstMail: [<CompanyAddress />], link: "/contact" },
  { icon: <BsSend />, firstMail: ["ho@cashewcorporation.com"], secondMail: "kscdc@kerala.gov.in", link: "/contact" },
];

function GetInTocuhCard({ icon, firstMail, secondMail, anime, link }) {
  return (
    <div data-aos={anime} className="relative p-6 flex flex-col items-center justify-center bg-white rounded-lg h-96 w-80 hover:scale-105 transition ease-in-out duration-200 hover:bg-sky-600 group">
      <h1 className="text-5xl lg:text-6xl text-sky-600 group-hover:text-white">
        {icon}
      </h1>
      <div className="text-center text-gray-900 group-hover:text-white m-3 mb-4">
        {firstMail.map((item, index) => (
          <p key={index} className="text-sm">
            {item}
          </p>
        ))}
        {secondMail && (
          <p className="text-sm">
            <a href="#">{secondMail}</a>
          </p>
        )}
      </div>
      <Link to={link} className="absolute bottom-4">
        <button className="btn border-red-500 text-red-500 px-[68px] bg-white group-hover:text-white group-hover:bg-transparent group-hover:border-white">
          Get Support
        </button>
      </Link>
    </div>
  );
}

function GetInTocuh() {
  const { language } = useLanguage();
  let aosanimation = ["fade-right", "fade-up", "fade-left"];
  return (
    <div>
      <div className="p-4 md:p-8 lg:p-12 bg-gray-100">
        <h3 className="text-3xl font-bold mb-6 text-center text-red-500">{language ? "Get In Touch With Us" : "ഞങ്ങളുമായി ബന്ധപ്പെടുക"}</h3>
        <p className="text-center max-w-3xl mx-auto text-gray-500 font-bold mb-10">
          {language ? "For more details contact us directly through the information furnished given below." : "കൂടുതൽ വിവരങ്ങൾക് താഴെ നൽകിയിരിക്കുന്ന വിവരങ്ങൾ വഴി ഞങ്ങളെ നേരിട്ട് ബന്ധപ്പെടുക."}
        </p>
        <div className="grid grid-cols-1  lg:flex gap-2 place-items-center justify-items-center justify-center items-center">
          {getInTouchData.map((value, index) => (
            <GetInTocuhCard
              key={index}
              anime={aosanimation[index]}
              icon={value.icon}
              firstMail={value.firstMail}
              secondMail={value.secondMail}
              link={value.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetInTocuh;
