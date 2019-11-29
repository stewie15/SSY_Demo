const express = require('express');
const router = express.Router();

router.get('/', hello);

function hello(req, res) {
  res.send('NodeJS + Express läuft!');
}

router.get('/etwas-anderes', hello2);

function hello2(req, res) {
  res.send('Hier steht was anderes');
}

module.exports = router;
