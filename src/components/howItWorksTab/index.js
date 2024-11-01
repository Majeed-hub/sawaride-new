import React, { useState, useEffect, useRef, useCallback } from "react";

// SVG Components for Riders
const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-16 h-16 text-[#00A8C6]"
    viewBox="0 0 24 24"
  >
    <path d="M4 3h16v16H4z" />
  </svg>
);

const RideIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-16 h-16 text-[#00A8C6]"
    viewBox="0 0 24 24"
  >
    <path d="M5 11h14v2H5z" />
  </svg>
);

const PayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-16 h-16 text-[#00A8C6]"
    viewBox="0 0 24 24"
  >
    <path d="M12 2L2 12h10z" />
  </svg>
);

// SVG Components for Drivers
const RequestIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-16 h-16 text-[#00A8C6]"
    viewBox="0 0 24 24"
  >
    <path d="M3 12h18v2H3z" />
  </svg>
);

const AcceptIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-16 h-16 text-[#00A8C6]"
    viewBox="0 0 24 24"
  >
    <path d="M12 21V3h2v18z" />
  </svg>
);

const ReceivePaymentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="w-16 h-16 text-[#00A8C6]"
    viewBox="0 0 24 24"
  >
    <path d="M6 6h12v12H6z" />
  </svg>
);

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("rider");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const riderButtonRef = useRef(null);
  const driverButtonRef = useRef(null);

   const updateIndicatorPosition = useCallback(() => {
    const activeButtonRef =
      activeTab === "rider" ? riderButtonRef : driverButtonRef;
    if (activeButtonRef.current) {
      const { offsetWidth, offsetLeft } = activeButtonRef.current;
      setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicatorPosition();
  }, [activeTab, updateIndicatorPosition]);

  const riderContent = [
    {
      icon: <BookIcon />,
      title: "Book",
      description: "Choose a ride and driver",
    },
    {
      icon: <RideIcon />,
      title: "Ride",
      description: "Travel safe to your destination",
    },
    {
      icon: <PayIcon />,
      title: "Pay Directly",
      description: "100% fare goes to the driver",
    },
  ];

  const driverContent = [
    {
      icon: <RequestIcon />,
      title: "Get Request",
      description: "Get ride requests from riders",
    },
    {
      icon: <AcceptIcon />,
      title: "Accept & Ride",
      description: "Choose your ride and accept",
    },
    {
      icon: <ReceivePaymentIcon />,
      title: "Receive Payment",
      description: "Get payment directly from the rider",
    },
  ];

  const content = activeTab === "rider" ? riderContent : driverContent;

  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-20 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>

      {/* Tab Buttons with Sliding Background */}
      <div className="relative flex justify-center gap-4 mb-10">
        {/* Sliding background indicator */}
        <div
          className="absolute top-0 h-full bg-white rounded-lg transition-all duration-300 ease-in-out"
          style={{
            ...indicatorStyle,
            height: "100%", // Full height for the active background
          }}
        />

        {/* Rider Tab */}
        <button
          ref={riderButtonRef}
          className={`relative z-10 px-6 py-2 font-semibold text-xl rounded-lg transition-colors duration-300 ${
            activeTab === "rider" ? "text-gray-900" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("rider")}
        >
          Riders
        </button>

        {/* Driver Tab */}
        <button
          ref={driverButtonRef}
          className={`relative z-10 px-6 py-2 font-semibold text-xl rounded-lg transition-colors duration-300 ${
            activeTab === "driver" ? "text-gray-900" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("driver")}
        >
          Drivers
        </button>
      </div>

      {/* Content */}
      <div className="grid gap-8 md:grid-cols-3">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg"
          >
            {/* {item.icon} */}
            <h3 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
