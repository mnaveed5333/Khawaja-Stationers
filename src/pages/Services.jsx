// pages/Services.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Services = () => {
  const attestationServices = [
  {
    code: "G2",
    service: "IBCC Attestation",
    cost: "Rs. 10,000",
    duration: "2-4 Days"
  },
  {
    code: "G1.5",
    service: "HEC Attestation",
    cost: "Rs. 20,000",
    duration: "3-4 Days"
  },
  {
    code: "G2",
    service: "HEC Attestation",
    cost: "Rs. 20,000",
    duration: "3-4 Days"
  },
  {
    code: "G1.5",
    service: "MOFA Attestation",
    cost: "Rs. 4,000",
    duration: "2-3 Days"
  },
  {
    code: "G1",
    service: "UAE Embassy Attestation",
    cost: "Rs. 14,000",
    duration: "5 Days"
  },
  {
    code: "G2",
    service: "Saudi Embassy Attestation",
    cost: "Rs. 16,500",
    duration: "2 Days"
  },
  {
    code: "G2",
    service: "Oman Embassy Attestation",
    cost: "Rs. 10,500",
    duration: "2 Days"
  },
  {
    code: "G2",
    service: "Qatar Embassy Attestation",
    cost: "Rs. 14,500",
    duration: "3 Days"
  },
  {
    code: "T1.5",
    service: "Verification From RWP Board (Local)",
    cost: "Rs. 7,500",
    duration: "2-3 Days"
  },
  {
    code: "T2",
    service: "Verification From RWP Board (Abroad)",
    cost: "Rs. 10,000",
    duration: "2-3 Days"
  },
  {
    code: "T2",
    service: "Verification From Other Boards",
    cost: "Rs. 10,000",
    duration: "10-14 Days"
  }
]

  ;

  const composingServices = [
    {
      title: "1st Box: English Composing & Typing",
      description: "Professional English document composition and typing services."
    },
    {
      title: "2nd Box: Urdu Composing & Typing",
      description: "Expert Urdu document composition and typing for official needs."
    },
    {
      title: "3rd Box: English, Urdu School Papers Composing",
      description: "School assignment and paper composition in English and Urdu."
    },
    {
      title: "4th Box: English, Urdu Application Composing etc.",
      description: "Application forms, letters, and various document composition."
    }
  ];

  const services = [
    {
      title: "A3/A4 Stamp Paper",
      description: "Authentic A3 and A4 stamp paper for legal documents and official paperwork.",
      icon: "📜"
    },
    {
      title: "Chamber PVC Card",
      description: "Professional PVC chamber cards for official identification and membership.",
      icon: "🆔"
    },
    {
      title: "Spiral Stapler",
      description: "High-quality spiral binding and stapling services for documents and reports.",
      icon: "📚"
    },
    {
      title: "Color Printing",
      description: "Vibrant color printing for photos, brochures, and marketing materials.",
      icon: "🖨️"
    },
    {
      title: "Scanning Services",
      description: "Fast and accurate document scanning with digital file conversion.",
      icon: "📷"
    },
    {
      title: "Professional English CV",
      description: "Expert CV writing and formatting services in professional English.",
      icon: "📄"
    },
    {
      title: "Composing Services",
      description: "Professional document composition and layout design for all needs.",
      icon: "✏️"
    },
    {
      title: "Admission Form",
      description: "Complete admission form preparation and submission assistance.",
      icon: "📝"
    },
    {
      title: "Passport Services",
      description: "Full passport application and renewal services with expert guidance.",
      icon: "🛂"
    },
    {
      title: "Job Application",
      description: "Professional job application preparation and submission support.",
      icon: "💼"
    },
    {
      title: "Transfer Services",
      description: "Document transfer and certification services for official purposes.",
      icon: "🔄"
    },
    {
      title: "E-Nadra Services",
      description: "Online NADRA services including CNIC, birth certificates, and more.",
      icon: "💻"
    },
    {
      title: "Motor Vehicle Documents",
      description: "Complete motor vehicle registration and documentation services.",
      icon: "🚗"
    },
    {
      title: "Notary Oath",
      description: "Professional notary public services for oaths and affidavits.",
      icon: "⚖️"
    },
    {
      title: "15 Days Service",
      description: "Express 15-day turnaround for urgent document processing and printing.",
      icon: "⏱️"
    },
    {
      title: "Visiting Card",
      description: "Custom visiting card design and printing with premium quality.",
      icon: "📇"
    },
    {
      title: "Panaflex Printing",
      description: "High-quality panaflex banner and flex printing for advertising.",
      icon: "🪧"
    },
    {
      title: "Rubber Making Stamp",
      description: "Custom rubber stamp creation for official and business use.",
      icon: "🔴"
    },
    {
      title: "General Printing",
      description: "Comprehensive printing solutions for all types of documents and materials.",
      icon: "🖨️"
    }
  ];

  return (
    <div className="mt-8">
      <div className="bg-gray-900 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>

          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Since 1990, we've been providing comprehensive stationery and documentation services 
            to meet all your personal, educational, and business needs.
          </p>

          {/* Attestation Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Attestation Services Rate List</h2>
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl">
              <table className="w-full text-sm text-left text-gray-300">
                <thead className="text-xs uppercase bg-gray-700 text-white">
                  <tr>
                    <th className="px-6 py-3">Code</th>
                    <th className="px-6 py-3">Service</th>
                    <th className="px-6 py-3">Cost</th>
                    <th className="px-6 py-3">Duration</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {attestationServices.map((item, index) => (
                    <tr key={index} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700">
                      <td className="px-6 py-4 font-medium">{item.code}</td>
                      <td className="px-6 py-4 font-medium">{item.service}</td>
                      <td className="px-6 py-4">{item.cost}</td>
                      <td className="px-6 py-4">{item.duration}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => {
                            const message = `*Attestation Service Inquiry from Khawaja Stationers and Stamp Chamber*\n\n*Service Requested:*\n${item.service}\n*Code:* ${item.code}\n*Estimated Cost:* ${item.cost}\n*Duration:* ${item.duration}\n\nPlease confirm availability and provide more details.`;
                            const encodedMessage = encodeURIComponent(message);
                            const whatsappUrl = `https://wa.me/923455110345?text=${encodedMessage}`;
                            window.open(whatsappUrl, '_blank');
                          }}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors flex items-center"
                        >
                          <FaWhatsapp className="mr-1" />
                          Request
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </section>

          {/* Composing Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Composing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {composingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-green-400"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <button
                    onClick={() => {
                      const message = `*Composing Service Inquiry from Khawaja Stationers and Stamp Chamber*\n\n*Service Requested:*\n${service.title}\n\n*Description:*\n${service.description}\n\nPlease provide me with more details about this composing service and pricing.`;
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/923455110345?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center mx-auto"
                  >
                    <FaWhatsapp className="mr-2" />
                    Request Service
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-400 hover:transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <button
                  onClick={() => {
                    const message = `*Service Inquiry from Khawaja Stationers and Stamp Chamber*\n\n*Service Requested:*\n${service.title}\n\n*Description:*\n${service.description}\n\nPlease provide me with more details about this service and pricing.`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/923455110345?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center mx-auto"
                >
                  <FaWhatsapp className="mr-2" />
                  Request Service
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;