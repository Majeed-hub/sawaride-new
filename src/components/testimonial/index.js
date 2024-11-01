import React from "react";

const Testimonials = () => (
  <section className="bg-black text-white py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        What Our Users Say
      </h2>
      <div className="md:grid md:grid-cols-3 md:gap-8 flex overflow-x-auto overflow-y-hidden space-x-4 snap-x snap-mandatory -mx-4 px-4">
        {[
          {
            id: 1,
            message:
              "Sawa Ride has completely changed how I think about ride-sharing. The zero commission model means I get more bang for my buck, and the drivers seem happier too!",
            name: "Aisha K.",
            arabicName: "عائشة ك",
            role: "Regular User",
          },
          {
            id: 2,
            message:
              "As a driver, Sawa Ride has given me the freedom to work on my own terms. I keep 100% of my earnings, which has made a huge difference in my life.",
            name: "Ahmed T.",
            arabicName: "أحمد ت",
            role: "Sawa Ride Driver",
          },
          {
            id: 3,
            message:
              "The transparency and fairness of Sawa Ride are unmatched. It's refreshing to use a service that truly puts both riders and drivers first.",
            name: "Fatima R.",
            arabicName: "فاطمة ر",
            role: "Business Traveler",
          },
        ].map(({ id, message, name, role }) => (
          <div
            key={id}
            className="testimonial-card bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg min-w-[80%] sm:min-w-[60%] md:min-w-0 snap-center"
          >
            <div className="mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-gray-300 mb-4">{message}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-400">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
