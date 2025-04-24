import { motion } from 'framer-motion';
import { FaChartLine, FaShoppingBag, FaUsers, FaCog, FaSignOutAlt, FaImages, FaEnvelope } from 'react-icons/fa';

const AdminSidebar = ({ activeSection, setActiveSection, handleLogout }) => {
  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <FaChartLine /> },
    { id: 'gallery', label: 'Gallery', icon: <FaImages /> },
    { id: 'services', label: 'Services', icon: <FaShoppingBag /> },
    { id: 'customers', label: 'Customers', icon: <FaUsers /> },
    { id: 'contacts', label: 'Contacts', icon: <FaEnvelope /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <aside className="bg-secondary-800 h-full w-64 flex flex-col border-r border-secondary-700">
      {/* Logo */}
      <div className="p-6 border-b border-secondary-700">
        <h1 className="text-xl font-serif font-medium text-gold-400">Precious Salon</h1>
        <p className="text-xs text-gray-400">Admin Dashboard</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gold-600 text-white'
                    : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 w-1 h-8 bg-white rounded-r-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-secondary-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-secondary-700 hover:text-red-300 transition-colors"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar; 