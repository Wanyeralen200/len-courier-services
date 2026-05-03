const User = require('../models/User');
const Parcel = require('../models/Parcel');
const Payment = require('../models/Payment');
const Delivery = require('../models/Delivery');

// Get Dashboard Statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const totalParcels = await Parcel.countDocuments();
    const totalDelivered = await Parcel.countDocuments({ status: 'delivered' });
    const inTransit = await Parcel.countDocuments({ status: 'in_transit' });
    const returned = await Parcel.countDocuments({ status: 'returned' });
    const totalRevenue = await Payment.aggregate([
      { $match: { status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    const totalRiders = await User.countDocuments({ role: 'rider' });
    const totalCustomers = await User.countDocuments({ role: 'customer' });

    res.status(200).json({
      totalParcels,
      totalDelivered,
      inTransit,
      returned,
      totalRevenue: totalRevenue[0]?.total || 0,
      totalRiders,
      totalCustomers
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Parcels
exports.getAllParcels = async (req, res) => {
  try {
    const parcels = await Parcel.find()
      .populate('customer', 'firstName lastName email phone')
      .populate('assignedRider', 'firstName lastName phone')
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: parcels.length,
      parcels
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Riders
exports.getAllRiders = async (req, res) => {
  try {
    const riders = await User.find({ role: 'rider' });

    res.status(200).json({
      count: riders.length,
      riders
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'customer' });

    res.status(200).json({
      count: customers.length,
      customers
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Revenue Report
exports.getRevenueReport = async (req, res) => {
  try {
    const payments = await Payment.aggregate([
      { $match: { status: 'completed' } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          total: { $sum: '$amount' },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: -1 } }
    ]);

    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Parcel Status (Admin)
exports.updateParcelStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const parcel = await Parcel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json(parcel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
