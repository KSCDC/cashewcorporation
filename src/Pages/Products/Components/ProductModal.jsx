import { useState } from "react";
import { productData } from "../constant";
import { MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "./ProductModal.css";

// ProductBoard component displays product details, prices, and allows selecting different packet weights
const ProductBoard = ({ data, closeModal }) => {
  const StarIcon = ({ filled, onClick }) => {
    return (
      <svg
        onClick={onClick}
        className={`w-6 h-6 cursor-pointer ${
          filled ? "text-yellow-500" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  };
  // Destructuring product data
  const {
    image,
    second_image,
    rating,
    name,
    packet_weights,
    description,
    isOnline,
    percentage_discount,
    speciality,
  } = data;
  // State to track the currently selected product price and discounted price
  const [currentProduct, setCurrentProduct] = useState(
    packet_weights[0].mrp
  );
  const [currentMrp, setCurrentMRP] = useState(packet_weights[0].mrp);
  const [productImage, setProductImage] = useState(image);

  // State for reviews
  const [reviews, setReviews] = useState([
    // Initialize with some sample reviews
    { user: "Ramesh R", text: "Great product!", rating: 5 },
    { user: "Gowrisankar", text: "Good quality cashews.", rating: 4 },
  ]);
  const [newReview, setNewReview] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [username, setUserName] = useState("");
  const [UserRating, setUserRating] = useState(0);
  // Function to handle posting a new review
  const postReview = () => {
    if (newReview.trim() !== "") {
      setReviews([
        ...reviews,
        { user: username, text: newReview, rating: UserRating },
      ]);
      setNewReview("");
      setShowReviewForm(false);
    }
  };
  // function when user click on the button to purchase if the product is online redirect to e-commere other with redirect to franchisee

  function handlePurchaseClick() {
    if (isOnline) {
      alert("The product can buy online using e-commerse");
    } else {
      // window.
    }
  }
  const handleStarClick = (value) => {
    setUserRating(value);
  };
  const [fullDescription, setFullDescription] = useState(false);
  return (
    <div className="lg:flex mt-[33rem] lg:mt-60 p-4 border rounded-md shadow-md bg-white">
      {/* Product Image */}
      <div className="flex flex-col items-center justify-center mr-8">
        <div className="zoom">
          <img
            src={productImage}
            alt="Product Image"
            className="h-96 w-96 object-contain rounded-md shadow-md "
          />
        </div>
        {/* Other images */}
        <div className="flex mt-2">
          <button onClick={() => setProductImage(image)} className="p-2">
            <img
              src={image}
              className={`h-20 w-20 border ${
                productImage === image ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              alt="Primary image"
            />
          </button>
          <button onClick={() => setProductImage(second_image)} className="p-2">
            <img
              src={second_image}
              className={`h-20 w-20 border ${
                productImage === second_image
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md`}
              alt="Secondary image"
            />
          </button>
        </div>
      </div>

      <div>
        {/* Product Name */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <button
            onClick={closeModal}
            className="text-gray-800  hover:text-gray-900 text-3xl"
          >
            <IoMdClose />
          </button>
        </div>
        {/* Current Product Price */}
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold text-red-500">₹{currentProduct}</h3>
          <span className="text-green-500">({percentage_discount}% OFF)</span>
        </div>

        {/* Product Rating */}
        <div className="flex items-center mt-1">
          <p className="text-gray-600">Rating:</p>&nbsp;
          {Array.from({ length: rating }).map((_, index) => (
            <Stars key={index} />
          ))}
        </div>

        {/* Product Description */}
        {/*  */}
        <div className="mt-6">
          {fullDescription ? (
            <p className="mt-2 text-gray-700 max-w-xl text-justify">
              {description}
            </p>
          ) : (
            <p className="mt-2 text-gray-700 max-w-xl text-justify">
              {description.slice(0, 100)}...
            </p>
          )} <button onClick={() => setFullDescription((prev) => !prev)} className="font-semibold text-red-400">
            {fullDescription ? "View Less" : "View More"}
          </button>
        </div>
      {/* speciality */}
<div className="mt-2">
  <h3 className="font-bold">speciality</h3>
  <ul className="max-w-xl list-disc">
    <li>{speciality[0]}</li>
    <li className="mt-4">{speciality[1]}</li>
  </ul>
</div>

        {/* Packet Weight Selection */}
        <div className="mt-3 flex gap-2">
          {packet_weights.map((packet) => (
            <button
              key={packet.weight}
              onClick={() => {
                setCurrentProduct(packet.mrp);
              }}
              className={`${
                packet.mrp === currentProduct
                  ? "bg-red-500 text-white"
                  : "border border-gray-300"
              } px-4 py-2 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-blue-300`}
            >
              <p className="text-md font-bold">{packet.weight}</p>
              <div className="mt-1">
                <p className="text-lg font-bold">₹{packet.mrp}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Purchase Button */}
        {!isOnline ? (
          <Link to="/franchisee/#franchisee">
            <button
              onClick={handlePurchaseClick}
              className="btn w-full mt-3 bg-red-500 text-white hover:bg-red-400"
            >
              Find Offline Store Location For Purchaising
            </button>
          </Link>
        ) : (
          <button
            onClick={handlePurchaseClick}
            className="btn w-full mt-3 bg-red-500 text-white hover:bg-red-400"
          >
            Purchase Now
          </button>
        )}
        {/* Customer Reviews Section */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold ">Customer Reviews</h2>
            <div>
              {/* Write a Review Button */}
              {!showReviewForm && (
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="flex items-center text-lg font-bold hover:text-red-500"
                >
                  <MdRateReview />
                  Write a Review
                </button>
              )}
            </div>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="mt-4">
              <input
                placeholder="Enter Username...."
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                className="p-2 w-full rounded-md mb-2 border"
              />
              <div className="mt-2 mb-2 flex items-center">
                <p>Rate this Product: </p>
                {[1, 2, 3, 4, 5].map((value) => (
                  <p>
                    <StarIcon
                      key={value}
                      filled={value <= rating}
                      onClick={() => handleStarClick(value)}
                    />
                  </p>
                ))}
              </div>
              <textarea
                rows="4"
                placeholder="Write a review..."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <div className="flex gap-2">
                <button
                  onClick={postReview}
                  className="btn mt-2 bg-red-500 text-white hover:bg--400"
                >
                  Submit Review
                </button>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="btn mt-2 bg-white border border-red-500 hover:bg-red-500 hover:text-white text-red hover:bg--400"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Display Reviews */}
          <ul className="list-disc pl-4 mt-4 h-64 overflow-y-scroll max-w-xl">
            {reviews.map((review, index) => (
              <li key={index} className="mb-2">
                <p className="font-bold">{review.user}</p>
                <p className="text-base text-justify max-w-xl">{review.text}</p>
                <div className="flex items-center">
                  <p className="text-sm text-gray-600">Rating:</p>
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Stars key={index} />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// ProductModal component displays a modal with detailed product information
function ProductModal({ selectedData, setShowModal }) {
  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white w-full min-h-screen p-6 rounded-md shadow-lg z-10">
        <div className="flex justify-end lg:mt-0 mt-60">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="text-gray-800 hover:text-gray-900 text-3xl"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Render ProductBoard for the selected product */}
        {productData.map((value) =>
          value.id === selectedData.id ? (
            <ProductBoard key={value.id} data={value} closeModal={closeModal} />
          ) : null
        )}
      </div>
    </div>
  );
}

// Stars component renders a star icon for product rating
function Stars() {
  return (
    <svg
      className="w-4 h-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}

export default ProductModal;
