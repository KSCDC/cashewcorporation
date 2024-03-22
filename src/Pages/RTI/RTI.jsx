import React from "react";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import Accordion from "../../Components/Accordion";
import RITCard from "./RITCard";
import TranslateButton from "../../Components/TranslateButton";
import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../Components/Footer";

const ArchitectureImage = ()=> {
  return(
    <div>
      <img src="/images/architecture.png" alt="Architecture" />
    </div>
  )
}

const RTI = () => {
  const data = [
    { title: "INFORMATION : OFFICERS AND APPELLATE AUTHORITY",content:<RITCard /> },
    { title: "MODE OF PAYMENT OF FEES UNDER RIGHT TO INFORMATION ACT, 2005",content:`Gazette Notification dated 22.12.2007 and 03.06.2008 by which the procedure for remittance of fee for providing information in the case of Public Authorities other than Government Departments is amended videGovernment Order No. GO (P) No. 540/2007/GAD dated 18th December, 2007as detailed below:“provided that in the case of public authorities other than the GovernmentDepartments, the fee shall be remitted to the account of such publicauthority as provided in clauses (c) and (d) of rule 3”.Clauses c & d are specified as follows:c) by cash remittance against proper receipt in the Office of the Public Information Officer/Assistant Public Information Officer as the case maybe, ord) by Demand Draft/bankers cheque/pay order payable to the Public Information Officer/ Assistant Public Information Officer.In view of the above Government Order, it is hereby informed that applications under Right to Information Act will only be accepted with application fee as per clause (c) and (d) of Rule (3) of the Right to Information (Fee and Cost) Rules 2006 and court fee stamp, postal orders and treasury chalan will not be accepted as application fees for the applications under the Right to Information Act, 2005.` },
    { title: "SUO MOTO DISCLOSURE",content:"" },
    { title: "RIGHT TO INFORMATION ACT, 2005",content:"" },
    { title: "ORGANIZATIONAL STRUCTURE",content:<ArchitectureImage /> },
    { title: "OUR FACTORIES : NAME OF MANAGERS AND PHONE NUMBERS",content:"" },
    { title: "STAFF RULES",content:"" },
    { title: "CERTIFIED STANDING ORDER",content:"" },
    { title: "IRC SETTLEMENT",content:"" },
    { title: "PAY SCALE",content:"" },
    { title: "MINIMUM WAGE NOTIFICATION",content:"" },
  ];
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <div className="flex-grow bg-gray-100">
        <Banner image="rit.jpg" />
      </div>

      <div className="p-1">
        {data.map((value, index) => (
          <Accordion key={index} 
          title={value.title} 
          content={value.content} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default RTI;
