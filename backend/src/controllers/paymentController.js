const Payment = require('../models/Payment');
const Parcel = require('../models/Parcel');
const axios = require('axios');

// Initialize M-Pesa Payment
exports.initiateMpesaPayment = async (req, res) => {
  try {
    const { parcelId, phoneNumber } = req.body;

    const parcel = await Parcel.findById(parcelId);
    if (!parcel) {
      return res.status(404).json({ error: 'Parcel not found' });
    }

    // Create payment record
    const payment = new Payment({
      parcelId,
      customerId: req.userId,
      amount: parcel.price,
      paymentMethod: 'mpesa',
      status: 'pending'
    });

    await payment.save();

    // Call M-Pesa API (Mock for demonstration)
    // In production, integrate with actual M-Pesa API
    const mpesaResponse = {
      CheckoutRequestID: 'ws_CO_' + Date.now(),
      ResponseCode: '0',
      ResponseDescription: 'Success',
      CustomerMessage: 'Please enter your M-Pesa PIN to confirm the payment'
    };

    res.status(200).json({
      message: 'M-Pesa payment initiated',
      paymentId: payment._id,
      mpesaResponse
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Confirm Payment
exports.confirmPayment = async (req, res) => {
  try {
    const { paymentId } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      paymentId,
      { status: 'completed', completedAt: new Date() },
      { new: true }
    );

    // Update parcel payment status
    await Parcel.findByIdAndUpdate(
      payment.parcelId,
      { paymentStatus: 'completed' }
    );

    res.status(200).json({
      message: 'Payment confirmed successfully',
      payment
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Payment History
exports.getPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find({ customerId: req.userId })
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: payments.length,
      payments
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findById(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
