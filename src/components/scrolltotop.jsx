// src/components/ScrollToTopButton.jsx
import React from "react";
import { CircleChevronUp } from "lucide-react";
import PopupButton from "./PopupButton"; // Importing PopupButton

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-16 right-6 flex flex-col items-center space-y-4 z-50">
      {/* PopupButton above the ScrollToTopButton */}
      <PopupButton />

      {/* ScrollToTop Button */}
      <button
        onClick={handleScrollToTop}
        className="p-3 bg-yellow-500 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <CircleChevronUp size={32} className="text-white" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
