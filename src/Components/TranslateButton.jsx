import React, { useState } from "react";
import "./style/Translate.css";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineGTranslate } from "react-icons/md";
function TranslateButton() {
  const [isClick,setIsClick] = useState(true)
  return (
    <div>
      <button onClick={() => setIsClick((prev) => !prev)} className="cta flex items-center justify-center text-white bg-orange-500 border-2 border-orange-500">
        <i className="text-2xl">
        <MdOutlineGTranslate/>
        </i>
        <span className="button-text text-white">
          {isClick ? "മലയാളം" : "English"}</span>
      </button>
    </div>
  );
}

export default TranslateButton;
