import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaTimes, FaSearch, FaArrowRight, FaArrowLeft, FaLayerGroup } from 'react-icons/fa';
import { getServicesFromStorage, saveServicesToStorage, getIconComponent } from '../../data/servicesData';

const AdminServices = () => {
  const [serviceCategories, setServiceCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });
  const [categoryFormData, setCategoryFormData] = useState({
    id: '',
    title: '',
    icon: '',
    note: ''
  });

  // Icon options for categories
  const iconOptions = [
    { value: 'FaFemale', label: 'Female' },
    { value: 'FaMale', label: 'Male' },
    { value: 'FaPalette', label: 'Palette' },
    { value: 'FaGem', label: 'Gem' },
    { value: 'FaSpa', label: 'Spa' },
    { value: 'RiScissorsCutFill', label: 'Scissors (Cut)' },
    { value: 'BsScissors', label: 'Scissors' },
    { value: null, label: 'None' }
  ];

  // Helper to render the icon with proper styling
  const renderIcon = (iconName) => {
    const IconComponent = getIconComponent(iconName);
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  // Load services from local storage on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const services = getServicesFromStorage();
      setServiceCategories(services);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Navigate back to category selection
  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSearchTerm('');
  };

  // Helper to save services to localStorage
  const saveServices = (updatedServices) => {
    setServiceCategories(updatedServices);
    saveServicesToStorage(updatedServices);
  };

  // Edit category
  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setCategoryFormData({
      id: category.id,
      title: category.title,
      icon: category.icon || null,
      note: category.note || ''
    });
    setShowCategoryForm(true);
  };

  // Create new category
  const handleCreateCategory = () => {
    setEditingCategory(null);
    setCategoryFormData({
      id: '',
      title: '',
      icon: null,
      note: ''
    });
    setShowCategoryForm(true);
  };

  // Submit category form
  const handleCategorySubmit = () => {
    if (!categoryFormData.id || !categoryFormData.title) {
      alert('Category ID and Title are required!');
      return;
    }

    let updatedCategories;
    
    if (editingCategory) {
      // Update existing category
      updatedCategories = serviceCategories.map(category => 
        category.id === editingCategory.id 
          ? { 
              ...category, 
              title: categoryFormData.title,
              icon: categoryFormData.icon,
              note: categoryFormData.note || undefined
            } 
          : category
      );
    } else {
      // Create new category
      const newCategory = {
        id: categoryFormData.id.toLowerCase().replace(/\s+/g, '-'),
        title: categoryFormData.title,
        icon: categoryFormData.icon,
        services: [],
        note: categoryFormData.note || undefined
      };
      updatedCategories = [...serviceCategories, newCategory];
    }
    
    saveServices(updatedCategories);
    setShowCategoryForm(false);
  };

  // Delete category
  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category? All services in this category will be deleted as well.')) {
      const updatedCategories = serviceCategories.filter(
        category => category.id !== categoryId
      );
      saveServices(updatedCategories);
      
      if (selectedCategory && selectedCategory.id === categoryId) {
        setSelectedCategory(null);
      }
    }
  };

  // Select a category to view its services
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  // Edit service
  const handleEditService = (service) => {
    setEditingService(service);
    setFormData({
      name: service.name,
      price: service.price,
      description: service.description || ''
    });
    setShowForm(true);
  };

  // Create new service
  const handleCreateService = () => {
    setEditingService(null);
    setFormData({
      name: '',
      price: '',
      description: ''
    });
    setShowForm(true);
  };

  // Form change handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Category form change handler
  const handleCategoryFormChange = (e) => {
    const { name, value } = e.target;
    setCategoryFormData({
      ...categoryFormData,
      [name]: value
    });
  };

  // Submit service form
  const handleSubmit = () => {
    if (!formData.name || !formData.price) {
      alert('Service name and price are required!');
      return;
    }

    const updatedCategories = [...serviceCategories];
    const categoryIndex = updatedCategories.findIndex(
      cat => cat.id === selectedCategory.id
    );

    if (categoryIndex === -1) return;

    if (editingService) {
      // Update existing service
      updatedCategories[categoryIndex].services = updatedCategories[categoryIndex].services.map(service => 
        service.id === editingService.id 
          ? { ...service, ...formData } 
          : service
      );
    } else {
      // Add new service
      const maxId = Math.max(
        0,
        ...serviceCategories.flatMap(category => 
          category.services.map(service => service.id)
        )
      );
      
      const newService = {
        id: maxId + 1,
        ...formData
      };
      
      updatedCategories[categoryIndex].services.push(newService);
    }
    
    saveServices(updatedCategories);
    setShowForm(false);
  };

  // Delete service
  const handleDeleteService = (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedCategories = [...serviceCategories];
      const categoryIndex = updatedCategories.findIndex(
        cat => cat.id === selectedCategory.id
      );

      if (categoryIndex === -1) return;

      updatedCategories[categoryIndex].services = updatedCategories[categoryIndex].services.filter(
        service => service.id !== serviceId
      );
      
      saveServices(updatedCategories);
    }
  };

  // Filter categories based on search term when no category is selected
  const filteredCategories = !selectedCategory 
    ? serviceCategories.filter(category => 
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Filter services in the selected category based on search term
  const filteredServices = selectedCategory
    ? selectedCategory.services.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (service.description && service.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : [];

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
        <h2 className="text-2xl font-serif text-white">
          {selectedCategory 
            ? `Manage Services: ${selectedCategory.title}` 
            : 'Manage Service Categories'}
        </h2>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder={selectedCategory ? "Search services..." : "Search categories..."}
              className="w-full md:w-64 bg-secondary-800 text-white border border-secondary-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {selectedCategory ? (
            <div className="flex gap-2">
              <button 
                onClick={handleBackToCategories}
                className="flex items-center gap-2 bg-secondary-700 hover:bg-secondary-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FaArrowLeft size={14} />
                <span>Back</span>
              </button>
              <button 
                onClick={handleCreateService}
                className="flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <FaPlus />
                <span>New Service</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={handleCreateCategory}
              className="flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaPlus />
              <span>New Category</span>
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-secondary-700"></div>
            <div className="mt-4 w-24 h-4 bg-secondary-700 rounded"></div>
          </div>
        </div>
      ) : selectedCategory ? (
        // Service List View
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-secondary-800 border border-secondary-700/50 rounded-xl overflow-hidden"
            >
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{service.name}</h3>
                    <span className="inline-block bg-secondary-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                      {selectedCategory.title}
                    </span>
                  </div>
                  
                  <div className="flex">
                    <button 
                      onClick={() => handleEditService(service)}
                      className="text-gray-400 hover:text-gold-400 p-1"
                      aria-label="Edit service"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => handleDeleteService(service.id)}
                      className="text-gray-400 hover:text-red-400 p-1 ml-2"
                      aria-label="Delete service"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-white font-medium">{service.price}</span>
                  </div>
                  {service.description && (
                    <p className="text-gray-300 text-sm line-clamp-2">{service.description}</p>
                  )}
                </div>
                
                <div className="mt-5 pt-4 border-t border-secondary-700/30 flex justify-between gap-2">
                  <button
                    onClick={() => handleEditService(service)}
                    className="flex-1 py-2 rounded-lg text-sm bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                  >
                    Edit Service
                  </button>
                  
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="flex items-center justify-center gap-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors py-2 px-3 rounded-lg"
                  >
                    <FaTrash size={12} />
                    <span className="text-sm">Delete</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        // Category List View
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="bg-secondary-800 border border-secondary-700/50 rounded-xl overflow-hidden"
            >
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="text-gold-400">
                      {renderIcon(category.icon) || <div className="w-8 h-8 rounded-full bg-secondary-700 flex items-center justify-center"><FaLayerGroup /></div>}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">{category.title}</h3>
                      <span className="inline-block bg-secondary-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {category.services.length} services
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <button 
                      onClick={() => handleEditCategory(category)}
                      className="text-gray-400 hover:text-gold-400 p-1"
                      aria-label="Edit category"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      onClick={() => handleDeleteCategory(category.id)}
                      className="text-gray-400 hover:text-red-400 p-1 ml-2"
                      aria-label="Delete category"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                
                {category.note && (
                  <div className="mt-4 text-gray-300 text-sm line-clamp-2">{category.note}</div>
                )}
                
                <div className="mt-5 pt-4 border-t border-secondary-700/30 flex justify-between gap-2">
                  <button
                    onClick={() => handleSelectCategory(category)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                  >
                    <span>Manage Services</span>
                    <FaArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {filteredServices.length === 0 && selectedCategory && !isLoading && (
        <div className="text-center py-12 text-gray-400">
          No services found matching your search.
        </div>
      )}

      {filteredCategories.length === 0 && !selectedCategory && !isLoading && (
        <div className="text-center py-12 text-gray-400">
          No categories found matching your search.
        </div>
      )}

      {/* Add/Edit Service Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary-800 rounded-xl border border-secondary-700 p-6 w-full max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-white">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Service Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Price</label>
                <input
                  type="text" 
                  name="price"
                  value={formData.price}
                  onChange={handleFormChange}
                  placeholder="₹500 - ₹1000"
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Description (Optional)</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  rows="3" 
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                ></textarea>
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                >
                  {editingService ? 'Update Service' : 'Add Service'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Add/Edit Category Form Modal */}
      {showCategoryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary-800 rounded-xl border border-secondary-700 p-6 w-full max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-white">
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h3>
              <button 
                onClick={() => setShowCategoryForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Category ID</label>
                <input 
                  type="text" 
                  name="id"
                  value={categoryFormData.id}
                  onChange={handleCategoryFormChange}
                  disabled={editingCategory}
                  placeholder="hair-services"
                  className={`w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500 ${editingCategory ? 'opacity-50' : ''}`}
                />
                {!editingCategory && (
                  <p className="mt-1 text-xs text-gray-400">Unique identifier, use lowercase with hyphens instead of spaces</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Category Title</label>
                <input 
                  type="text" 
                  name="title"
                  value={categoryFormData.title}
                  onChange={handleCategoryFormChange}
                  placeholder="Hair Services"
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Icon (Optional)</label>
                <select
                  name="icon"
                  value={categoryFormData.icon || ''}
                  onChange={handleCategoryFormChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                >
                  <option value="">Select an icon</option>
                  {iconOptions.map(option => (
                    <option key={option.value || 'none'} value={option.value || ''}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Note (Optional)</label>
                <textarea 
                  name="note"
                  value={categoryFormData.note}
                  onChange={handleCategoryFormChange}
                  rows="3" 
                  placeholder="Additional information about this category"
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                ></textarea>
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setShowCategoryForm(false)}
                  className="px-4 py-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  onClick={handleCategorySubmit}
                  className="px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                >
                  {editingCategory ? 'Update Category' : 'Add Category'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminServices; 