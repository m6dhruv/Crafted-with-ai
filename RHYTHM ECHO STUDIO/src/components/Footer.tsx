
import React from 'react';
import { ArrowUp, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-darker-bg text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="reveal-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-white">
              RHYTHM <span className="text-neon-purple">ECHO</span>
            </h3>
            <p className="text-white/70 mb-6">
              Where movement becomes art and passion finds its rhythm. Join our vibrant community of dancers and unleash your creative potential.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="reveal-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-electric-blue transition-colors">About Us</a></li>
              <li><a href="#classes" className="text-white/70 hover:text-electric-blue transition-colors">Classes</a></li>
              <li><a href="#instructors" className="text-white/70 hover:text-electric-blue transition-colors">Instructors</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-electric-blue transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-electric-blue transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-electric-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Column 3: Studio Hours */}
          <div className="reveal-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-white">Studio Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-white/70">Monday - Friday</span>
                <span className="text-white">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Saturday</span>
                <span className="text-white">10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Sunday</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="reveal-on-scroll">
            <h3 className="text-xl font-bold mb-6 text-white">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to receive updates on new classes, events, and special offers.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-transparent transition-all"
              />
              <button 
                type="submit" 
                className="w-full bg-electric-blue text-white py-3 rounded-lg font-medium hover:bg-electric-blue/90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Rhythm Echo Dance Studio. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 bg-neon-purple/20 hover:bg-neon-purple/40 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
