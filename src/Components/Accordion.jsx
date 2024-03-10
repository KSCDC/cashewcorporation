import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const isFileWithExtension = (content) => {
    const fileExtensionRegex = /\.[0-9a-z]+$/i;
    return fileExtensionRegex.test(content);
  };

  return (
    <div className="border border-red-100 rounded-lg bg-[#0757A9] text-black  mb-2">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className={`transform text-white transition-transform`}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100 flex  overflow-scroll">
          {isFileWithExtension(content) ? (
            <div>
              <a
                href={content}
                className="flex items-center gap-3 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open <FaExternalLinkAlt />
              </a>
            </div>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
}

export default Accordion;
