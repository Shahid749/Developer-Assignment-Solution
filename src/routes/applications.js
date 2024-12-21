const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// Create new application
router.post('/', async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get application by ID
router.get('/:id', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate('universityApplications.university')
      .populate('universityApplications.selectedBanks.bank');
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update application
router.patch('/:id', async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add university to application
router.post('/:id/universities', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    
    application.universityApplications.push({
      university: req.body.universityId,
      selectedBanks: req.body.banks.map(bankId => ({ bank: bankId }))
    });
    
    await application.save();
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add bank to university application
router.post('/:id/universities/:universityId/banks', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    
    const universityApp = application.universityApplications.id(req.params.universityId);
    if (!universityApp) {
      return res.status(404).json({ error: 'University application not found' });
    }
    
    universityApp.selectedBanks.push({
      bank: req.body.bankId
    });
    
    await application.save();
    res.json(application);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;