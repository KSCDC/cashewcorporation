import React from "react";
import { BACKEND_DOMAIN } from "../../utils";

function ImageBackground({image}) {
  return (
    <div className="relative h-96 mb-6 overflow-hidden">
      <img
        className="object-cover object-center w-full h-full"
        src={`${BACKEND_DOMAIN}/${image}`}
        alt={`${BACKEND_DOMAIN}/${image}`}
      />
  
    </div>
  );
}

export default ImageBackground;
