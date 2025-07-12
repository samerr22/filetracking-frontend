import  { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, X } from "lucide-react"; // install lucide-react for icons or use heroicons

export default function Header() {
 
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold text-blue-800">Time Doctor</span>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Product
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Solutions
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link to="#" className="text-gray-700 hover:text-blue-600">
            Resources
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
            Product
          </Link>
          <Link to="#" className="block text-gray-700 hover:text-blue-600">
            Solutions
          </Link>
          <Link to="#" className="block text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link to="#" className="block text-gray-700 hover:text-blue-600">
            Resources
          </Link>

         

         
        </div>
      )}
    </header>
  );
}
