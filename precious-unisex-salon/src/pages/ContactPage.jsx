import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SectionContainer from '../components/ui/SectionContainer';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Contact Us - Precious Unisex Salon';
  }, []);

  const onSubmit = (data) => {
    // Create a unique ID for the message
    const contactData = {
      ...data,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    
    // Get existing submissions
    let submissions = [];
    const storedSubmissions = localStorage.getItem('contactSubmissions');
    if (storedSubmissions) {
      submissions = JSON.parse(storedSubmissions);
    }
    
    // Add new submission at the beginning
    submissions = [contactData, ...submissions];
    
    // Save to localStorage
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Contact Us</h1>
            <p className="text-lg text-secondary-100 mb-6">
              Have questions or want to learn more about our services? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <SectionContainer background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimateOnScroll type="slide-right">
            <div className="bg-white rounded-lg shadow-soft p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-secondary-800">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-3 mr-4">
                    <FaMapMarkerAlt className="text-primary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1 text-secondary-600">Our Location</h3>
                    <p className="text-secondary-600">123 Beauty Street, Salon City, SC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-3 mr-4">
                    <FaPhone className="text-primary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1 text-secondary-600">Call Us</h3>
                    <p className="text-secondary-600">
                      <a href="tel:+1234567890" className="hover:text-primary-600 transition-colors">
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-3 mr-4">
                    <FaEnvelope className="text-primary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1 text-secondary-600">Email Us</h3>
                    <p className="text-secondary-600">
                      <a href="mailto:info@preciousunisexsalon.com" className="hover:text-primary-600 transition-colors">
                        info@preciousunisexsalon.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-3 mr-4">
                    <FaClock className="text-primary-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1 text-secondary-600">Opening Hours</h3>
                    <p className="text-secondary-600 mb-1">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-secondary-600 mb-1">Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-secondary-600">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
          
          {/* Contact Form */}
          <AnimateOnScroll type="slide-left">
            <div className="bg-white rounded-lg shadow-soft p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-secondary-800">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-secondary-800 mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-secondary-200'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-secondary-800 mb-2">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-secondary-200'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-secondary-800 mb-2">Your Phone (Optional)</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-500' : 'border-secondary-200'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('phone')}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-secondary-800 mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Service Inquiry"
                    className={`w-full px-4 py-3 rounded-md border ${errors.subject ? 'border-red-500' : 'border-secondary-200'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-secondary-800 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Your message here..."
                    className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-secondary-200'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit"
                  className="btn btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionContainer>
      
      {/* Google Map */}
      <SectionContainer>
        <AnimateOnScroll type="fade">
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-soft">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.339993866046!2d72.56659471496786!3d23.132247084886316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8316bdbf638b%3A0x11584d321faa8698!2sPrecious%20unisex%20salon!5e0!3m2!1sen!2sin!4v1665404296049!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Precious Unisex Salon Location"
            ></iframe>
          </div>
        </AnimateOnScroll>
      </SectionContainer>
    </div>
  );
};

export default ContactPage; 