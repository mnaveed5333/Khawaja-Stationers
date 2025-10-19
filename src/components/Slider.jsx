// components/Slider.jsx
import React, {
  useState,
  useEffect,
  useRef,
  useCallback
} from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaPenFancy,
  FaPrint,
  FaPalette,
  FaRulerCombined,
  FaFolderOpen,
  FaFileAlt,
  FaBriefcase,
  FaTags,
  FaMobileAlt,
  FaGift
} from "react-icons/fa";
import gsap from "gsap";

/* ===== Theme ===== */
const THEME = {
  bg: "#0B1220",
  surface: "#0F1724",
  surface2: "#111827",
  text: "#F5F7FA",
  muted: "#A8B3BF",
  border: "#1F2A37",
  paper: "#E9E5DC",
  accent: "#06B6D4"
};

const Slider = () => {
  const slides = [
    {
      title: "Premium Notebooks & Journals",
      description:
        "High-quality notebooks for students and professionals. Perfect for note-taking, journaling, and creative writing.",
      bgColor: "from-blue-600 to-purple-700",
      icon: <FaBook />,
      link: "/products/notebooks-journals",
      isVip: false
    },
    {
      title: "Writing Instruments Collection",
      description:
        "Pens, pencils, markers, and highlighters from top brands. Find the perfect writing tool for every need.",
      bgColor: "from-green-600 to-teal-700",
      icon: <FaPenFancy />,
      link: "/products/writing-instruments",
      isVip: false
    },
    {
      title: "Art & Craft Materials",
      description:
        "Unleash your creativity with paints, brushes, and craft materials.",
      bgColor: "from-pink-600 to-rose-700",
      icon: <FaPalette />,
      link: "/products/art-craft",
      isVip: false
    }
  ];

  // state + refs
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sliderRef = useRef(null);
  const slideRefs = useRef([]);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const progressRef = useRef(null);
  const prevSlide = useRef(0);
  const rotateMs = 3000; // 3 seconds as requested

  // helpers to (re)start autoplay
  const clearAuto = () => {
    if (intervalRef.current) clearTimeout(intervalRef.current);
  };

  const startAutoPlay = useCallback(() => {
    clearAuto();
    if (!isPaused && !isTransitioning) {
      intervalRef.current = setTimeout(() => {
        goToNext();
      }, rotateMs);
    }
  }, [isPaused, isTransitioning]);

  // navigation
  const goTo = useCallback((index) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 520);
  }, [currentSlide, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 520);
  }, [isTransitioning, slides.length]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 520);
  }, [isTransitioning, slides.length]);

  // touch handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
    clearAuto();
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      touchEndX.current = e.changedTouches[0].clientX;
      setIsPaused(false);
      const diff = touchStartX.current - touchEndX.current;
      const threshold = 50;
      if (Math.abs(diff) > threshold) {
        if (diff > 0) goToNext();
        else goToPrev();
      }
      startAutoPlay();
    },
    [goToNext, goToPrev, startAutoPlay]
  );

  // mouse enter/leave
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
    clearAuto();
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
    startAutoPlay();
  }, [startAutoPlay]);

  // keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "ArrowRight") goToNext();
    },
    [goToPrev, goToNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // autoplay effect
  useEffect(() => {
    startAutoPlay();
    return () => clearAuto();
  }, [currentSlide, startAutoPlay]);

  // Entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const firstSlide = slideRefs.current[0];
      if (!firstSlide) return;

      const tl = gsap.timeline();
      tl.set(firstSlide, { zIndex: 20, pointerEvents: "auto" })
        .fromTo(firstSlide,
          { scale: 0.8, rotationY: -90, opacity: 0 },
          { scale: 1, rotationY: 0, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
        )
        .fromTo(firstSlide.querySelector(".slide-icon"),
          { scale: 0, rotation: -180, y: -50 },
          { scale: 1, rotation: 0, y: 0, duration: 1.2, ease: "elastic.out(1,0.5)" },
          "-=1"
        )
        .fromTo([firstSlide.querySelector(".slide-title"), firstSlide.querySelector(".slide-cta")],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power3.out" },
          "-=0.8"
        );

      // Animate bubbles on mount
      const bubbles = firstSlide.querySelectorAll(".bubble");
      bubbles.forEach((bubble, i) => {
        gsap.fromTo(bubble,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 0.15, duration: 1, delay: i * 0.2, ease: "back.out(1.7)" }
        );
      });

      // Start continuous bubble animation
      gsap.to(bubbles, {
        y: "-=20",
        rotation: 360,
        opacity: 0.3,
        duration: 6,
        ease: "none",
        stagger: 1,
        repeat: -1,
        yoyo: true
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  // GSAP animations when slide changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      const incomingEl = slideRefs.current[currentSlide];
      const outgoingEl = slideRefs.current[prevSlide.current];

      // guard
      if (!incomingEl) return;

      const tl = gsap.timeline();

      // animate outgoing with 3D flip
      if (outgoingEl && outgoingEl !== incomingEl) {
        tl.to(outgoingEl, {
          rotationY: -90,
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
      }

      // prepare incoming
      tl.set(incomingEl, { zIndex: 20, pointerEvents: "auto", rotationY: 90, scale: 0.9, opacity: 0 });

      // incoming 3D flip animation
      tl.to(incomingEl, {
        rotationY: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      });

      // icon with glow
      const icon = incomingEl.querySelector(".slide-icon");
      if (icon) {
        tl.fromTo(icon,
          { scale: 0, rotation: -180, boxShadow: "0 0 0 rgba(6,182,212,0)" },
          {
            scale: 1,
            rotation: 0,
            boxShadow: "0 0 30px rgba(6,182,212,0.5)",
            duration: 1.5,
            ease: "elastic.out(1,0.3)"
          },
          "-=1"
        );
      }

      // content with bounce and stagger
      const title = incomingEl.querySelector(".slide-title");
      const cta = incomingEl.querySelector(".slide-cta");
      tl.fromTo([title, cta],
        { y: 50, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.3, ease: "bounce.out" },
        "-=1"
      );

      // CTA pulse effect
      tl.to(cta, {
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      }, "-=0.5");

      // animate progress bar with wave effect
      const pct = ((currentSlide + 1) / slides.length) * 100;
      if (progressRef.current) {
        tl.to(progressRef.current, {
          width: `${pct}%`,
          duration: 0.8,
          ease: "power1.out"
        }, "-=1.2");
      }

      // background gradient shift
      const bg = incomingEl.querySelector(".w-full.h-full.relative");
      if (bg) {
        tl.fromTo(bg,
          { background: THEME.surface },
          { background: THEME.accent, duration: 1, ease: "power2.inOut" },
          "-=1.5"
        );
      }

      // de-emphasize previous after a tick
      if (outgoingEl && outgoingEl !== incomingEl) {
        tl.set(outgoingEl, { zIndex: 10, pointerEvents: "none" }, "+=0.5");
      }
    }, sliderRef);

    prevSlide.current = currentSlide;
    return () => ctx.revert();
  }, [currentSlide, slides.length]);

  // helper to set slide refs
  const setSlideRef = (el, i) => {
    slideRefs.current[i] = el;
  };

  // progress width for initial render
  const initialProgress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div
      ref={sliderRef}
      className="relative w-full overflow-hidden mt-15 sm:pt-10 md:mt-12 lg:mt-16"
      style={{
        background: THEME.surface,
        border: `1px solid ${THEME.border}`
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-roledescription="carousel"
      aria-label="Product showcase"
    >
      {/* Slides container (responsive height) */}
      <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 xl:h-[400px]">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          // initial inline style ensures correct placement before animation
          const initialStyle = {
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(0) scale(1)" : index < currentSlide ? "translateX(-100%) scale(.95)" : "translateX(100%) scale(.95)"
          };

          return (
            <div
              key={index}
              ref={(el) => setSlideRef(el, index)}
              className={`absolute inset-0`}
              style={{
                ...initialStyle,
                transition: "none" // handled by GSAP
              }}
              role="tabpanel"
              aria-hidden={!isActive}
              aria-label={`Slide ${index + 1}`}
            >
              {/* Solid accent background */}
              <div
                className="w-full h-full relative overflow-hidden"
                style={{
                  minHeight: "100%",
                  background: THEME.accent
                }}
              >
                {/* Floating bubbles */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: 0.15
                  }}
                >
                  <div
                    className="bubble"
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "20%",
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      background: THEME.bg
                    }}
                  />
                  <div
                    className="bubble"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "70%",
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: THEME.surface
                    }}
                  />
                  <div
                    className="bubble"
                    style={{
                      position: "absolute",
                      top: "80%",
                      left: "10%",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: THEME.bg
                    }}
                  />
                  <div
                    className="bubble"
                    style={{
                      position: "absolute",
                      top: "30%",
                      left: "80%",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      background: THEME.surface
                    }}
                  />
                  <div
                    className="bubble"
                    style={{
                      position: "absolute",
                      top: "60%",
                      left: "40%",
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: THEME.bg
                    }}
                  />
                </div>

                {/* subtle decorative shapes (animated via CSS/gSAP) */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: 0.08
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 28,
                      left: 28,
                      width: 120,
                      height: 120,
                      borderRadius: "999px",
                      background: THEME.paper,
                      mixBlendMode: "overlay",
                      filter: "blur(18px)"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 44,
                      right: 44,
                      width: 84,
                      height: 84,
                      borderRadius: "999px",
                      background: "#ffffff",
                      mixBlendMode: "overlay",
                      filter: "blur(8px)"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-12 xl:py-12">
                  <div className="text-center text-white max-w-4xl mx-auto">

                    {/* Icon */}
                    <div
                      className="slide-icon mb-4 sm:mb-6"
                      style={{
                        fontSize: "clamp(48px, 8vw, 64px)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "clamp(80px, 15vw, 120px)",
                        height: "clamp(80px, 15vw, 120px)",
                        borderRadius: 20,
                        background: THEME.bg,
                        color: THEME.accent,
                        margin: "0 auto"
                      }}
                      aria-hidden="true"
                    >
                      {React.cloneElement(slide.icon, { size: "clamp(32px, 6vw, 44px)" })}
                    </div>

                    {/* Title */}
                    <h2
                      className="slide-title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4"
                      style={{ color: THEME.bg }}
                    >
                      {slide.title}
                    </h2>



                    {/* CTA */}
                    <Link
                      to={slide.link}
                      className="slide-cta inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-full font-semibold transition-transform text-xs sm:text-sm md:text-base"
                      style={{
                        background: THEME.bg,
                        color: THEME.accent,
                        boxShadow: "0 10px 30px rgba(11,18,32,0.3)"
                      }}
                      aria-label={`Explore ${slide.title}`}
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>


      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: "rgba(0,0,0,0.25)" }}>
        <div
          ref={progressRef}
          className="h-full"
          style={{
            width: `${initialProgress}%`,
            background: `linear-gradient(90deg, ${THEME.accent}, ${THEME.paper})`
          }}
          role="progressbar"
          aria-valuenow={initialProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default Slider;
