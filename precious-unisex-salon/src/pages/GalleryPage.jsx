import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionContainer from '../components/ui/SectionContainer';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';

// Placeholder images - replace with actual Instagram API call in a production environment
const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    category: 'haircut',
    description: 'Men\'s fade haircut with precision styling',
    likes: 124,
    date: '2023-06-15'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    category: 'haircut',
    description: 'Women\'s layered haircut with volume',
    likes: 98,
    date: '2023-06-18'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1633623417019-6d2d5f809b85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    category: 'coloring',
    description: 'Blonde highlights with natural roots',
    likes: 156,
    date: '2023-06-21'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1571942174294-856d3dba959a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'makeup',
    description: 'Natural makeup look for daytime events',
    likes: 112,
    date: '2023-06-22'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'haircut',
    description: 'Short pixie cut with texture',
    likes: 88,
    date: '2023-06-25'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1611942612119-76f2956a0b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'manicure',
    description: 'French manicure with delicate nail art',
    likes: 74,
    date: '2023-06-28'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1634479795394-1c7568767534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'coloring',
    description: 'Vibrant red hair coloring with extra shine',
    likes: 143,
    date: '2023-07-02'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1534959746094-2291bb4d15bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1093&q=80',
    category: 'makeup',
    description: 'Evening makeup with glitter eyeshadow',
    likes: 134,
    date: '2023-07-05'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1595585517809-97249a4f7fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
    category: 'manicure',
    description: 'Bold color blocking nail design',
    likes: 67,
    date: '2023-07-08'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1626383137804-cbe43a43a47f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'haircut',
    description: 'Men\'s modern quiff with tapered sides',
    likes: 92,
    date: '2023-07-10'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1596178060810-72c633a52d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'special',
    description: 'Bridal hair and makeup for a summer wedding',
    likes: 187,
    date: '2023-07-15'
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1593702288056-f5437fdb9f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'special',
    description: 'Complete prom styling package',
    likes: 165,
    date: '2023-07-18'
  },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [images, setImages] = useState(galleryImages);
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Gallery - Precious Unisex Salon';
    
    // Filter images based on selected category
    if (filter === 'all') {
      setImages(galleryImages);
    } else {
      setImages(galleryImages.filter(img => img.category === filter));
    }
  }, [filter]);

  // Define filter categories
  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'haircut', name: 'Haircuts' },
    { id: 'coloring', name: 'Hair Coloring' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'manicure', name: 'Manicure & Pedicure' },
    { id: 'special', name: 'Special Occasions' },
  ];
  
  // In a real application, you would use the Instagram Graph API
  // to fetch images from the salon's Instagram account
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Our Gallery</h1>
            <p className="text-lg text-secondary-100 mb-6">
              Take a look at some of our best work and get inspired for your next visit
            </p>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <SectionContainer background="light">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-soft'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 shadow-soft'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <AnimateOnScroll 
              key={image.id}
              type="fade"
              delay={index * 0.05}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-soft bg-white"
                whileHover={{ y: -5 }}
              >
                <div className="relative group h-64 overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.description} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm">{image.description}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-sm text-secondary-500">{image.date}</span>
                  <span className="text-sm text-secondary-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-accent-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {image.likes}
                  </span>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
        
        {/* Instagram Follow Button */}
        <div className="mt-12 text-center">
          <AnimateOnScroll type="fade">
            <p className="text-secondary-100 mb-4">
              Follow us on Instagram for daily updates and inspiration.
            </p>
            <a 
              href="https://instagram.com/preciousunisexsalon2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @preciousunisexsalon2025
            </a>
          </AnimateOnScroll>
        </div>
      </SectionContainer>
    </div>
  );
};

export default GalleryPage; 