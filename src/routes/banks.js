const express = require('express');
const router = express.Router();
const Bank = require('../models/Bank');

// Get all banks
router.get('/', async (req, res) => {
  try {
    const banks = await Bank.find({ isActive: true });
    res.json(banks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get bank by ID
router.get('/:id', async (req, res) => {
  try {
    const bank = await Bank.findById(req.params.id);
    if (!bank) {
      return res.status(404).json({ error: 'Bank not found' });
    }
    res.json(bank);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;