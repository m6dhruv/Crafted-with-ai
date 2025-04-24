import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../components/ui/SectionContainer';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import { FaFemale, FaMale, FaPalette, FaGem, FaSpa } from 'react-icons/fa';
import { RiScissorsCutFill } from 'react-icons/ri';
import { BsScissors } from 'react-icons/bs';
import { initializeServices, getIconComponent } from '../data/servicesData';
// import { GiNeedle, GiPencil, GiPencilBrush, GiPaintBrush, 
//          GiHairStrands, GiScissors } from "react-icons/gi";

const ServicesPage = () => {
  const [serviceCategories, setServiceCategories] = useState([]);
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Our Services - Precious Unisex Salon';
    
    // Load services from storage
    setServiceCategories(initializeServices());
  }, []);

  // Helper to render the icon with proper styling
  const renderIcon = (iconName) => {
    const IconComponent = getIconComponent(iconName);
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <div>
      {/* Hero Section */}
      <SectionContainer background="gradient" className="pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll type="fade">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
            <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-lg text-secondary-200 mb-8">
              Experience the full range of our premium beauty and grooming services for both women and men.
            </p>
          </AnimateOnScroll>
        </div>
      </SectionContainer>

      {/* Services List */}
      <SectionContainer background="darker">
        <div className="max-w-5xl mx-auto mb-12">
          <AnimateOnScroll type="fade">
            <p className="text-center text-secondary-300">
              At Precious Unisex Salon, we pride ourselves on providing high-quality services delivered by skilled professionals. 
              Our extensive menu offers a wide range of options to meet all your beauty and grooming needs.
            </p>
          </AnimateOnScroll>
        </div>
        
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <div id={category.id} key={category.id}>
              <AnimateOnScroll type="fade" delay={0.1 * index}>
                <div className="border-b border-secondary-800 pb-4 mb-8 flex items-center">
                  <span className="text-gold-400 mr-3">
                    {renderIcon(category.icon)}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {category.services.map((service, idx) => (
                    <div key={service.id} className="flex justify-between py-2 border-b border-secondary-800/50">
                      <span className="text-secondary-300">{service.name}</span>
                      <span className="font-medium text-gold-400">{service.price}</span>
                    </div>
                  ))}
                </div>
                
                {category.note && (
                  <div className="mt-6 p-4 bg-secondary-800 rounded-md">
                    <p className="text-secondary-300 text-sm">{category.note}</p>
                  </div>
                )}
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <AnimateOnScroll type="fade">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Ready to Experience Our Services?</h2>
            <p className="text-secondary-300 mb-8">
              Visit us today and let our professionals take care of your beauty needs.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-primary inline-block px-8 py-3"
            >
              Contact Us
            </Link>
          </AnimateOnScroll>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ServicesPage;