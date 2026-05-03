const Parcel = require('../models/Parcel');
const User = require('../models/User');

// Create Parcel
exports.createParcel = async (req, res) => {
  try {
    const { sender, receiver, weight, contents, deliveryType, price } = req.body;

    // Generate tracking ID
    const trackingId = 'LEN-' + Date.now().toString().slice(-6).toUpperCase();

    const parcel = new Parcel({
      trackingId,
      sender,
      receiver,
      weight,
      contents,
      deliveryType: deliveryType || 'standard',
      price,
      customer: req.userId
    });

    await parcel.save();

    res.status(201).json({
      message: 'Parcel created successfully',
      parcel
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Parcel by Tracking ID
exports.getParcelByTrackingId = async (req, res) => {
  try {
    const { trackingId } = req.params;
    const parcel = await Parcel.findOne({ trackingId })
      .populate('assignedRider', 'firstName lastName phone');

    if (!parcel) {
      return res.status(404).json({ error: 'Parcel not found' });
    }

    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Parcels for Customer
exports.getCustomerParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({ customer: req.userId })
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: parcels.length,
      parcels
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Parcels for Rider
exports.getRiderParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find({
      $or: [
        { assignedRider: req.userId },
        { status: 'pending' }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({
      count: parcels.length,
      parcels
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Parcel Status
exports.updateParcelStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const parcel = await Parcel.findByIdAndUpdate(
      id,
      { status, updatedAt: new Date() },
      { new: true }
    );

    if (!parcel) {
      return res.status(404).json({ error: 'Parcel not found' });
    }

    res.status(200).json({
      message: 'Parcel status updated',
      parcel
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Assign Parcel to Rider
exports.assignRider = async (req, res) => {
  try {
    const { id } = req.params;
    const { riderId } = req.body;

    const parcel = await Parcel.findByIdAndUpdate(
      id,
      { assignedRider: riderId, status: 'assigned' },
      { new: true }
    ).populate('assignedRider', 'firstName lastName phone');

    res.status(200).json({
      message: 'Rider assigned successfully',
      parcel
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
