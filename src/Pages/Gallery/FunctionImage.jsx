import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import useGetApi from "../../Hook/useGetApi"
import Loading from "../../Components/Loading"
import { useLanguage } from '../../contexts/LanguageContext';

const FunctionImage = () => {
  const { response } = useGetApi("gallery");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleModal = (item) => {
    setModalVisible(!modalVisible);
    setSelectedItem(item);
  };

  if (!response) {
    return <Loading />;
  }
  const {language} = useLanguage()
  const functionImages = response.filter((data) => data.category === "functions")
  if (functionImages.length === 0) {
    return <div>No data found</div>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 p-3">
      {functionImages.map((item) => (
        <div key={item.id} className="relative" data-aos="fade-up">
          <div className="relative">
            <img
              className="cursor-pointer"
              src={item.images[0].image}
              alt={`${item.title_en} Thumbnail`}
              onClick={() => toggleModal(item)}
            />
            <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-80">
                <p className="text-white font-bold flex items-center gap-2 cursor-pointer" onClick={() => toggleModal(item)}>
                  Open Images
                  <span><FaExternalLinkAlt/></span>
                </p>
              </div>
            </div>
          </div>
          <p className="absolute bottom-8 lg:bottom-14 left-2 text-white font-bold">{language ? item.title_en : item.title_ml}</p>
          <div>
            <p>{language ? item.description_en : item.description_ml}</p>
          </div>
        </div>
      ))}

      {modalVisible && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50" data-aos="fade">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white mx-auto my-8 p-6 rounded-md shadow-lg z-10 overflow-hidden max-w-3xl" data-aos="zoom-in">
            <div className="flex justify-end">
              <button
                onClick={() => toggleModal(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {selectedItem.images.map((image, index) => (
                <a key={index} href={image.image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.image}
                    alt={`${selectedItem.title_en} Image ${index + 1}`}
                    className="w-full h-auto cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionImage;
