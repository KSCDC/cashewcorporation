import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import image from "/images/map.svg";

function DefaultContact() {
  return (
   <div>
     <div className="grid gap-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-4">
    {/* card -1 */}
    <div className="bg-white p-12 shadow-lg">
      <div className="flex gap-3">
        <div className="h-12 w-12 bg-[#FF1E1E] flex items-center justify-center rounded-full shadow-lg">
          <AiOutlineMail className="text-2xl text-white" />
        </div>
        <div className="grid">
          <h3 className="text-[#FF1E1E]">Drop a line</h3>
          <h3 className="font-bold">Mail Us</h3>
          <a href="#">Support@gmail.com</a>
          <a href="#">Support@gmail.com</a>
        </div>
      </div>
    </div>
    {/* card -2 */}
    <div className="bg-white p-12 shadow-lg">
      <div className="flex gap-3">
        <div className="h-12 w-12 bg-[#FF1E1E] flex items-center justify-center rounded-full shadow-lg">
          <AiOutlinePhone className="text-2xl text-white" />
        </div>
        <div className="grid">
          <h3 className="text-[#FF1E1E]">24/7 Service</h3>
          <h3 className="font-bold">Call Us</h3>
          <span>
            <a href="#">+1234567790</a>{" "}
            <span className="text-[#FF1E1E]">(Troll Free)</span>
          </span>
          <a href="#">+9127320272</a>
        </div>
      </div>
    </div>
    {/* card -3 */}
    <div className="bg-white p-12 shadow-lg">
      <div className="flex gap-3">
        <div className="h-12 w-12 bg-[#FF1E1E] flex items-center justify-center rounded-full shadow-lg">
          <IoLocationOutline className="text-2xl text-white" />
        </div>
        <div className="grid">
          <h3 className="text-[#FF1E1E]">Location</h3>
          <h3 className="font-bold">Visit Us</h3>
          <a href="#">158 ralegih sit,</a>
          <a href="#">houston,yk 5896,uk</a>
        </div>
      </div>
    </div>
  </div>
<div className="grid lg:flex gap-3 w-full mt-6 p-3">
  <div className="w-full">
    <img src={image} alt="Contact image" />
  </div>
  <div className="w-full">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15768.139889813081!2d76.59537003572802!3d8.876336337981755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc61db7ef89d%3A0x26f601582e1853e6!2sKerala+State+Cashew+Development+Corporation!5e0!3m2!1sen!2sin!4v1426072995584" width="100%" height="300" frameborder="0" className="border-0"></iframe>
  </div>
</div>
   </div>
  )
}

export default DefaultContact