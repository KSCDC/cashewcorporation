import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";
import { useLanguage } from "../../contexts/LanguageContext";

const TenderTable = () => {
  const { response } = useGetApi("tenders");
  const { language } = useLanguage();

  const [filter, setFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!response) {
    return <Loading />;
  }

  const filteredData = response.filter((item) => {
    if (filter === "all") return true;
    if (filter === "live") {
      if (subFilter === "all") return item.category === "live";
      if (subFilter === "Tenders") return item.category === "live" && !item.is_e_tender;
      if (subFilter === "E-Tenders") return item.category === "live" && item.is_e_tender;
    }
    if (filter === "previous") {
      return item.category === "previous" && item.expiry_date;
    }
    return false;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSubFilter("all");
  };

  const handleSubFilterChange = (newSubFilter) => {
    setSubFilter(newSubFilter);
  };

  const handleOpenModal = (files) => {
    setSelectedFiles(files);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedFiles([]);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>{language ? "Tender Title" : "ടെണ്ടർ തലക്കെട്ട്"}</th>
              <th>{language ? "Expiry Date" : "കാലാവധി തീയതി"}</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((value, index) => (
              <tr key={index} className={`${index % 2 === 0 ? "bg-red-200" : "bg-red-100"}`}>
                <td>{language ? value.title_en : value.title_ml}</td>
                <td>{value.expiry_date}</td>
                <td>
                  <button
                    className="btn bg-red-300 border-none"
                    onClick={() => handleOpenModal(value.files)}
                  >
                    Open Docs
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg min-h-72 w-96 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Files</h2>
              <button onClick={handleCloseModal}>
                <FaTimes />
              </button>
            </div>
            <div className="space-y-2 grid gap-2">
              {selectedFiles.map((file, index) => {
                // Extracting file name from URL
                const fileName = file.file.split("/").pop();
                return (
                  <a
                    key={index}
                    href={file.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline bg-gray-200 rounded p-2"
                  >
                    {fileName}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderTable;
