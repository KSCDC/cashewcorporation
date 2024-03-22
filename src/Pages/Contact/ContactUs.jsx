import React from 'react';
import Banner from "../../Components/Banner"


function ContactUs() {
  

  return (
    <div className="bg-gray-100">
     <Banner image={"feedback.jpg"}/>
        
        <div className="mt-4 grid gap-x-4 lg:flex p-3">
        <ContactBox/>
         {/* form */}
         <form className="w-full lg:w-3/5 bg-white flex flex-col items-center p-4">
          <h2 className="font-bold">Send Your Feedback</h2>
          <p className='text-center mt-4 mb-6'>Thank you for visiting our website. If you have any queries, feedback or suggestions, feel free to get in touch with us</p>
          <div className="grid lg:flex gap-2 w-full">
            <input
              type="text"
              placeholder="Name"
              className="input bg-gray-200 w-full"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="input bg-gray-200 w-full"
            />
          </div>
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
            placeholder="Your Feedback Please"
            className="textarea bg-gray-200 w-full mt-2"
            id=""
            cols="20"
            rows="8"
          ></textarea>
          <button className="bg-red-500 btn mt-2 hover:bg-red-400 text-white">
            Submit
          </button>
        </form>
        </div>
      <iframe
            title="Kerala State Cashew Development Corporation Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15768.139889813081!2d76.59537003572802!3d8.876336337981755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fc61db7ef89d%3A0x26f601582e1853e6!2sKerala+State+Cashew+Development+Corporation!5e0!3m2!1sen!2sin!4v1426072995584"
            width="100%"
            height="400"
            frameBorder="0"
            className="  object-cover"
          ></iframe>
    </div>
  );
}

export default ContactUs;


export const ContactBox = () => {
  return(
    <div className="container mx-auto w-96 lg:w-1/2">
    <div
      className="bg-[#0757A9] text-white p-12 rounded-lg shadow-lg "
      // data-aos="fade-up"
      data-aos-duration="800"
    >
      <h1 className="text-3xl font-bold mb-6">Contact Details</h1>
      <p className="text-xl font-semibold">The Kerala State Cashew Development Corporation Limited</p>
      <p className="mb-4 font-bold">A Government of Kerala Undertaking</p>
      <p className="mb-4">Cashew House, Mundakkal, Kollam, Kerala, India - 691001</p>

      <div className="mb-4">
        <p><span className='font-semibold'>Phone:</span> +91 474 2742271, 2742172, 2742273, 2742954</p>
      </div>

      <div className="mb-4">
        {/* <p><span className='font-semibold'>Gram:</span> 'KASUVANDI'</p> */}
      </div>

      <div className="mb-4">
        <p> <span className='font-semibold'>Email</span> kscdc@kerala.gov.in | ho@cashewcorporation.com</p>
      </div>

      <div className="mb-4">
        <p><span className='font-semibold'>CIN:</span>U15493KL1969SGC002234</p>
      </div>

      <hr className="my-6" />

      <div className="flex justify-center">
        <pre className='flex flex-col items-start'>
          <span>Head Office         :   Mundakkal,Kollam</span>
          <span>30 Factory Offices  :   All Over Kerala</span>
          <span>Cashew Plantation   :   Kottiyam</span>
          <span>Value Addition Unit :   Ayathil</span>
        </pre>
      </div>
    </div>

    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="800"
    >
    </div>
  </div>
  )
}