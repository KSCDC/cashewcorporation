import React, { useEffect } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Product from './Pages/Products/Product'
import Tender from './Pages/Tender/Tender'
import Career from './Pages/Career/Career'
import RTI from './Pages/RTI/RTI'
import Gallery from './Pages/Gallery/Gallery'
import Contact from './Pages/Contact/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"
import Kscdc from './Pages/AboutUs/KSCDC/Kscdc'
import Franchisee from './Pages/AboutUs/Franchisee/Franchisee'
import Blog from './Pages/Blog/Blog'
import Organization from './Pages/Org/Organization'
import DirectorBoardPage from './Pages/DirectorBoard/DirectorBoard'
import AnimatedCursor from "react-animated-cursor"
import ProductCharacteristic from './Pages/ProductCharacteristic/ProductCharacteristic'
import Management from './Pages/AboutUs/Management/Management'
import Message from './Pages/Messages/Message'
import BlogAndNews from './Pages/BlogAndNews/BlogAndNews'
import Policies from './Pages/Policies/Policies'
import TermsAndConditions from './Pages/TermsAndConditions'
import Footer from './Components/Footer'
import ProductDetails from './Pages/Products/ProductDetails'
function App() {
  // initialize aos animation
  useEffect(() => {
    Aos.init();
  },[])
  return (
    <main className='bg-gray-100 overflow-hidden'>
      {/* <AnimatedCursor 
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}
      /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/tender' element={<Tender/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/RTI' element={<RTI/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/kscdc" element={<Kscdc/>}/>
          <Route path='/franchisee' element={<Franchisee/>}/>
          {/* blog means whats new */}
          <Route path='/whats-new' element={<Blog/>}/>
          <Route path='/read-blog' element={<BlogAndNews/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/management' element={<Management/>}/>
          <Route path='/org' element={<Organization/>}/>
          <Route path="/director-board" element={<DirectorBoardPage/>}/>
          <Route path="/policies" element={<Policies/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
          <Route path="/product-characteristic" element={<ProductCharacteristic/>}/>
          <Route path="/product-details" element={<ProductDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App