import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { FaWhatsapp } from "react-icons/fa";
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <a
        href="https://wa.me/923455110345"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="fixed bottom-7 right-7 text-green-500 z-100 text-[50px] " />
      </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductCategory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;