import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaSearch, FaEllipsisV, FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  // Simulate loading data from API
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppointments([
        { 
          id: 1, 
          customerName: 'Ananya Desai', 
          service: 'Bridal Makeup', 
          date: '2023-12-20', 
          time: '10:00 AM', 
          status: 'confirmed',
          phone: '+91 98765 43210' 
        },
        { 
          id: 2, 
          customerName: 'Ravi Kumar', 
          service: 'Haircut & Styling', 
          date: '2023-12-20', 
          time: '11:30 AM', 
          status: 'pending',
          phone: '+91 87654 32109' 
        },
        { 
          id: 3, 
          customerName: 'Priya Sharma', 
          service: 'Facial & Cleanup', 
          date: '2023-12-21', 
          time: '2:00 PM', 
          status: 'confirmed',
          phone: '+91 76543 21098' 
        },
        { 
          id: 4, 
          customerName: 'Ajay Patel', 
          service: 'Hair Coloring', 
          date: '2023-12-22', 
          time: '3:30 PM', 
          status: 'cancelled',
          phone: '+91 65432 10987' 
        },
        { 
          id: 5, 
          customerName: 'Divya Gupta', 
          service: 'Manicure & Pedicure', 
          date: '2023-12-23', 
          time: '11:00 AM', 
          status: 'confirmed',
          phone: '+91 54321 09876' 
        },
      ]);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
            <FaCheck className="text-[10px]" /> Confirmed
          </span>
        );
      case 'pending':
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full">
            <FaClock className="text-[10px]" /> Pending
          </span>
        );
      case 'cancelled':
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">
            <FaTimes className="text-[10px]" /> Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(
      appointments.map(appointment => 
        appointment.id === id ? { ...appointment, status: newStatus } : appointment
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-serif text-white">Manage Appointments</h2>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search appointments..." 
              className="w-full md:w-64 bg-secondary-800 text-white border border-secondary-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
            />
          </div>
          
          <button 
            onClick={() => setShowAddForm(true)}
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
          className="bg-secondary-800 rounded-xl border border-secondary-700/50 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary-700/50">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Customer</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Service</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Date & Time</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <motion.tr 
                    key={appointment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-secondary-700/30"
                  >
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-white">{appointment.customerName}</p>
                        <p className="text-sm text-gray-400">{appointment.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-300">{appointment.service}</td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="text-white">{new Date(appointment.date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-400">{appointment.time}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {getStatusBadge(appointment.status)}
                    </td>
                    <td className="py-4 px-6">
                      <div className="relative group">
                        <button className="p-2 hover:bg-secondary-700 rounded-full transition-colors">
                          <FaEllipsisV className="text-gray-400" />
                        </button>
                        
                        <div className="absolute right-0 mt-2 w-48 bg-secondary-800 border border-secondary-700 rounded-lg shadow-lg z-10 hidden group-hover:block">
                          <div className="py-1">
                            <button 
                              onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary-700 hover:text-gold-400"
                            >
                              Mark as Confirmed
                            </button>
                            <button 
                              onClick={() => handleStatusChange(appointment.id, 'pending')}
                              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary-700 hover:text-gold-400"
                            >
                              Mark as Pending
                            </button>
                            <button 
                              onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                              className="w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary-700 hover:text-gold-400"
                            >
                              Cancel Appointment
                            </button>
                            <div className="border-t border-secondary-700 my-1"></div>
                            <button className="w-full text-left px-4 py-2 text-sm text-white hover:bg-secondary-700 hover:text-gold-400">
                              Edit Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Add Appointment Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary-800 rounded-xl border border-secondary-700 p-6 w-full max-w-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-serif text-white">Add New Appointment</h3>
              <button 
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Customer Name</label>
                <input 
                  type="text" 
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-1">Service</label>
                <select className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500">
                  <option>Select a service</option>
                  <option>Haircut & Styling</option>
                  <option>Bridal Makeup</option>
                  <option>Facial & Cleanup</option>
                  <option>Hair Coloring</option>
                  <option>Manicure & Pedicure</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-1">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-1">Time</label>
                  <input 
                    type="time" 
                    className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                  />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-secondary-700 text-white rounded-lg hover:bg-secondary-600 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  className="px-4 py-2 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
                >
                  Save Appointment
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminAppointments; 