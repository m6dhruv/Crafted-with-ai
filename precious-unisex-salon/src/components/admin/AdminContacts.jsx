import { useState, useEffect } from 'react';
import { FaTrash, FaEnvelope, FaPhone, FaUser, FaClipboard } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    setIsLoading(true);
    // Get contacts from localStorage
    const storedContacts = localStorage.getItem('contactSubmissions');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact submission?')) {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      setContacts(updatedContacts);
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedContacts));
      
      // If the deleted contact was selected, clear selection
      if (selectedContact && selectedContact.id === id) {
        setSelectedContact(null);
      }
      
      toast.success('Contact deleted successfully!');
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm('Are you sure you want to delete all contact submissions?')) {
      setContacts([]);
      localStorage.removeItem('contactSubmissions');
      setSelectedContact(null);
      toast.success('All contacts deleted successfully!');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ToastContainer position="top-right" theme="dark" />
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif text-white">Contact Submissions</h2>
        <div>
          {contacts.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Delete All
            </button>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center flex-1">
          <div className="text-white">Loading...</div>
        </div>
      ) : contacts.length === 0 ? (
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <FaEnvelope className="text-amber-400 text-4xl mx-auto mb-4" />
          <h3 className="text-white text-lg font-medium mb-2">No Contact Submissions</h3>
          <p className="text-gray-400">
            There are no contact form submissions yet. They will appear here when customers use the contact form.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Left Column - Contact List */}
          <div className="lg:col-span-1 bg-gray-800 rounded-lg p-4 h-full overflow-auto">
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-gray-700">
              All Submissions ({contacts.length})
            </h3>
            {contacts.map((contact) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`cursor-pointer p-4 mb-3 rounded-lg transition-colors ${
                  selectedContact && selectedContact.id === contact.id 
                    ? 'bg-amber-600'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className={`font-medium ${
                      selectedContact && selectedContact.id === contact.id 
                        ? 'text-white' 
                        : 'text-amber-400'
                    }`}>
                      {contact.name}
                    </h4>
                    <p className={`text-sm ${
                      selectedContact && selectedContact.id === contact.id 
                        ? 'text-white' 
                        : 'text-gray-300'
                    }`}>
                      {contact.subject}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(contact.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(contact.id);
                    }}
                    className="text-red-400 hover:text-red-300 transition-colors"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Contact Details */}
          <div className="lg:col-span-2">
            {selectedContact ? (
              <div className="bg-gray-800 rounded-lg p-6 h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-serif text-white">{selectedContact.subject}</h3>
                  <button
                    onClick={() => handleDelete(selectedContact.id)}
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg">
                    <FaUser className="text-amber-400" />
                    <div>
                      <h4 className="text-xs text-gray-400">Name</h4>
                      <p className="text-white">{selectedContact.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg">
                    <FaEnvelope className="text-amber-400" />
                    <div>
                      <h4 className="text-xs text-gray-400">Email</h4>
                      <p className="text-white">{selectedContact.email}</p>
                    </div>
                  </div>

                  {selectedContact.phone && (
                    <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg">
                      <FaPhone className="text-amber-400" />
                      <div>
                        <h4 className="text-xs text-gray-400">Phone</h4>
                        <p className="text-white">{selectedContact.phone}</p>
                      </div>
                    </div>
                  )}

                  <div className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <FaClipboard className="text-amber-400" />
                      <h4 className="text-xs text-gray-400">Message</h4>
                    </div>
                    <p className="text-white whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>

                  <div className="text-xs text-gray-400 mt-4">
                    Submitted on {new Date(selectedContact.date).toLocaleString()}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-8 flex items-center justify-center h-full">
                <div className="text-center">
                  <FaEnvelope className="text-amber-400 text-4xl mx-auto mb-4" />
                  <h3 className="text-white text-lg font-medium mb-1">Select a Contact</h3>
                  <p className="text-gray-400">
                    Please select a contact from the list to view details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts; 