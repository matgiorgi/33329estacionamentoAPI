const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/:plate', (req, res) => {
  const plate = req.params.plate;
  const vehicle = db.find(v => v.plate === plate);
  if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado' });

  res.json(vehicle);
});

module.exports = router;
