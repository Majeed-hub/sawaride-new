import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/aboutUs" },
    { name: "FAQ", href: "/FAQ" },
  ];

  const contactDetails = [
    { type: "email", value: "support@sawaride.com" },
    { type: "phone", value: "+1 (555) 123-4567" },
    {
      type: "address",
      value:
        "Street #61, Al Nadwah Dist, Riyadh, Kingdom of Saudi Arabia, 14813",
    },
  ];

  const socialLinks = [
    { platform: "Twitter", href: "https://www.twitter.com" },
    { platform: "Facebook", href: "https://www.facebook.com" },
    { platform: "Instagram", href: "https://www.instagram.com" },
    { platform: "LinkedIn", href: "https://www.linkedin.com" },
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
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              {contactDetails.map((detail) => (
                <li key={detail.type} className="text-gray-400">
                  {detail.value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialIcon
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
          <p className="text-gray-400 text-sm">
            &copy; 2023 Sawa Ride. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </footer>
  );
};

export default Footer;