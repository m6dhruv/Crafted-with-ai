import React from 'react';

const SectionContainer = ({ 
  children, 
  id = null, 
  className = "", 
  background = "dark",
  containerClass = ""
}) => {
  const getBgClass = () => {
    switch(background) {
      case 'light': 
        return 'bg-secondary-100 text-secondary-900';
      case 'dark': 
        return 'bg-secondary-900 text-white';
      case 'darker': 
        return 'bg-secondary-950 text-white';
      case 'gradient': 
        return 'bg-gradient-to-br from-secondary-900 to-secondary-950 text-white';
      default: 
        return background;
    }
  };

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${getBgClass()} ${className}`}
    >
      <div className={`container mx-auto px-4 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer; 