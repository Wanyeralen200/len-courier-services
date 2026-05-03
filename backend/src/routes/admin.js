const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

router.get('/dashboard/stats', auth, adminAuth, adminController.getDashboardStats);
router.get('/parcels', auth, adminAuth, adminController.getAllParcels);
router.get('/riders', auth, adminAuth, adminController.getAllRiders);
router.get('/customers', auth, adminAuth, adminController.getAllCustomers);
router.get('/revenue', auth, adminAuth, adminController.getRevenueReport);
router.put('/parcels/:id/status', auth, adminAuth, adminController.updateParcelStatus);

module.exports = router;
