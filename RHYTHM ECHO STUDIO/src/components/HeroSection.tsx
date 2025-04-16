
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  useEffect(() => {
    const showElements = () => {
      const title = document.getElementById('hero-title');
      const subtitle = document.getElementById('hero-subtitle');
      const cta = document.getElementById('hero-cta');
      
      setTimeout(() => {
        title?.classList.add('animate-fade-down');
      }, 300);
      
      setTimeout(() => {
        subtitle?.classList.add('animate-fade-up');
      }, 600);
      
      setTimeout(() => {
        cta?.classList.add('animate-fade-in');
      }, 900);
    };

    showElements();
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-dark-bg z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover opacity-70"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-doing-a-choreography-in-a-dance-studio-42315-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 
          id="hero-title" 
          className="opacity-0 text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white"
        >
          Where <span className="gradient-text">Movement</span> Meets <span className="gradient-text">Art</span>
        </h1>
        <p 
          id="hero-subtitle" 
          className="opacity-0 text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
        >
          Unleash your creativity through dance in Dubai's most innovative studio
        </p>
        <a 
          id="hero-cta" 
          href="#classes" 
          className="opacity-0 cta-button"
        >
          Explore Classes <ArrowRight size={18} className="inline ml-2" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 right-0 text-center z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-1 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
