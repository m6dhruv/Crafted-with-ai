
import React, { useState } from 'react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
}

const GallerySection = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80',
      alt: 'Hip hop dancers'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      alt: 'Contemporary dancer'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-and-doing-acrobatics-on-stage-23461-large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Dance performance video'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Urban dance battle'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504609813442-a9682cf816fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      alt: 'Jazz dance performance'
    },
    {
      id: 6,
      type: 'video',
      src: 'https://assets.mixkit.co/videos/preview/mixkit-modern-dancers-moving-through-urban-architecture-32753-large.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      alt: 'Street dance video'
    }
  ];

  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateGallery = (direction: 'next' | 'prev') => {
    if (!activeItem) return;
    
    const currentIndex = galleryItems.findIndex(item => item.id === activeItem.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    
    setActiveItem(galleryItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="reveal-on-scroll text-5xl font-extrabold mb-4">
            <span className="text-white">Our</span>
            <span className="gradient-text"> Gallery</span>
          </h2>
          <div className="divider-line mx-auto"></div>
          <p className="reveal-on-scroll text-white/80 mt-6 max-w-2xl mx-auto">
            Capturing moments of creativity, passion, and excellence from our performances and classes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`reveal-on-scroll h-60 md:h-80 overflow-hidden rounded-lg card-hover cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2 md:h-[40rem]' : ''
              }`}
              onClick={() => openLightbox(item)}
            >
              <div className="relative h-full w-full group">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.thumbnail} 
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-neon-purple/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            onClick={() => navigateGallery('prev')}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            onClick={() => navigateGallery('next')}
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden">
            {activeItem.type === 'image' ? (
              <img 
                src={activeItem.src} 
                alt={activeItem.alt}
                className="w-full h-full object-contain"
              />
            ) : (
              <video 
                src={activeItem.src} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
