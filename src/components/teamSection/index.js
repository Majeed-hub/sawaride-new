import React from 'react';
import prathmesh from "../../assets/images/prathmesh-profile.png";
import waleed from "../../assets/images/waleed-profile.png";
import abdulrahman from "../../assets/images/abdulrahman-profile.png";
import majeed from "../../assets/images/majeed-profile.png";
import narmin from "../../assets/images/narmin-profile.png";
import { NavLink } from 'react-router-dom';

const teamMembers = [
  {
    name: "Waleed Muniri",
    role: "Founder & CEO",
    description: "Visionary leader with a focus on innovation and excellence.",
    image: waleed, // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/waleedmuniri",
  },
  {
    name: "Prathmesh Gaikwad",
    role: "Co-Founder & CTO",
    description: "Tech innovator passionate about seamless user experiences.",
    image: prathmesh, // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/prathmesh-gaikwad-1640b8251/",
  },
  {
    name: "Abdulrahman M",
    role: "Co-Founder & COO",
    description: "Expert in operations and scaling platforms effectively.",
    image: abdulrahman, // Replace with actual image path
    linkedin:
      "https://www.linkedin.com/in/abdulrahman-alanazi-pmp%C2%AE-cscp-cfm-605214123/",
  },
  {
    name: "Abdul Majeed",
    role: "Tech Advisor",
    description:
      "Experienced tech advisor with a strong development background.",
    image: majeed, // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/majeed-mohtesham",
  },
  {
    name: "Narmin Mohtesham",
    role: "Junior UI/UX Designer",
    description:
      "Creative designer focused on intuitive and engaging interfaces.",
    image: narmin, // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/narmin-m-652917231/",
  },
];


// Map over the teamMembers array to render each member
const TeamSection = () => (
  <section className="bg-black text-white py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-member bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#A5FF7E] to-[#00A8C6] opacity-80 rounded-full"></div>
              <NavLink to={member.linkedin}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
              </NavLink>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">
              {member.name}
            </h3>
            <p className="text-gray-400 text-center mb-4">{member.role}</p>
            <p className="text-sm text-gray-300 text-center">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;