import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram className="w-5 h-5" />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter className="w-5 h-5" />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaYoutube className="w-5 h-5" />, url: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaWhatsapp className="w-5 h-5" />, url: 'https://wa.me/1234567890', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    { label: 'Services', url: '/services' },
    { label: 'Gallery', url: '/gallery' },
    { label: 'Contact', url: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Hair Services (Women)', url: '/services#hair-women' },
    { label: 'Hair Treatments', url: '/services#hair-treatments' },
    { label: 'Hair Coloring', url: '/services#hair-coloring' },
    { label: 'Bridal Packages', url: '/services#bridal' },
    { label: 'Facial & Skin Care', url: '/services#facial' },
    { label: 'Men\'s Services', url: '/services#men-hair' },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
  ];

  return (
    <footer className="bg-secondary-900 border-t border-gold-800/30 text-gray-300 pt-16">
      {/* Upper Footer */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
          {/* About Us */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.svg" alt="Precious Unisex Salon Logo" className="h-12 w-12 mr-2" />
              <div>
                <h3 className="font-serif font-semibold text-xl gold-text">
                  Precious <span className="text-red-600">Salon</span>
                </h3>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Premium hair and beauty services for both men and women. Our professional stylists are dedicated to making you look and feel your best.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-400 font-serif text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-sm hover:text-gold-400 transition-colors flex items-center"
                  >
                    <span className="mr-2 text-gold-500">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold-400 font-serif text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.url} 
                    className="text-sm hover:text-gold-400 transition-colors flex items-center"
                  >
                    <span className="mr-2 text-gold-500">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold-400 font-serif text-lg font-medium mb-6">Contact & Hours</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-gold-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-sm">139, The CBD Shopping Centre, Between Vaishnodevi & Zundal Circle, Sardar Patel Ring Rd, opposite The Hillok, Ahmedabad, Gujarat 382421</p>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="text-gold-400 mr-3 flex-shrink-0" />
                <p className="text-sm">(123) 456-7890</p>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-gold-400 mr-3 flex-shrink-0" />
                <p className="text-sm">info@precioussalon.com</p>
              </div>
            </div>
            
            <h4 className="text-gold-400 font-medium mb-3 text-sm">Business Hours</h4>
            <ul className="space-y-2">
              {businessHours.map((schedule, index) => (
                <li key={index} className="text-sm flex justify-between">
                  <span>{schedule.day}</span>
                  <span className="text-gold-300">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Lower Footer */}
      <div className="bg-secondary-950 py-6 border-t border-gold-800/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Precious Unisex Salon. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-300 hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-300 hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 