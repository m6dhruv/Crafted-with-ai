
import React, { useState } from 'react';
import { Clock, Calendar, ChevronRight } from 'lucide-react';

interface ClassInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  schedule: string;
  color: string;
}

const ClassesSection = () => {
  const classes: ClassInfo[] = [
    {
      id: 1,
      title: "Hip Hop",
      description: "High-energy dance with urban roots and freestyle moves perfect for beginners and advanced dancers alike.",
      image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "60 min",
      schedule: "Mon, Wed, Fri",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "Contemporary",
      description: "Fluid dance style combining elements of jazz, lyrical, and classical ballet with freedom of expression.",
      image: "https://images.unsplash.com/photo-1594112170526-31b20921a4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "75 min",
      schedule: "Tue, Thu",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Bollywood",
      description: "Dynamic Indian dance combining classical and folk styles with modern choreography and expressions.",
      image: "https://images.unsplash.com/photo-1554941068-63b21c225d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "60 min",
      schedule: "Sat, Sun",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      title: "Ballet",
      description: "Classical dance form emphasizing grace, precision, and technique with structured movements.",
      image: "https://images.unsplash.com/photo-1516741247836-f66dbfc9392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      duration: "90 min",
      schedule: "Mon, Wed, Fri",
      color: "from-pink-500 to-red-500"
    },
    {
      id: 5,
      title: "Jazz",
      description: "Energetic and stylish dance with syncopated rhythms, isolations, and improvisation techniques.",
      image: "https://images.unsplash.com/photo-1504609813442-a9682cf816fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      duration: "60 min",
      schedule: "Tue, Thu, Sat",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      title: "Street Dance",
      description: "Urban dance styles including popping, locking, breaking, and house performed to the latest beats.",
      image: "https://images.unsplash.com/photo-1544635628-771d813c8469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      duration: "75 min",
      schedule: "Wed, Fri, Sun",
      color: "from-green-500 to-teal-500"
    }
  ];

  const [activeClass, setActiveClass] = useState<ClassInfo | null>(null);

  const handleClassClick = (classItem: ClassInfo) => {
    setActiveClass(activeClass?.id === classItem.id ? null : classItem);
  };

  return (
    <section id="classes" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-electric-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-on-scroll text-5xl font-extrabold mb-4">
            <span className="text-white">Our</span>
            <span className="gradient-text"> Classes</span>
          </h2>
          <div className="divider-line mx-auto"></div>
          <p className="reveal-on-scroll text-white/80 mt-6 max-w-2xl mx-auto">
            Discover our diverse range of dance classes taught by world-class instructors in state-of-the-art studios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div 
              key={classItem.id}
              className={`reveal-on-scroll glass-card rounded-lg overflow-hidden card-hover cursor-pointer transform transition-all duration-500
                ${activeClass?.id === classItem.id ? 'lg:-translate-y-2 shadow-lg shadow-neon-purple/30' : ''}
              `}
              onClick={() => handleClassClick(classItem)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${classItem.color} opacity-60`}></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{classItem.title}</h3>
              </div>
              
              <div className={`p-6 transition-all duration-500 ${activeClass?.id === classItem.id ? 'max-h-80' : 'max-h-32'}`}>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-white/70">
                    <Clock size={16} className="mr-2" />
                    <span>{classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Calendar size={16} className="mr-2" />
                    <span>{classItem.schedule}</span>
                  </div>
                </div>
                
                <p className="text-white/80 mb-4 line-clamp-2">{classItem.description}</p>
                
                {activeClass?.id === classItem.id && (
                  <div className="mt-4 animate-fade-in">
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">What You'll Learn</h4>
                      <ul className="text-white/70 list-disc pl-5 space-y-1">
                        <li>Fundamental techniques and movements</li>
                        <li>Style-specific expressions and rhythms</li>
                        <li>Choreography and improvisation skills</li>
                      </ul>
                    </div>
                    <button className="flex items-center text-neon-purple hover:text-electric-blue transition-colors">
                      View Schedule <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="cta-button bg-electric-blue hover:shadow-electric-blue/20">
            Book a Free Trial Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
