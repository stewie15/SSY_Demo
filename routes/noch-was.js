const express = require('express');
const router = express.Router();

router.get('/', nochmal);

function nochmal(request, response) {
    response.send('Welcome to noch');
}

router.get('/was', warum);

function warum(request, response) {
    response.send('Weils so is :P');
}

router.get('/mehr', mehr);

function mehr(req, res) {
    const schoko = req.query.schoko;
    res.send("Noch mehr schoko? " + schoko);
}

module.exports = router