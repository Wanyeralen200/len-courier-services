const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Delivery tracking routes
router.get('/:id', (req, res) => {
  res.json({ message: 'Delivery details' });
});

router.put('/:id/start', auth, (req, res) => {
  res.json({ message: 'Delivery started' });
});

router.put('/:id/complete', auth, (req, res) => {
  res.json({ message: 'Delivery completed' });
});

module.exports = router;
