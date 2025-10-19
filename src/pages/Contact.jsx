import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaQuestionCircle,
  FaBuilding,
  FaCalendarAlt
} from "react-icons/fa";
import { THEME } from '../theme';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const formRef = useRef(null);
  const locationsRef = useRef(null);
  const headerRef = useRef(null);
  const hoursRef = useRef(null);
  const faqRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = "Invalid phone number";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const whatsappNumber = "923455110345";
    const message = `*Contact Form Submission from Khawaja Stationers and Stamp Chamber*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}\n\nPlease reply at your earliest convenience.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    // Reset form
    setFormData({ name: "", phone: "", subject: "", message: "" });
  };

  const locations = [
    {
      name: "Main Branch",
      address: "Stadium Road, Rawalpindi",
      phone: "+92 345 5110345",
      map: "https://maps.app.goo.gl/Vc8tptv7upuzJGDs6",
    },
    {
      name: "Tulsa Road Branch",
      address: "Shop No. 1, Main Tulsa Road, Main Tulsa, Rawalpindi",
      phone: "+92 300 5005364",
      map: "https://maps.app.goo.gl/eitApW6ECGJAZP66A",
    },
    {
      name: "Stadium Road Stamp Paper",
      address: "Stadium Road, Rawalpindi",
      phone: "+92 345 5110345",
      map: "https://maps.app.goo.gl/oPH461R6erpW1FyA8",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Extraordinary header animation with multiple effects
      gsap.fromTo(".contact-header",
        {
          y: 100,
          opacity: 0,
          scale: 0.7,
          rotationX: -30,
          skewX: 10,
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

      // Form animation with advanced effects
      gsap.fromTo(".contact-form",
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
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Locations animation with bounce effect
      gsap.fromTo(".contact-locations",
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
            trigger: locationsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Location cards with extraordinary stagger and effects
      gsap.fromTo(".location-card",
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
            trigger: locationsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Form inputs with advanced hover effects
      gsap.utils.toArray("input, textarea, select").forEach(input => {
        const originalBg = input.style.background;
        const originalBorder = input.style.border;

        input.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.03,
            y: -2,
            boxShadow: `0 0 0 4px ${THEME.accent}40, 0 10px 25px ${THEME.accent}20`,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        input.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            y: 0,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });

      // Button hover effects with extraordinary animations
      gsap.utils.toArray(".contact-button").forEach(button => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            y: -3,
            boxShadow: `0 15px 35px ${THEME.accent}40`,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            boxShadow: `0 5px 15px ${THEME.accent}20`,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Icon floating animations
      gsap.to(".contact-icon", {
        y: -10,
        rotation: 5,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: THEME.bg, color: THEME.text }} className="pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          
          <h1 className="contact-header text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: THEME.accent }}>
            Get In Touch
          </h1>
          <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: THEME.accent }}></div>
          <p className="text-base max-w-3xl mx-auto leading-relaxed" style={{ color: THEME.muted }}>
            Ready to serve your stationery and documentation needs. Reach out to us for personalized assistance.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div ref={formRef} className="contact-form rounded-2xl p-8 md:p-12 shadow-xl" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
            <div className="text-center mb-8">
              <div className="contact-icon p-4 rounded-2xl mb-4 mx-auto w-fit" style={{ background: THEME.accent, color: THEME.bg }}>
                <FaUser className="text-2xl" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold" style={{ color: THEME.text }}>
                Send Us a Message
              </h2>
              <p className="text-xs mt-2" style={{ color: THEME.muted }}>We'll respond within minutes via WhatsApp</p>
            </div>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="text-center mb-6 p-4 rounded-xl" style={{ background: THEME.surface2, border: `1px solid ${THEME.border}` }}>
                <FaCheckCircle className="text-2xl mb-2 mx-auto" style={{ color: "#10B981" }} />
                <p className="text-sm font-medium" style={{ color: THEME.muted }}>Instant WhatsApp response guaranteed!</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all ${errors.name ? 'border-red-500' : ''}`}
                    style={{
                      background: THEME.surface2,
                      border: `1px solid ${errors.name ? '#ef4444' : THEME.border}`,
                      color: THEME.text
                    }}
                    placeholder="Your name"
                    aria-describedby="name-error"
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all ${errors.phone ? 'border-red-500' : ''}`}
                    style={{
                      background: THEME.surface2,
                      border: `1px solid ${errors.phone ? '#ef4444' : THEME.border}`,
                      color: THEME.text
                    }}
                    placeholder="Your phone (e.g., +92 3xx xxxxxxx)"
                    aria-describedby="phone-error"
                  />
                  {errors.phone && <p id="phone-error" className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all ${errors.subject ? 'border-red-500' : ''}`}
                  style={{
                    background: THEME.surface2,
                    border: `1px solid ${errors.subject ? '#ef4444' : THEME.border}`,
                    color: THEME.text
                  }}
                  aria-describedby="subject-error"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="custom-request">Custom Request</option>
                  <option value="attestation-service">Attestation Service</option>
                  <option value="printing-service">Printing Service</option>
                  <option value="stamp-paper">Stamp Paper</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p id="subject-error" className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all resize-vertical ${errors.message ? 'border-red-500' : ''}`}
                  style={{
                    background: THEME.surface2,
                    border: `1px solid ${errors.message ? '#ef4444' : THEME.border}`,
                    color: THEME.text
                  }}
                  placeholder="Tell us how we can help..."
                  aria-describedby="message-error"
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="contact-button w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-lg"
                style={{ background: THEME.accent, color: THEME.bg }}
              >
                <FaWhatsapp className="mr-3 text-xl" />
                Send via WhatsApp
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Your message will open in WhatsApp. We respond within minutes!
            </p>
          </div>
        </div>

        {/* Locations Section */}
        <div ref={locationsRef} className="contact-locations max-w-6xl mx-auto mt-16">
          <div className="text-center mb-12">
            <div className="contact-icon p-4 rounded-2xl mb-4 mx-auto w-fit" style={{ background: THEME.accent, color: THEME.bg }}>
              <FaMapMarkerAlt className="text-3xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: THEME.text }}>Visit Our Locations</h2>
            <p className="text-base" style={{ color: THEME.muted }}>Find us across Rawalpindi for all your stationery needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="location-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: THEME.text }}>{loc.name}</h3>
                <p className="mb-4" style={{ color: THEME.muted }}>{loc.address}</p>
                <p className="mb-4 flex items-center" style={{ color: THEME.muted }}>
                  <FaPhone className="mr-2" />
                  <a href={`tel:${loc.phone}`} className="transition-all hover:scale-105" style={{ color: THEME.accent }}>{loc.phone}</a>
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${loc.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center"
                    style={{ background: "#10B981", color: THEME.bg }}
                  >
                    <FaWhatsapp className="inline mr-2" />
                    WhatsApp
                  </a>
                  <a
                    href={loc.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-button py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center"
                    style={{ background: "#EF4444", color: THEME.bg }}
                  >
                    <FaMapMarkerAlt className="inline mr-2" />
                    View Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
