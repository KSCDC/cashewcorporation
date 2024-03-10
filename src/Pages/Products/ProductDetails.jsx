import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import {useLocation} from "react-router-dom"
import { productData } from './constant'
import ProductDetailsBox from './ProductDetailsBox'
import { IoMdArrowRoundBack } from "react-icons/io";

function ProductDetails() {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    const {state} = useLocation()

    const userProduct = productData.filter((product) => state.id == product.id)
  return (
    <main>
        <Navbar/>
       <div className="p-2">
       <button onClick={() => history.back()} className='p-2 bg-blue-400 hover:bg-red-500 text-white rounded-full'>
          <IoMdArrowRoundBack/>
        </button>
       </div>
        <div className='min-h-screen'>
            <ProductDetailsBox {...userProduct}/>
        </div>
        <Footer/>
    </main>
  )
}

export default ProductDetails