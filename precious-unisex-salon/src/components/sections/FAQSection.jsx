import SectionContainer from '../ui/SectionContainer';
import AccordionItem from '../ui/AccordionItem';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const FAQSection = () => {
  const faqItems = [
    {
      id: 1,
      question: "What are your operating hours?",
      answer: "Our salon is open Monday to Saturday from 10:00 AM to 8:00 PM and on Sundays from 11:00 AM to 6:00 PM. We recommend calling ahead to check for any holiday schedule changes."
    },
    {
      id: 2,
      question: "Do you accept walk-in clients?",
      answer: "Yes, we welcome walk-in clients based on availability. For popular times like weekends, we recommend calling ahead to check our current wait times."
    },
    {
      id: 3,
      question: "Do you offer services for special occasions?",
      answer: "Yes, we offer special packages for weddings, proms, and other special events. These include hair styling, makeup application, and nail services. Please contact us for more information about our special occasion packages."
    },
    {
      id: 4,
      question: "What brands do you use for hair and skincare?",
      answer: "We use premium salon-quality products from brands like Kerastase, Olaplex, Redken, Dermalogica, and other professional lines. We prioritize high-quality, safe products that deliver excellent results."
    },
    {
      id: 5,
      question: "Do you offer any loyalty or referral programs?",
      answer: "Yes, we have a rewards program where you earn points for each visit, which can be redeemed for discounts on future services or products. We also offer referral bonuses when you refer new clients to our salon."
    },
  ];

  return (
    <SectionContainer id="faq" background="goldAccent">
      <AnimateOnScroll type="slide-up">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="elegant-border mb-6"></div>
        <p className="section-subtitle">
          Find answers to common questions about our services and policies
        </p>
      </AnimateOnScroll>
      
      <div className="max-w-3xl mx-auto mt-12">
        <AnimateOnScroll type="fade">
          <div className="rounded-lg bg-secondary-800 border border-gold-800/30 shadow-soft p-6 md:p-8">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </AnimateOnScroll>
        
        <div className="text-center mt-8">
          <p className="text-gray-300">
            Don't see your question? <a href="/contact" className="text-gold-400 font-medium hover:text-gold-300 transition-colors">Contact us</a> and we'll be happy to help!
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default FAQSection; 