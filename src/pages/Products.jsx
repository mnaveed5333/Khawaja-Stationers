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
      products: ["Spiral Notebooks", "Hardcover Journals", "Pocket Notebooks", "Graph Paper Books"],
      bgColor: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Writing Instruments",
      slug: "writing-instruments",
      icon: "✏️",
      description: "Complete collection of pens, pencils, markers, and highlighters.",
      products: ["Ball Point Pens", "Gel Pens", "Pencils", "Markers", "Highlighters"],
      bgColor: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Office Supplies",
      slug: "office-supplies",
      icon: "📋",
      description: "Essential office supplies for professional and personal use.",
      products: ["Staplers", "Paper Clips", "Folders", "Binders", "Organizers"],
      bgColor: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      name: "Art & Craft",
      slug: "art-craft",
      icon: "🎨",
      description: "Creative supplies for artists and craft enthusiasts.",
      products: ["Colored Pencils", "Paints", "Brushes", "Canvas", "Craft Paper"],
      bgColor: "from-pink-500 to-rose-600"
    },
    {
      id: 5,
      name: "School Supplies",
      slug: "school-supplies",
      icon: "🎒",
      description: "Everything students need for academic success.",
      products: ["Geometry Sets", "Calculators", "Erasers", "Sharpeners", "Rulers"],
      bgColor: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      name: "Paper Products",
      slug: "paper-products",
      icon: "📄",
      description: "High-quality papers for printing and writing.",
      products: ["A4 Paper", "Photo Paper", "Colored Paper", "Chart Paper", "Sticky Notes"],
      bgColor: "from-cyan-500 to-blue-600"
    }
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
            Discover our comprehensive range of high-quality stationary products. From basic essentials to premium supplies, 
            we have everything you need for school, office, and creative projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.bgColor} p-6 text-center`}>
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Product List */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">Featured Items:</h4>
                  {category.products.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-200">{product}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  to={`/products/${category.slug}`}
                  className="block w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View All Items
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-800 rounded-2xl p-12">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Need Something Specific?
                  </h2>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Can't find the exact item you're looking for? Contact us for custom orders 
                    or to check availability of specific products.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Contact Us
                    </Link>
                    <Link to="/contact" className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-white hover:text-white transition-colors">
                      Request Custom Order
                    </Link>
                  </div>
                </div>
      </div>
    </div>
  );
};

export default Products;