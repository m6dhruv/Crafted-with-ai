import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ customMessage = '', serviceName = '' }) => {
  // Replace with actual WhatsApp number (without + prefix)
  const phoneNumber = '1234567890'; 
  
  // Default message if none provided
  const defaultMessage = "Hello! I'd like to book an appointment at Precious Unisex Salon.";
  
  // Use custom message if provided, otherwise use default
  const message = customMessage || (serviceName 
    ? `Hello! I'd like to book an appointment for ${serviceName} at Precious Unisex Salon.` 
    : defaultMessage);
  
  // Create WhatsApp URL with encoded message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton; 