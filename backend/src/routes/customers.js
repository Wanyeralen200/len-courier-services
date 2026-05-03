const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Customer-specific routes
router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Customer profile' });
});

router.get('/history', auth, (req, res) => {
  res.json({ message: 'Delivery history' });
});

module.exports = router;
