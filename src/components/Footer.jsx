// components/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Khawaja Stationers and Stamp Chamber
            </h3>
            <p className="mb-6 text-gray-400 max-w-md">
              Providing comprehensive stationery, printing, and documentation services since 1990. 
              Your trusted partner for all official and educational needs in Rawalpindi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition">
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            
              <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Branches
            </h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-400 mt-1" />
                  <span className="text-gray-400">
                    <strong>Stadium Road Branch:</strong> Shop No. 5, St. No. 8, Stadium Road, Rawalpindi 46000<br />
                    <strong>Phone:</strong> +92 345 5110345
                  </span>
                </div>
                <a
                  href="https://maps.app.goo.gl/Vc8tptv7upuzJGDs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-red-700 transition text-center text-sm"
                >
                  View Map
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-400 mt-1" />
                  <span className="text-gray-400">
                    <strong>Tulsa Road Branch:</strong> Shop No. 1, Main Tulsa Road, Main Tulsa, Rawalpindi<br />
                    <strong>Phone:</strong> +92 300 5005364
                  </span>
                </div>
                <a
                  href="https://maps.app.goo.gl/eitApW6ECGJAZP66A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-red-700 transition text-center text-sm"
                >
                  View Map
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-400 mt-1" />
                  <span className="text-gray-400">
                    <strong>Stadium Road Stamp Paper:</strong> Stadium Road, Rawalpindi<br />
                    <strong>Phone:</strong> +92 345 5110345
                  </span>
                </div>
                <a
                  href="https://maps.app.goo.gl/oPH461R6erpW1FyA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-red-700 transition text-center text-sm"
                >
                  View Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Apexium. All rights reserved. | +92 340 5542097
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;