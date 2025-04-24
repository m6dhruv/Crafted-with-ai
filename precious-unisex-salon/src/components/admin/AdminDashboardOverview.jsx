import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaShoppingBag, FaRupeeSign, FaImages, FaEnvelope } from 'react-icons/fa';
import apiService from '../../services/api';

const AdminDashboardOverview = () => {
  const [stats, setStats] = useState({
    customers: 0,
    images: 0,
    services: 0,
    revenue: 0,
    contacts: 0
  });
  const [activity, setActivity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch real data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch dashboard stats and recent activity in parallel
        const [dashboardStats, recentActivity] = await Promise.all([
          apiService.getDashboardStats(),
          apiService.getRecentActivity()
        ]);
        
        setStats(dashboardStats);
        setActivity(recentActivity);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Failed to load dashboard data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Add contacts count from localStorage
  useEffect(() => {
    // Get contacts count from localStorage
    const storedContacts = localStorage.getItem('contactSubmissions');
    if (storedContacts) {
      const contactsCount = JSON.parse(storedContacts).length;
      setStats(prevStats => ({
        ...prevStats,
        contacts: contactsCount
      }));
    }
  }, []);

  // Format time difference for activity feed
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const diff = now - new Date(timestamp);
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
  };

  const statsCards = [
    { 
      id: 'customers', 
      label: 'Total Customers', 
      value: stats.customers, 
      icon: <FaUsers className="text-indigo-400" />,
      bgColor: 'from-indigo-500/10 to-indigo-500/5',
      textColor: 'text-indigo-400'
    },
    { 
      id: 'images', 
      label: 'Gallery Images', 
      value: stats.images, 
      icon: <FaImages className="text-green-400" />,
      bgColor: 'from-green-500/10 to-green-500/5',
      textColor: 'text-green-400'
    },
    { 
      id: 'services', 
      label: 'Active Services', 
      value: stats.services, 
      icon: <FaShoppingBag className="text-amber-400" />,
      bgColor: 'from-amber-500/10 to-amber-500/5',
      textColor: 'text-amber-400'
    },
    { 
      id: 'contacts', 
      label: 'Contact Messages', 
      value: stats.contacts, 
      icon: <FaEnvelope className="text-blue-400" />,
      bgColor: 'from-blue-500/10 to-blue-500/5',
      textColor: 'text-blue-400'
    },
    { 
      id: 'revenue', 
      label: 'Monthly Revenue', 
      value: `₹${stats.revenue.toLocaleString()}`, 
      icon: <FaRupeeSign className="text-rose-400" />,
      bgColor: 'from-rose-500/10 to-rose-500/5',
      textColor: 'text-rose-400'
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-serif text-white">Dashboard Overview</h2>
        <span className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString()}</span>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {isLoading ? (
          // Loading skeleton for stats cards
          Array(4).fill(0).map((_, index) => (
            <div key={index} className="bg-secondary-800/50 border border-secondary-700/50 rounded-xl p-6 shadow-lg animate-pulse">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="h-3 w-24 bg-secondary-700 rounded"></div>
                  <div className="h-7 w-16 bg-secondary-700 rounded"></div>
                </div>
                <div className="p-3 bg-secondary-700 rounded-lg"></div>
              </div>
            </div>
          ))
        ) : (
          // Actual stat cards
          statsCards.map((card) => (
            <motion.div 
              key={card.id}
              className={`bg-gradient-to-br ${card.bgColor} border border-secondary-700/50 rounded-xl p-6 shadow-lg`}
              variants={item}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm mb-1">{card.label}</p>
                  <h3 className={`text-2xl font-bold ${card.textColor}`}>{card.value}</h3>
                </div>
                <div className="p-3 bg-secondary-800/50 rounded-lg text-xl">
                  {card.icon}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div 
          className="lg:col-span-2 bg-secondary-800 rounded-xl border border-secondary-700/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-6 border-b border-secondary-700/50">
            <h3 className="text-xl font-serif text-white">Recent Activity</h3>
          </div>
          <div className="p-6">
            {isLoading ? (
              // Loading skeleton for recent activity
              <div className="space-y-4">
                {Array(5).fill(0).map((_, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b border-secondary-700/30 animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-secondary-700 mt-2"></div>
                    <div className="w-full">
                      <div className="h-4 w-3/4 bg-secondary-700 rounded mb-2"></div>
                      <div className="h-3 w-1/3 bg-secondary-700 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-4">
                {activity.map((item, index) => (
                  <li key={item.id} className={`flex items-start gap-4 ${index < activity.length - 1 ? 'pb-4 border-b border-secondary-700/30' : ''}`}>
                    <div className="w-2 h-2 rounded-full bg-gold-500 mt-2"></div>
                    <div>
                      <p className="text-white">{item.message}</p>
                      <p className="text-sm text-gray-400">{item.user} • {formatTimeAgo(item.timestamp)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="bg-secondary-800 rounded-xl border border-secondary-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-6 border-b border-secondary-700/50">
            <h3 className="text-xl font-serif text-white">Quick Actions</h3>
          </div>
          <div className="p-6 space-y-3">
            <button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-3 px-4 rounded-lg transition-colors">
              Upload New Image
            </button>
            <button className="w-full bg-secondary-700 hover:bg-secondary-600 text-white py-3 px-4 rounded-lg transition-colors">
              Add New Service
            </button>
            <button 
              onClick={() => {
                const adminDashboardPage = document.getElementById('admin-dashboard-page');
                if (adminDashboardPage) {
                  // Access the parent component's setActiveSection
                  if (window.setAdminActiveSection) {
                    window.setAdminActiveSection('contacts');
                  }
                }
              }}
              className="w-full bg-secondary-700 hover:bg-secondary-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              View Contact Messages
            </button>
            <button className="w-full bg-secondary-700 hover:bg-secondary-600 text-white py-3 px-4 rounded-lg transition-colors">
              Add New Customer
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboardOverview; 