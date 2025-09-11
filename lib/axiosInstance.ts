import { getUserDetails, getClientId, setClientId } from '@/util';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false, // Set to true if backend uses HttpOnly cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const user: any = getUserDetails();
    // Access token: prefer userDetails.access_token; fallback to localStorage 'access_token'
    const lsToken = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
    const accessToken = user?.access_token || lsToken;
    if (accessToken) {
      (config.headers as any).Authorization = `Bearer ${accessToken}`;
    }
    // x-client-id: prefer userDetails.client_id; fallback to localStorage via helper
    const clientId = (user && (user as any).client_id) || getClientId();
    if (clientId) {
      (config.headers as any)['x-client-id'] = clientId as string;
    }
    return config;
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Persist/refresh x-client-id if provided by backend (headers are typically lower-cased)
    const id = (response.headers?.['x-client-id'] as string) || (response.headers?.['X-Client-Id'] as string);
    if (id) setClientId(id);
    return response;
  },
  (error) => {
  // Always reject so callers can handle errors; don't return undefined
  return Promise.reject(error);
  }
);
 
export default api;