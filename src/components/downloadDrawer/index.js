import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const DownloadDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);
  const threshold = 100; // Drag threshold in pixels
  let startY = 0;

  // Detect if the device is iOS or Android
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  };

  const appLink = isIOS()
    ? "/path-to-ios-app" // iOS app link
    : "/path-to-android-app"; // Android app link

  // Handle touch start event
  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  // Handle touch move event
  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > threshold) {
      onClose();
    }
  };

  // Cleanup touch events
  useEffect(() => {
    if (drawerRef.current) {
      drawerRef.current.addEventListener("touchstart", handleTouchStart);
      drawerRef.current.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      if (drawerRef.current) {
        drawerRef.current.removeEventListener("touchstart", handleTouchStart);
        drawerRef.current.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [drawerRef]);

  return (
    <motion.div
      ref={drawerRef}
      className={`fixed inset-x-0 bottom-0 bg-white rounded-t-lg shadow-lg transition-transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
      initial={{ y: "100%" }}
      animate={{ y: isOpen ? "0%" : "100%" }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-6">
        <h2 className="text-lg font-bold mb-4">Download the App</h2>
        <div className="flex flex-col space-y-2">
          <a
            href={appLink}
            className="block text-center bg-blue-500 text-white py-2 rounded-md"
          >
            Download App
          </a>
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default DownloadDrawer;
