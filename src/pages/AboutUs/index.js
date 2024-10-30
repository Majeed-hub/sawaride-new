import React from 'react';

const AboutUs = () => {
  // Array of values
  const values = [
    {
      title: "Transparency",
      description: "We operate on a zero-commission model, ensuring that drivers keep 100% of their earnings. No hidden fees, no surprises—just fair pay for hard work.",
    },
    {
      title: "Empowerment",
      description: "Our drivers are at the heart of our service. We are dedicated to supporting them with a direct payment system, allowing riders to pay through P2P wallets like STCPay, UrPay, Barq, and MobilyPay, or even cash.",
    },
    {
      title: "Community",
      description: "We believe in building a community that connects riders and drivers. By choosing SAWA RIDE, you’re not just getting a ride; you’re joining a movement focused on supporting local livelihoods.",
    }
  ];

  // Array of reasons to choose SAWA RIDE
  const reasonsToChoose = [
    {
      title: "Zero Commission",
      description: "Unlike other ride-hailing platforms, we do not take a cut from driver earnings, allowing them to maximize their income.",
    },
    {
      title: "Direct Payments",
      description: "Our P2P payment system simplifies the transaction process, making it easy for riders to pay directly to drivers.",
    },
    {
      title: "No Surge Pricing",
      description: "We believe in fair pricing, which is why we do not engage in surge pricing. What you see is what you pay, every time.",
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-semibold text-center my-12 tracking-tight">About Us</h1>

        <section className="my-16">
          <h2 className="text-3xl font-medium text-left mb-8">Our Values</h2>
          <ul className="space-y-4 text-left text-lg">
            {values.map((value, index) => (
              <li key={index} className="flex flex-col items-left p-4 rounded-md transition duration-200 hover:text-gray-400">
                <strong className="text-2xl font-semibold mb-2">{value.title}</strong>
                <p className="max-w-3xl text-base text-gray-300">{value.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-medium text-left mb-8">Why Choose SAWA RIDE?</h2>
          <ul className="space-y-4 text-left text-lg">
            {reasonsToChoose.map((reason, index) => (
              <li key={index} className="flex flex-col items-left p-4 rounded-md transition duration-200 hover:text-gray-400">
                <strong className="text-2xl font-semibold mb-2">{reason.title}</strong>
                <p className="max-w-3xl text-base text-gray-300">{reason.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
