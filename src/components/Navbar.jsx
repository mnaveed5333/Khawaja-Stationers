import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { THEME } from '../theme';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-opacity-95 backdrop-blur-lg shadow-2xl' : 'bg-opacity-90 backdrop-blur-sm'}`}
      style={{
        background: isScrolled ? `${THEME.bg}F2` : `${THEME.bg}E6`,
        borderBottom: isScrolled ? `1px solid ${THEME.border}` : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}>
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/WhatsApp Image 2025-09-28 at 12.49.36_cd21fb96.jpg"
              alt="Khawaja Stationers Logo"
              className={`rounded-full object-cover border-2 transition-all duration-500 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
              style={{ borderColor: THEME.accent }}
            />
            <span
              className={`font-bold transition-all duration-500 ${isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}
              style={{ color: THEME.accent }}
            >
              <span className="hidden sm:inline">Khawaja Stationers</span>
              <span className="sm:hidden">Khawaja Books</span>
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all ${isActive ? 'scale-105' : 'hover:scale-105'}`
                }
                style={({ isActive }) => ({
                  background: isActive ? THEME.accent : 'transparent',
                  color: isActive ? THEME.bg : THEME.text
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop - CTA (optional) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md font-semibold transition-transform"
              style={{
                background: THEME.accent,
                color: THEME.bg
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
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
          <div
            className="md:hidden pb-4 rounded-lg mt-2 transition-all duration-300"
            style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
          >
            <div className="flex flex-col space-y-1 px-2 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base font-medium transition-all ${isActive ? '' : 'hover:translate-x-2'}`
                  }
                  style={({ isActive }) => ({
                    background: isActive ? THEME.accent : 'transparent',
                    color: isActive ? THEME.bg : THEME.text
                  })}
                >
                  {item.label}
                </NavLink>
              ))}
              {/* Mobile Contact Button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium transition-all hover:translate-x-2 mt-2"
                style={{
                  background: THEME.accent,
                  color: THEME.bg
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
