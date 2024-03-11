import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import {
  LuFacebook,
  LuGithub,
  LuGitlab,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";
import { useEffect } from "react";



let enfooterData = [
  {
    title: "Products",
    values: [
      { path: "/product", label: "Plain Cashews" },
      { path: "/product", label: "Roasted And Salted" },
      { path: "/product", label: "Premium Products" },
      { path: "/product", label: "Value Added Products" },
      { path: "/product", label: "Online Shopping" },
    ],
  },
  {
    title: "Quick Links",
    values: [
      { path: "/kscdc", label: "KSCDC" },
      { path: "/org", label: "Organization" },
      { path: "/director-board", label: "Board Of Directors" },
      { path: "/management", label: "Management" },
      { path: "/franchisee", label: "Franchisees" },
    ],
  },
  {
    title: "Sitemap",
    values: [
      { path: "/", label: "Home" },
      { path: "/tender", label: "Tenders" },
      { path: "/career", label: "Careers" },
      { path: "/gallery", label: "Gallery" },
      { path: "/rti", label: "RTI" },
    ],
  },
];

let mlfooterData = [
  {
    title: "ഉൽപ്പന്നങ്ങൾ",
    values: [
      { path: "/product", label: "പ്ലെയിൻ കാഷ്യൂസ്" },
      { path: "/product", label: "റോസ്റ്റഡ് ആൻഡ് സാൾട്ടഡ്" },
      { path: "/product", label: "പ്രീമിയം ഉൽപ്പന്നങ്ങൾ" },
      { path: "/product", label: "മൂല്യവർദ്ധിത ഉൽപ്പന്നങ്ങൾ" },
      { path: "/product", label: "ഓൺലൈൻ ഷോപ്പിംഗ്" },
    ],
  },
  {
    title: "ദ്രുത ലിങ്കുകൾ",
    values: [
      { path: "/kscdc", label: " കെ.എസ്.സി.ഡി.സി" },
      { path: "/org", label: "ഓർഗനൈസേഷൻ" },
      { path: "/director-board", label: "ഭരണസമിതി" },
      { path: "/management", label: "മാനേജ്മെൻ്റ്" },
      { path: "/franchisee", label: "ഫ്രാഞ്ചൈസി" },
    ],
  },
  {
    title: "സൈറ്റ്മാപ്പ്",
    values: [
      { path: "/", label: "ഹോം" },
      { path: "/tender", label: "ടെൻഡർ" },
      { path: "/career", label: "കരിയർ" },
      { path: "/gallery", label: "ഗാലറി" },
      { path: "/rti", label: "വിവരാവകാശം" },
    ],
  },
];
const backgroundImage =
  "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600";

function FooterLinks({ title, values }) {
  // console.table(values);
  return (
    <div d="fade-up"  className="flex flex-col items-start gap-3">
      <h3 className="font-bold underline underline-offset-4">{title}</h3>
      {values.map((value, index) => (
        <Link key={index} to={value.path} className="capitalize">
          {value.label}
        </Link>
      ))}
    </div>
  );
}
function FooterSocialMediaPannel() {
  const { language } = useLanguage();
  const socialMedis = [
    { icon: <LuFacebook />, link: "1" },
    { icon: <LuGitlab />, link: "2" },
    { icon: <LuGithub />, link: "3" },
    { icon: <LuTwitter />, link: "4" },
    { icon: <LuInstagram />, link: "5" },
    { icon: <LuLinkedin />, link: "6" },
  ];
  return (
    <div className="flex items-center justify-center ">
      <div className="p-4 bg-white mt-3 text-black lg:w-3/4 w-full rounded-lg">
        <h2 className="text-center font-extrabold tracking-wide">
          {language ? "Follow us" : "ഞങ്ങളെ ഫോളോ ചെയ്യുക"}
        </h2>
        <div className="flex justify-evenly gap-3 m-2">
          {socialMedis.map((media,index) => (
            <a
              key={index}
              d="flip-up"
              
              href={media.link}
              className="text-xl transform transition ease-in-out duration-300 hover:scale-150 hover:-translate-y-2"
            >
              {media.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterCopyRight() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row lg:flex-row justify-evenly text-gray-500 ">
      <div className="text-sm grid grid-cols-3 gap-2 lg:gap-6 lg:grid-cols-6 text-white place-content-center">
        <span><Link to={"/policies"}>Privacy Policy</Link></span>
        <span><Link to={"/terms-and-conditions"}>Terms And Conditions</Link></span>
        <span><Link to={"/policies"}>Sales and Refund Policy</Link></span>
        <span>
          <Link to="/contact">Contact Us</Link>
        </span>
        <span>
          <button onClick={() => window.scrollTo(0,0)}>Back to Top</button>
        </span>
        <span>
            <a
          href="http://webmail.cashewcorporation.com/"
          target="_blank"
          className="text-white text-sm"
        >
          Staff Mail
        </a>
        </span>
      </div>
    </div>
    </div>
  );
}
// main component
function ProductFooter() {
 
  const { language } = useLanguage();
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen bg-gray-900"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 text-white p-4 mt-4">
        <div className="mb-4">
          { language ? 
          <h2
            className="text-center text-5xl font-bold mb-2"
          >
            KSCDC
          </h2>:
          <h2
          // d="fade-right"
          
          className="text-center text-3xl font-bold mb-4"
        >
          കെ.എസ്.സി.ഡി.സി
        </h2>
          }
        </div>
        {/* footer links */}
        <div className="flex justify-items-stretch gap-y-5 lg:flex items-center justify-evenly mb-6">
          {language
            ? enfooterData.map((data,index) => (
                <FooterLinks key={index} {...data} />
              ))
            : mlfooterData.map((data,index) => (
                <FooterLinks key={index} {...data} />
              ))}
        </div>
        {/* social media pannel */}
        <FooterSocialMediaPannel />
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-3 lg:grid-cols-5 place-items-center gap-4 mx-auto justify-center bg-white/10 p-2 bg:blur backdrop-blur w-full lg:w-1/2  m-2 rounded-lg">
            <img
              src="/images/footer1.png"
              className="h-20 w-20 rounded-lg"
              alt="Footer image"
            />
            <img
              src="/images/footer2.png"
              className="h-20 w-20 rounded-lg"
              alt="Footer image"
            />
            <img
              src="/images/footer3.png"
              className="h-20 w-20 rounded-lg"
              alt="Footer image"
            />
            <img
              src="/images/footer4.png"
              className="h-28 w-28 rounded-lg"
              alt="Footer image"
            />
            <div className="flex flex-col items-center ">
              <img
                src="/images/footer5.png"
                className="h-[75px] w-[75px] rounded-lg object-contain "
                alt="Footer image"
              />
              <p className="text-xs font-bold -mt-2 lg:-mt-1">{language ? "On Time Delivery" : "കൃത്യസമയത്ത് ഡെലിവറി"}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid place-items-center justify-self-center lg:flex items-center justify-between lg:w-3/4">
            <img
              d="zoom-out-left"
              
              src="/images/CDC.png"
              className="object-contain h-44 w-44"
              alt="gov image"
            />

            <img
              d="fade-up"
              
              src="/images/fssai.png"
              className="object-contain h-44 w-44 rounded-xl"
              alt="gov image"
            />
            <img
              d="zoom-out-right"
              
              src="/images/logo-2.png"
              className="object-contain h-72 w-72"
              alt="gov image"
            />
          </div>
        </div>
        {/* copy right section */}
        <FooterCopyRight />
        <hr className="border-gray-400 m-2" />
        <div className="flex justify-center">
          <h1 className="font-bold text-sm text-white">
            Designed And Developed By
            <a
              href="https://www.igoraza.com/"
              target="_blank"
              className="text-red-500 underline"
            >
              {" "}
              IGORAZA
            </a>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
        <span className="text-xs lg:mb-0">@ 2024 All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

export default ProductFooter;
