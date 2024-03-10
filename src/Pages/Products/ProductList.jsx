import React, { useState } from "react";
import ProductCard from "./Components/ProductCard";
import { productData } from "./constant";
import ProductModal from "./Components/ProductModal";

// Define main categories and their subcategories with labels
const categories = [
  { main: null, label: "View All", sub: null },
  {
    main: "plain",
    label: "Plain Cashews",
    sub: [
      { filter: "All", label: "ALL" },
      { filter: "premium", label: "Premium Grades" },
      { filter: "popular", label: "Popular Grades" },
      { filter: "extra-premium", label: "Extra Premium Grades" },
    ],
  },
  {
    main: "roastedandsalted",
    label: "Roasted and Salted Cashews",
    sub: [
      {filter:"All",label: "ALL"}, 
      {filter:"premium",label: "Premium Grades"}, 
      {filter:"popular",label:"Popular Grades"}
    ]
  },
  {
    main: "valueAddedProducts",
    label: "Value Added Cashew Products",
    sub: [
      { filter: "All", label: "All" },
      { filter: "premium", label: "Premium Products" },
      { filter: "cashew-vita", label: "Cashew Vita" },
      { filter: "flavoured-cashew", label: "Flavoured Cashew Products" },
      { filter: "cashew-apple", label: "Cashew Apple Products" },
    ],
  },
  {
    main: "giftboxpackets",
    label: "Gift Packets",
    sub: [
      { filter: "All", label: "ALL" },
      { filter: "gift-box", label: "Gift Box" },
      { filter: "jute-bag", label: "Jute Bag" },
    ],
  },
];

// Reusable component for filter buttons
function FilterButton({ label, isActive, onClick }) {
  const formattedLabel =
    label === "premium" || label === "popular" || label === "extra-premium"
      ? `${label} Grade`
      : label;
  return (
    <button
      onClick={onClick}
      className={`btn m-1 capitalize border border-red-500 hover:bg-red-300 outline-none ${
        isActive ? "bg-red-500 text-white btn-active" : ""
      }`}
    >
      <span>{formattedLabel}</span>
    </button>
  );
}

function ProductList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState({ id: 0 });
  const [filterType, setFilterType] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  // Filter products based on selected category and subcategory
  const filteredProductData = productData.filter((product) => {
    return (
      (!filterType || product.type === filterType) &&
      (!subCategory ||
        (subCategory === "All"
          ? product.type === filterType
          : product.grade === subCategory))
    );
  });

  // Handle main category change
  const handleFilterChange = (type) => {
    setFilterType(type);
    setSubCategory(null); // Reset subcategory when changing the main category
  };

  // Handle subcategory change
  const handleSubCategoryChange = (subcategory) => {
    setSubCategory(subcategory);
  };

  return (
    <div className="min-h-screen p-3">
      <div className="text-center  mb-4 gap-2 mt-4 space-x-4">
        {/* Render main category filter buttons with labels */}
        {categories.map((category) => (
          <FilterButton
            key={category.main}
            label={category.label}
            isActive={filterType === category.main}
            onClick={() => handleFilterChange(category.main)}
          />
        ))}
      </div>

      {/* Render subcategory filter buttons if a main category is selected */}
      <hr className="border border-red-400" />
      {filterType && (
        <div className="gap-2 rounded-lg text-center mb-4 mt-4 space-x-4">
          {categories
            .find((category) => category.main === filterType)
            .sub.map((subcategory) => (
              <FilterButton
                key={subcategory.filter || subcategory.label}
                label={subcategory.label}
                isActive={subCategory === subcategory.filter}
                onClick={() => handleSubCategoryChange(subcategory.filter)}
              />
            ))}
        </div>
      )}

      {/* Render product cards */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 p-5 place-items-center justify-items-center">
        {filteredProductData.map((product,index) => (
          <ProductCard
          key={index}
            setSelectedData={setSelectedData}
            setShowModal={setShowModal}
            {...product}
          />
        ))}
      </div>

      {/* Render product modal if showModal is true */}
      {showModal ? (
        <ProductModal selectedData={selectedData} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
}

export default ProductList;
