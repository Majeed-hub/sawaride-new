import React, { useState } from "react";

// Array of FAQ questions and answers
const faqs = [
  {
    question: "What is SAWA RIDE?",
    answer:
      "SAWA RIDE is a ride-hailing service designed to connect riders with drivers across Saudi Arabia, focusing on affordability, transparency, and empowering our drivers.",
  },
  {
    question: "How is SAWA RIDE helpful for customers?",
    answer: (
      <ul>
        <li>
          <strong>Affordable Rides:</strong> Our pricing is structured to be
          more economical than other ride-hailing apps, making transportation
          accessible for everyone.
        </li>
        <li>
          <strong>Direct Payment System:</strong> Customers can pay drivers
          directly through various P2P wallets or cash, ensuring a
          straightforward transaction process.
        </li>
        <li>
          <strong>Transparent Pricing:</strong> With no hidden fees and a
          commitment to fair pricing, customers know exactly what they will pay
          for their ride.
        </li>
      </ul>
    ),
  },
  {
    question: "How does the payment process work for rides?",
    answer:
      "Riders can pay drivers directly using various P2P wallets such as STCPay, UrPay, Barq, MobilyPay, or in cash. This direct payment model ensures drivers receive their full earnings without any deductions.",
  },
  {
    question: "What is the monetization strategy for SAWA RIDE?",
    answer:
      "SAWA RIDE aims to disrupt the traditional ride-hailing model by significantly reducing costs in key areas such as maps, cloud services, operations, and marketing. This innovative approach allows us to shift from a high-commission model to a nominal subscription fee for drivers, akin to a mobile recharge. Currently, the platform is free, but we will implement the subscription fee within a couple of months.",
  },
  {
    question: "Is there a commission fee for drivers?",
    answer:
      "No, SAWA RIDE operates on a zero-commission model, meaning drivers keep 100% of their earnings from each ride. We believe in fair compensation for hard work.",
  },
  {
    question: "How does SAWA RIDE's pricing compare to other apps?",
    answer:
      "SAWA RIDE adheres to the pricing guidelines set by the Transport General Authority (TGA). Our current pricing structure is more affordable than that of other ride-hailing apps. We are actively working to establish a fair pricing model that balances customer affordability with driver compensation.",
  },
  {
    question: "Who can sign up to become a driver?",
    answer:
      "Only Saudi nationals can sign up to become drivers with SAWA RIDE. Interested applicants can visit our Driver Sign-Up page for more information.",
  },
  {
    question: "Where is SAWA RIDE currently available?",
    answer:
      "SAWA RIDE is currently available in Riyadh and is planning to expand its services to other regions across the Kingdom soon.",
  },
  {
    question: "Are there any hidden fees for riders?",
    answer:
      "No, at SAWA RIDE, we believe in transparent pricing. There are no hidden fees; the fare you see is what you pay.",
  },
  {
    question: "What should I do if I experience issues with a ride?",
    answer:
      "If you encounter any issues, please contact our customer support team through the Contact Us section on our website or through the app. We’re available 24/7 to assist you.",
  },
  {
    question: "How do I report a lost item?",
    answer:
      "If you leave an item in a vehicle, contact our customer support team immediately. Provide details about your ride, and we will assist you in recovering your belongings.",
  },
  {
    question: "Is my payment information secure with SAWA RIDE?",
    answer:
      "Absolutely! We prioritize your security and use industry-standard encryption methods to protect your payment information.",
  },
  {
    question: "How can I provide feedback about my experience with SAWA RIDE?",
    answer:
      "We value your feedback! You can submit your comments and suggestions through the app after your ride or contact our customer support team directly.",
  },
  {
    question: "What should I do if my driver doesn’t arrive?",
    answer:
      "If your driver does not arrive within the expected time, please check the app for updates. If the issue persists, you can cancel the ride and contact our support for assistance.",
  },
];

const FAQ = () => {
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

export default FAQ;
