const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Rider-specific routes
router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Rider profile' });
});

router.get('/earnings', auth, (req, res) => {
  res.json({ message: 'Rider earnings' });
});

router.post('/availability', auth, (req, res) => {
  res.json({ message: 'Availability updated' });
});

module.exports = router;
