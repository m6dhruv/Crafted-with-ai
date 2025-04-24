import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppLink = ({ serviceName = '', className = '', children }) => {
  // Replace with actual WhatsApp number (without + prefix)
  const phoneNumber = '1234567890';
  
  // Create appropriate message based on whether a service name is provided
  const message = serviceName 
    ? `Hello! I'd like to book an appointment for ${serviceName} at Precious Unisex Salon.` 
    : "Hello! I'd like to book an appointment at Precious Unisex Salon.";
  
  // Create WhatsApp URL with encoded message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Default button text
  const defaultText = "Book via WhatsApp";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 ${className}`}
      aria-label="Book appointment via WhatsApp"
    >
      {children || (
        <>
          <FaWhatsapp className="w-4 h-4" />
          <span>{defaultText}</span>
        </>
      )}
    </a>
  );
};

export default WhatsAppLink; 