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
            <Link to="/" className="text-white flex items-center gap-5 font-bold text-xl">
            <img src={sawaLogo} className="h-12" alt="sawa logo" />
              <span>Sawa Ride</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              exact
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white font-bold"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white font-bold"
            >
              About Us
            </NavLink>{" "}
            <NavLink
              to="/FAQ"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white font-bold"
            >
              FAQ
            </NavLink>
            <NavLink
              to="/download"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white font-bold"
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
              exact
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              activeClassName="text-white font-bold"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              activeClassName="text-white font-bold"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              activeClassName="text-white font-bold"
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
