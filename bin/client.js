const Request = require('request');

Request.get({
    url: 'http://127.0.0.1:3000/users',
    json: true
}, responseReceived)

function responseReceived(error, response, body) {
    
    for (let user of body) {
        console.log(user.name)
    }
}

