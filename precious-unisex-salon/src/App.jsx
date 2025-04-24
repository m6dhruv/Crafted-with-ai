import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load components to improve performance
const Layout = lazy(() => import('./components/layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex h-screen w-full items-center justify-center bg-secondary-950 text-white">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Loading...</h2>
      <div className="w-16 h-1 bg-gold-400 mx-auto animate-pulse"></div>
    </div>
  </div>
);

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to a service here
    console.error("App Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Return empty div or minimal error UI instead of full-screen error
      return this.props.children;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Admin Dashboard has its own layout */}
          <Route path="admin-dashboard" element={<AdminDashboardPage />} />
          
          {/* Main site layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="admin-login" element={<AdminLoginPage />} />
           
            <Route path="*" element={<div className="container py-32 text-center"><h1 className="text-3xl mb-4">Page Not Found</h1><p>The page you're looking for doesn't exist.</p></div>} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
