import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';
import AwardImages from './AwardImages';
import AchievementsImages from './AchievementsImages';
import FunctionImage from './FunctionImage'
import Banner from "../../Components/Banner"
import Videos from './Videos';
import DownloadMedia from './DownloadMedia';
import TranslateButton from '../../Components/TranslateButton';
import { useLanguage } from '../../contexts/LanguageContext';
import Footer from '../../Components/Footer';
import ProductFooter from "../Products/Components/ProductFooter"
import Loading from '../../Components/Loading';

function Gallery() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const renderImages = () => {
    switch (filter) {
  
      case 'functions':
        return <FunctionImage />;
      case 'awards':
        return <AwardImages />;
      case 'downloads':
        return <DownloadMedia/>;
      case 'achievements':
        return <AchievementsImages />;
      case 'video':
        return <Videos/>
      default:
        // Display all images when 'all' or an unknown filter is selected
        return (
          <>
            <AwardImages />
            <FunctionImage />
            <AchievementsImages />
            <Videos/>
          </>
        );
    }
  };
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <div>
      <Navbar /> 
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton />
      </button>       
      <div className=" min-h-screen">
        <Banner image="gallery.jpg"/>
        <div className="grid grid-cols-3 justify-items-center  gap-3 lg:flex items-center justify-center space-x-3 mt-4 mb-4 p-4 lg:p-3">
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'all' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('all')}>All</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'functions' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('functions')}>Functions</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'video' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('video')}>Videos</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'achievements' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('achievements')}>Achievements</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'awards' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('awards')}>Awards</button>
          <button className={`px-5 py-1 border hover:bg-red-500 hover:text-white ${filter === 'downloads' && 'bg-red-500 text-white'}`} onClick={() => handleFilterChange('downloads')}>Downloads</button>
        </div>
        <div className="min-h-screen">
          <Loading/>
        </div>
        {/* <div className="flex flex-col items-center">
          {renderImages()}
        </div> */}
      </div>
      <ProductFooter/>
    </div>
  );
}

export default Gallery;


