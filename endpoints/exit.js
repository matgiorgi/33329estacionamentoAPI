const express = require('express');
const router = express.Router();
const db = require('../database');

router.patch('/:plate', (req, res) => {
  const plate = req.params.plate;
  const vehicle = db.find(v => v.plate === plate && !v.exitTime);
  if (!vehicle) return res.status(404).json({ error: 'Veículo não encontrado ou já saiu' });

  vehicle.exitTime = new Date();
  res.json({ message: 'Saída registrada', plate });
});

module.exports = router;
