const express = require('express');
const router = express.Router();

router.get('/', nochmal);

function nochmal(request, response) {
    console.log(request);
    response.send('Welcome to noch');
}

router.get('/was', warum);

function warum(request, response) {
    console.log(request);
    response.send('Weils so is :P');
}

module.exports = router