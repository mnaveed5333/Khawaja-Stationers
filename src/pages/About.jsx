// pages/About.jsx
import React from "react";

const About = () => {
  const services = [
    {
      icon: "📚",
      title: "Stationery Items",
      description: "Vast collection of pens, pencils, notebooks, and many more essential stationery items for all your needs."
    },
    {
      icon: "🖨️",
      title: "Printing Services",
      description: "Professional printing services for documents, photos, and business materials with high-quality results."
    },
    {
      icon: "📜",
      title: "Stamp Paper",
      description: "Authorized vendor providing stamp paper for affidavits, contracts, and various legal documentation needs."
    },
    {
      icon: "🌍",
      title: "Translation Services",
      description: "Professional translation services in all languages of the world for your documentation requirements."
    }
  ];

  const team = [
    {
      name: "Muhammad Khawaja",
      role: "Founder & Owner",
      experience: "30+ Years Experience",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ahmed Khawaja",
      role: "Store Manager",
      experience: "15+ Years Experience",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Fatima Ali",
      role: "Translation Specialist",
      experience: "10+ Years Experience",
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Hassan Sheikh",
      role: "Printing Supervisor",
      experience: "12+ Years Experience",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="mt-5">
      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-6 py-16">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
            About Khawaja Stationers and Stamp Chamber
          </h1>

          {/* Main Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-green-500">
                Our Legacy Since 1990
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Since <span className="font-semibold text-white">1990</span>, Khawaja Stationers and Stamp Chamber has been a
                <span className="font-semibold text-blue-400"> cornerstone of Rawalpindi</span>, providing a wide range of
                essential services and products. Our one-stop shop offers stationery, printing, stamp paper and translation
                services, catering to the diverse needs of individuals, businesses and institutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We offer a <span className="font-semibold text-white">vast amount of stationery items</span> including 
                pens, pencils, notebooks and many more items. As an <span className="font-semibold text-green-400">authorized vendor</span>, 
                we provide stamp paper and facilitate various documentation needs including affidavits, contracts and many more.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We also offer <span className="font-semibold text-purple-400">translation services in all languages of the world</span>. 
                With our <span className="font-semibold text-white">three decades of experience</span>, we've earned a reputation of excellence. 
                Our knowledgeable team is committed to delivering personalized service, ensuring that your needs are met effectively.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-600 rounded-xl opacity-20 blur-lg"></div>
              <img
                src="/WhatsApp Image 2025-09-28 at 15.13.27_e4727d67.jpg"
                alt="Khawaja Stationers and Stamp Chamber Store"
                className="rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>

         


          {/* Why Choose Us Section */}
          <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose Khawaja Stationers and Stamp Chamber
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">30+ Years Experience</h3>
                <p className="text-gray-300">Three decades of trusted service and expertise in Rawalpindi.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Authorized Vendor</h3>
                <p className="text-gray-300">Official stamp paper vendor with complete legal documentation services.</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Translation</h3>
                <p className="text-gray-300">Professional translation services in all languages worldwide.</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default About;