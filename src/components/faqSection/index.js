import React, { useState } from "react";

const faqs = [
  {
    question: "How does Sawa Ride's zero commission model work?",
    answer:
      "Sawa Ride operates on a subscription model for drivers, allowing them to keep 100% of their fares. This ensures fair compensation and transparency for both drivers and riders.",
  },
  {
    question: "Is Sawa Ride available in my city?",
    answer:
      "Sawa Ride is rapidly expanding to major cities. Check our app or website for the most up-to-date list of locations where we operate.",
  },
  {
    question: "How do I become a Sawa Ride driver?",
    answer:
      "To become a Sawa Ride driver, download our app, sign up, and complete the verification process. Our team will guide you through the onboarding steps.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  className="w-full py-4 px-6 text-left focus:outline-none "
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
