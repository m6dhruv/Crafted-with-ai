import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServiceHighlights from '../components/sections/ServiceHighlights';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import FAQSection from '../components/sections/FAQSection';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Home - Precious Unisex Salon';
  }, []);

  return (
    <div>
      <HeroSection />
      <ServiceHighlights />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default HomePage; 