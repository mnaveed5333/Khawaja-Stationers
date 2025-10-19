// components/Footer.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaArrowUp, 
  FaMapMarkerAlt, FaPhone, FaHeart, FaPaperPlane 
} from "react-icons/fa";
import { THEME } from "../theme";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 90%" }
        }
      );

      gsap.fromTo(
        brandRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: footerRef.current, start: "top 85%" }
        }
      );

      gsap.fromTo(
        ".footer-link",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(
        ".location-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: footerRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo(
        ".social-icon",
        { scale: 0, opacity: 0, rotation: -180 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: footerRef.current, start: "top 80%" }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ background: THEME.bg, color: THEME.text }} className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div ref={brandRef}>
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-2xl mr-4" style={{ background: THEME.accent, color: THEME.bg }}>
                <FaPaperPlane className="text-2xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold" style={{ color: THEME.accent }}>
                  Khawaja Stationers
                </h3>
                <div className="w-16 h-1 mt-2 rounded-full" style={{ background: THEME.accent }}></div>
              </div>
            </div>
            <p className="text-lg mb-6" style={{ color: THEME.muted }}>
              Quality stationery & professional printing since 1990.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon p-3 rounded-xl" style={{ background: THEME.surface, color: THEME.accent }}>
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon p-3 rounded-xl" style={{ background: THEME.surface, color: THEME.accent }}>
                <FaTwitter />
              </a>
              <a href="#" className="social-icon p-3 rounded-xl" style={{ background: THEME.surface, color: THEME.accent }}>
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Links */}
          <div ref={linksRef}>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="footer-link block py-2 px-3 rounded-md" style={{ background: THEME.surface, color: THEME.muted }}>Home</Link></li>
              <li><Link to="/about" className="footer-link block py-2 px-3 rounded-md" style={{ background: THEME.surface, color: THEME.muted }}>About</Link></li>
              <li><Link to="/products" className="footer-link block py-2 px-3 rounded-md" style={{ background: THEME.surface, color: THEME.muted }}>Products</Link></li>
              <li><Link to="/services" className="footer-link block py-2 px-3 rounded-md" style={{ background: THEME.surface, color: THEME.muted }}>Services</Link></li>
              <li><Link to="/contact" className="footer-link block py-2 px-3 rounded-md" style={{ background: THEME.surface, color: THEME.muted }}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div ref={contactRef}>
            <h4 className="text-xl font-bold mb-4">Our Branches</h4>
            <div className="space-y-4">
              <div className="location-card p-4 rounded-xl" style={{ background: THEME.surface }}>
                <div className="flex gap-3 mb-3">
                  <FaMapMarkerAlt className="text-lg" style={{ color: THEME.accent }} />
                  <div>
                    <div className="font-semibold">Stadium Road Branch</div>
                    <div className="text-sm text-gray-400">Shop 5, St. No. 8, Rawalpindi</div>
                    <div className="text-sm font-medium" style={{ color: THEME.accent }}>+92 345 5110345</div>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/Vc8tptv7upuzJGDs6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 rounded-lg font-semibold"
                  style={{ background: THEME.accent, color: THEME.bg }}
                >
                  <FaMapMarkerAlt className="inline mr-2" /> View Map
                </a>
              </div>

              <div className="location-card p-4 rounded-xl" style={{ background: THEME.surface }}>
                <div className="flex gap-3 mb-3">
                  <FaMapMarkerAlt className="text-lg" style={{ color: THEME.accent }} />
                  <div>
                    <div className="font-semibold">Tulsa Road Branch</div>
                    <div className="text-sm text-gray-400">Shop 1, Main Tulsa, Rawalpindi</div>
                    <div className="text-sm font-medium" style={{ color: THEME.accent }}>+92 300 5005364</div>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/eitApW6ECGJAZP66A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 rounded-lg font-semibold"
                  style={{ background: THEME.accent, color: THEME.bg }}
                >
                  <FaMapMarkerAlt className="inline mr-2" /> View Map
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm" style={{ borderColor: THEME.border, color: THEME.muted }}>
          <div className="flex items-center mb-4 md:mb-0">
            Made with <FaHeart className="text-red-500 mx-1 animate-pulse" /> © 2025 Khawaja Stationers
          </div>
          <div className="flex gap-4">
            <div className="flex items-center"><FaPhone className="mr-2" style={{ color: THEME.accent }} />+92 340 5542097</div>
            <div className="flex items-center"><FaMapMarkerAlt className="mr-2" style={{ color: THEME.accent }} />Rawalpindi, Pakistan</div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
     
    </footer>
  );
};

export default Footer;
