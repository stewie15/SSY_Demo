const Request = require('request');

Request.get({
    url: 'http://127.0.0.1:3000/users/getLegCount',
    json: true
}, function(error, response, body) {
    console.log("Erste Abfrage \r" + body)
});

Request.get({
    url: 'http://127.0.0.1:3000/getLegCount',
    json: true
}, function(error, response, body) {
    console.log("Zweite Abfrage \r" + body)
});