import { Link } from 'react-router-dom';
import SectionContainer from '../ui/SectionContainer';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import WhatsAppLink from '../ui/WhatsAppLink';

// Import the detailed service data with featured flags
import { servicesData } from '../../data/featuredServices';

const ServiceHighlights = () => {
  // Get only the featured services
  const featuredServices = servicesData.filter(service => service.featured);
  
  return (
    <SectionContainer className="bg-white py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary-800">Our Premium Services</h2>
        <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience luxury treatments and expert care with our most popular services
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredServices.map((service) => (
          <AnimateOnScroll key={service.id}>
            <div className="bg-secondary-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Link to={`/services#${service.id}`} className="btn btn-sm btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <div className="flex justify-between items-center">
                  {/* <span className="text-gold-600 font-semibold">From ₹{service.price}</span> */}
                  <WhatsAppLink 
                    serviceName={service.name}
                    className="text-secondary-700 hover:text-secondary-900 font-medium"
                  >
                    Book Now →
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/services" className="btn btn-outline btn-secondary">
          View All Services
        </Link>
      </div>
    </SectionContainer>
  );
};

export default ServiceHighlights; 