// pages/Location.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaDirections, FaBus, FaSubway, FaTaxi, FaPhone, FaClock, FaStar, FaPaperPlane, FaHeart, FaEnvelope } from 'react-icons/fa';
import { THEME } from '../theme';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Location = () => {
  const headerRef = useRef(null);
  const addressRef = useRef(null);
  const mapRef = useRef(null);
  const transportRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Extraordinary header animation with multiple effects
      gsap.fromTo(headerRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.7,
          rotationX: -30,
          skewX: 15,
          filter: "blur(10px)"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          skewX: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "elastic.out(1, 0.3)"
        }
      );

      // Address section with advanced slide animation
      gsap.fromTo(".location-address",
        {
          x: -150,
          y: 50,
          opacity: 0,
          scale: 0.9,
          rotationY: -25,
          transformOrigin: "left center",
          filter: "blur(5px)"
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: addressRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Map section with bounce effect
      gsap.fromTo(".location-map",
        {
          x: 150,
          y: -30,
          opacity: 0,
          scale: 0.9,
          rotationY: 25,
          transformOrigin: "right center",
          filter: "blur(5px)"
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Transportation cards with extraordinary stagger and effects
      gsap.fromTo(".transport-card",
        {
          y: 80,
          opacity: 0,
          scale: 0.7,
          rotationX: -45,
          transformOrigin: "center bottom",
          filter: "blur(8px)"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: {
            each: 0.15,
            from: "start",
            grid: "auto"
          },
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: transportRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Business hours animation
      gsap.fromTo(".business-hours .location-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotationY: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".business-hours",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced hover effects with extraordinary animations
      gsap.utils.toArray(".location-card, .transport-card").forEach(card => {
        const hoverAnimation = gsap.to(card, {
          y: -20,
          scale: 1.08,
          rotationY: 8,
          boxShadow: `0 30px 60px rgba(6, 182, 212, 0.4)`,
          duration: 0.5,
          ease: "power2.out",
          paused: true
        });

        card.addEventListener("mouseenter", () => hoverAnimation.play());
        card.addEventListener("mouseleave", () => hoverAnimation.reverse());
      });

      // Button hover effects
      gsap.utils.toArray(".location-button").forEach(button => {
        const hoverAnimation = gsap.to(button, {
          scale: 1.05,
          y: -3,
          boxShadow: `0 15px 35px rgba(239, 68, 68, 0.4)`,
          duration: 0.3,
          ease: "power2.out",
          paused: true
        });

        button.addEventListener("mouseenter", () => hoverAnimation.play());
        button.addEventListener("mouseleave", () => hoverAnimation.reverse());
      });

      // Icon floating animation with enhanced effects
      gsap.to(".location-icon", {
        y: -12,
        rotation: 8,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: THEME.bg, color: THEME.text }} className="pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: THEME.accent }}>
            Our Location
          </h1>
          <div className="w-24 h-1 mx-auto mb-8" style={{ background: THEME.accent }}></div>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: THEME.muted }}>
            Find us easily in the heart of Rawalpindi. Conveniently located with excellent transportation access.
          </p>
        </div>
      
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Address Section */}
          <div ref={addressRef} className="location-address">
            <h2 className="text-3xl font-bold mb-8" style={{ color: THEME.text }}>
              Our Branches
            </h2>

            {/* Stadium Road Branch */}
            <div className="location-card rounded-2xl p-6 mb-6 transition-all duration-300"
                 style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
              <div className="flex items-start mb-4">
                <div className="location-icon p-3 rounded-xl mr-4" style={{ background: THEME.accent, color: THEME.bg }}>
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: THEME.text }}>
                    Stadium Road Branch
                  </h3>
                  <p className="mb-1" style={{ color: THEME.muted }}>
                    Shop No. 5, St. No. 8, Stadium Road
                  </p>
                  <p className="mb-2" style={{ color: THEME.muted }}>
                    Rawalpindi 46000
                  </p>
                  <div className="flex items-center text-sm" style={{ color: THEME.accent }}>
                    <FaPhone className="mr-2" />
                    +92 345 5110345
                  </div>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/Vc8tptv7upuzJGDs6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "#EF4444", color: THEME.bg }}
              >
                View on Google Maps
              </a>
            </div>

            {/* Tulsa Road Branch */}
            <div className="location-card rounded-2xl p-6 mb-6 transition-all duration-300"
                 style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
              <div className="flex items-start mb-4">
                <div className="location-icon p-3 rounded-xl mr-4" style={{ background: THEME.accent, color: THEME.bg }}>
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: THEME.text }}>
                    Tulsa Road Branch
                  </h3>
                  <p className="mb-1" style={{ color: THEME.muted }}>
                    Shop No. 1, Main Tulsa Road
                  </p>
                  <p className="mb-2" style={{ color: THEME.muted }}>
                    Main Tulsa, Rawalpindi
                  </p>
                  <div className="flex items-center text-sm" style={{ color: THEME.accent }}>
                    <FaPhone className="mr-2" />
                    +92 300 5005364
                  </div>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/eitApW6ECGJAZP66A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "#EF4444", color: THEME.bg }}
              >
                View on Google Maps
              </a>
            </div>

            {/* Landmarks */}
            <div className="rounded-2xl p-6" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: THEME.text }}>Nearby Landmarks</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="location-icon p-2 rounded-lg mr-4" style={{ background: THEME.accent, color: THEME.bg }}>
                    <FaStar className="text-sm" />
                  </div>
                  <span style={{ color: THEME.muted }}>Near Rawalpindi Railway Station</span>
                </li>
                <li className="flex items-center">
                  <div className="location-icon p-2 rounded-lg mr-4" style={{ background: THEME.accent, color: THEME.bg }}>
                    <FaStar className="text-sm" />
                  </div>
                  <span style={{ color: THEME.muted }}>Close to major shopping areas</span>
                </li>
                <li className="flex items-center">
                  <div className="location-icon p-2 rounded-lg mr-4" style={{ background: THEME.accent, color: THEME.bg }}>
                    <FaStar className="text-sm" />
                  </div>
                  <span style={{ color: THEME.muted }}>Easy access to public transport</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div ref={mapRef} className="location-map">
            <h2 className="text-3xl font-bold mb-8" style={{ color: THEME.text }}>
              Interactive Map
            </h2>
            <div className="rounded-2xl h-96 flex items-center justify-center relative overflow-hidden"
                 style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ background: THEME.accent }}></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full" style={{ background: THEME.surface }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full" style={{ background: THEME.accent }}></div>
              </div>

              <div className="text-center relative z-10">
                <div className="location-icon p-6 rounded-2xl mb-6 mx-auto w-fit" style={{ background: THEME.accent, color: THEME.bg }}>
                  <FaMapMarkerAlt className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: THEME.text }}>Find Us Here</h3>
                <p className="mb-6 max-w-sm" style={{ color: THEME.muted }}>
                  Conveniently located in the heart of Rawalpindi with easy access from all major routes
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://maps.app.goo.gl/Vc8tptv7upuzJGDs6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    style={{ background: THEME.accent, color: THEME.bg }}
                  >
                    Stadium Road Branch
                  </a>
                  <a
                    href="https://maps.app.goo.gl/eitApW6ECGJAZP66A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    style={{ background: "#EF4444", color: THEME.bg }}
                  >
                    Tulsa Road Branch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Section */}
        <div ref={transportRef} className="rounded-2xl p-8 mb-16" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: THEME.text }}>
            Transportation Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transport-card text-center p-6 rounded-xl transition-all duration-300"
                 style={{ background: THEME.bg, border: `1px solid ${THEME.border}` }}>
              <div className="location-icon p-4 rounded-2xl mb-6 mx-auto w-fit" style={{ background: "#10B981", color: THEME.bg }}>
                <FaBus className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: THEME.text }}>Bus Service</h3>
              <p style={{ color: THEME.muted }}>
                Multiple bus routes with stops within 5 minutes walking distance. Connections to all parts of Rawalpindi and Islamabad.
              </p>
            </div>

            <div className="transport-card text-center p-6 rounded-xl transition-all duration-300"
                 style={{ background: THEME.bg, border: `1px solid ${THEME.border}` }}>
              <div className="location-icon p-4 rounded-2xl mb-6 mx-auto w-fit" style={{ background: "#3B82F6", color: THEME.bg }}>
                <FaSubway className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: THEME.text }}>Metro & Trains</h3>
              <p style={{ color: THEME.muted }}>
                Rawalpindi Railway Station is just 2km away. Metro bus service and auto-rickshaws available 24/7.
              </p>
            </div>

            <div className="transport-card text-center p-6 rounded-xl transition-all duration-300"
                 style={{ background: THEME.bg, border: `1px solid ${THEME.border}` }}>
              <div className="location-icon p-4 rounded-2xl mb-6 mx-auto w-fit" style={{ background: "#F59E0B", color: THEME.bg }}>
                <FaTaxi className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: THEME.text }}>Taxi & Rideshare</h3>
              <p style={{ color: THEME.muted }}>
                Uber, Careem, and local taxi services available throughout the day. Auto-rickshaws for short distances.
              </p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="text-center rounded-2xl p-8" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
          <h2 className="text-3xl font-bold mb-8" style={{ color: THEME.text }}>Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl" style={{ background: THEME.bg }}>
              <div className="flex items-center justify-center mb-3">
                <FaClock className="text-2xl mr-3" style={{ color: THEME.accent }} />
                <span className="font-bold" style={{ color: THEME.text }}>Monday - Friday</span>
              </div>
              <p className="text-lg font-semibold" style={{ color: THEME.accent }}>9:00 AM - 9:00 PM</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: THEME.bg }}>
              <div className="flex items-center justify-center mb-3">
                <FaClock className="text-2xl mr-3" style={{ color: THEME.accent }} />
                <span className="font-bold" style={{ color: THEME.text }}>Saturday</span>
              </div>
              <p className="text-lg font-semibold" style={{ color: THEME.accent }}>10:00 AM - 8:00 PM</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: THEME.bg }}>
              <div className="flex items-center justify-center mb-3">
                <FaClock className="text-2xl mr-3" style={{ color: THEME.accent }} />
                <span className="font-bold" style={{ color: THEME.text }}>Sunday</span>
              </div>
              <p className="text-lg font-semibold" style={{ color: THEME.accent }}>11:00 AM - 7:00 PM</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: THEME.bg }}>
              <div className="flex items-center justify-center mb-3">
                <FaClock className="text-2xl mr-3" style={{ color: THEME.accent }} />
                <span className="font-bold" style={{ color: THEME.text }}>Public Holidays</span>
              </div>
              <p className="text-lg font-semibold" style={{ color: THEME.accent }}>12:00 PM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;