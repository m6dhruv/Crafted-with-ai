
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClassesSection from '@/components/ClassesSection';
import InstructorsSection from '@/components/InstructorsSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Rhythm Echo Dance Studio';
    
    // Initialize scroll animation
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('appear');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in viewport
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollReveal>
      <div className="min-h-screen bg-dark-bg text-white">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <InstructorsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </ScrollReveal>
  );
};

export default Index;
