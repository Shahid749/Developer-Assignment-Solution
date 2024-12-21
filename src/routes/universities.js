const express = require('express');
const router = express.Router();
const University = require('../models/University');

// Get all universities
router.get('/', async (req, res) => {
  try {
    const universities = await University.find({ isActive: true });
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get university by ID
router.get('/:id', async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }
    res.json(university);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;