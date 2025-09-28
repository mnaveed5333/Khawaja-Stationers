// components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/WhatsApp Image 2025-09-28 at 12.49.36_cd21fb96.jpg"
              alt="Khawaja Stationers and Stamp Chamber Logo"
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-400"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Khawaja Stationers and Stamp Chamber
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white transition-all"
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white transition-all"
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white transition-all"
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-gray-800 text-white transition-all"
                  : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-md text-sm font-medium bg-blue-700 text-white transition-all"
                  : "px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-gray-800 rounded-lg mt-2">
            <div className="flex flex-col space-y-1 px-2 pt-2">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-medium bg-gray-700 text-white"
                    : "px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-medium bg-gray-700 text-white"
                    : "px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-medium bg-gray-700 text-white"
                    : "px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-medium bg-gray-700 text-white"
                    : "px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-medium bg-blue-700 text-white"
                    : "px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
