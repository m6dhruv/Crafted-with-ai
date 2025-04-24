import axios from 'axios';

// Base configuration for axios
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add logging interceptors for development
if (import.meta.env.DEV) {
  apiClient.interceptors.request.use(request => {
    console.log('🚀 API Request:', request.method?.toUpperCase(), request.url);
    return request;
  });

  apiClient.interceptors.response.use(
    response => {
      console.log('✅ API Response:', response.config.method?.toUpperCase(), response.config.url, response.status);
      return response;
    },
    error => {
      console.error('❌ API Error:', error.config?.method?.toUpperCase(), error.config?.url, error.response?.status);
      return Promise.reject(error);
    }
  );
}

// Mock implementation to simulate API calls
// In production, these would make real HTTP requests to your backend
const mockAPI = {
  getDashboardStats: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return mock data (replace with real API calls in production)
    return {
      customers: 234,
      images: 67,
      services: 38,
      revenue: 125750
    };
  },
  
  getRecentActivity: async () => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return [
      {
        id: 1,
        type: 'customer_registration',
        message: 'New customer registered',
        user: 'Prachi Mehta',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
      },
      {
        id: 2,
        type: 'image_upload',
        message: 'New image uploaded to gallery',
        user: 'Admin',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000) // 5 hours ago
      },
      {
        id: 3,
        type: 'service_update',
        message: 'Service price updated',
        user: 'Admin',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
      },
      {
        id: 4,
        type: 'customer_update',
        message: 'Customer information updated',
        user: 'Admin',
        timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000) // 2 days ago
      },
      {
        id: 5,
        type: 'service_added',
        message: 'New service added',
        user: 'Admin',
        timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000) // 3 days ago
      }
    ];
  }
};

// API service object
const apiService = {
  // Dashboard
  getDashboardStats: async () => {
    try {
      // In production, uncomment this line to make real API calls
      // const response = await apiClient.get('/dashboard/stats');
      // return response.data;
      
      // For now, use mock data
      return await mockAPI.getDashboardStats();
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  },
  
  getRecentActivity: async () => {
    try {
      // In production, uncomment this line to make real API calls
      // const response = await apiClient.get('/activity/recent');
      // return response.data;
      
      // For now, use mock data
      return await mockAPI.getRecentActivity();
    } catch (error) {
      console.error('Error fetching recent activity:', error);
      throw error;
    }
  }
};

export default apiService; 