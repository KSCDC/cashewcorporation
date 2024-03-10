/*
 @dev this component actually is whats new
*/

import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Banner from '../../Components/Banner'
import {FaExternalLinkAlt} from "react-icons/fa"
import useGetApi from '../../Hook/useGetApi'
import { useLanguage } from '../../contexts/LanguageContext'
import TranslateButton from '../../Components/TranslateButton'
import Loading from '../../Components/Loading'


function Blog() {
  useEffect(() =>{
    window.scrollTo(0,0)
  },[])

  const {response} = useGetApi("whatsnew")
  if(!response){
    return <Loading/>
  }
  const {language,setLanguage} = useLanguage()
  const toggleLanguage = () => {
    setLanguage((prev) => !prev)
  }
  return (
    <div>
      <button onClick={toggleLanguage} className="fixed bottom-4 right-3 z-50">
        <TranslateButton/>
      </button>
        <Navbar/>
        <Banner image="blog.jpg"/>
       
        <div className="overflow-x-auto min-h-screen">
  <table className="table">
    {/* head */}
    <thead className='font-bold text-black text-base'>
      <tr>
        <th></th>
        <th>{language ? "Title" : "തലക്കെട്ട്"}</th>
        <th>{language ? "Details" : "വിശദാംശങ്ങൾ"}</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {response.map((value,index) => (
        <tr key={index} className="bg-base-200">
        <th>{index+1}</th>
        <td className="font-bold">{language ? value.title_en : value.title_ml}</td>
        <td>
         <a href={value.file} target='_blank'>{language ? "Open" : "കൂടുതൽ വിവരങ്ങൾക്ക്"}</a>
        </td>
      </tr>
      ))}
     
    </tbody>
  </table>
</div>
        <Footer/>
    </div>
  )
}

export default Blog