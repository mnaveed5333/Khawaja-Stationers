import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const productCategories = [
    {
      id: 1,
      name: "Notebooks & Journals",
      slug: "notebooks-journals",
      icon: "📚",
      description: "Premium quality notebooks, journals, and diaries for all your writing needs.",
      bgColor: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Writing Instruments",
      slug: "writing-instruments",
      icon: "✏️",
      description: "Complete collection of pens, pencils, markers, and highlighters.",
      bgColor: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Office Supplies",
      slug: "office-supplies",
      icon: "📋",
      description: "Essential office supplies for professional and personal use.",
      bgColor: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      name: "Art & Craft",
      slug: "art-craft",
      icon: "🎨",
      description: "Creative supplies for artists and craft enthusiasts.",
      bgColor: "from-pink-500 to-rose-600"
    },
    {
      id: 5,
      name: "School Supplies",
      slug: "school-supplies",
      icon: "🎒",
      description: "Everything students need for academic success.",
      bgColor: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "Paper Products",
      slug: "paper-products",
      icon: "📄",
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

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality stationery products. From basic essentials to premium supplies,
            we have everything you need for school, office, and creative projects.
          </p>
        </div>

        {/* Products Grid - Grouped by Category */}
        {productCategories.map((category) => (
          <div key={category.id} className="mb-16">
            {/* Category Header */}
            <div className={`bg-gradient-to-r ${category.bgColor} rounded-t-2xl p-6 text-center mb-6`}>
              <div className="text-6xl mb-4">{category.icon}</div>
              <h3 className="text-3xl font-bold text-white">{category.name}</h3>
              <p className="text-blue-100 mt-2">{category.description}</p>
            </div>

            {/* Category Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sampleProducts
                .filter(product => product.category === category.name)
                .slice(0, 4) // Show 4 products per category
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-green-500 p-6 text-center"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">{product.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">Rs. {product.price}</div>
                    <button
                      onClick={() => {
                        const message = `I'm interested in ${product.name} - Rs. ${product.price} from ${category.name}`;
                        const encodedMessage = encodeURIComponent(message);
                        const whatsappUrl = `https://wa.me/923455110345?text=${encodedMessage}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Order via WhatsApp
                    </button>
                  </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
              <Link
                to={`/products/${category.slug}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View All {category.name}
              </Link>
            </div>
          </div>
        ))}

        {/* Call to Action Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Something Specific?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us and we'll help you find the perfect stationery supplies for your needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
