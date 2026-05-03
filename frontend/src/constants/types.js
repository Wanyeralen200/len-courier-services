// Parcel constants and types

export const PARCEL_STATUSES = {
  PENDING: 'pending',
  ASSIGNED: 'assigned',
  PICKED_UP: 'picked_up',
  IN_TRANSIT: 'in_transit',
  OUT_FOR_DELIVERY: 'out_for_delivery',
  DELIVERED: 'delivered',
  RETURNED: 'returned'
};

export const DELIVERY_TYPES = {
  STANDARD: 'standard',
  EXPRESS: 'express',
  SAME_DAY: 'same_day'
};

export const DELIVERY_TYPE_LABELS = {
  standard: 'Standard (3-5 days)',
  express: 'Express (1-2 days)',
  same_day: 'Same Day'
};

export const PAYMENT_METHODS = {
  MPESA: 'mpesa',
  CARD: 'card',
  BANK_TRANSFER: 'bank_transfer'
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  REFUNDED: 'refunded'
};

export const USER_ROLES = {
  CUSTOMER: 'customer',
  RIDER: 'rider',
  ADMIN: 'admin'
};

// Price calculations
export const DELIVERY_PRICES = {
  standard: 50,
  express: 75,
  same_day: 150
};

export const DISTANCE_RATE = 5; // Per km
export const WEIGHT_RATE = 10; // Per kg
