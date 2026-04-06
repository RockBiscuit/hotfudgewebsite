import React, { useState } from "react";
import tailwindcss from '@tailwindcss/vite'

const Navbar = ({ setStep }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-bold text-center text-xl p-6 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl">hot fudge</h1>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links for large screens */}
        <div className="hidden md:flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 mt-4 sm:mt-0">
          <button
            onClick={() => setStep("home")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Home
          </button>
          <button
            onClick={() => setStep("timeline")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Timeline
          </button>
          <button
            onClick={() => setStep("compare")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Comparison
          </button>
          <button
            onClick={() => setStep("about")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            About Us
          </button>
          <button
            onClick={() => setStep("account")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Account
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hamburger) */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 mt-4">
          <button
            onClick={() => setStep("home")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Home
          </button>
          <button
            onClick={() => setStep("timeline")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Timeline
          </button>
          <button
            onClick={() => setStep("compare")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Comparison
          </button>
          <button
            onClick={() => setStep("about")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            About Us
          </button>
          <button
            onClick={() => setStep("account")}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 font-bold rounded-sm"
          >
            Account
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
