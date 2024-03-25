import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";
import { useLanguage } from "../../contexts/LanguageContext";

const TenderTable = () => {
  const { response: tenderResponse } = useGetApi("tenders");
  const { response: productResponse } = useGetApi("products"); // Assuming there's a "products" endpoint
  const { language } = useLanguage();

  const [filter, setFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!tenderResponse || !productResponse) {
    return <Loading />;
  }

  // Merge tender and product responses into one array
  const allData = [...tenderResponse, ...productResponse];

  // Filter live products
  const liveProducts = allData.filter(item => item.category === "live");

  // Helper function to format date to dd/mm/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

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
        {/* Filter buttons and sub-filter buttons */}
      </div>
      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            <th>{language ? "Title" : "തലക്കെട്ട്"}</th>
            <th>{language ? "Published Date" : "പ്രസിദ്ധീകരിച്ച തീയതി"}</th>
            <th>{language ? "Last Date" : "അവസാന തീയതി"}</th>
            <th>{language ? "Documents":"ഡോക്യുമെന്റ്സ്"}</th>
          </tr>
        </thead>
        <tbody>
          {liveProducts.map((value, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-red-200" : "bg-red-100"}`}>
              <td>{language ? value.title_en : value.title_ml}</td>
              <td>{formatDate(value.published_date)}</td>
              <td>{formatDate(value.expiry_date)}</td>
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
      {/* Modal */}
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
