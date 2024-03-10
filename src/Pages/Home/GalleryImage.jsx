import { Link } from "react-router-dom"
import "./style/gallery.css"
import { useLanguage } from "../../contexts/LanguageContext"

function GalleryImage() {
  const {language} = useLanguage()
  return (
    <div className="w-full  rounded-md shadow-md p-6">
          <h2 className="text-center text-xl font-bold mb-2">
            {language ? "Images" : "ചിത്രങ്ങൾ"}
          </h2>
          <div className="box ">
              <img className="image object-cover" src="/images/home/gallery/gallery-1.jpg" />
	            <img className="image object-cover" src="/images/home/gallery/gallery-2.jpg" />
	            <img className="image object-cover" src="/images/home/gallery/gallery-3.jpg" />
	            <img className="image object-cover" src="/images/home/gallery/gallery-4.jpg" />
              <img className="image object-cover" src="/images/home/gallery/gallery-5.jpg" />
            </div>
          <Link to="/gallery">
            <button className="px-5 py-2 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600 transition duration-300">
            {language ? "Visit Images" : "ചിത്രങ്ങൾ സന്ദർശിക്കുക"}

            </button>
          </Link>
        </div>
  )
}

export default GalleryImage