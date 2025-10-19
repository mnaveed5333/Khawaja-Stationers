import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { FaWhatsapp } from "react-icons/fa";
import Services from './pages/Services';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import Location from './pages/Location';
import Facilities from './pages/Facilities';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <a
          href="https://wa.me/923455110345"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-7 right-7 z-50 hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp className="text-green-500 text-[50px] hover:text-green-600" />
        </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductCategory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/location" element={<Location />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
