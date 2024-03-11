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
    if (filter === "tenders") {
      if (subFilter === "all") return true;
      if (subFilter === "live") return item.category === "live";
      if (subFilter === "previous") return item.category === "previous";
      if (subFilter === "etender") return item.is_e_tender;
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
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            className={`btn ${filter === "all" && "btn-active bg-red-500 text-white"}`}
            onClick={() => handleFilterChange("all")}
          >
            {language ? "All" : "എല്ലാം"}
          </button>
          <button
            className={`btn ${filter === "tenders" && "btn-active bg-red-500 text-white"}`}
            onClick={() => handleFilterChange("tenders")}
          >
            {language ? "All Tenders" : "എല്ലാം ടെണ്ഡേഴ്സ്"}
          </button>
          <button
            className={`btn ${filter === "tenders" && subFilter === "etender" && "btn-active bg-red-500 text-white"}`}
            onClick={() => handleSubFilterChange("etender")}
          >
            {language ? "E-Tenders" : "ഇ-ടെൻഡർ"}
          </button>
        </div>
        {filter === "tenders" && (
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <button
                className={`btn ${subFilter === "all" && "btn-active bg-red-500 text-white"}`}
                onClick={() => handleSubFilterChange("all")}
              >
                {language ? "All" : "എല്ലാം"}
              </button>
              <button
                className={`btn ${subFilter === "live" && "btn-active bg-red-500 text-white"}`}
                onClick={() => handleSubFilterChange("live")}
              >
                {language ? "Live Tenders" : "ലൈവ് ടെന്‍ഡര്‍സ്"}
              </button>
              <button
                className={`btn ${subFilter === "previous" && "btn-active bg-red-500 text-white"}`}
                onClick={() => handleSubFilterChange("previous")}
              >
                {language ? "Previous Tenders" : "മുന്‍നിര ടെന്‍ഡര്‍സ്"}
              </button>
            </div>
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>{language ? "Tender Title" : "ടെണ്ടേഴ്സ് തലക്കെട്ട്"}</th>
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
