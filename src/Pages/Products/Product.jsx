import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from "../../Components/Footer"
import ProductBanner from './ProductBanner';
import ProductList from './ProductList';
import TranslateButton from '../../Components/TranslateButton';
import Banner from '../../Components/Banner';
import { useLanguage } from '../../contexts/LanguageContext';


function Product() {
  useEffect(() =>{
    window.scrollTo(0,0)
  },[])

  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    setLanguage((prev) => !prev);
  };
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton/>
      </div>
      <Banner image="product.png"/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default Product;
