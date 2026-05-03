import apiClient from './client';

export const authAPI = {
  register: (data) => apiClient.post('/auth/register', data),
  login: (data) => apiClient.post('/auth/login', data),
  getCurrentUser: () => apiClient.get('/auth/me'),
  logout: () => apiClient.post('/auth/logout')
};

export const parcelAPI = {
  createParcel: (data) => apiClient.post('/parcels', data),
  getParcelByTrackingId: (trackingId) => apiClient.get(`/parcels/track/${trackingId}`),
  getCustomerParcels: () => apiClient.get('/parcels/customer/all'),
  getRiderParcels: () => apiClient.get('/parcels/rider/all'),
  updateParcelStatus: (id, data) => apiClient.put(`/parcels/${id}/status`, data),
  assignRider: (id, data) => apiClient.put(`/parcels/${id}/assign`, data)
};

export const paymentAPI = {
  initiateMpesaPayment: (data) => apiClient.post('/payments/mpesa/initiate', data),
  confirmPayment: (data) => apiClient.post('/payments/confirm', data),
  getPaymentHistory: () => apiClient.get('/payments/history'),
  getPaymentById: (id) => apiClient.get(`/payments/${id}`)
};

export const adminAPI = {
  getDashboardStats: () => apiClient.get('/admin/dashboard/stats'),
  getAllParcels: () => apiClient.get('/admin/parcels'),
  getAllRiders: () => apiClient.get('/admin/riders'),
  getAllCustomers: () => apiClient.get('/admin/customers'),
  getRevenueReport: () => apiClient.get('/admin/revenue'),
  updateParcelStatus: (id, data) => apiClient.put(`/admin/parcels/${id}/status`, data)
};
