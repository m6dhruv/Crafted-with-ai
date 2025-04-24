import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaUser, FaLock, FaStore, FaEnvelope, FaBell, FaCheckCircle } from 'react-icons/fa';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [profileForm, setProfileForm] = useState({
    name: 'Admin User',
    email: 'admin@preciousunisex.com',
    phone: '+91 9876543210'
  });
  
  const [salonForm, setSalonForm] = useState({
    name: 'Precious Unisex Salon',
    address: '123 Beauty St, Mumbai, India',
    phone: '+91 9876543210',
    email: 'contact@preciousunisex.com',
    openHours: '10:00 AM - 8:00 PM',
    openDays: 'Monday - Saturday'
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    appointmentReminders: true,
    marketingEmails: false
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm({
      ...profileForm,
      [name]: value
    });
  };

  const handleSalonChange = (e) => {
    const { name, value } = e.target;
    setSalonForm({
      ...salonForm,
      [name]: value
    });
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show save message
    setShowSaveMessage(true);
    setTimeout(() => {
      setShowSaveMessage(false);
    }, 3000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={profileForm.name}
                onChange={handleProfileChange}
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={profileForm.email}
                onChange={handleProfileChange}
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={profileForm.phone}
                onChange={handleProfileChange}
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className="px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
              >
                Save Profile
              </button>
            </div>
          </form>
        );
        
      case 'password':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Current Password</label>
              <input 
                type="password" 
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">New Password</label>
              <input 
                type="password" 
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
              <p className="mt-1 text-xs text-gray-400">Password must be at least 8 characters long and include a number and a special character</p>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Confirm New Password</label>
              <input 
                type="password" 
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className="px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
              >
                Update Password
              </button>
            </div>
          </form>
        );
        
      case 'salon':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Salon Name</label>
              <input 
                type="text" 
                name="name"
                value={salonForm.name}
                onChange={handleSalonChange}
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Address</label>
              <textarea 
                name="address"
                value={salonForm.address}
                onChange={handleSalonChange}
                rows="2" 
                className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
              ></textarea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Contact Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={salonForm.phone}
                  onChange={handleSalonChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Contact Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={salonForm.email}
                  onChange={handleSalonChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Operating Hours</label>
                <input 
                  type="text" 
                  name="openHours"
                  value={salonForm.openHours}
                  onChange={handleSalonChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Operating Days</label>
                <input 
                  type="text" 
                  name="openDays"
                  value={salonForm.openDays}
                  onChange={handleSalonChange}
                  className="w-full bg-secondary-700 border border-secondary-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className="px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
              >
                Save Salon Info
              </button>
            </div>
          </form>
        );
        
      case 'notifications':
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-gold-400" />
                  <div>
                    <h4 className="text-white font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-400">Receive email notifications for new appointments</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="emailNotifications"
                    checked={notificationSettings.emailNotifications}
                    onChange={handleNotificationChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-secondary-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-secondary-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FaBell className="text-gold-400" />
                  <div>
                    <h4 className="text-white font-medium">SMS Notifications</h4>
                    <p className="text-sm text-gray-400">Receive SMS alerts for new appointments</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="smsNotifications"
                    checked={notificationSettings.smsNotifications}
                    onChange={handleNotificationChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-secondary-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-secondary-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-gold-400" />
                  <div>
                    <h4 className="text-white font-medium">Appointment Reminders</h4>
                    <p className="text-sm text-gray-400">Send reminders to customers about upcoming appointments</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="appointmentReminders"
                    checked={notificationSettings.appointmentReminders}
                    onChange={handleNotificationChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-secondary-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-secondary-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-gold-400" />
                  <div>
                    <h4 className="text-white font-medium">Marketing Emails</h4>
                    <p className="text-sm text-gray-400">Send promotional emails to customers</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="marketingEmails"
                    checked={notificationSettings.marketingEmails}
                    onChange={handleNotificationChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-secondary-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-600"></div>
                </label>
              </div>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit"
                className="px-6 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors"
              >
                Save Notification Settings
              </button>
            </div>
          </form>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-white mb-6">Settings</h2>
      
      {/* Save Success Message */}
      {showSaveMessage && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-green-500/20 border border-green-500/30 text-green-400 p-4 rounded-lg flex items-center gap-2 mb-6"
        >
          <FaCheckCircle />
          <span>Settings saved successfully!</span>
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="bg-secondary-800 rounded-xl border border-secondary-700/50 overflow-hidden p-4">
          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-gold-600 text-white' 
                      : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
                  }`}
                >
                  <FaUser /> <span>Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('password')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'password' 
                      ? 'bg-gold-600 text-white' 
                      : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
                  }`}
                >
                  <FaLock /> <span>Password</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('salon')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'salon' 
                      ? 'bg-gold-600 text-white' 
                      : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
                  }`}
                >
                  <FaStore /> <span>Salon Info</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'notifications' 
                      ? 'bg-gold-600 text-white' 
                      : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
                  }`}
                >
                  <FaBell /> <span>Notifications</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Settings Content */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-3 bg-secondary-800 rounded-xl border border-secondary-700/50 p-6"
        >
          <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            {activeTab === 'profile' && <FaUser className="text-gold-400" />}
            {activeTab === 'password' && <FaLock className="text-gold-400" />}
            {activeTab === 'salon' && <FaStore className="text-gold-400" />}
            {activeTab === 'notifications' && <FaBell className="text-gold-400" />}
            <span>
              {activeTab === 'profile' && 'Profile Settings'}
              {activeTab === 'password' && 'Change Password'}
              {activeTab === 'salon' && 'Salon Information'}
              {activeTab === 'notifications' && 'Notification Settings'}
            </span>
          </h3>
          
          {renderTabContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSettings; 