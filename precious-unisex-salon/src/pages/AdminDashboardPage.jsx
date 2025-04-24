import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaShoppingBag, FaChartLine, FaCog, FaSignOutAlt, FaTimes, FaBars, FaImages } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminDashboardOverview from '../components/admin/AdminDashboardOverview';
import AdminGallery from '../components/admin/AdminGallery';
import AdminServices from '../components/admin/AdminServices';
import AdminCustomers from '../components/admin/AdminCustomers';
import AdminSettings from '../components/admin/AdminSettings';
import AdminContacts from '../components/admin/AdminContacts';

const AdminDashboardPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    // This is a simple check. In a real app, you would check for valid auth tokens
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin-login');
    }
    
    // Set page title
    document.title = 'Admin Dashboard - Precious Unisex Salon';
    
    // Expose setActiveSection to window for child components to access
    window.setAdminActiveSection = setActiveSection;
    
    // Clean up when component unmounts
    return () => {
      delete window.setAdminActiveSection;
    };
  }, [navigate]);

  const handleLogout = () => {
    // Clear admin login state
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin-login');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview':
        return <AdminDashboardOverview />;
      case 'gallery':
        return <AdminGallery />;
      case 'services':
        return <AdminServices />;
      case 'customers':
        return <AdminCustomers />;
      case 'contacts':
        return <AdminContacts />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminDashboardOverview />;
    }
  };

  return (
    <div id="admin-dashboard-page" className="flex h-screen bg-secondary-900">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gold-600 text-white"
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        {isMobileSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar - Desktop always visible, mobile as overlay */}
      <div className={`lg:block ${isMobileSidebarOpen ? 'block' : 'hidden'} lg:relative fixed inset-0 z-40`}>
        <div 
          className="lg:hidden absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="lg:relative w-64 h-full"
        >
          <AdminSidebar 
            activeSection={activeSection}
            setActiveSection={(section) => {
              setActiveSection(section);
              setIsMobileSidebarOpen(false);
            }}
            handleLogout={handleLogout}
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-secondary-800 border-b border-secondary-700 py-4 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-serif text-white">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-red-400 hover:text-red-300"
              >
                <FaSignOutAlt />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-secondary-950">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {renderActiveSection()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage; 