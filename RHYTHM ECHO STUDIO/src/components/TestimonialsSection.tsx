
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Student, Hip Hop",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 5,
      text: "Joining Rhythm Echo was the best decision I've made. The instructors are incredible, the community is supportive, and I've improved so much in just a few months. Highly recommend to anyone looking to learn dance in a professional yet fun environment."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "My daughter has been taking ballet classes here for two years. The transformation in her confidence, discipline, and technique has been incredible. The faculty truly cares about each student's development and creates a positive learning environment."
    },
    {
      id: 3,
      name: "Anya Patel",
      role: "Professional Dancer",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
      text: "As someone who's danced professionally for years, I'm very selective about where I train. Rhythm Echo exceeds all expectations with world-class instructors, beautiful facilities, and technically challenging classes that keep pushing my boundaries."
    },
    {
      id: 4,
      name: "David Torres",
      role: "Adult Beginner",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4,
      text: "I started dancing at 35 with zero experience. The instructors at Rhythm Echo made me feel welcome and created a safe space to learn without judgment. Their beginner-friendly approach and patience have made this journey enjoyable and rewarding."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={18} 
        className={index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-darker-bg to-dark-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-crimson-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-on-scroll text-5xl font-extrabold mb-4">
            <span className="text-white">What Our</span>
            <span className="gradient-text"> Students Say</span>
          </h2>
          <div className="divider-line mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial carousel */}
            <div className="overflow-hidden">
              <div 
                className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="glass-card rounded-lg p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-neon-purple">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="flex-grow text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-2">
                            {renderStars(testimonial.rating)}
                          </div>
                          
                          <p className="text-white/90 text-lg mb-6">"{testimonial.text}"</p>
                          
                          <div>
                            <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                            <p className="text-electric-blue">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 text-white hover:text-neon-purple transition-colors bg-black/30 rounded-full p-2"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-6 text-white hover:text-neon-purple transition-colors bg-black/30 rounded-full p-2"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-neon-purple w-6' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
