import { FaDownload } from "react-icons/fa";
import useGetApi from "../../Hook/useGetApi";
import Loading from "../../Components/Loading";
import { useLanguage } from "../../contexts/LanguageContext";

function DownloadMedia() {
  const {response} = useGetApi("downloads")
  const {language} = useLanguage()
  if(!response) {
    return <Loading/>
  }
  return (
    <div>
      <div className="overflow-x-auto p-2">
        <table className="table">
          {/* head */}
          <thead className="bg-red-500 font-bold text-white">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {response.map((value,index) => (
                <tr key={index} className= {`${index %2 === 0 ? 'bg-red-300' : 'bg-red-200'}`}>
                <th>{index+1}</th>
                <td>{language ? value.title_en : value.title_ml}</td>
                <td>
                    <a href={value.file} target="_blank" className="cursor-pointer">
                        <FaDownload/>
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

export default DownloadMedia;
