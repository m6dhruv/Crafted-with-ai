import { FaQuoteLeft, FaUser } from 'react-icons/fa';

const TestimonialCard = ({ name, role, image, text, rating }) => {
  // Convert rating to stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-5 h-5 ${i <= rating ? 'text-gold-400' : 'text-secondary-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-secondary-800 border border-gold-800/20 rounded-lg shadow-soft p-6 md:p-8 hover:border-gold-400/20 transition-all duration-300">
      <FaQuoteLeft className="text-gold-400/30 w-10 h-10 mb-6" />
      
      <div className="mb-6">
        <p className="text-gray-300 italic">{text}</p>
      </div>
      
      <div className="flex mb-4">
        {renderStars()}
      </div>
      
      <div className="flex items-center">
        <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 flex items-center justify-center bg-secondary-700">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <FaUser className="text-gold-400 w-6 h-6" />
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gold-400">{name}</h4>
          {role && <p className="text-sm text-gray-400">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 