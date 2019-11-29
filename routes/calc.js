const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('welcome to calc')
})

router.get('/plus', plus)

function plus(req, res) {
    const a = req.query.a
    const b = req.query.b

    res.send( a + " + " + b + " = " + (parseFloat(a)+parseFloat(b) ) ) 
}

router.get('/minus', minus)

function minus(req, res) {
    const a = req.query.a
    const b = req.query.b

    res.send(a + " - " + b + " = " + (parseInt(a)-parseInt(b)))
}

module.exports = router