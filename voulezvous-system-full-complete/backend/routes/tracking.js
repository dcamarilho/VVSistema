const express = require('express');
const router = express.Router();
const { getTrackingData } = require('../models/tracking');

router.get('/', async (req, res) => {
  try {
    const trackingData = await getTrackingData();
    res.json(trackingData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter dados de rastreamento' });
  }
});

module.exports = router;
