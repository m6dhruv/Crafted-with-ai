import { useEffect } from 'react';
import SectionContainer from '../components/ui/SectionContainer';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import CTASection from '../components/sections/CTASection';

// Placeholder image
const aboutImage = 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1436&q=80';

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'About Us - Precious Unisex Salon';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">About Precious Salon</h1>
            <p className="text-lg text-secondary-100 mb-6">
              Learn about our story, our mission, and the team behind Precious Unisex Salon
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll type="slide-right">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-6">Our Story</h2>
              <p className="mb-4 text-secondary-300">
                Precious Unisex Salon was founded with a vision to create a welcoming space where clients of all genders could receive premium beauty and hair services in a luxurious yet comfortable environment.
              </p>
              <p className="mb-4 text-secondary-300">
                What started as a small salon has grown into a full-service beauty destination, known for our commitment to excellence, continuous education, and personalized approach to each client's needs.
              </p>
              <p className="text-secondary-300">
                Today, we're proud to be recognized as one of the top salons in the region, with a team of talented professionals dedicated to helping our clients look and feel their best.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="slide-left">
            <div className="rounded-lg overflow-hidden shadow-soft">
              <img 
                src={aboutImage} 
                alt="Precious Salon interior" 
                className="w-full h-auto"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </SectionContainer>
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage; 