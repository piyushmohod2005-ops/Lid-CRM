import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const authService = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getProfile: () => api.get('/auth/me'),
};

// Products
export const productService = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
};

// Cart
export const cartService = {
  getCart: (userId) => api.get(`/cart/${userId}`),
  addItem: (userId, data) => api.post(`/cart/${userId}/add`, data),
  removeItem: (userId, itemId) => api.delete(`/cart/${userId}/remove/${itemId}`),
  updateItem: (userId, itemId, data) => api.put(`/cart/${userId}/update/${itemId}`, data),
  clearCart: (userId) => api.delete(`/cart/${userId}/clear`),
};

// Orders
export const orderService = {
  getUserOrders: (userId) => api.get(`/orders/user/${userId}`),
  getOrder: (orderId) => api.get(`/orders/${orderId}`),
  create: (data) => api.post('/orders', data),
  updateStatus: (orderId, data) => api.put(`/orders/${orderId}/status`, data),
};

// Users
export const userService = {
  getProfile: (userId) => api.get(`/users/${userId}`),
  updateProfile: (userId, data) => api.put(`/users/${userId}`, data),
  changePassword: (userId, data) => api.put(`/users/${userId}/password`, data),
};

// Admin
export const adminService = {
  getDashboard: () => api.get('/admin/dashboard'),
  getUsers: (params) => api.get('/admin/users', { params }),
  getOrders: (params) => api.get('/admin/orders', { params }),
  getSalesAnalytics: () => api.get('/admin/analytics/sales'),
};

export default api;
