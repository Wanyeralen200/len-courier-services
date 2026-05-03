// Utility functions for the backend

const generateTrackingId = () => {
  return 'LEN-' + Date.now().toString().slice(-6).toUpperCase();
};

const calculateDeliveryPrice = (distance, weight, deliveryType) => {
  const basePrice = 50; // Base price in KES
  const distanceRate = 5; // Per km
  const weightRate = 10; // Per kg
  
  let price = basePrice + (distance * distanceRate) + (weight * weightRate);
  
  // Apply delivery type multiplier
  const multipliers = {
    standard: 1,
    express: 1.5,
    same_day: 2
  };
  
  price = price * (multipliers[deliveryType] || 1);
  
  return Math.round(price);
};

const getParcelStatus = (parcel) => {
  const statuses = {
    pending: '⏳ Pending',
    assigned: '📋 Assigned',
    picked_up: '📦 Picked Up',
    in_transit: '🚚 In Transit',
    out_for_delivery: '🚪 Out for Delivery',
    delivered: '✅ Delivered',
    returned: '↩️ Returned'
  };
  
  return statuses[parcel.status] || parcel.status;
};

const formatPhoneNumber = (phone) => {
  // Format phone number to international format
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 12) {
    return `+${cleaned}`;
  }
  return phone;
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return re.test(phone);
};

module.exports = {
  generateTrackingId,
  calculateDeliveryPrice,
  getParcelStatus,
  formatPhoneNumber,
  validateEmail,
  validatePhone
};
