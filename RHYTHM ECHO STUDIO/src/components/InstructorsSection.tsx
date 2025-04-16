
import React, { useState } from 'react';
import { Instagram, Youtube, ExternalLink } from 'lucide-react';

interface Instructor {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks: {
    instagram?: string;
    youtube?: string;
    website?: string;
  };
}

const InstructorsSection = () => {
  const instructors: Instructor[] = [
    {
      id: 1,
      name: "Aisha Khan",
      role: "Hip Hop & Contemporary",
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "International choreographer with 10+ years of experience working with major artists and dance competitions globally.",
      socialLinks: {
        instagram: "#",
        youtube: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Street Dance & Breaking",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bio: "Champion b-boy with over 15 years in the industry and founder of Urban Dance Collective, specializing in authentic street styles.",
      socialLinks: {
        instagram: "#",
        youtube: "#",
        website: "#"
      }
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Ballet & Jazz",
      image: "https://images.unsplash.com/photo-1626685010784-8f6a552373b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      bio: "Former principal dancer with the National Ballet, trained at Royal Academy with 8+ years teaching experience.",
      socialLinks: {
        instagram: "#",
        website: "#"
      }
    },
    {
      id: 4,
      name: "Raj Sharma",
      role: "Bollywood & Folk",
      image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80",
      bio: "Award-winning Bollywood choreographer who has worked on major film productions and international stage performances.",
      socialLinks: {
        instagram: "#",
        youtube: "#"
      }
    }
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="instructors" className="py-20 bg-gradient-to-b from-dark-bg to-darker-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-electric-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-on-scroll text-5xl font-extrabold mb-4">
            <span className="text-white">Meet Our</span>
            <span className="gradient-text"> Instructors</span>
          </h2>
          <div className="divider-line mx-auto"></div>
          <p className="reveal-on-scroll text-white/80 mt-6 max-w-2xl mx-auto">
            Learn from our team of professional dancers and choreographers with decades of combined experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id}
              className="reveal-on-scroll relative group"
              onMouseEnter={() => setHoveredId(instructor.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="glass-card rounded-lg overflow-hidden card-hover">
                {/* Instructor Image */}
                <div className="relative w-full h-80 overflow-hidden">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${hoveredId === instructor.id ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white/90 text-sm mb-4">{instructor.bio}</p>
                    <div className="flex space-x-3">
                      {instructor.socialLinks.instagram && (
                        <a href={instructor.socialLinks.instagram} className="social-icon bg-black/30" aria-label="Instagram">
                          <Instagram size={18} />
                        </a>
                      )}
                      {instructor.socialLinks.youtube && (
                        <a href={instructor.socialLinks.youtube} className="social-icon bg-black/30" aria-label="Youtube">
                          <Youtube size={18} />
                        </a>
                      )}
                      {instructor.socialLinks.website && (
                        <a href={instructor.socialLinks.website} className="social-icon bg-black/30" aria-label="Website">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Instructor Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <p className="text-neon-purple">{instructor.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
