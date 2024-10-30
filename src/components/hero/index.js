import React from "react";

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
      <div className="relative z-30 p-5 text-2xl py-20 px-20 text-white bg-black bg-opacity-10 rounded-xl backdrop-blur-sm">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Book a Ride with Zero Commission
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in">
          An app by drivers, for the people.{" "}
          <span className="text-gray-400">100% direct payment to drivers.</span>
        </p>
        <a
          href="#"
          className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Download App
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
