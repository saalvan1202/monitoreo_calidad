import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Reemplaza con tu URL base
  timeout: parseInt(import.meta.env.VITE_TIMEOUT), // Tiempo de espera en milisegundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
