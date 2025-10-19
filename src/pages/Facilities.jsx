// pages/Facilities.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaBook,
  FaBolt,
  FaTint,
  FaUsers,
  FaGamepad,
  FaDumbbell,
  FaFirstAid,
  FaBookOpen,
  FaPray,
  FaBicycle,
  FaChair,
  FaUtensils,
  FaWifi,
  FaShower,
  FaTshirt,
  FaBroom,
  FaHome
} from "react-icons/fa";
import { THEME } from '../theme';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Facilities = () => {
  const headerRef = useRef(null);
  const facilitiesRef = useRef(null);

  // 12 additional hostel facilities with icons
  const facilities = [
    {
      title: "Study Hall",
      description: "Quiet, well-lit study room with desks and chairs for focused learning.",
      icon: FaBook,
      color: "blue"
    },
    {
      title: "Power Backup",
      description: "Uninterrupted electricity supply with generator and UPS support.",
      icon: FaBolt,
      color: "yellow"
    },
    {
      title: "Filtered Drinking Water",
      description: "Safe RO-filtered drinking water available 24/7 for all residents.",
      icon: FaTint,
      color: "blue"
    },
    {
      title: "Visitor Lounge",
      description: "Comfortable sitting area for guests, parents, and friends.",
      icon: FaUsers,
      color: "purple"
    },
    
    {
      title: "Medical First Aid",
      description: "First-aid kit and on-call medical assistance for emergencies.",
      icon: FaFirstAid,
      color: "red"
    },
    
    {
      title: "Prayer Room",
      description: "Dedicated, peaceful space for daily prayers and meditation.",
      icon: FaPray,
      color: "purple"
    },
    {
      title: "Bike / Cycle Stand",
      description: "Covered and secure parking for bicycles and two-wheelers.",
      icon: FaBicycle,
      color: "green"
    },
    {
      title: "Outdoor Sitting Area",
      description: "Open courtyard with benches for evening relaxation.",
      icon: FaChair,
      color: "green"
    },
    {
      title: "Kitchenette Access",
      description: "Small shared kitchen area for light cooking or tea/coffee.",
      icon: FaUtensils,
      color: "yellow"
    }
  ];

 
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".facilities-header",
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotationX: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );

      // Facilities cards animation - wave effect
      gsap.fromTo(".facility-card",
        {
          opacity: 0,
          scale: 0.5,
          rotation: -45,
          filter: "blur(10px)",
          transformOrigin: "center center"
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: {
            amount: 1.2,
            from: "start",
            grid: [3, 3]
          },
          ease: "elastic.out(1, 0.4)",
          scrollTrigger: {
            trigger: facilitiesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced hover effects
      gsap.utils.toArray(".facility-card").forEach(card => {
        const hoverAnimation = gsap.to(card, {
          y: -15,
          scale: 1.05,
          rotationY: 10,
          boxShadow: `0 25px 50px rgba(6, 182, 212, 0.25)`,
          duration: 0.4,
          ease: "power2.out",
          paused: true
        });

        card.addEventListener("mouseenter", () => {
          hoverAnimation.play();
          gsap.to(card.querySelector('.facility-icon'), {
            scale: 1.2,
            rotation: 10,
            duration: 0.3,
            ease: "back.out(1.5)"
          });
        });

        card.addEventListener("mouseleave", () => {
          hoverAnimation.reverse();
          gsap.to(card.querySelector('.facility-icon'), {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    });

    return () => ctx.revert();
  }, []);

  const getColorClasses = (color) => {
    switch(color) {
      case "blue": return { bg: THEME.surface2, text: THEME.accent };
      case "yellow": return { bg: THEME.surface2, text: "#FBBF24" };
      case "purple": return { bg: THEME.surface2, text: "#A855F7" };
      case "green": return { bg: THEME.surface2, text: "#10B981" };
      case "red": return { bg: THEME.surface2, text: "#EF4444" };
      default: return { bg: THEME.surface, text: THEME.muted };
    }
  };

  return (<div className="mt-5">
    <div style={{ background: THEME.bg, minHeight: "100vh", color: THEME.text, paddingBottom: "200px" }}>
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="facilities-header text-4xl font-bold mb-4" style={{ color: THEME.accent }}>
            Hostel Facilities & Amenities
          </h1>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: THEME.muted }}>
            Beyond the basic amenities, we provide these extra facilities to make
            your stay more comfortable, productive, and enjoyable.
          </p>
        </div>

      

        {/* Additional Facilities Grid */}
        <section ref={facilitiesRef} className="mb-20">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {

              const colorClasses = getColorClasses(facility.color);
              return (
                <div
                  key={index}
                  className="facility-card rounded-xl p-6 transition-all duration-300"
                  style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
                >
                  <div className="facility-icon mb-4 flex justify-center">
                    <facility.icon size={48} style={{ color: colorClasses.text }} />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3" style={{ color: THEME.text }}>
                    {facility.title}
                  </h3>
                  <p className="text-sm text-center leading-relaxed" style={{ color: THEME.muted }}>
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        
      </div>
    </div></div>
  );
};

export default Facilities;