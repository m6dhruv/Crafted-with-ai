import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPlus, FaEllipsisV, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaTimes, FaTrash, FaMapMarkerAlt, FaStickyNote } from 'react-icons/fa';

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [viewingCustomer, setViewingCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  // Simulate loading data from API
  useEffect(() => {
    const timer = setTimeout(() => {
      setCustomers([
        {
          id: 1,
          name: 'Ananya Desai',
          email: 'ananya.desai@example.com',
          phone: '+91 9876543210',
          visits: 8,
          lastVisit: '2023-12-15',
          address: '123 Lakshmi Nagar, Mumbai',
          notes: 'Prefers natural products. Allergic to certain chemicals.'
        },
        {
          id: 2,
          name: 'Ravi Kumar',
          email: 'ravi.kumar@example.com',
          phone: '+91 8765432109',
          visits: 3,
          lastVisit: '2023-12-10',
          address: '456 Gandhi Road, Pune',
          notes: 'Regular haircut every month.'
        },
        {
          id: 3,
          name: 'Priya Sharma',
          email: 'priya.sharma@example.com',
          phone: '+91 7654321098',
          visits: 12,
          lastVisit: '2023-12-18',
          address: '789 Patel Street, Ahmedabad',
          notes: 'VIP customer. Prefers appointments with Neha.'
        },
        {
          id: 4,
          name: 'Ajay Patel',
          email: 'ajay.patel@example.com',
          phone: '+91 6543210987',
          visits: 2,
          lastVisit: '2023-11-30',
          address: '234 Tagore Lane, Surat',
          notes: 'New customer, sensitive scalp.'
        },
        {
          id: 5,
          name: 'Divya Gupta',
          email: 'divya.gupta@example.com',
          phone: '+91 5432109876',
          visits: 5,
          lastVisit: '2023-12-05',
          address: '567 Nehru Road, Baroda',
          notes: 'Regular for facials and manicures.'
        },
      ]);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleViewDetails = (customer) => {
    setViewingCustomer(customer);
  };

  const handleAddCustomer = () => {
    setShowForm(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      notes: ''
    });
  };

  const handleEditCustomer = (customer) => {
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      notes: customer.notes
    });
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const newCustomer = {
      id: customers.length + 1,
      ...formData,
      visits: 0,
      lastVisit: new Date().toISOString().split('T')[0]
    };
    
    setCustomers([...customers, newCustomer]);
    setShowForm(false);
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
    setShowDeleteConfirm(null);
  };

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-serif text-white">Customer Management</h2>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search customers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64 bg-secondary-800 text-white border border-secondary-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
            />
          </div>
          
          <button 
            onClick={handleAddCustomer}
            className="flex items-center gap-2 bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <FaPlus />
            <span>New</span>
          </button>
        </div>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCustomers.map((customer, index) => (
              <motion.div 
                key={customer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-secondary-800 rounded-xl border border-secondary-700/50 overflow-hidden shadow-soft"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gold-600/20 flex items-center justify-center rounded-full text-gold-400">
                        <FaUser className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{customer.name}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" /> {customer.visits} visits
                        </p>
                      </div>
                    </div>
                    <div className="relative group">
                      <button className="p-2 hover:bg-secondary-700 rounded-full transition-colors">
                        <FaEllipsisV className="text-gray-400" />
                      </button>
                      
                      <div className="absolute right-0 mt-2 w-48 bg-secondary-800 border border-secondary-700 rounded-lg shadow-lg z-10 hidden group-hover:block">
                        <div className="py-1">
                          <button 
                            onClick={() => handleViewDetails(customer)}
                            className="w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary-700 hover:text-gold-400"
                          >
                            View Details
                          </button>
                          <button 
                            onClick={() => handleEditCustomer(customer)}
                            className="w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary-700 hover:text-gold-400"
                          >
                            Edit Customer
                          </button>
                          <div className="border-t border-secondary-700 my-1"></div>
                          <button 
                            onClick={() => setShowDeleteConfirm(customer.id)}
                            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-secondary-700"
                          >
                            Delete Customer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FaEnvelope className="text-gray-400" />
                      <span className="text-sm truncate">{customer.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FaPhone className="text-gray-400" />
                      <span className="text-sm">{customer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FaCalendarAlt className="text-gray-400" />
                      <span className="text-sm">Last visit: {new Date(customer.lastVisit).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-secondary-700/30">
                    <div className="flex justify-between gap-2">
                      <button 
                        onClick={() => handleViewDetails(customer)}
                        className="flex-1 py-2 bg-secondary-700 hover:bg-secondary-600 text-white rounded-lg text-sm transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(customer.id)}
                        className="flex items-center justify-center gap-1 bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors py-2 px-3 rounded-lg"
                      >
                        <FaTrash size={12} />
                        <span className="text-sm">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delete Confirmation Modal */}
                {showDeleteConfirm === customer.id && (
                  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-secondary-800 rounded-xl border border-secondary-700 p-6 w-full max-w-md"
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                            <FaTrash className="text-red-500 text-xl" />
                          </div>
                        </div>
                        <h3 className="text-xl font-serif text-white mb-2">Delete Customer</h3>
                        <p className="text-gray-300 mb-6">
                          Are you sure you want to delete <span className="text-white font-medium">{customer.name}</span>? 
                          This action cannot be undone.
                        </p>
                        
                        <div className="flex justify-center gap-4">
                          <button 
                            onClick={() => setShowDeleteConfirm(null)}
                            className="px-6 py-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={() => handleDeleteCustomer(customer.id)}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {filteredCustomers.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No customers found matching your search.
            </div>
          )}
        </motion.div>
      )}

      {/* View Customer Details Modal */}
      {viewingCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary-800 rounded-xl border border-secondary-700 p-6 w-full max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-white">Customer Details</h3>
              <button 
                onClick={() => setViewingCustomer(null)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gold-600/20 flex items-center justify-center rounded-full text-gold-400">
                  <FaUser className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-white text-xl font-medium">{viewingCustomer.name}</h2>
                  <p className="text-gray-400">Customer since {new Date(viewingCustomer.lastVisit).getFullYear()}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-secondary-700/30 p-4 rounded-lg">
                  <h4 className="text-gray-300 text-sm mb-2">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaEnvelope className="text-gold-500 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Email</p>
                        <p className="text-white">{viewingCustomer.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaPhone className="text-gold-500 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Phone</p>
                        <p className="text-white">{viewingCustomer.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-gold-500 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Address</p>
                        <p className="text-white">{viewingCustomer.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary-700/30 p-4 rounded-lg">
                  <h4 className="text-gray-300 text-sm mb-2">Visit Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FaCalendarAlt className="text-gold-500 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Last Visit</p>
                        <p className="text-white">{new Date(viewingCustomer.lastVisit).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaUser className="text-gold-500 mt-1" />
                      <div>
                        <p className="text-gray-300 text-sm">Total Visits</p>
                        <p className="text-white">{viewingCustomer.visits}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary-700/30 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <FaStickyNote className="text-gold-500 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm">Notes</p>
                    <p className="text-white">{viewingCustomer.notes || "No notes available."}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <button 
                  onClick={() => {
                    handleEditCustomer(viewingCustomer);
                    setViewingCustomer(null);
                  }}
                  className="px-4 py-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Edit Customer
                </button>
                <button 
                  onClick={() => setViewingCustomer(null)}
                  className="px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Customer Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary-800 rounded-xl border border-secondary-700 p-6 w-full max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-white">Add New Customer</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Notes</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
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
                  Add Customer
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminCustomers; 