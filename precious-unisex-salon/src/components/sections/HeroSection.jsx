import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import WhatsAppLink from '../ui/WhatsAppLink';

// Better salon image - we'll use a reliable image CDN for now
const salonImage = 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1920';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={salonImage} 
          alt="Precious Unisex Salon Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-secondary-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.span 
            className="inline-block px-4 py-1 mb-6 text-sm font-medium tracking-wider border border-gold-400 text-gold-400 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PREMIUM HAIR & BEAUTY SALON
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover True Beauty at{' '}
            <span className="gold-text">Precious Salon</span>
          </motion.h1>
          
          <motion.div
            className="h-1 w-32 bg-gold-600 mb-8"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience premium hair and beauty services for both men and women. Our expert stylists deliver personalized treatments using premium products to help you look and feel your absolute best.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              to="/services" 
              className="btn btn-primary"
            >
              View Our Services
            </Link>
            <WhatsAppLink className="btn btn-outline">
              Book via WhatsApp
            </WhatsAppLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 