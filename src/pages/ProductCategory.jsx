import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowLeft, FaStar, FaWhatsapp, FaBook, FaPen, FaClipboard, FaPalette, FaSchool, FaFileAlt } from 'react-icons/fa';
import { THEME } from '../theme';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProductCategory = () => {
  const { slug } = useParams();
  const headerRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const categoryData = {
    "notebooks-journals": {
      name: "Notebooks & Journals",
      icon: <FaBook size={40} />,
      description: "Premium quality notebooks, journals, and diaries for all your writing needs.",
      bgColor: "from-blue-500 to-purple-600",
      products: [
        { id: 1, name: "A4 Spiral Notebook", price: 150, description: "200 pages, ruled", rating: 4.5 },
        { id: 2, name: "Hardcover Journal", price: 350, description: "Premium leather cover, 300 pages", rating: 5 },
        { id: 3, name: "Pocket Notebook", price: 80, description: "Compact size, 100 pages", rating: 4 },
        { id: 4, name: "Graph Paper Book", price: 120, description: "A4 size, 150 pages", rating: 4.5 },
        { id: 5, name: "Executive Diary", price: 500, description: "Premium quality, yearly planner", rating: 5 },
        { id: 6, name: "Student Notebook Set", price: 400, description: "Pack of 5 notebooks", rating: 4.5 },
        { id: 7, name: "Composition Notebook", price: 100, description: "Marble cover, 200 pages", rating: 4.2 },
        { id: 8, name: "Travel Journal", price: 280, description: "Compact, lined pages for travelers", rating: 4.8 },
        { id: 9, name: "Bullet Journal", price: 320, description: "Dotted pages, minimalist design", rating: 4.7 },
        { id: 10, name: "Sketchbook", price: 220, description: "Unlined pages for drawing", rating: 4.6 },
        { id: 11, name: "Planner Notebook", price: 450, description: "Weekly and monthly layouts", rating: 4.9 },
        { id: 12, name: "Eco-Friendly Notebook", price: 180, description: "Recycled paper, 150 pages", rating: 4.3 },
        { id: 13, name: "Leather Bound Diary", price: 650, description: "Handcrafted, 250 pages", rating: 5 },
        { id: 14, name: "Single Subject Notebook", price: 90, description: "College ruled, 100 pages", rating: 4.1 },
        { id: 15, name: "Multi-Subject Notebook", price: 250, description: "Divided sections, 300 pages", rating: 4.4 },
        { id: 16, name: "Personalized Journal", price: 420, description: "Custom cover, 200 pages", rating: 4.8 }
      ]
    },
    "writing-instruments": {
      name: "Writing Instruments",
      icon: <FaPen size={40} />,
      description: "Complete collection of pens, pencils, markers, and highlighters.",
      bgColor: "from-green-500 to-teal-600",
      products: [
        { id: 1, name: "Ball Point Pen Set", price: 200, description: "Pack of 10 blue pens", rating: 4.5 },
        { id: 2, name: "Gel Pen Collection", price: 300, description: "Assorted colors, smooth writing", rating: 5 },
        { id: 3, name: "HB Pencils", price: 100, description: "Pack of 12 pencils", rating: 4 },
        { id: 4, name: "Marker Set", price: 450, description: "Permanent markers, 12 colors", rating: 4.5 },
        { id: 5, name: "Highlighter Pack", price: 250, description: "Fluorescent colors, 6 pieces", rating: 4.5 },
        { id: 6, name: "Fountain Pen", price: 800, description: "Premium quality, refillable", rating: 5 },
        { id: 7, name: "Rollerball Pen", price: 180, description: "Liquid ink, fine tip", rating: 4.3 },
        { id: 8, name: "Mechanical Pencil Set", price: 150, description: "0.7mm, assorted colors", rating: 4.6 },
        { id: 9, name: "Whiteboard Markers", price: 220, description: "Dry erase, 8 pack", rating: 4.4 },
        { id: 10, name: "Calligraphy Pen Set", price: 380, description: "Nibs and ink included", rating: 4.7 },
        { id: 11, name: "Erasable Pens", price: 120, description: "FriXion, black ink", rating: 4.2 },
        { id: 12, name: "Fine Liner Pens", price: 280, description: "0.3mm tip, 12 colors", rating: 4.8 },
        { id: 13, name: "Charcoal Pencils", price: 160, description: "Artist grade, set of 4", rating: 4.5 },
        { id: 14, name: "Brush Pens", price: 350, description: "Watercolor effect, 6 pack", rating: 4.9 },
        { id: 15, name: "Technical Pens", price: 420, description: "Precision drawing, 0.5mm", rating: 4.6 },
        { id: 16, name: "Multi-Color Pen", price: 90, description: "4 in 1, retractable", rating: 4.1 }
      ]
    },
    "office-supplies": {
      name: "Office Supplies",
      icon: <FaClipboard size={40} />,
      description: "Essential office supplies for professional and personal use.",
      bgColor: "from-orange-500 to-red-600",
      products: [
        { id: 1, name: "Heavy Duty Stapler", price: 600, description: "Metal construction, 50 sheet capacity", rating: 4.5 },
        { id: 2, name: "Paper Clips Box", price: 150, description: "500 pieces, assorted sizes", rating: 4 },
        { id: 3, name: "File Folders", price: 300, description: "Pack of 25, A4 size", rating: 4.5 },
        { id: 4, name: "Ring Binders", price: 250, description: "2-inch capacity, durable", rating: 4 },
        { id: 5, name: "Desk Organizer", price: 800, description: "Multi-compartment, wooden", rating: 5 },
        { id: 6, name: "Sticky Notes Set", price: 200, description: "Assorted colors and sizes", rating: 4.5 },
        { id: 7, name: "Hole Punch", price: 350, description: "2-hole, heavy duty", rating: 4.3 },
        { id: 8, name: "Scissors Set", price: 180, description: "Office and craft scissors", rating: 4.6 },
        { id: 9, name: "Tape Dispenser", price: 220, description: "Desktop, weighted base", rating: 4.4 },
        { id: 10, name: "Push Pins", price: 80, description: "100 pieces, colorful", rating: 4.2 },
        { id: 11, name: "Document Trays", price: 450, description: "Stackable, 3 tiers", rating: 4.7 },
        { id: 12, name: "Letter Opener", price: 120, description: "Metal blade, ergonomic", rating: 4.1 },
        { id: 13, name: "Magnifying Glass", price: 280, description: "10x magnification", rating: 4.5 },
        { id: 14, name: "Rubber Bands", price: 90, description: "Assorted sizes, 100 pack", rating: 4.0 },
        { id: 15, name: "Correction Tape", price: 160, description: "Precise applicator", rating: 4.3 },
        { id: 16, name: "Label Maker Tape", price: 320, description: "Compatible cartridges, 6 pack", rating: 4.6 }
      ]
    },
    "art-craft": {
      name: "Art & Craft",
      icon: <FaPalette size={40} />,
      description: "Creative supplies for artists and craft enthusiasts.",
      bgColor: "from-pink-500 to-rose-600",
      products: [
        { id: 1, name: "Colored Pencil Set", price: 500, description: "48 vibrant colors", rating: 5 },
        { id: 2, name: "Acrylic Paint Set", price: 800, description: "12 tubes, professional quality", rating: 4.5 },
        { id: 3, name: "Paint Brushes", price: 300, description: "Assorted sizes, synthetic bristles", rating: 4 },
        { id: 4, name: "Canvas Boards", price: 400, description: "Pack of 10, A4 size", rating: 4.5 },
        { id: 5, name: "Craft Paper Pack", price: 250, description: "Assorted colors, 50 sheets", rating: 4 },
        { id: 6, name: "Glue Stick Set", price: 180, description: "Pack of 6, washable", rating: 4.5 },
        { id: 7, name: "Oil Pastels", price: 220, description: "24 colors, smooth blending", rating: 4.6 },
        { id: 8, name: "Clay Modeling Kit", price: 350, description: "Air-dry clay, 1kg", rating: 4.3 },
        { id: 9, name: "Origami Paper", price: 120, description: "Assorted colors, 100 sheets", rating: 4.4 },
        { id: 10, name: "Fabric Markers", price: 280, description: "Permanent, 10 colors", rating: 4.7 },
        { id: 11, name: "Watercolor Pencils", price: 420, description: "24 colors, water soluble", rating: 4.8 },
        { id: 12, name: "Craft Scissors", price: 150, description: "Zigzag and straight blades", rating: 4.2 },
        { id: 13, name: "Beading Kit", price: 380, description: "Assorted beads and string", rating: 4.5 },
        { id: 14, name: "Drawing Pads", price: 200, description: "Spiral bound, 50 sheets", rating: 4.1 },
        { id: 15, name: "Stencil Set", price: 160, description: "Alphabet and numbers", rating: 4.3 },
        { id: 16, name: "Modeling Dough", price: 250, description: "Non-toxic, 12 colors", rating: 4.6 }
      ]
    },
    "school-supplies": {
      name: "School Supplies",
      icon: <FaSchool size={40} />,
      description: "Everything students need for academic success.",
      bgColor: "from-indigo-500 to-blue-600",
      products: [
        { id: 1, name: "Geometry Set", price: 350, description: "Complete set with compass, protractor", rating: 4.5 },
        { id: 2, name: "Scientific Calculator", price: 1200, description: "Advanced functions, solar powered", rating: 5 },
        { id: 3, name: "Eraser Set", price: 80, description: "Pack of 10, dust-free", rating: 4 },
        { id: 4, name: "Pencil Sharpener", price: 120, description: "Metal construction, dual hole", rating: 4.5 },
        { id: 5, name: "Ruler Set", price: 200, description: "15cm, 30cm, and protractor", rating: 4 },
        { id: 6, name: "School Bag", price: 1500, description: "Waterproof, multiple compartments", rating: 5 },
        { id: 7, name: "Lunch Box", price: 450, description: "Stainless steel, leak-proof", rating: 4.6 },
        { id: 8, name: "Water Bottle", price: 280, description: "Insulated, 500ml", rating: 4.7 },
        { id: 9, name: "Book Cover Set", price: 100, description: "Self-adhesive, assorted designs", rating: 4.2 },
        { id: 10, name: "Flash Cards", price: 180, description: "Math facts, 100 cards", rating: 4.4 },
        { id: 11, name: "Notebook Divider", price: 90, description: "Plastic tabs, 10 pack", rating: 4.1 },
        { id: 12, name: "Study Timer", price: 320, description: "Pomodoro technique, digital", rating: 4.5 },
        { id: 13, name: "High School Planner", price: 250, description: "Academic year, weekly view", rating: 4.3 },
        { id: 14, name: "Graphing Calculator", price: 1800, description: "TI-84 compatible", rating: 4.9 },
        { id: 15, name: "Art Smock", price: 400, description: "Waterproof, adjustable", rating: 4.2 },
        { id: 16, name: "Locker Organizer", price: 350, description: "Magnetic, multi-pocket", rating: 4.4 }
      ]
    },
    "paper-products": {
      name: "Paper Products",
      icon: <FaFileAlt size={40} />,
      description: "High-quality papers for printing and writing.",
      bgColor: "from-cyan-500 to-blue-600",
      products: [
        { id: 1, name: "A4 Copy Paper", price: 800, description: "500 sheets, 80gsm", rating: 4.5 },
        { id: 2, name: "Photo Paper", price: 600, description: "Glossy finish, 50 sheets", rating: 5 },
        { id: 3, name: "Colored Paper Pack", price: 300, description: "Assorted colors, 100 sheets", rating: 4 },
        { id: 4, name: "Chart Paper", price: 400, description: "Large size, pack of 25", rating: 4.5 },
        { id: 5, name: "Sticky Notes", price: 150, description: "Assorted colors, 12 pads", rating: 4 },
        { id: 6, name: "Cardstock Paper", price: 500, description: "Heavy weight, 50 sheets", rating: 4.5 },
        { id: 7, name: "Legal Size Paper", price: 650, description: "500 sheets, 75gsm", rating: 4.3 },
        { id: 8, name: "Matte Photo Paper", price: 550, description: "A4, 200gsm, 50 sheets", rating: 4.6 },
        { id: 9, name: "Construction Paper", price: 200, description: "Heavyweight, 50 sheets", rating: 4.4 },
        { id: 10, name: "Index Cards", price: 120, description: "3x5 inches, 100 pack", rating: 4.2 },
        { id: 11, name: "Tissue Paper", price: 180, description: "Assorted colors, 20 sheets", rating: 4.1 },
        { id: 12, name: "Tracing Paper", price: 250, description: "A4, 50 sheets", rating: 4.3 },
        { id: 13, name: "Carbon Paper", price: 140, description: "For copying, 10 sheets", rating: 4.0 },
        { id: 14, name: "Vellum Paper", price: 380, description: "Translucent, A4 pack", rating: 4.7 },
        { id: 15, name: "Newsprint Pad", price: 220, description: "18x24 inches, 50 sheets", rating: 4.5 },
        { id: 16, name: "Envelopes Pack", price: 300, description: "White, #10 size, 100 pack", rating: 4.4 }
      ]
    }
  };

  const category = categoryData[slug];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".category-header",
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotationX: -20
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

      // Simple products grid animation - fade in from bottom
      gsap.fromTo(".product-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA section animation
      gsap.fromTo(".category-cta",
        {
          y: 40,
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
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Redesigned enhanced hover effects
      gsap.utils.toArray(".product-card").forEach(card => {
        const hoverAnimation = gsap.to(card, {
          y: -25,
          scale: 1.1,
          rotationY: 20,
          rotationX: 5,
          boxShadow: `0 35px 70px rgba(6, 182, 212, 0.5), 0 0 30px rgba(6, 182, 212, 0.3)`,
          duration: 0.6,
          ease: "power2.out",
          paused: true
        });

        card.addEventListener("mouseenter", () => {
          hoverAnimation.play();
          gsap.to(card.querySelector('.product-stars'), {
            scale: 1.2,
            rotation: 10,
            duration: 0.4,
            ease: "elastic.out(1, 0.5)"
          });
          gsap.to(card.querySelector('.product-price'), {
            scale: 1.15,
            textShadow: `0 0 20px ${THEME.accent}`,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.product-button'), {
            scale: 1.05,
            boxShadow: `0 10px 30px rgba(6, 182, 212, 0.4)`,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        card.addEventListener("mouseleave", () => {
          hoverAnimation.reverse();
          gsap.to(card.querySelector('.product-stars'), {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.product-price'), {
            scale: 1,
            textShadow: "none",
            duration: 0.4,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.product-button'), {
            scale: 1,
            boxShadow: "none",
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });

      // Button hover animations
      gsap.utils.toArray(".product-button, .cta-button").forEach(button => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: `0 15px 35px rgba(6, 182, 212, 0.5)`,
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
  }, [category]);

  if (!category) {
    return (
      <div style={{ minHeight: "100vh", background: THEME.bg, color: THEME.text }} className="pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: THEME.text }}>Category Not Found</h1>
          <p className="mb-8" style={{ color: THEME.muted }}>The requested product category does not exist.</p>
          <Link to="/products" className="cta-button px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-block" style={{ background: THEME.accent, color: THEME.bg }}>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-400'} text-sm`}
      />
    ));
  };

  return (
    <div style={{ minHeight: "100vh", background: THEME.bg, color: THEME.text, paddingBottom: "200px" }} className="pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center mb-8 transition-all duration-300 hover:scale-105"
          style={{ color: THEME.accent }}
        >
          <FaArrowLeft className="mr-2" />
          Back to Products
        </Link>

        {/* Category Header */}
        <div ref={headerRef} className="category-header rounded-2xl p-8 text-center mb-8" style={{ background: THEME.accent }}>
          <div className="mb-4 flex justify-center" style={{ color: THEME.bg }}>{category.icon}</div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: THEME.bg }}>{category.name}</h1>
          <p className="text-base max-w-2xl mx-auto" style={{ color: THEME.surface }}>{category.description}</p>
        </div>

        {/* Products Grid */}
        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="product-card rounded-xl shadow-lg transition-all duration-300 p-4 text-center"
              style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: THEME.text }}>{product.name}</h3>
              <p className="text-xs mb-3 leading-relaxed" style={{ color: THEME.muted }}>{product.description}</p>

              {/* Rating */}
              <div className="flex items-center justify-center mb-3">
                <div className="product-stars flex mr-2">
                  {renderStars(product.rating)}
                </div>
                <span className="text-xs" style={{ color: THEME.accent }}>({product.rating})</span>
              </div>

              {/* Price */}
              <div className="product-price text-xl font-bold mb-4" style={{ color: THEME.accent }}>Rs. {product.price}</div>

              {/* Action Button */}
              <button
                onClick={() => {
                  const message = `I'm interested in ${product.name} - Rs. ${product.price} from ${category.name}`;
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappUrl = `https://wa.me/923455110345?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="product-button w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                style={{ background: THEME.accent, color: THEME.bg }}
              >
                <FaWhatsapp />
                Order
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="category-cta mt-16 text-center rounded-2xl p-12" style={{ background: THEME.surface, border: `1px solid ${THEME.border}` }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: THEME.text }}>
            Need Something Specific?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: THEME.muted }}>
            Can't find the exact item you're looking for? Contact us for custom orders
            or to check availability of specific products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cta-button px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block" style={{ background: THEME.accent, color: THEME.bg }}>
              Contact Us
            </Link>
            <Link to="/contact" className="cta-button px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block" style={{ background: THEME.surface, color: THEME.accent, border: `1px solid ${THEME.accent}` }}>
              Request Custom Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
