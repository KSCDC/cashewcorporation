import React, { useState } from "react";
import { factoriesData } from "../Org";
import { FaExternalLinkAlt } from "react-icons/fa";
import Banner from "../../Components/Banner";
import { ContactBox } from "./ContactUs";
import Accordion from "../../Components/Accordion";
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";
const data = [
  {
    name: "Shri. Sunil John .K",
    designation: "Managing Director",
    landlineOrCellNo: "9847071750",
    email: ["md@cashewcorporation.com"],
  },
  {
    name: "Shri. Sunil John .K",
    designation: "Materials Manager",
    landlineOrCellNo: "8281114645",
    email: ["mm@cashewcorporation.com"],
  },
  {
    name: "Shri. Shaji .V",
    designation: "Commercial Manager",
    landlineOrCellNo: "9847511950",
    email: ["cm@cashewcorporation.com"],
  },
  {
    name: "Shri. Ajith .S",
    designation: "Personnel Manager",
    landlineOrCellNo: "8281114648",
    email: ["pm@cashewcorporation.com"],
  },
  {
    name: "Shri. Raja Sankara Pillai",
    designation: "Finance Manager and Company Secretary",
    landlineOrCellNo: "8281114649",
    email: ["fm@cashewcorporation.com", "cs@cashewcorporation.com"],
  },
  {
    name: "Shri. A. Gopakumar",
    designation: "Production Manager",
    landlineOrCellNo: "8281114637",
    email: ["prm@cashewcorporation.com"],
  },
  {
    name: "Smt. P. S. Jayanthi",
    designation: "Internal Audit Officer(i/c)",
    landlineOrCellNo: "8281114639",
    email: ["iao@cashewcorporation.com"],
  },
  {
    name: "Shri. Muneer Ahammad",
    designation: "Asst.Manager (System)",
    landlineOrCellNo: "8281114641",
    email: ["computercell@cashewcorporation.com"],
  },
  {
    name: "Smt. P. S. Jayanthi",
    designation: "Asst.Commercial Manager",
    landlineOrCellNo: "8281114639",
    email: ["acm@cashewcorporation.com"],
  },
  {
    name: "Smt. K. Yesodha",
    designation: "Asst.Manager",
    landlineOrCellNo: "",
    email: ["ps@cashewcorporation.com"],
  },
  {
    name: "Shri. R. Rajeev",
    designation: "Asst.Manager",
    landlineOrCellNo: "",
    email: [""],
  },
  {
    name: "Smt. S. Bindhu",
    designation: "Asst. Finance Manager",
    landlineOrCellNo: "",
    email: ["afm@cashewcorporation.com"],
  },
];

const HeadOfficeTable = () => (
  <div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="font-bold text-black">
          <tr className="bg-red-500">
            <th></th>
            <th>Name</th>
            <th>Designation</th>
            <th>Landline Or CellNo</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((value, index) => (
            <tr
              className={`${index % 2 === 0 ? "bg-red-200" : "bg-red-300"}`}
              key={value.name}
            >
              <th>{index + 1}</th>
              <td>{value.name}</td>
              <td
                dangerouslySetInnerHTML={{
                  __html: value.designation.replace(" and ", "<br/>"),
                }}
              />
              <td>{value.landlineOrCellNo}</td>
              <td>
                {value.email.map((email, i) => (
                  <div key={i}>
                    {i === 0 ? (
                      email
                    ) : (
                      <>
                        <br />
                        {email}
                      </>
                    )}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ValueAddition = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full ">
        {/* head */}
        <thead className="bg-red-500 text-white sticky">
          <tr>
            <th className="border p-2">Factory.No</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Manager - VAU</th>
            <th className="border p-2">Contact Number</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Image</th>
          </tr>
        </thead>
        <tbody>
          <td className="border p-2">1</td>
          <td className="border p-2">
            <a
              href="https://www.google.com"
              className="flex gap-3 items-center"
              target="_blank"
            >
              Ayathil (Kollam District)
              <FaExternalLinkAlt className="text-base" />
            </a>
          </td>
          <td className="border p-2">Smt. Sujatha N (In charge)</td>
          <td className="border p-2">9495473136</td>
          <td className="border p-2">
            <a href="mailto:f6@cashewcorportion.com">f6@cashewcorportion.com</a>
          </td>
          <td className="border p-2">
            <a href="http://www.google.com" target="_blank">
              Open
            </a>
          </td>
        </tbody>
      </table>
    </div>
  );
};

const CashewPlantation = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full ">
        {/* head */}
        <thead className="bg-red-500 text-white sticky">
          <tr>
            <th className="border p-2">Factory.No</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Manager - Plantation</th>
            <th className="border p-2">Contact Number</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Image</th>
          </tr>
        </thead>
        <tbody>
          <td className="border p-2">1</td>
          <td className="border p-2">
            <a
              href="https://www.google.com"
              className="flex gap-3 items-center"
              target="_blank"
            >
              Kottiyam (Kollam District)
              <FaExternalLinkAlt className="text-base" />
            </a>
          </td>
          <td className="border p-2">Shri. Rajeeve  (in charge) </td>
          <td className="border p-2">9544745661</td>
          <td className="border p-2">
            <a href="mailto:f6@cashewcorportion.com">f1@cashewcorportion.com</a>
          </td>
          <td className="border p-2">
            <a href="http://www.google.com" target="_blank">
              Open
            </a>
          </td>
        </tbody>
      </table>
    </div>
  );
};
const accordion = [
  {
    id: 1,
    title: "Head Office Mundakkal Kollam",
    content: <HeadOfficeTable />,
  },
  {
    id: 2,
    title: "30 Factory Office All Over Kerala",
    content: <FactoryContactTable />,
  },
  {
    id: 3,
    title: "Value Addition Unit Ayathil",
    content: <ValueAddition />,
  },
  {
    id: 4,
    title: "Cashew Plantation Kottiyam",
    content: <CashewPlantation />,
  },
];

const ContactFactory = () => {
  return (
    <div>
      <Banner image={"office.jpg"} />
      <div className="p-5">
        {accordion.map((data) => (
          <Accordion key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

function FactoryContactTable() {
  const { response } = useGetApi("factories");
  const [searchQuery, setSearchQuery] = useState("");

  if (!response) {
    return <Loading />;
  }

  // Filter response data based on search query
  const filteredResponse = response.filter((value) =>
    value.location_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Contact email table */}
      <h3 className="text-xl font-bold mb-2">
        Contact details of our 30 factories
      </h3>
      {/* Search input for filtering factories based on location */}
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search by location
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search by location"
          className="p-2 border rounded-md w-full outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full ">
          {/* head */}
          <thead className="bg-red-500 text-white sticky">
            <tr>
              <th className="border p-2">Factory.No</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Assist. Factory Manager</th>
              <th className="border p-2">Contact Number</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {filteredResponse.map((value, index) => (
              <tr
                className={`${index % 2 === 0 ? "bg-red-300" : "bg-red-200"}`}
                key={value.factory_number}
              >
                <th className="border p-2">{index + 1}</th>
                <td className="border p-2">
                  <a
                    href={value.google_map_url}
                    className="flex gap-3 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value.location_name}
                    <FaExternalLinkAlt className="text-base" />
                  </a>
                </td>
                <td className="border p-2">{value.manager_name}</td>
                <td className="border p-2">{value.contact_number}</td>
                <td className="border p-2">{value.email}</td>
                <td className="border p-2">
                  <a
                    href={value.image}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactFactory;
