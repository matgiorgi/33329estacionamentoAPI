const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/', (req, res) => {
  const { plate } = req.body;
  if (!plate) return res.status(400).json({ error: 'Placa é obrigatória' });

  const exists = db.find(v => v.plate === plate && !v.exitTime);
  if (exists) {
    return res.status(400).json({ error: 'Veículo já está dentro' });
  }

  db.push({ plate, entryTime: new Date(), exitTime: null });
  res.json({ message: 'Entrada registrada com sucesso', plate });
});

module.exports = router;
