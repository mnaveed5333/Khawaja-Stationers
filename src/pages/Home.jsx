import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "../components/Slider";
import {
  FaStar, FaRegStar, FaStarHalfAlt,
  FaShoppingCart, FaPrint, FaLanguage, FaFileAlt,
  FaAward, FaUsers, FaGlobe, FaClock,
  FaArrowRight, FaChevronRight
} from "react-icons/fa";

import { THEME } from '../theme';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Home = () => {
  const heroRef = useRef(null);
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Testimonials slider state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialIntervalRef = useRef(null);

  const reviews = [
    {
      text: "Khawaja Stationers has been my trusted partner for all stationery needs. Exceptional quality and service for over a decade!",
      name: "Dr. Ayesha Khan (Lahore)",
      role: "Professor",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      stars: 5,
    },
    {
      text: "Outstanding printing services! They perfectly handled my research documents and translation needs.",
      name: "Ahmed Ali (Karachi)",
      role: "Research Scholar",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      stars: 5,
    },
    {
      text: "Reliable stamp paper services with excellent legal documentation support. Highly recommended!",
      name: "Fatima Bibi (Islamabad)",
      role: "Lawyer",
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      stars: 5,
    },
    {
      text: "Amazing variety of stationery items at reasonable prices. My family shops here for everything!",
      name: "Muhammad Rizwan (Rawalpindi)",
      role: "Business Owner",
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      stars: 4.5,
    },
    {
      text: "Professional translation services in multiple languages. Very accurate and timely delivery.",
      name: "Sadia Noor (Peshawar)",
      role: "Translator",
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      stars: 5,
    },
    {
      text: "Three decades of excellence! Best stationery shop in Pakistan with genuine products.",
      name: "Tariq Mehmood (Multan)",
      role: "Teacher",
      img: "https://randomuser.me/api/portraits/men/6.jpg",
      stars: 4.5,
    },
    {
      text: "Their art supplies are top-notch. Perfect for my creative projects and school needs.",
      name: "Amina Shah (Quetta)",
      role: "Artist",
      img: "https://randomuser.me/api/portraits/women/7.jpg",
      stars: 5,
    },
    {
      text: "Quick and efficient stamp paper services. Saved me valuable time for my legal work.",
      name: "Hassan Khan (Faisalabad)",
      role: "Advocate",
      img: "https://randomuser.me/api/portraits/men/8.jpg",
      stars: 5,
    },
    {
      text: "Excellent customer service and wide range of office supplies. Highly satisfied!",
      name: "Zara Ahmed (Sialkot)",
      role: "Office Manager",
      img: "https://randomuser.me/api/portraits/women/9.jpg",
      stars: 4.5,
    },
    {
      text: "Best place for educational materials. Quality notebooks and writing instruments.",
      name: "Bilal Hussain (Gujranwala)",
      role: "Student",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
      stars: 5,
    },
    {
      text: "Reliable printing services for all my business needs. Professional and affordable.",
      name: "Nadia Khan (Hyderabad)",
      role: "Entrepreneur",
      img: "https://randomuser.me/api/portraits/women/11.jpg",
      stars: 5,
    },
    {
      text: "Their stamp papers are authentic and services are prompt. Great experience!",
      name: "Imran Ali (Bahawalpur)",
      role: "Government Officer",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      stars: 4.5,
    },
    {
      text: "Amazing collection of art materials. Perfect for my painting classes.",
      name: "Saima Bibi (Abbottabad)",
      role: "Art Teacher",
      img: "https://randomuser.me/api/portraits/women/13.jpg",
      stars: 5,
    },
    {
      text: "Fast and accurate translation services. Helped with international documents.",
      name: "Usman Khan (Sargodha)",
      role: "Businessman",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      stars: 5,
    },
    {
      text: "Quality stationery products at competitive prices. My go-to shop for years!",
      name: "Rabia Noor (Jhelum)",
      role: "Teacher",
      img: "https://randomuser.me/api/portraits/women/15.jpg",
      stars: 4.5,
    },
    {
      text: "Excellent printing quality and customer support. Highly recommended!",
      name: "Asif Mehmood (Sahiwal)",
      role: "Print Shop Owner",
      img: "https://randomuser.me/api/portraits/men/16.jpg",
      stars: 5,
    },
    {
      text: "Their legal documentation services are professional and trustworthy.",
      name: "Kiran Bibi (Mardan)",
      role: "Legal Assistant",
      img: "https://randomuser.me/api/portraits/women/17.jpg",
      stars: 5,
    },
    {
      text: "Wide variety of writing instruments. Found exactly what I needed for my work.",
      name: "Fahad Khan (Dera Ghazi Khan)",
      role: "Writer",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
      stars: 4.5,
    },
    {
      text: "Best stationery shop in Pakistan. Quality products and friendly staff.",
      name: "Aisha Malik (Okara)",
      role: "Student",
      img: "https://randomuser.me/api/portraits/women/19.jpg",
      stars: 5,
    },
    {
      text: "Reliable stamp paper vendor with quick delivery. Excellent service!",
      name: "Zubair Ahmed (Sheikhupura)",
      role: "Business Owner",
      img: "https://randomuser.me/api/portraits/men/20.jpg",
      stars: 5,
    },
    {
      text: "Their translation services helped me with important documents. Very professional.",
      name: "Hina Shah (Kasur)",
      role: "Administrator",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      stars: 4.5,
    },
    {
      text: "Quality art supplies and educational materials. Perfect for schools.",
      name: "Rashid Khan (Rahim Yar Khan)",
      role: "School Principal",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      stars: 5,
    },
    {
      text: "Fast printing services and genuine products. Highly satisfied customer!",
      name: "Sobia Ali (Wah Cantonment)",
      role: "Office Worker",
      img: "https://randomuser.me/api/portraits/women/23.jpg",
      stars: 5,
    },
    {
      text: "Excellent stationery collection and customer service. Will continue shopping here!",
      name: "Naveed Ahmed (Taxila)",
      role: "Professor",
      img: "https://randomuser.me/api/portraits/men/24.jpg",
      stars: 4.5,
    },
    {
      text: "Their stamp paper services are authentic and delivery is on time. Great experience!",
      name: "Farah Deeba (Chakwal)",
      role: "Law Student",
      img: "https://randomuser.me/api/portraits/women/25.jpg",
      stars: 5,
    },
  ];

  const services = [
    {
      icon: <FaShoppingCart />,
      title: "Stationery Supplies",
      description: "Complete range of pens, pencils, notebooks, and office supplies for all your needs.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <FaPrint />,
      title: "Printing Services",
      description: "High-quality printing for documents, photos, and business materials with professional results.",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <FaFileAlt />,
      title: "Stamp Paper",
      description: "Authorized vendor for stamp paper and legal documentation services including affidavits and contracts.",
      gradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      icon: <FaLanguage />,
      title: "Translation Services",
      description: "Professional translation services in all languages worldwide for your documentation needs.",
      gradient: "from-orange-500/10 to-amber-500/10"
    }
  ];

  const stats = [
    { icon: <FaAward />, number: "30", label: "Years of Service", suffix: "+" },
    { icon: <FaUsers />, number: "10000", label: "Happy Customers", suffix: "+" },
    { icon: <FaGlobe />, number: "50", label: "Languages Supported", suffix: "+" },
    { icon: <FaClock />, number: "24", label: "Customer Support", suffix: "/7" }
  ];

  // Testimonials auto-slide effect
  useEffect(() => {
    const getCardsPerView = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    const startTestimonialAutoPlay = () => {
      testimonialIntervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => {
          const cardsPerView = getCardsPerView();
          const nextIndex = (prev + cardsPerView) % reviews.length;
          return nextIndex;
        });
      }, 3000); // 3 seconds
    };

    startTestimonialAutoPlay();

    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, [reviews.length]);

  // Enhanced GSAP animation when testimonial changes - premium effects
  useEffect(() => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    // Create a timeline for complex animation sequence
    const tl = gsap.timeline();

    // First, fade out current cards with a sophisticated effect
    tl.to(testimonialCards, {
      opacity: 0,
      scale: 0.95,
      y: -10,
      filter: "blur(3px)",
      duration: 0.4,
      stagger: 0.05,
      ease: "power2.in"
    });

    // Then animate in new cards with premium effects
    tl.fromTo(testimonialCards,
      {
        opacity: 0,
        scale: 0.9,
        y: 30,
        rotationX: -5,
        filter: "blur(8px)",
        boxShadow: `0 0 0 rgba(${THEME.accent.slice(1)}, 0)`
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationX: 0,
        filter: "blur(0px)",
        boxShadow: `0 20px 40px rgba(${THEME.accent.slice(1)}, 0.1)`,
        duration: 0.8,
        stagger: 0.15,
        ease: "elastic.out(1, 0.6)",
        onComplete: () => {
          // Add subtle continuous animation
          gsap.to(testimonialCards, {
            y: -2,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.2
          });
        }
      }
    );

  }, [currentTestimonial]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(".hero-content", 
        { 
          y: 100, 
          opacity: 0,
          rotationX: 10 
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          duration: 1.8, 
          ease: "power3.out",
          delay: 0.8,
          stagger: 0.2
        }
      );

      // Welcome section animation with split text
      const welcomeText = welcomeRef.current?.querySelector('h2');
      if (welcomeText) {
        gsap.fromTo(welcomeText,
          { 
            y: 100, 
            opacity: 0,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: welcomeRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      }

      // Enhanced services animation
      gsap.fromTo(".service-card",
        { 
          y: 80, 
          opacity: 0,
          scale: 0.85,
          rotationY: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          stagger: {
            each: 0.15,
            from: "center"
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Enhanced stats counter animation
      gsap.fromTo(".stat-item",
        { 
          scale: 0.5,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          }
        }
      );

      stats.forEach((_, index) => {
        gsap.fromTo(`.stat-number-${index}`,
          { 
            innerText: 0,
            opacity: 0.3
          },
          {
            innerText: index === 0 ? 30 : index === 1 ? 10000 : index === 2 ? 50 : 24,
            opacity: 1,
            duration: 2.5,
            ease: "power2.out",
            snap: { innerText: 1 },
            delay: 0.5 + index * 0.3,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // Enhanced testimonials animation with auto-slide
      gsap.fromTo(".testimonial-card",
        {
          y: 100,
          opacity: 0,
          rotationY: 20,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.1,
          stagger: {
            each: 0.15,
            grid: "auto",
            from: "start"
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      );


      // Enhanced CTA section animation
      gsap.fromTo(ctaRef.current,
        {
          backgroundPosition: "0% 50%",
          opacity: 0.8
        },
        {
          backgroundPosition: "100% 50%",
          opacity: 1,
          duration: 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        }
      );

      // CTA content animation
      gsap.fromTo(".cta-content",
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Enhanced floating animation for service icons
      gsap.to(".service-icon", {
        y: -15,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.3,
          from: "random"
        }
      });

      // Particle animation for stats section
      gsap.to(".floating-particle", {
        y: -20,
        x: "random(-20, 20)",
        rotation: "random(-30, 30)",
        opacity: "random(0.3, 0.8)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.5,
          from: "random"
        },
        ease: "sine.inOut"
      });

      // Enhanced hover animations for cards
      gsap.utils.toArray(".service-card, .testimonial-card").forEach(card => {
        const hoverAnimation = gsap.to(card, {
          y: -12,
          scale: 1.03,
          duration: 0.4,
          ease: "power2.out",
          paused: true
        });

        card.addEventListener("mouseenter", () => hoverAnimation.play());
        card.addEventListener("mouseleave", () => hoverAnimation.reverse());
      });

      // Button hover animations
      gsap.utils.toArray(".animated-button").forEach(button => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            y: -2,
            boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.4)",
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            y: 0,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    });

    return () => ctx.revert();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i + 1 <= Math.floor(rating))
        return <FaStar key={i} className="text-yellow-400 drop-shadow-lg" />;
      if (i < rating)
        return <FaStarHalfAlt key={i} className="text-yellow-400 drop-shadow-lg" />;
      return <FaRegStar key={i} className="text-yellow-400 drop-shadow-lg" />;
    });
  };

  return (
    <div className="bg-[#0B1220] text-[#F5F7FA] min-h-screen overflow-hidden">
      {/* Hero Slider */}
      <section className="mb-12 relative" ref={heroRef}>
        <Slider />
      </section>

      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <section 
          ref={welcomeRef}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-[#06B6D4] bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] bg-clip-text text-transparent"><span className="hidden sm:inline">Khawaja Stationers</span><span className="sm:hidden">Khawaja Books</span></span>
          </h2>
          <p className="text-lg md:text-xl text-[#A8B3BF] leading-relaxed mb-8">
            Since <span className="font-semibold text-[#06B6D4]">1990</span>, we've been Rawalpindi's trusted
            <span className="font-semibold text-white"> one-stop shop</span> for quality stationery, professional printing,
            stamp paper services, and expert translation solutions. Three decades of excellence in serving our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="animated-button bg-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0891b2] transition-all duration-300 inline-flex items-center justify-center gap-3 group border border-[#06B6D4] hover:shadow-lg"
            >
              Explore Products
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/services" 
              className="animated-button border-2 border-[#06B6D4] text-[#06B6D4] px-8 py-4 rounded-xl font-semibold hover:bg-[#06B6D4] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-3 group hover:shadow-lg"
            >
              Our Services
              <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            Our <span className="text-[#06B6D4]">Services</span>
          </h2>
          <p className="text-base md:text-lg text-[#A8B3BF] text-center mb-12 max-w-2xl mx-auto">
            Comprehensive solutions for all your stationery, printing, and documentation needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-[#0F1724] p-6 rounded-2xl border border-[#1F2A37] hover:border-[#06B6D4] transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="service-icon relative z-10 flex justify-center mb-4">
                  <div className="p-3 rounded-2xl bg-[#1F2A37] group-hover:bg-[#06B6D4]/20 transition-colors duration-300">
                    {React.cloneElement(service.icon, { 
                      className: "text-3xl text-[#06B6D4] group-hover:text-[#22d3ee] transition-colors duration-300"
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-[#06B6D4] transition-colors duration-300 text-center">
                  {service.title}
                </h3>
                <p className="text-[#A8B3BF] leading-relaxed relative z-10 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section ref={statsRef} className="mb-20">
          <div className="bg-gradient-to-r from-[#06B6D4] to-[#0EA5E9] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="floating-particle absolute w-2 h-2 bg-white/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12">
                30+ Years of <span className="text-[#E9E5DC]">Excellence</span>
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item text-center">
                    <div className="flex justify-center mb-4">
                      <div className="text-2xl md:text-3xl text-white bg-white/20 p-3 md:p-4 rounded-2xl backdrop-blur-sm">
                        {stat.icon}
                      </div>
                    </div>
                    <div className={`stat-number-${index} text-3xl md:text-4xl font-bold text-white mb-2`}>
                      {stat.number}{stat.suffix}
                    </div>
                    <div className="text-blue-100 font-medium text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef} className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            What Our <span className="text-[#06B6D4]">Customers</span> Say
          </h2>
          <p className="text-base md:text-lg text-[#A8B3BF] text-center mb-12 max-w-2xl mx-auto">
            Trusted by thousands of satisfied customers across Pakistan and beyond
          </p>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.slice(currentTestimonial, currentTestimonial + (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)).map((review, index) => (
                <div
                  key={`${currentTestimonial}-${index}`}
                  className="testimonial-card bg-[#0F1724] p-6 rounded-2xl border border-[#1F2A37] hover:border-[#06B6D4] transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <p className="text-[#A8B3BF] mb-6 italic leading-relaxed group-hover:text-[#E9E5DC] transition-colors duration-300">
                      "{review.text}"
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center mb-4 gap-1">
                      {renderStars(review.stars)}
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center">
                      <img
                        src={review.img}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#06B6D4] group-hover:border-[#22d3ee] transition-colors duration-300"
                      />
                      <div className="text-left">
                        <h4 className="font-semibold text-white group-hover:text-[#06B6D4] transition-colors duration-300">
                          {review.name}
                        </h4>
                        <p className="text-[#A8B3BF] text-sm">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Call to Action */}
        <section 
          ref={ctaRef}
          className="mb-20 text-center py-16 md:py-20 rounded-3xl bg-gradient-to-r from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] bg-size-200 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="cta-content relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today for stationery supplies, printing services, or any documentation needs. We're here to help!
            </p>
            <Link 
              to="/contact" 
              className="animated-button bg-white text-[#06B6D4] px-10 py-4 rounded-xl font-semibold hover:bg-[#E9E5DC] hover:text-[#0B1220] transition-all duration-300 inline-flex items-center justify-center gap-3 group border border-white hover:shadow-2xl"
            >
              Get In Touch
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default Home;