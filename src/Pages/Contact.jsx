import React, { useState } from "react";
import { FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6">
            Have questions about our services? Need a quote for your project?
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className="mb-4">
            <h3 className="font-bold">Address</h3>
            <p>Faridabad, Haryana, India</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Phone</h3>
            <FaPhone className="inline mr-2" />
            <p>1234567890</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Email</h3>
            <p>info@camsecure.com</p>
          </div>

          <div className="mb-4">
            <h3 className="font-bold">Hours</h3>
            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="flex  mt-4 gap-5 ">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
