import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSilce";
import { Menu, X } from "lucide-react"; // install lucide-react for icons or use heroicons

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/auth/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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

          {currentUser ? (
            <>
              <Link to="/profile" className="flex items-center">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
              </Link>
              <Link
                to="/dashboard/companyemp"
                className="text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignout}
                className="text-white bg-blue-900 px-3 py-1 rounded-lg text-base md:text-lg font-serif hover:bg-blue-800 transition"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link
              to="/Leardersign-in"
              className="text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
          )}

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Get Demo
          </button>
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

          {currentUser ? (
            <>
            
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span>Profile</span>
              
              <Link
                to="/dashboard/companyemp"
                className="block text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
              <button
                onClick={handleSignout}
                className="w-full text-left text-white bg-blue-900 px-3 py-1 rounded-lg text-base font-serif hover:bg-blue-800 transition"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="block text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
          )}

          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Get Demo
          </button>
        </div>
      )}
    </header>
  );
}
