import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Components/ProductModal.css"

function ProductDetailsBox(props) {
    const { name, image, description, packet_weights, second_image, speciality, isOnline } = props[0];
    const [selectedImage, setSelectedImage] = useState(image);
    const [priceIndex, setPriceIndex] = useState(0);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null); // State to track selected button index

    return (
        <div className='p-3 w-full grid lg:flex gap-x-20'>
            <div className='w-full flex flex-col items-center'>
                <div className="zoom">
                    <img src={selectedImage} className='h-96 object-contain' alt="product Image" />
                </div>
                <div className='flex gap-2 mt-2'>
                    <button onClick={() => setSelectedImage(image)}>
                        <img className={`h-32 w-32 object-contain border ${selectedImage === image ? "border-red-500" : null}`} src={image} alt="First Image" />
                    </button>
                    <button onClick={() => setSelectedImage(second_image)}>
                        <img className={`h-32 w-32 object-contain border ${selectedImage === second_image ? "border-red-500" : null}`} src={second_image} alt="Second Image" />
                    </button>
                </div>
            </div>
            <div className="w-full">
                <div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <div className="flex items-end gap-2">
                        <h3 className="text-2xl font-bold text-green-500">₹{packet_weights[priceIndex].mrp}</h3>
                        <h3 className="text-xl font-bold text-red-500">{packet_weights[priceIndex].weight}</h3>
                    </div>
                    <div className='grid grid-cols-4 mt-5 gap-2'>
                        {packet_weights.map((price, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setPriceIndex(index);
                                    setSelectedButtonIndex(index); // Set selected button index
                                }}
                                className={`p-2 font-bold flex flex-col items-center border rounded-xl ${selectedButtonIndex === index ? "bg-red-500 text-white" : "border-red-500"}`} // Conditional background color
                            >
                                <h2>{price.weight}</h2>
                                <h2>₹{price.mrp}</h2>
                            </button>
                        ))}
                    </div>
                    <p className='mt-6'>{description}</p>
                    <div className="mt-2 p-2">
                        <h2 className="text-xl font-bold">Speciality</h2>
                        <ul className='list-disc'>
                            {speciality.map((item, index) => (
                                <li key={index} className='mt-3'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    {!isOnline ? (
                        <Link to="/franchisee/#franchisee">
                            <button className="btn w-full mt-3 bg-red-500 text-white hover:bg-red-400">
                                Find Offline Store Location For Purchasing
                            </button>
                        </Link>
                    ) : (
                        <button className="btn w-full mt-3 bg-red-500 text-white hover:bg-red-400">
                            Purchase Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsBox;
