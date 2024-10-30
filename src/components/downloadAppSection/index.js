import React from "react";
import appStore from "../../assets/svgs/app-store.svg";
import playStore from "../../assets/svgs/play-store.svg";
import mockup1 from "../../assets/svgs/mockup-1.svg";
import mockup2 from "../../assets/svgs/mockup-2.svg";

const DownloadAppSection = () => (
  <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get the Sawa Ride App
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Experience zero-commission rides today. Download the app and join
            the fair-ride revolution.
          </p>
          <div className="flex flex-row items-center justify-center  sm:justify-start space-x-4">
            <img
              src={appStore}
              alt="App Store"
              className="w-32 sm:w-40 h-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <img
              src={playStore}
              alt="Google Play Store"
              className="w-32 sm:w-40 h-auto cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="w-64 h-128 bg-gray-800 rounded-3xl shadow-2xl transform rotate-3 absolute top-0 right-0 z-10"></div>
          <div className="w-64 h-128 bg-gray-700 rounded-3xl shadow-2xl transform -rotate-3 absolute top-0 right-0 z-20"></div>
          <div className="w-64 h-128 bg-gray-900 rounded-3xl shadow-2xl relative z-30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-75"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-24 h-24 text-white opacity-25"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <img src={mockup1} alt="Mockup 1" className="w-48 h-auto" />
            <img src={mockup2} alt="Mockup 2" className="w-48 h-auto" />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
  </section>
);

export default DownloadAppSection;
