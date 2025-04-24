import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaSearch, FaTrash, FaTimes, FaUpload, FaImage } from 'react-icons/fa';

const AdminGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Simulate loading data from API
  useEffect(() => {
    const timer = setTimeout(() => {
      setImages([
        {
          id: 1,
          title: 'Bridal Makeup',
          category: 'makeup',
          url: 'https://images.unsplash.com/photo-1617115188467-f77da9de0cb2?q=80&w=774&auto=format&fit=crop',
          date: '2023-10-15',
          description: 'Traditional bridal makeup with gold accents'
        },
        {
          id: 2,
          title: 'Hair Styling',
          category: 'hair',
          url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=870&auto=format&fit=crop',
          date: '2023-09-22',
          description: 'Modern wavy hair styling'
        },
        {
          id: 3,
          title: 'Nail Art',
          category: 'nails',
          url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=774&auto=format&fit=crop',
          date: '2023-11-05',
          description: 'Elegant floral nail art design'
        },
        {
          id: 4,
          title: 'Facial Treatment',
          category: 'skincare',
          url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=870&auto=format&fit=crop',
          date: '2023-08-30',
          description: 'Luxury facial treatment with natural ingredients'
        },
        {
          id: 5,
          title: 'Special Occasion Makeup',
          category: 'makeup',
          url: 'https://images.unsplash.com/photo-1588006173527-0c7219882b1a?q=80&w=774&auto=format&fit=crop',
          date: '2023-12-01',
          description: 'Glamorous evening makeup look'
        },
        {
          id: 6,
          title: 'Men\'s Haircut',
          category: 'hair',
          url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=774&auto=format&fit=crop',
          date: '2023-10-10',
          description: 'Modern men\'s haircut and styling'
        },
      ]);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadImage = () => {
    if (selectedFile && filePreview) {
      const newImage = {
        id: images.length + 1,
        title: selectedFile.name.split('.')[0],
        category: document.getElementById('imageCategory').value,
        url: filePreview,
        date: new Date().toISOString().split('T')[0],
        description: document.getElementById('imageDescription').value
      };
      
      setImages([...images, newImage]);
      setShowUploadForm(false);
      setSelectedFile(null);
      setFilePreview(null);
    }
  };

  const handleDeleteImage = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      setImages(images.filter(image => image.id !== id));
    }
  };

  const categories = ['all', ...new Set(images.map(image => image.category))];

  const filteredImages = images.filter(image => {
    const matchesCategory = categoryFilter === 'all' || image.category === categoryFilter;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-serif text-white">Gallery Management</h2>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search images..." 
              className="w-full md:w-64 bg-secondary-800 text-white border border-secondary-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button 
            onClick={() => setShowUploadForm(true)}
            className="flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FaPlus />
            <span>Upload</span>
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setCategoryFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${
              categoryFilter === category 
                ? 'bg-gold-600 text-white' 
                : 'bg-secondary-800 text-gray-300 hover:bg-secondary-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-secondary-700"></div>
            <div className="mt-4 w-24 h-4 bg-secondary-700 rounded"></div>
          </div>
        </div>
      ) : (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className="bg-secondary-800 border border-secondary-700/50 rounded-xl overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12 relative group">
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="object-cover w-full h-40"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={() => handleDeleteImage(image.id)}
                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-white font-medium">{image.title}</h3>
                    <span className="inline-block bg-secondary-700 text-gray-300 text-xs px-2 py-1 rounded-full capitalize">
                      {image.category}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">{image.date}</span>
                </div>
                <p className="mt-2 text-gray-400 text-sm line-clamp-2">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {filteredImages.length === 0 && !isLoading && (
        <div className="text-center py-12 text-gray-400">
          No images found matching your criteria.
        </div>
      )}

      {/* Upload Image Form Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary-800 rounded-xl border border-secondary-700 p-6 w-full max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-white">Upload New Image</h3>
              <button 
                onClick={() => {
                  setShowUploadForm(false);
                  setSelectedFile(null);
                  setFilePreview(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="space-y-4">
              {filePreview ? (
                <div className="relative">
                  <img 
                    src={filePreview} 
                    alt="Preview" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setSelectedFile(null);
                      setFilePreview(null);
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-secondary-700 rounded-lg p-8 text-center">
                  <FaImage className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-300 mb-4">Click to select an image or drag and drop</p>
                  <label className="flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer">
                    <FaUpload />
                    <span>Browse Files</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              )}
              
              <div>
                <label className="block text-gray-300 mb-1">Category</label>
                <select 
                  id="imageCategory"
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="makeup">Makeup</option>
                  <option value="hair">Hair</option>
                  <option value="nails">Nails</option>
                  <option value="skincare">Skincare</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Description</label>
                <textarea 
                  id="imageDescription"
                  rows="3" 
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                  placeholder="Brief description of the image..."
                ></textarea>
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => {
                    setShowUploadForm(false);
                    setSelectedFile(null);
                    setFilePreview(null);
                  }}
                  className="px-4 py-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  onClick={handleUploadImage}
                  disabled={!selectedFile}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedFile 
                      ? 'bg-gold-600 text-white hover:bg-gold-700' 
                      : 'bg-secondary-700 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Upload Image
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminGallery; 