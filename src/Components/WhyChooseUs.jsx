import React from "react";
import Cards from "./Cards.jsx";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaTruck,
  FaDollarSign,
} from "react-icons/fa";
import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
} from "../assets/img/index.js";

const Benefit = ({ icon, text }) => (
  <div className="p-4 bg-white rounded-lg shadow hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
    <div className="text-3xl text-green-500 mb-2">{icon}</div>
    <p className="font-semibold">{text}</p>
  </div>
);

const WhyChooseUs = () => (
  <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
    <section className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Benefit icon={<FaCheckCircle />} text="24/7 Support" />
        <Benefit icon={<FaShieldAlt />} text="Certified Technicians" />
        <Benefit icon={<FaTruck />} text="Quick Installation" />
        <Benefit icon={<FaDollarSign />} text="Affordable Pricing" />
      </div>
      <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto">
        Founded in 2015, CamSecure has evolved into a leader in security
        solutions, driven by our mission to provide reliable and affordable
        systems. Our core values of integrity, innovation, and excellence guide
        us in every project.
      </p>
    </section>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
      <Cards
        img={card1}
        heading="Expert CCTV Installation"
        text="Our certified technicians provide expert CCTV installation, ensuring your security cameras are set up correctly and efficiently for optimal performance."
      />
      <Cards
        img={card2}
        heading="Reliable 24/7 Monitoring"
        text="We offer round-the-clock support, ensuring your CCTV system is always up and running, even during peak hours."
      />
      <Cards
        img={card3}
        heading="Comprehensive Maintenance"
        text="We provide regular checkups and full maintenance support to keep your security system running optimally."
      />
      <Cards
        img={card4}
        heading="Advanced Security Solutions"
        text="Explore the latest in surveillance tech with innovative features tailored to your needs."
      />
      <Cards
        img={card5}
        heading="Certified Installers"
        text="Benefit from expert camera placement and reliable performance through professional installation."
      />
      <Cards
        img={card6}
        heading="24/7 Peace of Mind"
        text="Get real-time alerts and quick incident response with our continuous monitoring services."
      />
      <Cards
        img={card7}
        heading="Reliable Maintenance"
        text="CamSecure ensures your system runs smoothly with routine maintenance and expert troubleshooting."
      />
      <Cards
        img={card8}
        heading="Dedicated Support Team"
        text="Our knowledgeable team is always ready to assist and ensure your system works perfectly."
      />
    </section>
  </div>
);

export default WhyChooseUs;