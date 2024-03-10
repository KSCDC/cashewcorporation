import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { emailIdSection, factoriesData } from ".";
import Banner from "../../Components/Banner";
import Accordion from "../../Components/Accordion";
import TranslateButton from "../../Components/TranslateButton";
import { useLanguage } from "../../contexts/LanguageContext";
import Footer from "../../Components/Footer";

const CashewKernels = () => (
  <div>
    <ul className="list-disc">
      <li>Jumbo Size</li>
      <li>White Wholes 180 / 210 / 240 / 320 / 450</li>
      <li>Scorched Wholes (SW)</li>
      <li> Scorched Wholes Second (SSW)</li>
      <li> Dessert Wholes (DW)</li>
      <li>Butts (B)</li>
      <li> Splits (S)</li>

      <li> Large White Pieces (LWP)</li>
      <li> Small White Pieces (SWP)</li>
      <li> Baby Bits (BB) Scorched Butts (SB)</li>
      <li> Scorched Splits (SS)</li>
      <li> Scorched Pieces (SP)</li>
      <li> Second Small Pieces (SSP)</li>
      <li>Scorched Pieces Seconds (SPS)</li>
      <li> Dessert Pieces (DP)</li>
    </ul>
  </div>
);

const emailData = [
  { id: 1, type: "General", email: "ho@cashewcorporation.com" },
  { id: 2, type: "Chairman", email: "chairman@cashewcorporation.com" },
  { id: 3, type: "Managing Director", email: "md@cashewcorporation.com" },
  { id: 4, type: "General Inquiry", email: "kscdc@kerala.gov.in" },
];
const deptData = [
  { department: "MD’s Office", email: "mdkscdc@cashewcorporation.com" },
  {
    department: "Materials Dept./Sec. - Sub",
    email: "materials@cashewcorporation.com",
  },
  {
    department: "Materials Dept./Sec. - Sub",
    email: "cdc.materials@gmail.com",
  },
  { department: "Commerce", email: "cdc.commerce@gmail.com" },
  { department: "Sales", email: "sales@cashewcorporation.com" },
  { department: "Online Sales", email: "onlinesales@cashewcorporation.com" },
  { department: "Finance", email: "afm@cashewcorporation.com" },
  { department: "Personnel", email: "personnel@cashewcorporation.com" },
  { department: "Personnel", email: "esi@cashewcorporation.com" },
  { department: "Personnel", email: "epf@cashewcorporation.com" },
  { department: "Personnel", email: "welfare@cashewcorporation.com" },
  { department: "Production", email: "production@cashewcorporation.com" },
  { department: "Internal Audit", email: "Audit@cashewcorporation.com" },
];
const DeptTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-black font-bold">
            <th></th>
            <th>Name of the Department/Section</th>
            <th>Dept./Sec. - Sub</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>MD's Office</td>
            <td> </td>
            <td>mdkscdc@cashewcorporation.com</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Materials</td>
            <td> </td>
            <td>materials@cashewcorporation.com cdc.materials@gmail.com</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Commerce</td>
            <td></td>
            <td>cdc.commerce@gmail.com</td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>4</th>
            <td></td>
            <td>Sales</td>
            <td>sales@cashewcorporation.com</td>
          </tr>
          {/* row 5 */}
          <tr>
            <th>5</th>
            <td></td>
            <td>Online Sales</td>
            <td>onlinesales@cashewcorporation.com</td>
          </tr>
          {/* row 6 */}
          <tr>
            <th>6</th>
            <td>Finance</td>
            <td></td>
            <td>afm@cashewcorporation.com</td>
          </tr>
          {/* row 7 */}
          <tr>
            <th>7</th>
            <td>personnel</td>
            <td></td>
            <td>personnel@cashewcorporation.com</td>
          </tr>
           {/* row 8 */}
           <tr>
            <th>8</th>
            <td></td>
            <td>computer cell</td>
            <td>computercell@cashewcorporation.com</td>
          </tr>
          {/* row 9 */}
          <tr>
            <th>9</th>
            <td></td>
            <td></td>
            <td>esi@cashewcorporation.com</td>
          </tr>
          {/* row 10 */}
          <tr>
            <th>10</th>
            <td></td>
            <td></td>
            <td>epf@cashewcorporation.com</td>
          </tr>
          {/* row 11 */}
          <tr>
            <th>11</th>
            <td></td>
            <td></td>
            <td>welfare@cashewcorporation.com</td>
          </tr>
          {/* row 12 */}
          <tr>
            <th>12</th>
            <td>production</td>
            <td></td>
            <td>production@cashewcorporation.com</td>
          </tr>
          {/* row 13 */}
          <tr>
            <th>13</th>
            <td>Internal Audit</td>
            <td></td>
            <td>Audit@cashewcorporation.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const EmailTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th className="text-xl font-bold">Our important e-mail id's</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {emailData.map((email) => (
            <tr>
              <th>
                <a href={`mailto:${email.email}`} className="underline">
                  {email.email}
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Organization() {
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <Banner image="organization.jpg" />
      {/* body  */}
      <div className="p-5 lg:flex gap-10 items-start justify-start w-full">
        <div className="w-full">
          <h1 className="text-3xl font-bold">{language ? "Organization" : "ഓർഗനൈസേഷൻ"}</h1>
          <p className="mt-3 font-bold max-w-xl">
            {language ? 
            `The Kerala State Cashew Development Corporation Ltd. Cashew House,
            Mundakkal, Kollam, Kerala, India - 691001 ` : `കേരള സംസ്ഥാന കശുവണ്ടി വികസന കോർപ്പറേഷൻ ലിമിറ്റഡ്. കാഷ്യൂ ഹൗസ്, മുണ്ടക്കൽ, കൊല്ലം, കേരള, ഇന്ത്യ - 691001`}
          </p>
          {/* ------------------- */}
          <h2 className="text-xl font-bold mt-3">{language ? `Functions and Duties` : `പ്രവർത്തനങ്ങളും ചുമതലകളും`}</h2>
          <p className="mt-3 w-full text-justify">
           {language ? ` Kerala State Cashew Development Corporation Ltd (KSCDC Ltd) is a
            registered company under Indian Companies Act and was incorporated
            in July 1969. It started Commercial activities in the year 1971 as a
            company fully owned by the Govt. of Kerala.` : `കേരള സംസ്ഥാന കശുവണ്ടി വികസന കോർപ്പറേഷൻ ലിമിറ്റഡ് (KSCDC ലിമിറ്റഡ്) ഇന്ത്യൻ കമ്പനീസ് ആക്ട് പ്രകാരം രജിസ്റ്റർ ചെയ്ത കമ്പനിയാണ്, 1969 ജൂലൈയിൽ സ്ഥാപിതമായി. 1971-ൽ സർക്കാരിൻ്റെ പൂർണ ഉടമസ്ഥതയിലുള്ള കമ്പനിയായി വാണിജ്യ പ്രവർത്തനങ്ങൾ ആരംഭിച്ചു.`}
          </p>
          <p className="mt-3 w-full text-justify">
           {language ?` It is governed by board of Directors consisting of Chairman,
            Managing Director non official Directors and official Directors. The
            board is headed by the Chairman and the chief executive is the
            Managing Director, who is appointed by the Govt.` : `ചെയർമാൻ, മാനേജിംഗ് ഡയറക്ടർ, ഔദ്യോഗിക ഡയറക്ടർമാർ, അനൗദ്യോഗിക ഡയറക്ടർമാർ എന്നിവരടങ്ങുന്ന ഡയറക്ടർ ബോർഡാണ് ഇത് നിയന്ത്രിക്കുന്നത്. ബോർഡിൻ്റെ അധ്യക്ഷൻ ചെയർമാനും ചീഫ് എക്സിക്യൂട്ടീവ് മാനേജിംഗ് ഡയറക്ടറുമാണ്, അദ്ദേഹത്തെ സർക്കാർ നിയമിക്കുന്നു.`}
          </p>
          <p className="mt-3 w-full text-justify">
           {language ?  `All policy matters of the corporation are decided by the board that
            to under the instruction by the Govt. For assisting the Managing
            Director there are six departments headed by HOD as designated
            below. Apart from this there is a company secretary.` : `കോർപ്പറേഷൻ്റെ എല്ലാ നയപരമായ കാര്യങ്ങളും സർക്കാരിൻ്റെ നിർദ്ദേശപ്രകാരം ബോർഡാണ് തീരുമാനിക്കുന്നത്. മാനേജിംഗ് ഡയറക്ടറെ സഹായിക്കുന്നതിന് താഴെ നിയുക്തമാക്കിയിരിക്കുന്ന പ്രകാരം HOD യുടെ നേതൃത്വത്തിൽ ആറ് വകുപ്പുകളുണ്ട്. ഇത് കൂടാതെ ഒരു കമ്പനി സെക്രട്ടറിയും ഉണ്ട്.`}
          </p>
        </div>

        {/* second section */}
        <div className="w-full">
          <p className="lg:mt-8 mt-3 text-justify">
            {language ? `From the modest beginning in 1969, corporation has now grown into a
            large organization playing pivotal role in cashew industry. At
            present KSCDC have running 30 factories all over Kerala and nearly
            15,000 workers, out of which 95% are women.` : `
            1969-ലെ  തുടക്കം മുതൽ, കശുവണ്ടി വ്യവസായത്തിലെ നിർണായകമായ പങ്ക് വഹിക്കുന്ന ഒരു വലിയ സ്ഥാപനമായി കാഷ്യൂ കോർപ്പറേഷൻ വളർന്നു. നിലവിൽ കെഎസ്‌സിഡിസിക്ക് കേരളത്തിലുടനീളം 30 ഫാക്ടറികളും ഏകദേശം 15,000 തൊഴിലാളികളും ഉണ്ട്, അതിൽ 95% സ്ത്രീകളാണ്.`}
          </p>
          {/* ------------------- */}

          <p className="mt-3 text-justify">
            {language ? `KSCDC factories are managed by Asst. Factory Managers and assisted
            by factory clerks. For the inspection of cashew factories there are
            officers designated as Inspectors.` : `KSCDC ഫാക്ടറികൾ നിയന്ത്രിക്കുന്നത് അസി. ഫാക്‌ടറി മാനേജർമാരും, അവരെ സഹായിക്കാൻ ഫാക്‌ടറി ക്ലാർക്കുമാരും ഉണ്ട്. കശുവണ്ടി ഫാക്ടറികളിലെ പരിശോധനയ്ക്ക് ഇൻസ്പെക്ടർമാരായി നിയോഗിക്കപ്പെട്ട ഉദ്യോഗസ്ഥരുമുണ്ട്.`}
          </p>
          <p className="mt-3 text-justify">
           {language ? `The KSCDC was set by the State Govt. with a view to grooming it as a
            model employer in the field of cashew industry, benefiting thousands
            of workers.` : `ആയിരക്കണക്കിന് തൊഴിലാളികൾക്ക് പ്രയോജനപ്പെടുന്ന, കശുവണ്ടി വ്യവസായ മേഖലയിൽ ഒരു മാതൃകാ സ്ഥാപനമായി  വളർത്തിയെടുക്കുക എന്ന ലക്ഷ്യത്തോടെ സംസ്ഥാന സർക്കാരാണ് കെ.എസ്‌.സി.ഡി.സി സ്ഥാപിച്ചത്.`}
          </p>
          <p className="mt-3 text-justify">
            {language ? `KSCDC Ltd is enlarged in the processing of RCN (Raw Cashew Nuts) and
            marketing cashew kernels domestically and abroad. It also
            manufactures value added cashew products.` : `കാഷ്യൂ കോർപ്പറേഷൻ ആർ.സി.എൻ (അസംസ്‌കൃത കശുവണ്ടി) സംസ്‌കരണവും, കശുവണ്ടി പരിപ്പുകൾ ആഭ്യന്തര അന്താരാഷ്ട്ര മാർക്കറ്റുകളിൽ  വിപണനം ചെയ്യുന്നതും വിപുലീകരിച്ചു. മൂല്യവർധിത ഉൽപ്പന്നങ്ങളും ഉൽപ്പാദിപ്പിച്ച് വിപണിയിൽ എത്തിക്കുന്നു.`}
          </p>
          <p className="mt-3 text-justify">
           {language ? `KSCDC function as a model employer in the industry giving all the
            statutory benefits to the workers. This has positively impacted the
            work conditions of the other 3,00,000 workers in private sector as
            these units were also compelled to try to match the benefits offered
            by us with support from Govt. of Kerala, KSCDC has now transformed
            into dependable employer to employees, a reliable supplier to buyer.` : `കാഷ്യൂ കോർപ്പറേഷൻ കശുവണ്ടി വ്യവസായത്തിലെ ഒരു മോഡൽ തൊഴിൽ ദാതാവ് എന്ന നിലയിൽ തൊഴിലാളികൾക്ക് തൊഴിലും അതോടൊപ്പം എല്ലാവിധ ആനുകൂല്യങ്ങളും നൽകിവരുന്നു. ഇതിലൂടെ സ്വകാര്യമേഖലയിൽ പണിയെടുക്കുന്ന  3,00,000 തൊഴിലാളികളുടെ തൊഴിൽ സാഹചര്യങ്ങളെയും ഇത് ഗുണപരമായി ബാധിച്ചു. ഇതിലൂടെ കെ.എസ്.സി.ഡി.സി ഇപ്പോൾ ജീവനക്കാർക്ക് ആശ്രയിക്കാവുന്ന തൊഴിലുടമയും.  ഉൽപ്പന്നങ്ങൾ വാങ്ങുന്നവർക്ക് വിശ്വസനീയമായ വിതരണക്കാരനുമായി മാറിയിരിക്കുന്നു.`}
          </p>
        </div>
      </div>
      <div className="flex items-center lg:justify-center p-3 overflow-x-scroll">
        <pre className="mt-6 grid ">
          <span className="p-2 bg-indigo-500 text-white ">
            Materials Department      : HOD (Materials Manager)
          </span>
          <span className="p-2 bg-indigo-300 text-white">
            Commerce Department       : HOD (Commercial Manager)
          </span>
          <span className="p-2 bg-indigo-500 text-white">
            Finance Department        : HOD (Finance Manager)
          </span>
          <span className="p-2 bg-indigo-300 text-white">
            Personnel Department      : HOD (Personnel Manager)
          </span>
          <span className="p-2 bg-indigo-500 text-white">
            Production Department     : HOD (Production Manager)
          </span>
          <span className="p-2 bg-indigo-300 text-white">
            Internal Auditing         : HOD (Internal Audit Officer)
          </span>
        </pre>
      </div>
      <div></div>
      <div className="p-5 w-full lg:w-2/3  mx-auto justify-center">
        <Accordion
          title={"Organizational Structure"}
          content={<img src="/images/architecture.png" />}
        />
        <Accordion
          title={"Cashew Processing"}
          content={`Traditional Drum Roasting: Raw Cashew Nuts processing start with roasting. We
have been processing our raw Cashew nuts by drum roasting to remove the
complete shell oil. Traditionally roasted Cashew has a very intense flavor and
crispiness, which can’t be compared to any of the other processing techniques.`}
        />

        <Accordion
          title={`Our Products`}
          content={`The KSCDC Processes Cashew into different grades and forms, including value
added products from Cashew like Cashew Soup, Cashew Vita, Cashew Powder and
Cashew Apple to Cashew Apple Pine Jam, Cashew Apple Syrup and Cashew Apple
Aerated Soda. All these products are the outcome of years of through research on
the nutritional and health aspects of Cashew Nut. Studies have proved that there
isn’t a healthier and nutritious all time snack than Cashew Nut. The Cashew Nut
rich in vitamins, minerals, carbohydrates and proteins that promote good healthy
life for all age groups
Cashew nuts are excellent source of protein, carbohydrate, fiber, iron and
potassium. It is cholesterol free with a 4:1 ratio unsaturated fat to saturated
fat. The antioxidants in the cashews, beta carotene and vitamin E, help the
body fight against diseases.`}
        />
      </div>
      <div className="flex p-5 gap-20 justify-center ">
        <div>
          <h3 className="font-bold text-xl">
            Value added products from cashew Kernels in 15 exciting forms
          </h3>
          <ul>
            <li className="mt-4"> 1. Cashew Kernels (Plain & Roasted)</li>
            <li>2. Red-Chilly Coated Cashews</li>
            <li>3. Chilly-Garlic Coated Cashews</li>
            <li>4. Salt & Pepper Coated Cashews</li>
            <li>5. Cashew Vita Chocolate</li>
            <li>6. Cashew Vita Cardamom</li>
            <li>7. Cashew Vita Vanilla</li>
            <li>8. Cashew Vita Pistachio</li>
            <li>9. Cashew-Vanilla Milkshake Powder</li>
            <li>10. Cashew Powder</li>
            <li>11. Cashew Vita</li>
            <li>12. Cashew Soup</li>
            <li>13. Cashew Apple Syrup</li>
            <li>14. Cashew Apple Pine Jam</li>
            <li>15. Cashew Apple Aerated Soda</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-xl font-bold"> Cashews are rich in</h3>
          <ul>
            <li>1.Zinc </li>
            <li>2.Copper</li>
            <li>3.Selenium</li>
            <li>4.Iron</li>
            <li>5.Magnesium </li>
            <li>6.Calcium Potassium</li>
            <li>7.Proteins & Biotin </li>
            <li>8.Fiber Vitamin B5</li>
            <li>9.Phytochemicals </li>
            <li>10. Vitamin E</li>
          </ul>
        </div>
      </div>
      <div className="p-5 w-full lg:w-2/3  mx-auto justify-center">
        <Accordion
          title={"Specifications for Cashew Kernels"}
          content={<CashewKernels />}
        />
        <Accordion
          title={"Important Email IDs of KSCDC"}
          content={<EmailTable />}
        />
        <Accordion
          title={"Email Ids of KSCDC (Department/Sections)"}
          content={<DeptTable />}
        />
      </div>
      {/* body closes */}
      <Footer/>
    </div>
  );
}

export default Organization;
