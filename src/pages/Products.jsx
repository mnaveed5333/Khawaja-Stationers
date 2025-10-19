import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { THEME } from '../theme';
import {
  FaBook,
  FaPen,
  FaArchive,
  FaPalette,
  FaGraduationCap,
  FaFileAlt,
  FaShoppingCart,
  FaWhatsapp
} from 'react-icons/fa';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Products = () => {
  const headerRef = useRef(null);
  const categoriesRef = useRef(null);

  const productCategories = [
    {
      id: 1,
      name: "Notebooks & Journals",
      slug: "notebooks-journals",
      icon: <FaBook size={48} />,
      description: "Premium quality notebooks, journals, and diaries for all your writing needs.",
      bgColor: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Writing Instruments",
      slug: "writing-instruments",
      icon: <FaPen size={48} />,
      description: "Complete collection of pens, pencils, markers, and highlighters.",
      bgColor: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Office Supplies",
      slug: "office-supplies",
      icon: <FaArchive size={48} />,
      description: "Essential office supplies for professional and personal use.",
      bgColor: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      name: "Art & Craft",
      slug: "art-craft",
      icon: <FaPalette size={48} />,
      description: "Creative supplies for artists and craft enthusiasts.",
      bgColor: "from-pink-500 to-rose-600"
    },
    {
      id: 5,
      name: "School Supplies",
      slug: "school-supplies",
      icon: <FaGraduationCap size={48} />,
      description: "Everything students need for academic success.",
      bgColor: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "Paper Products",
      slug: "paper-products",
      icon: <FaFileAlt size={48} />,
      description: "High-quality papers for printing and writing.",
      bgColor: "from-cyan-500 to-blue-600"
    }
  ];

  const sampleProducts = [
    // Notebooks & Journals
    { id: 1, name: "Spiral Notebook A4", price: 150, category: "Notebooks & Journals", description: "80 pages, ruled lines" },
    { id: 2, name: "Hardcover Journal", price: 350, category: "Notebooks & Journals", description: "100 pages, blank" },
    { id: 3, name: "Pocket Notebook", price: 80, category: "Notebooks & Journals", description: "50 pages, compact" },
    { id: 4, name: "Graph Paper Book", price: 200, category: "Notebooks & Journals", description: "Squared grid for technical drawing" },
    // Writing Instruments
    { id: 5, name: "Ball Point Pen Pack (10)", price: 120, category: "Writing Instruments", description: "Blue ink, medium tip" },
    { id: 6, name: "Gel Pen Set", price: 180, category: "Writing Instruments", description: "Assorted colors, smooth writing" },
    { id: 7, name: "Mechanical Pencil", price: 90, category: "Writing Instruments", description: "0.5mm lead, ergonomic grip" },
    { id: 8, name: "Permanent Marker", price: 60, category: "Writing Instruments", description: "Black, fine tip" },
    // Office Supplies
    { id: 9, name: "Stapler Heavy Duty", price: 450, category: "Office Supplies", description: "Full strip capacity" },
    { id: 10, name: "Paper Clips (100)", price: 50, category: "Office Supplies", description: "Standard size, metal" },
    { id: 11, name: "File Folder Set", price: 250, category: "Office Supplies", description: "A4 size, assorted colors" },
    { id: 12, name: "Binder Clips", price: 80, category: "Office Supplies", description: "Medium size pack" },
    // Art & Craft
    { id: 13, name: "Colored Pencils (24)", price: 300, category: "Art & Craft", description: "Pre-sharpened, vibrant colors" },
    { id: 14, name: "Watercolor Paint Set", price: 400, category: "Art & Craft", description: "12 colors, beginner kit" },
    { id: 15, name: "Art Brushes Set", price: 150, category: "Art & Craft", description: "Synthetic, various sizes" },
    { id: 16, name: "Craft Paper Pack", price: 120, category: "Art & Craft", description: "Assorted colors, A4" },
    // School Supplies
    { id: 17, name: "Geometry Box", price: 280, category: "School Supplies", description: "Compass, protractor, set squares" },
    { id: 18, name: "Scientific Calculator", price: 800, category: "School Supplies", description: "12-digit, solar powered" },
    { id: 19, name: "Eraser Pack", price: 40, category: "School Supplies", description: "White vinyl, latex-free" },
    { id: 20, name: "Ruler Set", price: 60, category: "School Supplies", description: "Plastic, 30cm + 15cm" },
    // Paper Products
    { id: 21, name: "A4 Paper Ream (500 sheets)", price: 450, category: "Paper Products", description: "80gsm, white" },
    { id: 22, name: "Photo Paper Glossy", price: 350, category: "Paper Products", description: "A4, 200gsm pack of 50" },
    { id: 23, name: "Colored Paper Pack", price: 150, category: "Paper Products", description: "A4, 10 colors" },
    { id: 24, name: "Sticky Notes (3x3)", price: 70, category: "Paper Products", description: "Yellow, 100 sheets" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".products-header",
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

      // Category headers animation
      gsap.fromTo(".category-header",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          rotationY: 10
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Product cards animation - fade and scale emerge effect
      gsap.fromTo(".product-card",
        {
          opacity: 0,
          scale: 0.3,
          filter: "blur(15px)",
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.8,
          stagger: {
            amount: 1.5,
            from: "start",
            grid: [4, 4]
          },
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ".product-card",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA section animation
      gsap.fromTo(".products-cta",
        {
          y: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".products-cta",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Enhanced hover effects for product cards
      gsap.utils.toArray(".product-card").forEach(card => {
        const hoverAnimation = gsap.to(card, {
          y: -12,
          scale: 1.03,
          rotationY: 5,
          boxShadow: `0 25px 50px rgba(6, 182, 212, 0.3)`,
          duration: 0.4,
          ease: "power2.out",
          paused: true
        });

        card.addEventListener("mouseenter", () => {
          hoverAnimation.play();
          gsap.to(card.querySelector('button'), {
            scale: 1.05,
            background: THEME.bg,
            color: THEME.accent,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          hoverAnimation.reverse();
          gsap.to(card.querySelector('button'), {
            scale: 1,
            background: THEME.accent,
            color: THEME.bg,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Additional scroll-triggered animations
      gsap.utils.toArray(".category-section").forEach((section, index) => {
        gsap.fromTo(section,
          {
            opacity: 0,
            y: 100,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Floating animation for category icons
      gsap.to(".category-icon", {
        y: -10,
        rotation: 5,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

      // Button hover animations
      gsap.utils.toArray(".product-button, .view-all-button, .cta-button").forEach(button => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: `0 10px 30px rgba(6, 182, 212, 0.4)`,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: THEME.bg, color: THEME.text, paddingBottom: "200px" }} className="pt-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="products-header text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: THEME.accent }}>
            Our Products
          </h1>
        </div>

        {/* Products Grid - Grouped by Category */}
        <div ref={categoriesRef}>
          {productCategories.map((category) => (
            <div key={category.id} className="category-section mb-16">
              {/* Category Header */}
              <div className="category-header rounded-t-2xl p-6 text-center mb-6" style={{ background: THEME.accent }}>
                <div className="category-icon mb-4 flex justify-center" style={{ color: THEME.bg }}>
                  {category.icon}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: THEME.bg }}>{category.name}</h3>
              </div>

              {/* Category Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sampleProducts
                  .filter(product => product.category === category.name)
                  .slice(0, 4) // Show 4 products per category
                  .map((product) => (
                    <div
                      key={product.id}
                      className="product-card rounded-2xl shadow-xl transition-all duration-300 p-5 text-center"
                      style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
                    >
                      <h4 className="text-base font-semibold mb-2" style={{ color: THEME.text }}>{product.name}</h4>
                      <p className="text-xs mb-3" style={{ color: THEME.muted }}>{product.description}</p>
                      <div className="text-xl font-bold mb-4" style={{ color: THEME.accent }}>Rs. {product.price}</div>
                      <button
                        onClick={() => {
                          const message = `I'm interested in ${product.name} - Rs. ${product.price} from ${category.name}`;
                          const encodedMessage = encodeURIComponent(message);
                          const whatsappUrl = `https://wa.me/923455110345?text=${encodedMessage}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                        className="product-button w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        style={{ background: THEME.accent, color: THEME.bg }}
                      >
                        <FaWhatsapp />
                        Order via WhatsApp
                      </button>
                    </div>
                  ))}
              </div>

              {/* View All Button */}
              <div className="text-center mt-8">
                <Link
                  to={`/products/${category.slug}`}
                  className="view-all-button py-3 px-8 rounded-lg font-semibold transition-all duration-300 inline-block"
                  style={{ background: THEME.surface, color: THEME.accent, border: `1px solid ${THEME.accent}` }}
                >
                  View All {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="products-cta mt-20 text-center rounded-2xl p-12" style={{ background: THEME.accent }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: THEME.bg }}>
            Need Something Specific?
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto" style={{ color: THEME.surface }}>
            Can't find what you're looking for? Contact us and we'll help you find the perfect stationery supplies for your needs.
          </p>
          <Link
            to="/contact"
            className="cta-button px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
            style={{ background: THEME.bg, color: THEME.accent }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
