import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import TranslateButton from "../../Components/TranslateButton";
import { useLanguage } from "../../contexts/LanguageContext";
import useGetApi from "../../Hook/useGetApi"
import Loading from "../../Components/Loading"
import Footer from "../../Components/Footer";


const itemsPerPage = 10;

function Career() {
  const [currentPage, setCurrentPage] = useState(1);
  const {response} = useGetApi("career")
  if(!response || response.length === 0) {
    return <Loading/>
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    const totalItems = response.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;


  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };



  return (
    <div className="min-h-screen">
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <Banner image="career.jpg" />
      <h2 className="p-3 text-2xl font-bold">{language ? "Career" : "കരിയർ"}</h2>
     <div className="p-5">
     <span className="flex items-center p-3">
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
        {language ? "Active" : "സജീവം"} &nbsp;
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        {language ? "Expired" : "കാലഹരണം"}
      </span>
      <div className="overflow-x-auto min-h-screen ">
        <table className="table">
          {/* head */}
          <thead className="font-bold text-black bg-red-400">
            <tr>
              <th></th>
              <th>{language ? "Job Title" : "ജോലിയുടെ പേര്‌"}</th>
              <th>{language ? "Expire Date" : "കാലാവധികഴിയുന്ന ദിനം"}</th>
            </tr>
          </thead>
          <tbody>
            {/* rows for the current page */}
            {response.slice(startIdx, endIdx).map((value, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-red-100" : "bg-red-50"}`}
              >
                <th>{startIdx + index + 1}</th>
                <td className="font-bold flex items-center gap-2">
                  <a href={value.file} target="_blank" rel="noopener noreferrer">
                    {language ? value.title_en : value.title_ml}
                  </a>{" "}
                  {value.category === "active" ? (
                    <span className="bg-green-500 h-3 w-3 rounded-full text-white font-bold"></span>
                  ) : (
                    <span className="bg-red-500 h-3 w-3 rounded-full font-bold"></span>
                  )}
                </td>
                <td>{value.expiry_date}</td>
              </tr>
            ))}
          </tbody>
        </table>

         {/* pagination buttons */}
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`${currentPage === 1 ? "bg-red-200" : "bg-red-500  text-white"} mr-2 px-3 py-1 rounded`}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= response.length}
          className={`${(currentPage * itemsPerPage >= response.length) ? "bg-red-200" : "bg-red-500  text-white"} mr-2 px-3 py-1 rounded`}

        >
          Next
        </button>
      </div>
      </div>
     </div>
     <Footer/>
    </div>
  );
}

export default Career;
