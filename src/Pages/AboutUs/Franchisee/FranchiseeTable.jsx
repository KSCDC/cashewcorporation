import React, { useState } from "react";
// import { response } from ".";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import useGetApi from "../../../Hook/useGetApi"
import Loading from "../../../Components/Loading"
import { BACKEND_DOMAIN } from "../../../utils";

function FranchiseeTable() {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {response} = useGetApi("franchisee")
  if(!response) {
    return <Loading/>
  }
  console.log(response)
  const allDistricts = [
    ...new Set(response.map((franchisee) => franchisee.district)),
  ];

  const filteredFranchisees = response.filter((franchisee) =>
    franchisee.district.toLowerCase().includes(searchDistrict.toLowerCase())
  );

  // Grouping franchisees by district
  const groupedFranchisees = filteredFranchisees.reduce((acc, franchisee) => {
    const district = franchisee.district;

    if (!acc[district]) {
      acc[district] = [];
    }

    acc[district].push(franchisee);

    return acc;
  }, {});

  const handleImageClick = () => {
    // For demonstration purposes, using a hardcoded image
    const hardcodedImage = "/images/factory.jpeg";
    setSelectedImage(hardcodedImage);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700">
        Select Location:
      </label>
      <select
        value={selectedDistrict}
        onChange={(e) => {
          setSelectedDistrict(e.target.value);
          setSearchDistrict(e.target.value);
        }}
        className="mt-1 p-2 border rounded-md outline-none focus:border-blue-500"
      >
        <option value="">-- All Locations --</option>
        {allDistricts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
    </div>

    <div className="overflow-x-auto h-screen">
      <table className="table">
        <thead className="lg:sticky top-0 z-50 bg-red-500/10 bg:blur backdrop-blur">
          <tr className="text-gray-800">
            <th></th>
            <th>Name</th>
            <th>District</th>
            <th>Address</th>
            <th>Location</th>
            <th>Contact Name</th>
            <th>Ph.No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedFranchisees).map((district) => (
            <React.Fragment key={district}>
              <tr className="bg-red-400">
                <td colSpan="8" className="text-lg font-bold">{district}</td>
              </tr>
              {groupedFranchisees[district].map((value, index) => (
                <>
                <tr key={value.id} className={index % 2 === 0 ? "bg-red-100" : "bg-red-200"}>
                  <td>{index + 1}</td>
                  <td>{value.enterprise_name_en}</td>
                  <td>{value.district}</td>
                  <td>{value.address}</td>
                  <td>
                    <a href="https://www.google.com" target="_blank" className="flex items-center gap-2">Open <FaExternalLinkAlt/></a>
                  </td>
                  <td>{value.contact_name ? value.contact_name : "Null"}</td>
                  <td>{value.phone_number}</td>
                  <td>
                    <button
                      onClick={() => {
                        setSelectedImage(value.image);
                        setIsModalOpen(true);
                      }}
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-blue-600 text-2xl"
                    >
                      <FaImage/>
                    </button>
                  </td>
                </tr>
                </>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>

    {/* Modal for displaying the hardcoded image */}
    {isModalOpen && (
      <Modal closeModal={closeModal}>

        <img
          src={selectedImage}
          alt={selectedImage}
          className="w-full h-full object-cover"
        />
      </Modal>
    )}
  </div>
  );
}

const Modal = ({ closeModal, children }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-700 hover:text-red-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default FranchiseeTable;
