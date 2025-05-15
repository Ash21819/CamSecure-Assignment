import React from "react";
import { Link } from "react-router-dom";
import {FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="mb-2">© 2025 CCTVPro. All rights reserved.</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/services" className="hover:text-gray-400">
          Services
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contact
        </Link>
      </div>
      <div className="flex justify-center mt-4 gap-4 ">
        <FaFacebookF className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />
      </div>
    </footer>
  );
}

export default Footer;
