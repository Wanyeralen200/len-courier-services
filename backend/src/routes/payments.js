const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.post('/mpesa/initiate', auth, paymentController.initiateMpesaPayment);
router.post('/confirm', auth, paymentController.confirmPayment);
router.get('/history', auth, paymentController.getPaymentHistory);
router.get('/:id', auth, paymentController.getPaymentById);

module.exports = router;
