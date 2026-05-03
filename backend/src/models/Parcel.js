const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
  trackingId: {
    type: String,
    unique: true,
    required: true
  },
  sender: {
    name: String,
    phone: String,
    email: String,
    address: String
  },
  receiver: {
    name: String,
    phone: String,
    email: String,
    address: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  weight: {
    type: Number,
    required: true
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number
  },
  contents: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'assigned', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered', 'returned'],
    default: 'pending'
  },
  deliveryType: {
    type: String,
    enum: ['standard', 'express', 'same_day'],
    default: 'standard'
  },
  price: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  assignedRider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  pickupTime: Date,
  deliveryTime: Date,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Parcel', parcelSchema);
