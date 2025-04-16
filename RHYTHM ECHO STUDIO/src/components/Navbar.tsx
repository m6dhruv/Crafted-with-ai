
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
      ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white font-heading">
            RHYTHM <span className="text-neon-purple">ECHO</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#classes" className="nav-link">Classes</a>
          <a href="#instructors" className="nav-link">Instructors</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center">
          <a href="#" className="social-icon" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="social-icon" aria-label="Youtube">
            <Youtube size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-darker-bg pt-24 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          <a href="#home" className="text-xl" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" className="text-xl" onClick={toggleMobileMenu}>About</a>
          <a href="#classes" className="text-xl" onClick={toggleMobileMenu}>Classes</a>
          <a href="#instructors" className="text-xl" onClick={toggleMobileMenu}>Instructors</a>
          <a href="#gallery" className="text-xl" onClick={toggleMobileMenu}>Gallery</a>
          <a href="#testimonials" className="text-xl" onClick={toggleMobileMenu}>Testimonials</a>
          <a href="#contact" className="text-xl" onClick={toggleMobileMenu}>Contact</a>

          <div className="flex space-x-6 mt-8">
            <a href="#" className="social-icon" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="social-icon" aria-label="Youtube">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
