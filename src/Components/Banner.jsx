import React from "react";

function Banner({ image }) {
  return (
    <div className="p-3">
      <div className="lg:h-96 mb-6 overflow-hidden">
      <img
        className="object-cover object-center w-full lg:h-full"
        src={`/images/banner/${image}`}
        alt="Banner"
      />
    </div>
    </div>
  );
}

export default Banner;
