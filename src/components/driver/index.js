import React from "react";

const DriverBenefitsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Driver Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="benefit-card bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold">100% Earnings</h3>
            </div>
            <p className="text-gray-300">
              Keep every cent you earn. No commission, no hidden fees. Your
              work, your money.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="benefit-card bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold">Flexible Hours</h3>
            </div>
            <p className="text-gray-300">
              Work when you want, how you want. Set your own schedule and be
              your own boss.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="benefit-card bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold">Safety First</h3>
            </div>
            <p className="text-gray-300">
              Our advanced security features ensure a safe environment for every
              ride you take.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="benefit-card bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 mr-3 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold">In-App Support</h3>
            </div>
            <p className="text-gray-300">
              Access 24/7 assistance through the app, ensuring you have help whenever you need it for any ride-related issues.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Become a Driver
          </a>
        </div>
      </div>
    </section>
  );
};

export default DriverBenefitsSection;
