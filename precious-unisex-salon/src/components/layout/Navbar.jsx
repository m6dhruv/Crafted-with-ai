import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { FaLock } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Staggered animation for mobile menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Logo animation
  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-secondary-950 to-secondary-900 shadow-lg border-b border-gold-800/30 py-2' 
          : 'bg-black/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={logoVariants}
        >
          <Link 
            to="/" 
            className="flex items-center"
            onClick={closeMenu}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center h-14 w-14 mr-2 bg-gold-600/20 rounded-full border border-gold-600/30">
                <img src="/logo.svg" alt="Precious Unisex Salon Logo" className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-xl font-bold font-serif gold-text">
                  Precious <span className="text-red-600">Salon</span>
                </h1>
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-gold-600 to-gold-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                relative text-sm font-medium transition-colors duration-300
                ${isActive 
                  ? 'text-gold-400' 
                  : scrolled ? 'text-white hover:text-gold-400' : 'text-white hover:text-gold-400'}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gold-400"
                      layoutId="navbar-underline"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/admin-login" 
              className="flex items-center gap-1.5 bg-gold-600 hover:bg-gold-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-gold-600/30"
            >
              <FaLock className="text-xs" />
              Admin
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden text-gold-400 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiOutlineMenuAlt3 className="w-6 h-6" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-secondary-900 border-t border-gold-800/30 shadow-lg"
          >
            <motion.div 
              className="container py-6 space-y-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      block py-3 px-2 text-sm font-medium rounded-md transition-all duration-300
                      ${isActive 
                        ? 'text-gold-400 bg-secondary-800/50 pl-4' 
                        : 'text-white hover:text-gold-400 hover:bg-secondary-800/30 hover:pl-4'}
                    `}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-2">
                <Link 
                  to="/admin-login" 
                  className="flex items-center gap-1.5 bg-gold-600 hover:bg-gold-700 text-white px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 w-full"
                  onClick={closeMenu}
                >
                  <FaLock className="text-xs" />
                  Admin Login
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 