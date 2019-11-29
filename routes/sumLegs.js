const express = require('express');
const router = express.Router();
const Request = require('request');

router.get('/getLegCount', getLegCount2);

function getLegCount2(req, res) {

    Request.get({
        url: 'http://127.0.0.1:3000/users',
        json: true
    }, function(error, response, body) {
        let count = 0;
        for (let user of body) {
            count+= user.legs
        }
        res.send("Anzahl der Beine in der Datenbank: " + count)
    });

}

module.exports = router;