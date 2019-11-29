const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('welcome to calc')
})

router.post('/plus', plus)

function plus(req, res) {

    /*
    res.write('plus \r')
    res.write( req.body.a + " + " + req.body.b + " = " + (req.body.a + req.body.b) ) 
    res.end()
    */
    res.json( { "Ergebnis": req.body.a + " + " + req.body.b + " = " + (req.body.a + req.body.b) } )
    
}

router.post('/minus', minus)

function minus(req, res) {
    /*
    res.write('minus \r')
    res.write( req.body.a + " - " + req.body.b + " = " + (req.body.a - req.body.b) ) 
    res.end()
    */

    res.json( { "Ergebnis": req.body.a + " - " + req.body.b + " = " + (req.body.a - req.body.b)} )
}

module.exports = router