import React, { useState } from "react";
import { CirclePlus, Instagram } from "lucide-react"; // Using lucide-react icons

import { FaWhatsapp } from "react-icons/fa";
const PopupButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to handle popup visibility

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle popup state
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* CirclePlus Icon */}
      <button
        className={`p-3 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition-transform duration-300 ${
          isPopupOpen ? "rotate-180" : ""
        }`}
        onClick={togglePopup}
        aria-label="Open Social Links"
      >
        <CirclePlus size={32} className="text-white" />
      </button>

      {/* Popup menu with smooth animation */}
      <div
        className={`absolute bottom-16 flex flex-col items-center bg-white p-4 rounded-2xl shadow-lg space-y-2 transition-all duration-300 ease-out ${
          isPopupOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-2 bg-white rounded-full hover:bg-black transition-all"
        >
          <Instagram size={24} className="text-pink-500" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://www.whatsapp.com/+917070940199"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="p-2 bg-white rounded-full hover:bg-black transition-all"
        >
           <FaWhatsapp size={24} className="text-green-500" />
        </a>
      </div>
    </div>
  );
};

export default PopupButton;
