const express = require('express');
const router = express.Router();
const parcelController = require('../controllers/parcelController');
const auth = require('../middleware/auth');

router.post('/', auth, parcelController.createParcel);
router.get('/track/:trackingId', parcelController.getParcelByTrackingId);
router.get('/customer/all', auth, parcelController.getCustomerParcels);
router.get('/rider/all', auth, parcelController.getRiderParcels);
router.put('/:id/status', auth, parcelController.updateParcelStatus);
router.put('/:id/assign', auth, parcelController.assignRider);

module.exports = router;
