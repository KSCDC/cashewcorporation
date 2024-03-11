import React, { useEffect } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import image from "/images/map.svg";

function DefaultContact() {
  useEffect(() => {window.scrollTo(0,0)},[])
  return (
    <div className="p-3">
      <div className="grid gap-3 lg:flex w-full ">
        <div className="w-full">
          <img data-aos="fade-right" src="/images/destination.svg" alt="AVG image" />
        </div>
        <iframe
        data-aos="fade-left"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15768.139889813081!2d76.59537003572802!3d8.876336337981755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc61db7ef89d%3A0x26f601582e1853e6!2sKerala+State+Cashew+Development+Corporation!5e0!3m2!1sen!2sin!4v1426072995584"
          width="100%"
          height="475"
          frameborder="0"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
}

export default DefaultContact;
