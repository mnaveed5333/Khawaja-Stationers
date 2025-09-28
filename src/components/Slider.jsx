// components/Slider.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  // State management
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Refs
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Slides data
  const slides = [
    {
      title: "📚 Premium Notebooks & Journals",
      description: "High-quality notebooks for students and professionals. Perfect for note-taking, journaling, and creative writing.",
      bgColor: "from-blue-600 to-purple-700",
      icon: "📚",
      link: "/products/notebooks-journals",
      isVip: false
    },
    {
      title: "✏️ Writing Instruments Collection",
      description: "Pens, pencils, markers, and highlighters from top brands. Find the perfect writing tool for every need.",
      bgColor: "from-green-600 to-teal-700",
      icon: "✏️",
      link: "/products/writing-instruments",
      isVip: false
    },
    {
      title: "📋 Office Supplies Essentials",
      description: "Complete range of office supplies including staplers, paper clips, folders, and organizers.",
      bgColor: "from-orange-600 to-red-700",
      icon: "📋",
      link: "/products/office-supplies",
      isVip: false
    },
    {
      title: "🎨 Art & Craft Materials",
      description: "Unleash your creativity with our extensive collection of art supplies, paints, brushes, and craft materials.",
      bgColor: "from-pink-600 to-rose-700",
      icon: "🎨",
      link: "/products/art-craft",
      isVip: false
    },
    {
      title: "📐 Geometry & Drawing Tools",
      description: "Precision instruments for technical drawing, geometry sets, rulers, and measuring tools.",
      bgColor: "from-indigo-600 to-blue-700",
      icon: "📐",
      link: "/products/geometry-tools",
      isVip: false
    },
    {
      title: "🗂️ File Organization Solutions",
      description: "Keep your documents organized with our filing systems, binders, and storage solutions.",
      bgColor: "from-gray-600 to-slate-700",
      icon: "🗂️",
      link: "/products/file-organization",
      isVip: false
    },
    {
      title: "🖨️ Printing & Paper Products",
      description: "High-quality printing paper, photo paper, and specialty papers for all your printing needs.",
      bgColor: "from-cyan-600 to-blue-700",
      icon: "🖨️",
      link: "/products/paper-products",
      isVip: false
    },
    {
      title: "🎒 School & College Supplies",
      description: "Everything students need for success - from basic supplies to specialized academic materials.",
      bgColor: "from-yellow-600 to-orange-700",
      icon: "🎒",
      link: "/products/school-supplies",
      isVip: false
    },
    {
      title: "💼 Professional Business Supplies",
      description: "Elevate your professional image with premium business cards, letterheads, and presentation materials.",
      bgColor: "from-emerald-600 to-green-700",
      icon: "💼",
      link: "/services/business-supplies",
      isVip: true
    },
    {
      title: "🏷️ Labels & Stickers Collection",
      description: "Organize and identify with our wide range of labels, stickers, and marking solutions.",
      bgColor: "from-violet-600 to-purple-700",
      icon: "🏷️",
      link: "/products/labels-stickers",
      isVip: false
    },
    {
      title: "📱 Digital Accessories",
      description: "Modern stationary meets technology - styluses, tablet cases, and digital organization tools.",
      bgColor: "from-slate-600 to-gray-700",
      icon: "📱",
      link: "/products/digital-accessories",
      isVip: true
    },
    {
      title: "🎁 Gift Sets & Bundles",
      description: "Perfect gift combinations for students, professionals, and stationary enthusiasts.",
      bgColor: "from-red-600 to-pink-700",
      icon: "🎁",
      link: "/products/gift-sets",
      isVip: true
    }
  ];
  
  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!isPaused && !isTransitioning) {
      intervalRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
  }, [isPaused, isTransitioning, slides.length]);
  
  // Initialize and cleanup
  useEffect(() => {
    startAutoPlay();
    return () => clearTimeout(intervalRef.current);
  }, [currentSlide, startAutoPlay]);
  
  // Navigation functions
  const goToSlide = useCallback((index) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [currentSlide, isTransitioning]);
  
  const goToPrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);
  
  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, slides.length]);
  
  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  }, []);
  
  const handleTouchEnd = useCallback((e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    setIsPaused(false);
    handleSwipe();
  }, []);
  
  const handleSwipe = useCallback(() => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  }, [goToNext, goToPrev]);
  
  // Mouse handlers
  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);
  
  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  }, [goToPrev, goToNext]);
  
  // Set up keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  
  // Calculate progress bar width
  const progressWidth = ((currentSlide + 1) / slides.length) * 100;
  
  return (
    <div
      className="relative w-full max-w-6xl mx-auto overflow-hidden mt-8 rounded-2xl shadow-2xl"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sliderRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Product showcase"
    >
      {/* Main slider container */}
      <div className="relative h-96 md:h-[28rem]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0 scale-100' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full scale-95' 
                  : 'opacity-0 translate-x-full scale-95'
            }`}
            role="tabpanel"
            aria-hidden={index !== currentSlide}
            aria-label={`Slide ${index + 1}`}
          >
            {/* Gradient background */}
            <div className={`w-full h-full bg-gradient-to-br ${slide.bgColor} relative overflow-hidden`}>
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-ping"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <div className="text-center text-white max-w-4xl">
                  {/* VIP Badge */}
                  {slide.isVip && (
                    <div 
                      className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse"
                      aria-label="VIP Exclusive"
                    >
                      VIP
                    </div>
                  )}

                  {/* Large icon with animation */}
                  <div className="text-8xl mb-6 animate-bounce" aria-hidden="true">
                    {slide.icon}
                  </div>

                  {/* Title with slide-in animation */}
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
                    {slide.title}
                  </h2>

                  {/* Description with delayed slide-in */}
                  <p className="text-xl md:text-2xl opacity-90 leading-relaxed animate-fade-in-up-delay">
                    {slide.description}
                  </p>

                  {/* Call to action button */}
                  <Link
                    to={slide.link}
                    className="mt-8 inline-block px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up-delay-2"
                    aria-label={`Explore ${slide.title}`}
                  >
                    Explore Collection
                  </Link>
                </div>
              </div>
              
              {/* Slide number indicator */}
              <div 
                className="absolute top-6 right-6 bg-black bg-opacity-30 text-white px-4 py-2 rounded-full text-sm font-medium"
                aria-label={`Slide ${index + 1} of ${slides.length}`}
              >
                {index + 1} / {slides.length}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-5 rounded-full hover:bg-white/30 transition-all duration-300 shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm text-white p-5 rounded-full hover:bg-white/30 transition-all duration-300 shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3"
        role="tablist"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
            disabled={isTransitioning}
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-white transition-all duration-300 shadow-sm"
          style={{ width: `${progressWidth}%` }}
          role="progressbar"
          aria-valuenow={progressWidth}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
