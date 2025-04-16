
import React, { useEffect, useRef } from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-dark-bg via-darker-bg to-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="reveal-on-scroll text-5xl font-extrabold mb-4">
            <span className="text-white">About</span>
            <span className="gradient-text"> Rhythm Echo</span>
          </h2>
          <div className="divider-line mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal-on-scroll">
            <div className="relative">
              <div className="w-full h-[500px] overflow-hidden rounded-lg img-zoom-container">
                <img 
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Dance studio" 
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neon-purple rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">Since 2010</span>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-electric-blue rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="reveal-on-scroll text-3xl font-bold mb-6 text-white">Creating Movement That Inspires</h3>
            <p className="reveal-on-scroll text-white/80 mb-6">
              Founded in 2010, Rhythm Echo Dance Studio has established itself as the premier destination for dance enthusiasts in Dubai. Our state-of-the-art facility offers classes for all ages and skill levels, taught by internationally acclaimed instructors.
            </p>
            <p className="reveal-on-scroll text-white/80 mb-8">
              At Rhythm Echo, we believe dance is more than movement—it's expression, art, and passion combined. Our mission is to nurture talent, build confidence, and create a supportive community where dancers can thrive.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="reveal-on-scroll glass-card p-6 rounded-lg text-center hover:shadow-lg hover:shadow-neon-purple/10 transition-all duration-300">
                <Award size={32} className="mx-auto mb-3 text-electric-blue" />
                <h4 className="text-2xl font-bold text-white">15+</h4>
                <p className="text-white/70">Awards Won</p>
              </div>
              <div className="reveal-on-scroll glass-card p-6 rounded-lg text-center hover:shadow-lg hover:shadow-neon-purple/10 transition-all duration-300">
                <Users size={32} className="mx-auto mb-3 text-neon-purple" />
                <h4 className="text-2xl font-bold text-white">2000+</h4>
                <p className="text-white/70">Happy Students</p>
              </div>
              <div className="reveal-on-scroll glass-card p-6 rounded-lg text-center hover:shadow-lg hover:shadow-neon-purple/10 transition-all duration-300">
                <Calendar size={32} className="mx-auto mb-3 text-crimson-red" />
                <h4 className="text-2xl font-bold text-white">20+</h4>
                <p className="text-white/70">Dance Styles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
