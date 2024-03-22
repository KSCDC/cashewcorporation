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

  return (
    <div className="product-marquee w-full">
      <h2 className="text-2xl font-bold m-4 text-center text-red-500">
        {data[0].title}
      </h2>
      <ul className="product-marquee-content" style={{ "--marquee-elements-total": marqueeElementsTotal }}>
        {Array.from({ length: 16 }).map((_, index) => (
          <li key={index} style={{ width: `${marqueeElementWidth}%` }}>
            <div className="bg-white shadow-lg h-80 w-full flex flex-col items-center justify-center">
              <img
                className="h-32 object-contain w-full"
                src={`/images/home/${index + 1}.png`}
                alt={`${index + 1}.png`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
