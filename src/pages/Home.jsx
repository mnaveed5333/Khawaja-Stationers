// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { FaStar, FaRegStar, FaStarHalfAlt, FaShoppingCart, FaPrint, FaLanguage, FaFileAlt } from "react-icons/fa";

const Home = () => {
  const reviews = [
    {
      text: "Khawaja Stationers and Stamp Chamber has been my go-to place for all stationery needs. Quality products and excellent service for over 10 years!",
      name: "Dr. Sarah Ahmed (Rawalpindi)",
      role: "University Professor",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      stars: 5,
    },
    {
      text: "Best printing services in the city! They handled my thesis printing perfectly and the translation service was spot-on.",
      name: "Muhammad Hassan (Islamabad)",
      role: "Graduate Student",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      stars: 4.5,
    },
    {
      text: "Reliable stamp paper vendor with quick service. Their legal documentation support saved me so much time.",
      name: "Advocate Fatima Khan (Rawalpindi)",
      role: "Legal Professional",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
      stars: 5,
    },
    {
      text: "Amazing variety of stationery items! From basic pens to premium notebooks, they have everything at reasonable prices.",
      name: "Ali Raza (Lahore)",
      role: "Business Owner",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      stars: 4.5,
    },
    {
      text: "Their translation services are professional and accurate. Helped me with multiple language documents efficiently.",
      name: "Maria Gonzalez (Spain)",
      role: "International Student",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
      stars: 5,
    },
    {
      text: "Three decades of trust! My family has been shopping here since I was a child. Quality never disappoints.",
      name: "Tariq Mahmood (Rawalpindi)",
      role: "Local Resident",
      img: "https://randomuser.me/api/portraits/men/70.jpg",
      stars: 4.5,
    },
  ];

  const services = [
    {
      icon: <FaShoppingCart className="text-4xl text-blue-400 mb-4" />,
      title: "Stationery Supplies",
      description: "Complete range of pens, pencils, notebooks, and office supplies for all your needs."
    },
    {
      icon: <FaPrint className="text-4xl text-green-400 mb-4" />,
      title: "Printing Services",
      description: "High-quality printing for documents, photos, and business materials with professional results."
    },
    {
      icon: <FaFileAlt className="text-4xl text-purple-400 mb-4" />,
      title: "Stamp Paper",
      description: "Authorized vendor for stamp paper and legal documentation services including affidavits and contracts."
    },
    {
      icon: <FaLanguage className="text-4xl text-orange-400 mb-4" />,
      title: "Translation Services",
      description: "Professional translation services in all languages worldwide for your documentation needs."
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Slider */}
      <section className="mb-12">
        <Slider />
      </section>

      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-400">Khawaja Stationers and Stamp Chamber</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Since <span className="font-semibold text-green-400">1990</span>, we've been Rawalpindi's trusted 
            <span className="font-semibold text-white"> one-stop shop</span> for quality stationery, professional printing, 
            stamp paper services, and expert translation solutions. Three decades of excellence in serving our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center">
              Explore Products
            </Link>
            <Link to="/services" className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors inline-block text-center">
              Our Services
            </Link>
          </div>
        </section>

        

       

        {/* Statistics Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-12">30+ Years of Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-blue-100">Years of Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">10,000+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-100">Languages Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
              >
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.text}"</p>

                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => {
                    if (i + 1 <= Math.floor(review.stars))
                      return <FaStar key={i} className="text-yellow-400" />;
                    if (i < review.stars)
                      return <FaStarHalfAlt key={i} className="text-yellow-400" />;
                    return <FaRegStar key={i} className="text-yellow-400" />;
                  })}
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-center">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-400"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-white">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Contact us today for stationery supplies, printing services, or any documentation needs. We're here to help!</p>
          <Link to="/contact" className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">
            Get In Touch
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;