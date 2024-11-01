import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/aboutUs" },
    { name: "FAQ", href: "/FAQ" },
  ];

  const contactDetails = [
    {
      type: "email",
      title: "",
      value: (
        <>
          For any complaints or concerns, please reach out to us at{" "}
          <NavLink
            to="mailto:support@sawaride.app"
            className="text-gray-400 hover:text-white"
          >
            support@sawaride.app
          </NavLink>
        </>
      ),
    },
    {
      type: "privacy policy",
      title: "",
      value: (
        <>
          For redressal of grievances, please refer to{" "}<br/>
          <NavLink
            to="/privacy-policy"
            className="text-gray-400 hover:text-white"
          >
            Privacy Policy
          </NavLink>
        </>
      ),
    },
    {
      type: "address",
      title: "Registered Address",
      value:
        "Sawa Ride Information Technology Company Limited, Street #61, Al Nadwah Dist, Riyadh, Kingdom of Saudi Arabia, 14813",
    },
  ];

  const socialLinks = [
    { platform: "Twitter", href: "https://www.twitter.com/sawa_ride" },
    { platform: "Facebook", href: "https://www.facebook.com" },
    { platform: "Instagram", href: "https://www.instagram.com/sawa.ride" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/company/sawaride" },
  ];

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Sawa Ride</h3>
            <p className="text-gray-400 text-sm">
              Revolutionizing ride-hailing with zero commission and 100% driver
              earnings.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              {contactDetails.map((detail) => (
                <li key={detail.type} className="text-gray-400">
                  <b>{detail.title}</b>
                  {detail.type === "address" && <br />}
                  <span>{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialIcon
                  bgColor="white"
                  fgColor="black"
                  key={link.platform}
                  url={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.platform}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-bold">
            " Proudly Built In Saudi Arabia "
          </p>
          <p className="text-gray-400 text-sm">
            &copy; 2024 Sawa Ride Information Technology Company Limited. All
            rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </footer>
  );
};

export default Footer;
