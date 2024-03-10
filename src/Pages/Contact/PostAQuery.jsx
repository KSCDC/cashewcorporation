import React from "react";
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import Banner from "../../Components/Banner";

const PostAQuery = () => {
  return (
    <div>
      <div className="h-96">
        <img
          className="object-cover object-center w-full lg:h-full"
          src={`/images/banner/post.png`}
          alt="Banner"
        />
      </div>
      <div className="p-8 flex items-center justify-center">
        <div className="grid lg:flex w-full">
          <div className="w-full lg:w-2/5 bg-[#0757A9] text-white flex flex-col items-center text-center p-4">
            <h2 className="text-4xl font-bold ">Contact Details</h2>
            <hr className="border border-white w-full" />
            <p className="text-2xl mt-2 mb-3 font-bold">
              The Kerala State Cashew Development Corporation Limited
            </p>
            <div className="mt-6 mb-6 max-w-md">
              <p className="text-xl">
                (A Government of Kerala Undertaking), Cashew House, Mundakkal,
                Kollam, Kerala, India - 691001
              </p>
            </div>
            <div className="mt-6 flex flex-col items-center text-lg">
              <p className="flex gap-2 items-center">
                <FaPhoneAlt /> +91 474 2742271, 2742172,2742273, 2742954
              </p>
              <p></p>
              <p className="flex gap-2 items-center">
                {" "}
                <FaEnvelope /> kscdc@kerala.gov.in
              </p>
              <p className="flex gap-2 items-center">
                <FaEnvelope /> ho@cashewcorporation.com{" "}
              </p>
              <p className="mt-3">CIN:U15493KL1969SGC002234</p>
            </div>
          </div>
          {/* form */}
          <form className="w-full lg:w-3/5 bg-white flex flex-col items-center p-4">
            {/* <h2 className="font-bold">Send a Message</h2> */}
            <div className="grid lg:flex gap-2 w-full">
              <input
                type="text"
                placeholder="Name"
                className="input bg-gray-200 w-full"
              />
              <input
                type="text"
                placeholder="Vendor/Buyer/Seller/Supplier Name"
                className="input bg-gray-200 w-full"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone No"
              className="input bg-gray-200 w-full mt-2"
            />
            <textarea
              placeholder="Address"
              className="textarea bg-gray-200 w-full mt-2"
              id=""
              cols="20"
              rows="2"
            ></textarea>
            <input
              type="email"
              placeholder="Email"
              className="input mt-2 bg-gray-200 w-full"
            />
            <textarea
              placeholder="Message"
              className="textarea bg-gray-200 w-full mt-2"
              id=""
              cols="20"
              rows="8"
            ></textarea>
            <button className="bg-red-500 btn mt-2 hover:bg-red-400 text-white">
              Send Message <BiLogoTelegram className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAQuery;
{
  /* <div className="w-full border border-error rounded-r-2xl flex flex-col items-center justify-center text-center lg:w-2/5 bg-white p-3 ">
       
        <h2 className="text-4xl font-bold">Contact Details</h2>
        <p className="text-2xl mt-2 mb-3 font-bold">The Kerala State Cashew Development Corporation Limited</p>
        <hr className="border border-red-400 w-full"/>
        <div className="mt-6 mb-6 max-w-md">
          <p className="text-xl">
            (A Government of Kerala Undertaking), Cashew House, Mundakkal,
            Kollam, Kerala, India - 691001
          </p>
        </div>
        <hr className="border border-red-400 w-full"/>
    
        <div className="mt-6 flex flex-col items-center text-lg">
          <p className="flex gap-2 items-center">
          <FaPhoneAlt/> +91 474 2742271, 2742172,2742273, 2742954
          </p>
          <p>Gram: 'KASUVANDI' </p>
          <p className="flex gap-2 items-center"> <FaEnvelope/> kscdc@kerala.gov.in  <FaEnvelope/> ho@cashewcorporation.com </p>
          <p>CIN:U15493KL1969SGC002234</p>
        </div>
      </div> */
}
