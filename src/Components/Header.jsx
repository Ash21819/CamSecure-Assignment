import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">CamSecure</div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-blue-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="block py-2 text-lg hover:text-blue-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;