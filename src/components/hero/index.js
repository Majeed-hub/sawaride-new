import React from "react";
import { NavLink } from "react-router-dom";
import sawaLogo from "../../assets/images/sawa-logo.png";

const HeroSection = () => {
  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Iframe */}
      <iframe
        src="https://my.spline.design/3dcitynavigationcopy-78a5326874435a5b665b6111aa66396e/"
        frameBorder="0"
        className="absolute inset-0 w-full h-full z-0" // Cover the entire section
        title="3D City"
      ></iframe>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-30"></div>

      <div className="relative z-30 p-5 text-2xl py-10 px-10 text-white flex flex-col items-center md:items-start">
        {/* Logo */}
        <img
          src={sawaLogo}
          alt="Sawa Logo"
          className="mb-32 md:mb-8 w-32 md:w-32 lg:w-32 mx-auto md:mx-0"
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Book a Ride with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5FF7E] to-[#00A8C6] ">
            Zero Commission
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in">
          An app by drivers, for the people.{" "}
          <span className="text-gray-400">100% direct payment to drivers.</span>
        </p>
        <NavLink
          to={"/"}
          className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Download App
        </NavLink>
      </div>
    </header>
  );
};

export default HeroSection;
