
import React, { useEffect } from 'react';

const ScrollReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return <>{children}</>;
};

export default ScrollReveal;
