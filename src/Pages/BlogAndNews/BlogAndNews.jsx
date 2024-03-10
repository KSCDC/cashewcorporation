import Navbar from "../../Components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import TranslateButton from "../../Components/TranslateButton";
import { blogDetils, malayalamBlog } from "../Home/constants";
import { IoArrowBack } from "react-icons/io5";
import Footer from "../../Components/Footer";
const BlogAndNews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { language, setLanguage } = useLanguage();
  const { state } = useLocation();

  // Determine which set of blog content to use based on the language
  const blogContent = language ? blogDetils : malayalamBlog;

  // Find the blog post that matches the ID from the URL state
  const selectedBlog = blogContent.find((blog) => blog.id === state?.id);

  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>
      <div className="container mx-auto py-8">
        {/* Render only the selected blog post */}
        {selectedBlog && (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-md shadow-md">
            <div className="absolute">
              <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-red-500" onClick={() => history.back()}>
                <IoArrowBack/>
              </button>
            </div>
            <img src={selectedBlog.image} alt="" className="w-full h-96 object-contain mb-4 rounded-md" />
            <h3 className="text-3xl font-bold mb-2">{selectedBlog.title}</h3>
            <p className="text-gray-600 mb-4 text-justify">{selectedBlog.caption}</p>
            <p className="text-gray-800">{selectedBlog.content}</p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default BlogAndNews;
