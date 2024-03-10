import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Policies() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <main>
            <Navbar />
            <div className=" mx-auto py-8 px-4 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">PRIVACY POLICY</h3>
                <p className="mb-4">We understand that privacy is important to you, and we promise to look after your personal information. We will not sell any information about you to any other party.</p>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">What information do we collect from you?</h2>
                    <p>We will only have information about you if you willingly provide it. The information you provide is referred to as personal information. Please make sure you update your personal information if any of your details change.</p>
                    <p className="mt-2">In order to do any of the following, you will need to provide us with certain details:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Place an order</li>
                        <li>Sign up for e-newsletters, if any</li>
                        <li>Enter competitions, if any</li>
                        <li>Give feedback to us</li>
                    </ul>
                    <p className="mt-2">The details you provide may include your name, email address, delivery address and telephone number</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">How will we use it?</h2>
                    <p>We will use this information to fulfill any order and to communicate with you when necessary Slot Gacor.</p>
                    <p className="mt-2">We may also use your personal information to contact you about news and offers that we think may interest you, or to tell you if we change anything important about how the website works, or the terms of use of the website.</p>
                    <p className="mt-2">If you decide at any point that you no longer wish to receive messages of this nature, please contact us and send an email to let us know. Alternatively, click to unsubscribe at the bottom of any of the emails you receive.</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">Will we share your personal information with anyone else?</h2>
                    <p className="mt-2">We will never release your personal details to any outside company for mailing or marketing purposes.</p>
                    <p className="mt-2">Payments on the website are processed by a third party, which adheres to the privacy policy that is set out here. We have a non-disclosure agreement with this third party, and they are certified by all the major card issuers to hold details securely.</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold">How long will we keep your information?</h2>
                    <p className="mt-2">We will only keep your personal information for as long as necessary and consistent with the purpose for which you have given it to us. Except where needed to respond to a query from you or fulfill an order, we will delete your personal information on request by you.</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold">Cancellation and Refund Policy</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold">Cancellation Policy</h3>
                        <p className="mt-2">All cancellation requests must be submitted to the accounts and billing department of The Kerala Cashew Development Corporation Limited (www.cashewcorporation.com). You may submit your cancellation requests by email, fax and/or direct mail or phone before the products shipped. Your request will not be considered valid unless and until you receive confirmation from our accounts or billing department. The confirmation email or number given by accounts department of The Kerala Cashew Development Corporation Limited (www.cashewcorporation.com) will act as a proof of the cancellation of the order. All cancellations will reduce 20% service charge from the actual order value.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold">Refund Policy</h3>
                        <p className="mt-2">We believe in helping its customers as far as possible, and have therefore a liberal cancellation and refund policy.</p>
                        <p className="mt-2">If you are, for any reason, not interested with your purchase, we will issue a refund, subject to deduction according to the services provided. To request a refund, simply contact us with your purchase details. Please include your order number (sent to you via email after ordering) and optionally tell us why you’re requesting a refund – we take customer feedback very seriously and use it to constantly improve our products and quality of service. Refunds are being processed within 30 days period.</p>
                        <p className="mt-2">The refund will be made through bank transfer or through your credit card, depending on the original method of purchase. Additionally, although Kerala Cashew Development Corporation Limited will instruct the bank to handle the crediting process immediately upon notification of cancellation, it could take from 4 to 6 weeks for the actual crediting to take place, depending on your Bank’s practice.</p>
                        <p className="mt-2">In case you feel that the product received is not the same mentioned on the site or as per your expectations, you must bring it to the notice of our customer service within 24 hours of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold">Shipping Policy</h3>
                        <p className="mt-2">All custom products ship within 2-3 weeks of receiving the final design agreement or verbal agreement.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold">Damaged to items resulting from shipping</h3>
                        <p>Any damage to items in transit will be the sole responsibility of the shipping/forwarding company (carrier) and customer and NOT the responsibility of The Kerala Cashew Development Corporation Limited.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold">Modification</h3>
                        <p className="mt-2">The Kerala Cashew Development Corporation Limited reserves the right to modify any provisions of the cancellation or refund policy whatsoever without any notice.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Policies;
