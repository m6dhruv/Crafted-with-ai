import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa';
import SectionContainer from '../components/ui/SectionContainer';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';

const AdminLoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Admin Login - Precious Unisex Salon';
    
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/admin-dashboard');
    }
  }, [navigate]);

  const onSubmit = (data) => {
    // This is a simple example. In a real app, you would make an API call to verify credentials.
    if (data.username === 'admin' && data.password === 'admin123') {
      // Store login state
      localStorage.setItem('adminLoggedIn', 'true');
      // Redirect to admin dashboard
      navigate('/admin-dashboard');
    } else {
      // Failed login
      setLoginError('Invalid username or password');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title mb-6">Admin Login</h1>
            <p className="text-lg text-secondary-100 mb-6">
              Please log in to access the administration area
            </p>
          </div>
        </div>
      </section>
      
      {/* Login Form */}
      <SectionContainer background="light">
        <div className="max-w-md mx-auto">
          <AnimateOnScroll type="fade">
            <div className="bg-white rounded-lg shadow-soft p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-secondary-800">
                <FaLock className="inline-block mr-2 mb-1" />
                Secure Login
              </h2>
              
              {loginError && (
                <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
                  {loginError}
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-secondary-800 mb-2">Username</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary-500">
                      <FaUser />
                    </span>
                    <input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      className={`w-full pl-10 px-4 py-3 rounded-md border ${errors.username ? 'border-red-500' : 'border-secondary-200'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register('username', { required: 'Username is required' })}
                    />
                  </div>
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-secondary-800 mb-2">Password</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary-500">
                      <FaLock />
                    </span>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className={`w-full pl-10 px-4 py-3 rounded-md border ${errors.password ? 'border-red-500' : 'border-secondary-200'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register('password', { required: 'Password is required' })}
                    />
                  </div>
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>
                
                <div className="text-center text-sm text-gray-500">
                  <p>Use the following credentials for testing:</p>
                  <p>Username: <span className="font-medium">admin</span> | Password: <span className="font-medium">admin123</span></p>
                </div>
                
                <button 
                  type="submit"
                  className="btn bg-gold-600 hover:bg-gold-700 text-white w-full py-3 rounded-md transition-colors"
                >
                  Log In
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionContainer>
    </div>
  );
};

export default AdminLoginPage; 