import React, { useState } from "react";
import { CiMenuBurger} from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart,FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { mlNavHeading } from "../Pages/Home/Language/ml";
import { enNavHeading } from "../Pages/Home/Language/en";
import useLanguageData from "../Hook/useLanguageData";

import "./style/navbar.css";

function EnNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const heading = useLanguageData(enNavHeading,mlNavHeading)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const subProduct = () => (
    <div className="capitalize text-[11px] absolute hidden bg-white/10 bg:blur backdrop-blur text-black py-2 space-y-2 w-40 p-3 top-full left-0 group-hover:grid transition transform ease-in-out duration-300">
      <Link
        className="hover:bg-white p-2 border border-transparent hover:border hover:border-red-500 text-base"
        to="/product"
      >
        CDC Brand Products
      </Link>
      <Link
        className="bg-red-600 text-white rounded-lg hover:bg-red-400 border-red-500 btn"
        to="/product"
      >
        Online Shopping
      </Link>
    </div>
  );

  const SubMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="capitalize text-[11px] absolute hidden bg-white/10 bg:blur backdrop-blur text-black py-2 space-y-2 w-40 p-3 top-full left-0 group-hover:grid transition transform ease-in-out duration-300"
    >
      <Link
        className="hover:bg-white p-2 border border-transparent hover:border hover:border-red-500"
        to="/kscdc"
      >
        KSCDC
      </Link>
      <Link
        className="hover:bg-white p-2 border border-transparent hover:border hover:border-red-500"
        to="/org"
      >
        Organization
      </Link>
      <Link
        className="hover:bg-white p-2 border border-transparent hover:border hover:border-red-500"
        to="/director-board"
      >
        Board Of Directors
      </Link>
      <Link
        className="hover:bg-white p-2 border border-transparent hover:border hover:border-red-500"
        to="/management"
      >
        Management
      </Link>
      <Link
        className="hover:bg-white p-2 border border-transparent hover:border hover:border-red-500"
        to="/product-characteristic"
      >
        Product Characteristics
      </Link>
      <Link
        className="hover:bg-white p-2 border border-transparent hover:border hover:border-red-500"
        to="/franchisee"
      >
        Franchisee
      </Link>
      <Link
        to="/whats-new"
        className="bg-red-600 text-white rounded-lg hover:bg-red-400 border-red-500 btn"
      >
        What's New
      </Link>
    </motion.div>
  );

  return (
    <nav className="h-28 border lg:rounded-[12px] bg-white text-black uppercase w-full flex items-center justify-evenly z-50">
      {/* image logo */}
      <div className="logo flex items-center">
        <img src="/images/logo.png" className="h-12 lg:h-36 hidden lg:block" alt="Logo" />
        {heading.map((navdata,index) => (
          <div key={index} className="p-2">
          <h3 className="font-bold max-w-sm">
          THE KERALA STATE CASHEW DEVELOPEMENT CORPORATION LTD
          </h3>
          <p className="text-[11px] text-gray-800 font-semibold">
          A Government of Kerala Undertaking
          </p>
          <p className="text-[11px] text-gray-800 font-extrabold">
          (AN ISO 22000-2005 CERTIFIED COMPANY)
          </p>
        </div>
        ))}
      </div>
      {/* navbar content */}
      <div className="hidden lg:flex space-x-2 items-center ">
        <Link
          to="/"
          className={`${
            path === "/" ? "text-red-500" : ""
          } text-[11px] hover:text-red-500 decoration-wavy decoration-red-400 font-bold`}
        >
          Home
        </Link>
        <div className="relative group">
          <Link
            to="/kscdc"
            className=" text-[11px] cursor-pointer flex items-center space-x-2 font-bold"
          >
            About Us
            {/* down sv */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:opacity-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
          {SubMenu()}
        </div>
        <div className="relative group">
          <Link
            className={`${
              path === "/product" ? "text-red-500" : ""
            } text-[11px] hover:text-red-500 decoration-wavy decoration-red-400 font-bold flex items-center`}
          >
            Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:opacity-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
          {subProduct()}
        </div>
        <Link
          to="/tender"
          className={`${
            path === "/tender" ? "text-red-500" : ""
          } text-[11px] hover:text-red-500 decoration-wavy decoration-red-400 font-bold`}
        >
          Tenders
        </Link>
        <Link
          to="/career"
          className={`${
            path === "/career" ? "text-red-500" : ""
          } text-[11px] hover:text-red-500 decoration-wavy decoration-red-400 font-bold`}
        >
          Careers
        </Link>
        <Link
          to="/rti"
          className={`${
            path === "/rti" ? "text-red-500" : ""
          } text-[11px] hover:text-red-500 decoration-wavy decoration-red-400 font-bold`}
        >
          RTI
        </Link>
        <Link
          to="/gallery"
          className={`${
            path === "/gallery" ? "text-red-500" : ""
          } text-[11px] hover:text-red-500 decoration-wavy decoration-red-400 font-bold`}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className={`${
            path === "/contact" ? "text-red-500" : ""
          } text-[11px] hover:text-red-500 decoration-wavy decoration-red-400 font-bold`}
        >
          Contact
        </Link>
      </div>
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          <CiMenuBurger className="text-black m-3 text-2xl" />
        </button>
      </div>
      {/* shop Now Button */}
      <div className="ml-5 hidden lg:flex flex-col items-center">
        <div className="relative">
          <Link
            to="/product"
            className=" rounded flex items-center justify-center  top-0 right-2 relative"
          >
            <button className="flex text-sm items-center gap-2 font-bold bg-red-500 hover:bg-red-400 p-2 rounded-lg text-white">
              Shop Now
              <FaShoppingCart />
            </button>
          </Link>
          <div className="">
            <img
              src="/images/CDC.png"
              className="left-1 bg-white rounded-full absolute h-24"
              alt="CDC Logo"
            />
          </div>
        </div>
      </div>
      {/* mobile view */}
      <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-white text-black z-50 shadow-lg"
            >
              <button
                onClick={toggleMenu}
                className="text-2xl flex items-center absolute top-3 right-4 focus:outline-none p-2 bg-red-500 text-white rounded-full font-bold"
                aria-label="Close Menu"
              >
                <RxCross2 className="text-3xl" />Close
              </button>
              {/* menu list content */}
              <div className="flex flex-col items-center justify-center h-full">
                <img src="/images/CDC.png" className="h-24 mr-12" alt="CDC Logo" />
               <div className="flex flex-col items-start">
               <Link to="/" className="text-xl font-bold mt-3 hover:text-red-500">
                  Home
                </Link>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="text-xl font-bold mt-3 hover:text-red-500">
                    <h2 className="flex items-center gap-3">About Us <FaAngleDown/></h2>
                  </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-base rounded-box w-52 ">
                      <li><Link to="/kscdc" className="hover:bg-red-500 hover:text-white">KSCDC</Link></li>
                      <li><Link to="/org" className="hover:bg-red-500 hover:text-white">Organization</Link></li>
                      <li><Link to="/director-board" className="hover:bg-red-500 hover:text-white">Board Of Directors</Link></li>
                      <li><Link to="/management" className="hover:bg-red-500 hover:text-white">Management</Link></li>
                      <li><Link to="/product-characteristic" className="hover:bg-red-500 hover:text-white">Product Characteristics</Link></li>
                      <li><Link to="/franchisee" className="hover:bg-red-500 hover:text-white">Franchisees</Link></li>
                      <li><Link to="/whats-new" className="bg-red-500 hover:bg-red-600 text-white">Whats New</Link></li>
                    </ul>
                  </div>
                  <div className="dropdown">
                  <div tabIndex={0} role="button" className="text-xl font-bold mt-3 hover:text-red-500">
                    <h2 className="flex items-center gap-2"> Products <FaAngleDown/></h2></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-base rounded-box w-52 ">
                      <li><Link to="/product" className="hover:bg-red-500 hover:text-white">CDC Brand Products</Link></li>
                      <li><Link to="/whats-new" className="bg-red-500 hover:bg-red-600 text-white mt-2">Whats New</Link></li>
                    </ul>
                  </div>
                
                <Link to="/tender" className="text-xl font-bold mt-3 hover:text-red-500">
                  Tender
                </Link>
                <Link to="/career" className="text-xl font-bold mt-3 hover:text-red-500">
                  Career
                </Link>
                <Link to="/rti" className="text-xl font-bold mt-3 hover:text-red-500">
                  RTI
                </Link>
                <Link to="/gallery" className="text-xl font-bold mt-3 hover:text-red-500">
                  Gallery
                </Link>
                <Link to="/contact" className="text-xl font-bold mt-3 hover:text-red-500">
                  Contact
                </Link>
                <Link to="/product" className="text-xl font-bold mt-3 btn text-white bg-red-500 hover:text-red-500">
                  Shop Now
                </Link>
               </div>
              </div>
            </motion.div>
          )}
          
      </AnimatePresence>
    </nav>
  );
}

export default EnNavbar;
