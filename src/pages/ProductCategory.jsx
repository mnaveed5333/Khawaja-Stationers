import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCategory = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();

  const categoryData = {
    "notebooks-journals": {
      name: "Notebooks & Journals",
      icon: "📚",
      description: "Premium quality notebooks, journals, and diaries for all your writing needs.",
      bgColor: "from-blue-500 to-purple-600",
      products: [
        { id: 1, name: "A4 Spiral Notebook", price: 150, description: "200 pages, ruled", rating: 4.5, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Hardcover Journal", price: 350, description: "Premium leather cover, 300 pages", rating: 5, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Pocket Notebook", price: 80, description: "Compact size, 100 pages", rating: 4, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Graph Paper Book", price: 120, description: "A4 size, 150 pages", rating: 4.5, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Executive Diary", price: 500, description: "Premium quality, yearly planner", rating: 5, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "Student Notebook Set", price: 400, description: "Pack of 5 notebooks", rating: 4.5, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    "writing-instruments": {
      name: "Writing Instruments",
      icon: "✏️",
      description: "Complete collection of pens, pencils, markers, and highlighters.",
      bgColor: "from-green-500 to-teal-600",
      products: [
        { id: 1, name: "Ball Point Pen Set", price: 200, description: "Pack of 10 blue pens", rating: 4.5, image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Gel Pen Collection", price: 300, description: "Assorted colors, smooth writing", rating: 5, image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "HB Pencils", price: 100, description: "Pack of 12 pencils", rating: 4, image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Marker Set", price: 450, description: "Permanent markers, 12 colors", rating: 4.5, image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Highlighter Pack", price: 250, description: "Fluorescent colors, 6 pieces", rating: 4.5, image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "Fountain Pen", price: 800, description: "Premium quality, refillable", rating: 5, image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    "office-supplies": {
      name: "Office Supplies",
      icon: "📋",
      description: "Essential office supplies for professional and personal use.",
      bgColor: "from-orange-500 to-red-600",
      products: [
        { id: 1, name: "Heavy Duty Stapler", price: 600, description: "Metal construction, 50 sheet capacity", rating: 4.5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Paper Clips Box", price: 150, description: "500 pieces, assorted sizes", rating: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "File Folders", price: 300, description: "Pack of 25, A4 size", rating: 4.5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Ring Binders", price: 250, description: "2-inch capacity, durable", rating: 4, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Desk Organizer", price: 800, description: "Multi-compartment, wooden", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "Sticky Notes Set", price: 200, description: "Assorted colors and sizes", rating: 4.5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    "art-craft": {
      name: "Art & Craft",
      icon: "🎨",
      description: "Creative supplies for artists and craft enthusiasts.",
      bgColor: "from-pink-500 to-rose-600",
      products: [
        { id: 1, name: "Colored Pencil Set", price: 500, description: "48 vibrant colors", rating: 5, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Acrylic Paint Set", price: 800, description: "12 tubes, professional quality", rating: 4.5, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Paint Brushes", price: 300, description: "Assorted sizes, synthetic bristles", rating: 4, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Canvas Boards", price: 400, description: "Pack of 10, A4 size", rating: 4.5, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Craft Paper Pack", price: 250, description: "Assorted colors, 50 sheets", rating: 4, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "Glue Stick Set", price: 180, description: "Pack of 6, washable", rating: 4.5, image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    "school-supplies": {
      name: "School Supplies",
      icon: "🎒",
      description: "Everything students need for academic success.",
      bgColor: "from-indigo-500 to-blue-600",
      products: [
        { id: 1, name: "Geometry Set", price: 350, description: "Complete set with compass, protractor", rating: 4.5, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Scientific Calculator", price: 1200, description: "Advanced functions, solar powered", rating: 5, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Eraser Set", price: 80, description: "Pack of 10, dust-free", rating: 4, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Pencil Sharpener", price: 120, description: "Metal construction, dual hole", rating: 4.5, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Ruler Set", price: 200, description: "15cm, 30cm, and protractor", rating: 4, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "School Bag", price: 1500, description: "Waterproof, multiple compartments", rating: 5, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" }
      ]
    },
    "paper-products": {
      name: "Paper Products",
      icon: "📄",
      description: "High-quality papers for printing and writing.",
      bgColor: "from-cyan-500 to-blue-600",
      products: [
        { id: 1, name: "A4 Copy Paper", price: 800, description: "500 sheets, 80gsm", rating: 4.5, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Photo Paper", price: 600, description: "Glossy finish, 50 sheets", rating: 5, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Colored Paper Pack", price: 300, description: "Assorted colors, 100 sheets", rating: 4, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Chart Paper", price: 400, description: "Large size, pack of 25", rating: 4.5, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Sticky Notes", price: 150, description: "Assorted colors, 12 pads", rating: 4, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "Cardstock Paper", price: 500, description: "Heavy weight, 50 sheets", rating: 4.5, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80" }
      ]
    }
  };

  const category = categoryData[slug];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-900 text-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-300 mb-8">The requested product category does not exist.</p>
          <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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

  const handleAddToCart = (product) => {
    addToCart({ ...product, category: slug });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Back to Products
        </Link>

        {/* Category Header */}
        <div className={`bg-gradient-to-r ${category.bgColor} rounded-2xl p-12 text-center mb-12`}>
          <div className="text-8xl mb-6">{category.icon}</div>
          <h1 className="text-5xl font-bold text-white mb-4">{category.name}</h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">{category.description}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 hover:border-blue-500"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-400 text-sm">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="text-3xl font-bold text-green-400 mb-6">Rs. {product.price}</div>

                {/* Action Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
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

export default ProductCategory;
