import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // ChevronDown for dropdown

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false); // for product dropdown

  return (
    <header className="bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold text-blue-800 font-playfair">
            Seora
          </span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/mainhome" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          {/* Product with dropdown */}
          <div className="relative">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              Product <ChevronDown size={16} className="ml-1" />
            </button>
            {productOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded shadow-md w-40 z-50">
                <Link
                  to="/projectm"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setMenuOpen(false);
                    setProductOpen(false);
                  }}
                >
                  Tool
                </Link>

                <Link
                  to="/Template"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setMenuOpen(false);
                    setProductOpen(false);
                  }}
                >
                  Template
                </Link>
              </div>
            )}
          </div>

          <Link to="#" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link to="#" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>

          {/* Product with dropdown in mobile */}
          <div>
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center w-full text-gray-700 hover:text-blue-600"
            >
              Product <ChevronDown size={16} className="ml-1" />
            </button>
            {productOpen && (
              <div className="pl-4">
                <Link
                  to="/projectm"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Tool
                </Link>
                <Link
                  to="/Template"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Template
                </Link>
              </div>
            )}
          </div>

          <Link to="#" className="block text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link to="#" className="block text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
