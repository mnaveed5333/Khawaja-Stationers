// components/Slider.jsx
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "📚 Premium Notebooks & Journals",
      description: "High-quality notebooks for students and professionals. Perfect for note-taking, journaling, and creative writing.",
      bgColor: "from-blue-600 to-purple-700",
      icon: "📚"
    },
    {
      title: "✏️ Writing Instruments Collection",
      description: "Pens, pencils, markers, and highlighters from top brands. Find the perfect writing tool for every need.",
      bgColor: "from-green-600 to-teal-700",
      icon: "✏️"
    },
    {
      title: "📋 Office Supplies Essentials",
      description: "Complete range of office supplies including staplers, paper clips, folders, and organizers.",
      bgColor: "from-orange-600 to-red-700",
      icon: "📋"
    },
    {
      title: "🎨 Art & Craft Materials",
      description: "Unleash your creativity with our extensive collection of art supplies, paints, brushes, and craft materials.",
      bgColor: "from-pink-600 to-rose-700",
      icon: "🎨"
    },
    {
      title: "📐 Geometry & Drawing Tools",
      description: "Precision instruments for technical drawing, geometry sets, rulers, and measuring tools.",
      bgColor: "from-indigo-600 to-blue-700",
      icon: "📐"
    },
    {
      title: "🗂️ File Organization Solutions",
      description: "Keep your documents organized with our filing systems, binders, and storage solutions.",
      bgColor: "from-gray-600 to-slate-700",
      icon: "🗂️"
    },
    {
      title: "🖨️ Printing & Paper Products",
      description: "High-quality printing paper, photo paper, and specialty papers for all your printing needs.",
      bgColor: "from-cyan-600 to-blue-700",
      icon: "🖨️"
    },
    {
      title: "🎒 School & College Supplies",
      description: "Everything students need for success - from basic supplies to specialized academic materials.",
      bgColor: "from-yellow-600 to-orange-700",
      icon: "🎒"
    },
    {
      title: "💼 Professional Business Supplies",
      description: "Elevate your professional image with premium business cards, letterheads, and presentation materials.",
      bgColor: "from-emerald-600 to-green-700",
      icon: "💼"
    },
    {
      title: "🏷️ Labels & Stickers Collection",
      description: "Organize and identify with our wide range of labels, stickers, and marking solutions.",
      bgColor: "from-violet-600 to-purple-700",
      icon: "🏷️"
    },
    {
      title: "📱 Digital Accessories",
      description: "Modern stationary meets technology - styluses, tablet cases, and digital organization tools.",
      bgColor: "from-slate-600 to-gray-700",
      icon: "📱"
    },
    {
      title: "🎁 Gift Sets & Bundles",
      description: "Perfect gift combinations for students, professionals, and stationary enthusiasts.",
      bgColor: "from-red-600 to-pink-700",
      icon: "🎁"
    }
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds interval
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
      {/* Main slider container */}
      <div className="relative h-96 md:h-[28rem]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0 scale-100' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full scale-95' 
                  : 'opacity-0 translate-x-full scale-95'
            }`}
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
                  {/* Large icon with animation */}
                  <div className="text-8xl mb-6 animate-bounce">
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
                  <button className="mt-8 px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up-delay-2">
                    Explore Collection
                  </button>
                </div>
              </div>
              
              {/* Slide number indicator */}
              <div className="absolute top-6 right-6 bg-black bg-opacity-30 text-white px-4 py-2 rounded-full text-sm font-medium">
                {index + 1} / {slides.length}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-opacity-30 transition-all duration-300 shadow-lg hover:scale-110"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-opacity-30 transition-all duration-300 shadow-lg hover:scale-110"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
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
          />
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20">
        <div 
          className="h-full bg-white transition-all duration-300 shadow-sm"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;