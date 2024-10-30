import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import sawaLogo from "../../assets/images/sawa-logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white flex items-center gap-5 font-bold text-xl"
            >
              <img src={sawaLogo} className="h-12" alt="sawalogo" />
              <span>Sawa Ride</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              About Us
            </NavLink>{" "}
            <NavLink
              to="/FAQ"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold px-3 py-2 rounded-md text-sm font-medium"
                  : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              }
            >
              Download
            </NavLink>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-50 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              activeClassName="text-white font-bold"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive
                  ? "block text-white font-bold px-3 py-2 rounded-md text-base font-medium"
                  : "block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-white font-bold px-3 py-2 rounded-md text-base font-medium"
                  : "block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              }
              onClick={toggleMenu}
            >
              Download
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
