import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionContainer from '../ui/SectionContainer';
import TestimonialCard from '../ui/TestimonialCard';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import reviewsData from '../../data/reviewsData';

// Using real reviews data from Google Maps
const testimonials = reviewsData;

const TestimonialsSection = () => {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    dotsClass: "slick-dots custom-dots"
  };
  
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  
  return (
    <SectionContainer 
      id="testimonials" 
      background="dark"
    >
      <AnimateOnScroll type="slide-up">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="elegant-border mb-6"></div>
        <p className="section-subtitle">
          Real reviews from our satisfied clients on Google Maps
        </p>
      </AnimateOnScroll>
      
      <div className="relative mt-12">
        {/* Slider Navigation */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between z-10 -mt-4 px-4">
          <button 
            onClick={goToPrev}
            className="w-10 h-10 rounded-full bg-secondary-900 shadow-soft border border-gold-800/30 flex items-center justify-center text-gold-400 hover:border-gold-400/50 transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-secondary-900 shadow-soft border border-gold-800/30 flex items-center justify-center text-gold-400 hover:border-gold-400/50 transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        {/* Testimonials Slider */}
        <div className="px-6">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3 pb-8">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <style jsx="true">{`
        .custom-dots li button:before {
          color: #d4952f;
          opacity: 0.25;
        }
        .custom-dots li.slick-active button:before {
          color: #d4952f;
          opacity: 0.75;
        }
      `}</style>
    </SectionContainer>
  );
};

export default TestimonialsSection; 