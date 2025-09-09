import { getUserDetails } from '@/util';
import axios from 'axios';
 
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
   // Replace with your backend API base URL
  withCredentials: false, // Set to true if backend uses HttpOnly cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getUserDetails();
    if (token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
    return config;
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response, // Pass through successful responses
  (error) => {
    // Global error handling
    if (error.response) {
      return Promise.reject(error); // Let the calling code handle it too
    }
  }
);
 
export default api;