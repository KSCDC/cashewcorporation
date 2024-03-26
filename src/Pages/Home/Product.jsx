// Product.jsx
import { FaShoppingCart } from "react-icons/fa";
import "./style/product.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { enHomeProduct } from "./Language/en";
import { mlHomeProduct } from "./Language/ml";
import useLanguageData from "../../Hook/useLanguageData";

const Product = () => {
  const [marqueeElementsTotal, setMarqueeElementsTotal] = useState(15); // Total number of images
  const [marqueeElementWidth, setMarqueeElementWidth] = useState(0);

  useEffect(() => {
    // Adjust the total number of images based on the actual number of images available
    setMarqueeElementsTotal(25);
    // Calculate the width of each marquee element
    const width = 100 / marqueeElementsTotal;
    setMarqueeElementWidth(width);
  }, []);

  const data = useLanguageData(enHomeProduct, mlHomeProduct);
  const productNames = [
      "Plain Cashews",
      "Roasted Cashews",
      "Red Chilly Coated Cashews",
      "Chilly-Garlic Coated Cashews",
      "Salt & Pepper Coated Cashews",
      "Cashew Vita Chocolate",
      "Cashew Vita Cardamom",
      "Cashew Vita Vanilla",
      "Cashew Vita Pistachio",
      "Cashew-Vanilla Milkshake Powder",
      "Cashew Powder",
      "Cashew Vita",
      "Cashew Soup",
      "Cashew Apple Syrup",
      "Cashew Apple Aerated Soda",
      "Cashew Apple Pine Jam",
    ]
  return (
    <div className="product-marquee w-full">
      <h2 className="text-2xl font-bold m-4 text-center text-red-500">
        {data[0].title}
      </h2>
      <ul className="product-marquee-content group" style={{ "--marquee-elements-total": marqueeElementsTotal }}>
        {Array.from({ length: 16 }).map((_, index) => (
          <li key={index} className="border " style={{ width: `${marqueeElementWidth}%` }}>
            <div className="bg-white shadow-lg h-80 w-full flex flex-col items-center justify-center">
              <img
                className="h-32 object-contain w-full group-hover:scale-110  transition ease-in-out duration-300"
                src={`/images/home/${index + 1}.png`}
                alt={`${index + 1}.png`}
              />
              <p className="max-w-xs font-bold text-red-600 text-center text-xs lg:text-sm">{productNames[index]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
