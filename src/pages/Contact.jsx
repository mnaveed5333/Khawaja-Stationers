import React, { useState } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = "Invalid phone number";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const whatsappNumber = "923455110345";
    const message = `*Contact Form Submission from Khawaja Stationers and Stamp Chamber*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}\n\nPlease reply at your earliest convenience.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    // Reset form
    setFormData({ name: "", phone: "", subject: "", message: "" });
  };

  const locations = [
    {
      name: "Stadium Road Branch",
      address: "Shop No. 5, St. No. 8, Stadium Road, Rawalpindi 46000",
      phone: "+92 345 5110345",
      map: "https://maps.app.goo.gl/Vc8tptv7upuzJGDs6",
    },
    {
      name: "Tulsa Road Branch",
      address: "Shop No. 1, Main Tulsa Road, Main Tulsa, Rawalpindi",
      phone: "+92 300 5005364",
      map: "https://maps.app.goo.gl/eitApW6ECGJAZP66A",
    },
    {
      name: "Stadium Road Stamp Paper",
      address: "Stadium Road, Rawalpindi",
      phone: "+92 345 5110345",
      map: "https://maps.app.goo.gl/oPH461R6erpW1FyA8",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're here to assist with all your stationery and stamp needs.
            Whether it's product inquiries, bulk orders, or custom requests —
            Khawaja Stationers is just a message away.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div className="bg-gray-800 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <p className="text-gray-400 text-sm text-center mb-6">Fill out the form and send directly to WhatsApp for instant response!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:border-green-400 transition-colors ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="Your name"
                    aria-describedby="name-error"
                  />
                  {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:border-green-400 transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="Your phone (e.g., +92 3xx xxxxxxx)"
                    aria-describedby="phone-error"
                  />
                  {errors.phone && <p id="phone-error" className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:border-green-400 transition-colors ${errors.subject ? 'border-red-500' : 'border-gray-600'}`}
                  aria-describedby="subject-error"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="custom-request">Custom Request</option>
                  <option value="attestation-service">Attestation Service</option>
                  <option value="printing-service">Printing Service</option>
                  <option value="stamp-paper">Stamp Paper</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && <p id="subject-error" className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:outline-none focus:border-green-400 transition-colors resize-vertical ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="Tell us how we can help..."
                  aria-describedby="message-error"
                ></textarea>
                {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Send via WhatsApp
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Your message will open in WhatsApp. We respond within minutes!
            </p>
          </div>

          {/* Right: Locations */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-3xl text-red-400 mr-3" />
              <h2 className="text-2xl font-bold">Our Locations</h2>
            </div>
            <div className="space-y-6">
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition"
                >
                  <h3 className="text-lg font-semibold mb-2">{loc.name}</h3>
                  <p className="text-gray-300 mb-2">{loc.address}</p>
                  <p className="text-gray-400 mb-3 flex items-center">
                    <FaPhone className="mr-2" />
                    <a href={`tel:${loc.phone}`} className="hover:text-green-400 transition">{loc.phone}</a>
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${loc.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-green-700 transition flex-1 text-center"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={loc.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-3 py-2 rounded-lg font-semibold hover:bg-red-700 transition flex-1 text-center"
                    >
                      View Map
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
