// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAward, FaUsers, FaGlobe, FaClock } from "react-icons/fa";
import { THEME } from "../theme";

// Register plugin only in browser
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const rootRef = useRef(null);
  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const teamRef = useRef(null);

  const storeImage =
    "/WhatsApp Image 2025-09-28 at 15.13.27_e4727d67.jpg" ||
    "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80";

  const stats = [
    { number: "30+", label: "Years of Excellence", icon: <FaAward />, color: THEME.accent },
    { number: "10K+", label: "Happy Customers", icon: <FaUsers />, color: "#10B981" },
    { number: "50+", label: "Languages Supported", icon: <FaGlobe />, color: "#F59E0B" },
    { number: "24/7", label: "Customer Support", icon: <FaClock />, color: "#EF4444" }
  ];

  const team = [
    {
      name: "Muhammad Khawaja",
      role: "Founder & Owner",
      experience: "30+ Years Experience",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      specialty: "Stationery & Documentation Expert"
    },
    {
      name: "Ahmed Khawaja",
      role: "Store Manager",
      experience: "15+ Years Experience",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      specialty: "Customer Relations & Operations"
    },
    
    {
      name: "Hassan Sheikh",
      role: "Printing Supervisor",
      experience: "12+ Years Experience",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      specialty: "Printing & Design Services"
    }
  ];

  useEffect(() => {
    const hoverRemovers = [];
    // gsap context scoped to this component
    const ctx = gsap.context(() => {
      // Header entrance - dramatic but clean
      gsap.from(headerRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1.1,
        ease: "power3.out"
      });

      // Story section: text and image reveal (scroll)
      gsap.fromTo(
        ".story-content",
        { x: -120, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".story-image",
        { x: 120, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Features cards: stagger in with slight pop
      gsap.fromTo(
        ".feature-card",
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.16,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats cards: stagger + pop
      gsap.fromTo(
        ".stat-card",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: { each: 0.12, from: "start" },
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Team cards: slide & fade
      gsap.fromTo(
        ".team-card",
        { x: 80, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating icon subtle motion
      gsap.to(".floating-icon", {
        y: -10,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.6
      });

      // Hover effects (create single hover tween per card and clean up)
      const hoverTargets = gsap.utils.toArray(".stat-card, .team-card, .feature-card");
      hoverTargets.forEach((card) => {
        const t = gsap.to(card, {
          y: -12,
          scale: 1.03,
          boxShadow: "0 20px 50px rgba(6,182,212,0.12)",
          duration: 0.35,
          ease: "power2.out",
          paused: true
        });

        const enter = () => t.play();
        const leave = () => t.reverse();

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        // remember removers
        hoverRemovers.push(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
          t.kill();
        });
      });
    }, rootRef);

    return () => {
      // remove hover listeners & kill hover tweens
      hoverRemovers.forEach((fn) => {
        try { fn(); } catch (e) { /* ignore */ }
      });
      ctx.revert(); // kills timelines and ScrollTriggers
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        background: THEME.bg,
        minHeight: "100vh",
        color: THEME.text,
        paddingBottom: 160
      }}
      className="pt-20"
    >
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: THEME.accent }}>
            Our Story
          </h1>

          <div className="w-20 h-1 mx-auto mb-6 rounded-full" style={{ background: THEME.accent }} />

          <p className="text-base max-w-4xl mx-auto leading-relaxed" style={{ color: THEME.muted }}>
            Three decades of excellence in stationery, printing, and documentation services. Serving Rawalpindi with quality and trust since 1990.
          </p>
        </div>

        {/* Story */}
        <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="story-content">
            <h2 className="text-2xl font-bold mb-4" style={{ color: THEME.text }}>
              Our Legacy Since 1990
            </h2>

            <p className="mb-4 text-base leading-relaxed" style={{ color: THEME.muted }}>
              <strong style={{ color: THEME.accent }}>From</strong> humble beginnings in{" "}
              <strong style={{ color: THEME.text }}>1990</strong>, Khawaja Stationers and Stamp Chamber has grown into
              a cornerstone of Rawalpindi — offering stationery, printing, stamp paper and translation services to individuals,
              businesses and institutions.
            </p>

            <p className="mb-4 text-base leading-relaxed" style={{ color: THEME.muted }}>
              We provide everything from everyday supplies to premium products and authorized stamp paper services. Our translation
              team supports many languages and our printing services are built for both speed and quality.
            </p>

            <p className="text-base leading-relaxed" style={{ color: THEME.muted }}>
              Our knowledgeable team pairs modern tools with decades of experience to deliver fast, reliable and friendly service.
            </p>
          </div>

          <div className="story-image relative">
            <div
              className="absolute inset-0 rounded-xl opacity-10"
              style={{ background: `linear-gradient(135deg, ${THEME.accent}, ${THEME.surface})`, filter: "blur(12px)" }}
              aria-hidden
            />
            <img
              src={storeImage}
              onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1400&q=80")}
              alt="Khawaja Stationers storefront"
              className="rounded-xl shadow-lg relative z-10 w-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: THEME.text }}>Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-card p-8 rounded-xl text-center shadow-lg"
                style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
              >
                <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center" style={{ background: THEME.surface2 }}>
                  <span style={{ color: s.color, fontSize: '1.5rem' }}>{s.icon}</span>
                </div>
                <div className="text-2xl font-bold mb-2" style={{ color: THEME.text }}>
                  {s.number}
                </div>
                <div className="text-xs font-medium" style={{ color: THEME.muted }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: THEME.text }}>
            Why Choose Khawaja Stationers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card p-8 rounded-xl text-center shadow-lg" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
              <div className="mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ background: THEME.surface2 }}>
                <FaAward size={24} style={{ color: THEME.accent }} />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: THEME.text }}>30+ Years Experience</h3>
              <p className="text-sm leading-relaxed" style={{ color: THEME.muted }}>Decades of trusted service and deep product knowledge in stationery and documentation.</p>
            </div>

            <div className="feature-card p-8 rounded-xl text-center shadow-lg" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
              <div className="mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ background: THEME.surface2 }}>
                <FaUsers size={24} style={{ color: THEME.accent }} />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: THEME.text }}>Authorized Vendor</h3>
              <p className="text-sm leading-relaxed" style={{ color: THEME.muted }}>Official stamp paper vendor and documentation services.</p>
            </div>

            <div className="feature-card p-8 rounded-xl text-center shadow-lg" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
              <div className="mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center" style={{ background: THEME.surface2 }}>
                <FaGlobe size={24} style={{ color: THEME.accent }} />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: THEME.text }}>Global Translation</h3>
              <p className="text-sm leading-relaxed" style={{ color: THEME.muted }}>Professional translations in many languages.</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div ref={teamRef} className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: THEME.text }}>
            Meet Our Expert Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <article
                key={i}
                className="team-card p-6 rounded-xl text-center shadow-lg"
                style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
                aria-labelledby={`team-${i}-name`}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="mx-auto rounded-full w-28 h-28 object-cover mb-4 shadow-md"
                />
                <h3 id={`team-${i}-name`} className="text-base font-semibold mb-2" style={{ color: THEME.text }}>{person.name}</h3>
                <div className="text-sm font-medium mb-1" style={{ color: THEME.accent }}>{person.role}</div>
                <div className="text-xs mb-3" style={{ color: THEME.muted }}>{person.experience}</div>
                <div className="text-xs leading-relaxed" style={{ color: THEME.muted }}>{person.specialty}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
