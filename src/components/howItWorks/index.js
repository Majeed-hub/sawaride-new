import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="how-it-works-card bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Download the App
            </h3>
            <p className="text-gray-300 text-center">
              Get Sawa Ride from your app store and create an account in
              minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="how-it-works-card bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Request a Ride
            </h3>
            <p className="text-gray-300 text-center">
              Enter your destination and choose from available drivers nearby.
            </p>
          </div>

          {/* Step 3 */}
          <div className="how-it-works-card bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              Enjoy Your Ride
            </h3>
            <p className="text-gray-300 text-center">
              Track your driver in real-time and pay directly through the app.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-16 text-center">
          <p className="text-xl mb-6">
            Ready to experience zero-commission rides?
          </p>
          <a
            href="#"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
