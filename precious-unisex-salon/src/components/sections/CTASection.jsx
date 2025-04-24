import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const CTASection = ({ title, subtitle }) => {
  return (
    <section className="py-20 bg-gradient-to-bl from-secondary-900 to-secondary-950 border-t border-gold-800/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll type="fade">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 gold-text">
              {title || "Ready to Experience Luxury Hair and Beauty Services?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {subtitle || "Visit us today and let our experts enhance your natural beauty."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 