const express = require('express');
const router = express.Router();

router.get('/', hello);

function hello(req, res) {
  res.send('NodeJS + Express läuft!');
}

module.exports = router;
