import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaWhatsapp,
  FaFileAlt,
  FaIdCard,
  FaBook,
  FaPrint,
  FaCamera,
  FaUserTie,
  FaFileWord,
  FaClipboardList,
  FaPassport,
  FaBriefcase,
  FaExchangeAlt,
  FaNetworkWired,
  FaCar,
  FaGavel,
  FaClock,
  FaAddressCard,
  FaFlag,
  FaStamp,
  FaCertificate,
  FaShieldAlt
} from "react-icons/fa";
import { THEME } from "../theme";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const headerRef = useRef(null);
  const attestationRef = useRef(null);
  const composingRef = useRef(null);
  const servicesRef = useRef(null);
  const containerRef = useRef(null);
  const floatingElementsRef = useRef([]);

  const attestationServices = [
    { code: "G2", service: "IBCC Attestation", cost: "Rs. 10,000", duration: "2-4 Days", icon: <FaCertificate /> },
    { code: "G1.5", service: "HEC Attestation", cost: "Rs. 20,000", duration: "3-4 Days", icon: <FaCertificate /> },
    { code: "G1.5", service: "MOFA Attestation", cost: "Rs. 4,000", duration: "2-3 Days", icon: <FaShieldAlt /> },
    { code: "G1", service: "UAE Embassy Attestation", cost: "Rs. 14,000", duration: "5 Days", icon: <FaShieldAlt /> },
    { code: "G2", service: "Saudi Embassy Attestation", cost: "Rs. 16,500", duration: "2 Days", icon: <FaShieldAlt /> },
    { code: "G2", service: "Oman Embassy Attestation", cost: "Rs. 10,500", duration: "2 Days", icon: <FaShieldAlt /> },
    { code: "G2", service: "Qatar Embassy Attestation", cost: "Rs. 14,500", duration: "3 Days", icon: <FaShieldAlt /> },
    { code: "T1.5", service: "Verification From RWP Board (Local)", cost: "Rs. 7,500", duration: "2-3 Days", icon: <FaFileAlt /> },
    { code: "T2", service: "Verification From RWP Board (Abroad)", cost: "Rs. 10,000", duration: "2-3 Days", icon: <FaFileAlt /> },
    { code: "T2", service: "Verification From Other Boards", cost: "Rs. 10,000", duration: "10-14 Days", icon: <FaFileAlt /> }
  ];

  const composingServices = [
    { title: "English Composing & Typing", description: "Professional English document composition and typing services.", icon: <FaFileWord /> },
    { title: "Urdu Composing & Typing", description: "Expert Urdu document composition and typing for official needs.", icon: <FaFileWord /> },
    { title: "School Papers Composing", description: "School assignment and paper composition in English and Urdu.", icon: <FaBook /> },
    { title: "Application Composing", description: "Application forms, letters, and various document composition.", icon: <FaClipboardList /> }
  ];

  const services = [
    { title: "A3/A4 Stamp Paper", description: "Authentic stamp paper for legal documents.", icon: <FaFileAlt size={36} /> },
    { title: "Chamber PVC Card", description: "Professional PVC chamber cards for ID.", icon: <FaIdCard size={36} /> },
    { title: "Spiral Stapler", description: "High-quality spiral binding services.", icon: <FaBook size={36} /> },
    { title: "Color Printing", description: "Vibrant printing for brochures and photos.", icon: <FaPrint size={36} /> },
    { title: "Scanning Services", description: "Fast and accurate document scanning.", icon: <FaCamera size={36} /> },
    { title: "Professional English CV", description: "Expert CV writing and formatting.", icon: <FaUserTie size={36} /> },
    { title: "Composing Services", description: "Professional document composition.", icon: <FaFileWord size={36} /> },
    { title: "Admission Form", description: "Admission form preparation and help.", icon: <FaClipboardList size={36} /> },
    { title: "Passport Services", description: "Full passport application & renewal.", icon: <FaPassport size={36} /> },
    { title: "Job Application", description: "Professional job application help.", icon: <FaBriefcase size={36} /> },
    { title: "Transfer Services", description: "Document transfer and certification.", icon: <FaExchangeAlt size={36} /> },
    { title: "E-Nadra Services", description: "Online NADRA services and CNIC.", icon: <FaNetworkWired size={36} /> },
    { title: "Motor Vehicle Documents", description: "Vehicle registration services.", icon: <FaCar size={36} /> },
    { title: "Notary Oath", description: "Notary services for oaths and affidavits.", icon: <FaGavel size={36} /> },
    { title: "15 Days Service", description: "Express 15-day turnaround.", icon: <FaClock size={36} /> },
    { title: "Visiting Card", description: "Premium visiting card printing.", icon: <FaAddressCard size={36} /> },
    { title: "Panaflex Printing", description: "High-quality panaflex banner printing.", icon: <FaFlag size={36} /> },
    { title: "Rubber Stamp", description: "Custom rubber stamp creation.", icon: <FaStamp size={36} /> },
    { title: "General Printing", description: "All-purpose printing solutions.", icon: <FaPrint size={36} /> }
  ];

  // Add floating elements to array
  const addToFloatingElements = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923455110345?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Extraordinary GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background floating elements
      floatingElementsRef.current.forEach((el, index) => {
        gsap.to(el, {
          y: () => gsap.utils.random(-20, 20),
          x: () => gsap.utils.random(-15, 15),
          rotation: () => gsap.utils.random(-8, 8),
          duration: () => gsap.utils.random(3, 6),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.3
        });
      });

      // Header animation
      gsap.fromTo(headerRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotationX: -20,
          filter: "blur(8px)"
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "elastic.out(1, 0.4)"
        }
      );

      // Attestation section animation
      gsap.fromTo(".attestation-section",
        {
          x: -100,
          opacity: 0,
          scale: 0.95,
          rotationY: -15,
          filter: "blur(4px)"
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: attestationRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Table animation
      gsap.fromTo(".attestation-table",
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotationX: -30
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: attestationRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Table rows stagger animation
      gsap.fromTo(".table-row",
        {
          y: 40,
          opacity: 0,
          scale: 0.85,
          rotationY: -20
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.5,
          stagger: {
            each: 0.06,
            from: "start"
          },
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: attestationRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Composing section animation
      gsap.fromTo(".composing-section",
        {
          x: 100,
          opacity: 0,
          scale: 0.95,
          rotationY: 15,
          filter: "blur(4px)"
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: composingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Composing cards animation
      gsap.fromTo(".composing-card",
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
          rotationY: -30,
          z: -80
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.7,
          stagger: {
            each: 0.12,
            from: "start"
          },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: composingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services section animation
      gsap.fromTo(".services-section",
        {
          y: 80,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Service cards animation
      gsap.fromTo(".service-card",
        {
          y: 100,
          opacity: 0,
          scale: 0.7,
          rotationX: -45,
          rotationY: -20,
          z: -100
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          z: 0,
          duration: 0.6,
          stagger: {
            each: 0.04,
            from: "start",
            grid: "auto"
          },
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced hover effects for service cards
      gsap.utils.toArray(".service-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -12,
            scale: 1.05,
            rotationY: 8,
            rotationX: 5,
            boxShadow: `0 20px 40px ${THEME.accent}30`,
            duration: 0.4,
            ease: "power2.out"
          });

          const icon = card.querySelector(".service-icon");
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              y: -3,
              duration: 0.5,
              ease: "back.out(1.6)"
            });
          }

          const button = card.querySelector(".service-button");
          if (button) {
            gsap.to(button, {
              scale: 1.08,
              y: -2,
              boxShadow: `0 8px 20px ${THEME.accent}30`,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out"
          });

          const icon = card.querySelector(".service-icon");
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }

          const button = card.querySelector(".service-button");
          if (button) {
            gsap.to(button, {
              scale: 1,
              y: 0,
              boxShadow: "none",
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      });

      // Table row hover effects
      gsap.utils.toArray(".table-row").forEach(row => {
        row.addEventListener("mouseenter", () => {
          gsap.to(row, {
            scale: 1.01,
            y: -2,
            background: `${THEME.surface2}60`,
            duration: 0.2,
            ease: "power2.out"
          });

          const button = row.querySelector(".table-button");
          if (button) {
            gsap.to(button, {
              scale: 1.05,
              y: -1,
              boxShadow: `0 6px 15px ${THEME.accent}25`,
              duration: 0.2,
              ease: "power2.out"
            });
          }
        });

        row.addEventListener("mouseleave", () => {
          gsap.to(row, {
            scale: 1,
            y: 0,
            background: "transparent",
            duration: 0.2,
            ease: "power2.out"
          });

          const button = row.querySelector(".table-button");
          if (button) {
            gsap.to(button, {
              scale: 1,
              y: 0,
              boxShadow: "none",
              duration: 0.2,
              ease: "power2.out"
            });
          }
        });
      });

      // Composing card hover effects
      gsap.utils.toArray(".composing-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            rotationY: 8,
            boxShadow: `0 15px 30px ${THEME.accent}25`,
            duration: 0.3,
            ease: "power2.out"
          });

          const icon = card.querySelector(".composing-icon");
          if (icon) {
            gsap.to(icon, {
              scale: 1.15,
              rotation: 180,
              duration: 0.4,
              ease: "back.out(1.6)"
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          });

          const icon = card.querySelector(".composing-icon");
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      });

      // Continuous floating animation
      gsap.to(".floating-service", {
        y: -15,
        rotation: 6,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="pt-22 relative overflow-hidden" 
      style={{ background: `linear-gradient(135deg, ${THEME.bg} 0%, ${THEME.surface} 100%)`, color: THEME.text }}
    >
      {/* Animated Background Elements */}
      <div 
        ref={el => addToFloatingElements(el)}
        className="floating-service absolute top-16 left-8 w-3 h-3 rounded-full opacity-20"
        style={{ background: THEME.accent }}
      ></div>
      <div 
        ref={el => addToFloatingElements(el)}
        className="floating-service absolute top-1/3 right-16 w-2 h-2 rounded-full opacity-15"
        style={{ background: THEME.accent }}
      ></div>
      <div 
        ref={el => addToFloatingElements(el)}
        className="floating-service absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full opacity-10"
        style={{ background: THEME.accent }}
      ></div>

      <div className="container mx-auto px-4 pb-20 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3" style={{ color: THEME.accent }}>
            Our Services
          </h1>
         
          <p className="text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: THEME.muted }}>
            Since 1990, we've been providing comprehensive stationery and documentation services
            to meet all your needs with excellence and reliability.
          </p>
        </div>

        {/* Attestation Table */}
        <section ref={attestationRef} className="mb-16 attestation-section">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Attestation Services</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: THEME.muted }}>
              Professional document attestation services for all your official requirements
            </p>
          </div>

          <div className="attestation-table rounded-xl overflow-hidden shadow-lg" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
            <table className="w-full text-sm">
              <thead style={{ background: THEME.surface2, color: THEME.text }}>
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Code</th>
                  <th className="px-6 py-4 text-left font-bold">Service</th>
                  <th className="px-6 py-4 text-left font-bold">Cost</th>
                  <th className="px-6 py-4 text-left font-bold">Duration</th>
                  <th className="px-6 py-4 text-center font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {attestationServices.map((item, index) => (
                  <tr 
                    key={index} 
                    className="table-row border-b group relative overflow-hidden"
                    style={{ borderColor: THEME.border }}
                  >
                    <td className="px-6 py-4 font-semibold" style={{ color: THEME.accent }}>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.icon}</span>
                        {item.code}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold" style={{ color: THEME.text }}>{item.service}</td>
                    <td className="px-6 py-4 font-bold text-base" style={{ color: THEME.accent }}>{item.cost}</td>
                    <td className="px-6 py-4 text-sm" style={{ color: THEME.muted }}>{item.duration}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openWhatsApp(
                          `*Attestation Service Inquiry*\n\nService: ${item.service}\nCode: ${item.code}\nCost: ${item.cost}\nDuration: ${item.duration}`
                        )}
                        className="table-button px-4 py-3 rounded-lg font-semibold flex items-center gap-2 text-sm transition-all duration-200"
                        style={{ background: THEME.accent, color: THEME.bg }}
                      >
                        <FaWhatsapp className="text-base" /> Request
                      </button>
                    </td>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Composing Services */}
        <section ref={composingRef} className="mb-16 composing-section">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Composing Services</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: THEME.muted }}>
              Professional document composition and typing services in multiple languages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {composingServices.map((service, index) => (
              <div 
                key={index} 
                className="composing-card rounded-xl p-6 text-center group relative overflow-hidden"
                style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
              >
                <div className="relative z-10">
                  <div className="composing-icon p-3 rounded-lg mb-4 mx-auto w-fit" style={{ background: `${THEME.accent}15`, color: THEME.accent }}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: THEME.text }}>{service.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: THEME.muted }}>{service.description}</p>
                  <button
                    onClick={() => openWhatsApp(`*Composing Service Inquiry*\n\nService: ${service.title}\n\nDescription: ${service.description}`)}
                    className="service-button w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm transition-all duration-200"
                    style={{ background: THEME.accent, color: THEME.bg }}
                  >
                    <FaWhatsapp className="text-base" /> Request Service
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="services-section">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">All Services</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: THEME.muted }}>
              Comprehensive range of stationery and documentation services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card rounded-xl p-6 text-center group relative overflow-hidden"
                style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
              >
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="service-icon p-4 rounded-lg transition-all duration-200" style={{ background: `${THEME.accent}15`, color: THEME.accent }}>
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-3" style={{ color: THEME.text }}>{service.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: THEME.muted }}>{service.description}</p>
                  <button
                    onClick={() => openWhatsApp(`*Service Inquiry*\n\nService: ${service.title}\n\nDescription: ${service.description}`)}
                    className="service-button w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm transition-all duration-200"
                    style={{ background: THEME.accent, color: THEME.bg }}
                  >
                    <FaWhatsapp className="text-base" /> Request
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;