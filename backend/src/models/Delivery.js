const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  parcelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parcel',
    required: true
  },
  riderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['assigned', 'in_progress', 'completed', 'failed', 'cancelled'],
    default: 'assigned'
  },
  startTime: Date,
  completionTime: Date,
  actualLocation: {
    lat: Number,
    lng: Number
  },
  signature: String,
  photo: String,
  notes: String,
  attempts: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Delivery', deliverySchema);
