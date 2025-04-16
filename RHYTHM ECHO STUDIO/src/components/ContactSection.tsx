
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Instagram, Youtube } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'General Inquiry'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'General Inquiry'
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-crimson-red/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-on-scroll text-5xl font-extrabold mb-4">
            <span className="text-white">Get In</span>
            <span className="gradient-text"> Touch</span>
          </h2>
          <div className="divider-line mx-auto"></div>
          <p className="reveal-on-scroll text-white/80 mt-6 max-w-2xl mx-auto">
            Have questions or ready to start your dance journey? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal-on-scroll">
            <div className="glass-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-white animate-fade-in">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="text-white/90 mb-2 block">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-white/90 mb-2 block">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="text-white/90 mb-2 block">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-transparent transition-all"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="text-white/90 mb-2 block">I'm interested in</label>
                    <select 
                      id="interest" 
                      name="interest" 
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-transparent transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Class Registration">Class Registration</option>
                      <option value="Private Lessons">Private Lessons</option>
                      <option value="Events & Performances">Events & Performances</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="text-white/90 mb-2 block">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us what you're looking for..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full bg-neon-purple text-white py-3 rounded-lg font-medium text-lg hover:bg-neon-purple/90 transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>Send Message <Send size={18} className="ml-2" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information & Map */}
          <div className="reveal-on-scroll">
            <div className="glass-card rounded-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">Visit Our Studio</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-neon-purple mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Location</h4>
                    <p className="text-white/70">
                      123 Dance Avenue, Downtown District<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-electric-blue mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-white/70">+971 4 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-crimson-red mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-white/70">info@rhythmecho.com</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map - Dark Style */}
              <div className="flex-grow rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.0047220124116!2d55.266666!3d25.207407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Studio Location Map"
                ></iframe>
              </div>
              
              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
                <div className="flex space-x-3">
                  <a href="#" className="social-icon bg-black/30 w-10 h-10 flex items-center justify-center rounded-full" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-icon bg-black/30 w-10 h-10 flex items-center justify-center rounded-full" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-icon bg-black/30 w-10 h-10 flex items-center justify-center rounded-full" aria-label="Youtube">
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
