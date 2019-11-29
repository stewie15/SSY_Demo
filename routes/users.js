const express = require('express')
const router = express.Router()
const db = require('../src/database')
const collection = db.getCollection('users')

router.get('/', listAllUsers)

function listAllUsers(req, res) {
    
    let users = collection.find()

    res.json(users)
}

router.get('/getUser/:id', getUserById)

function getUserById(req, res) {

    res.json(collection.get(req.params.id))
}

router.post('/addUser', addNewUser)

function addNewUser(req, res) {
    let user = req.body

    collection.insert(user)

    res.json(user)
}

router.get('/deleteUser/:id', deleteUser)

function deleteUser(req, res) {
    let user = collection.get(req.params.id)

    collection.remove(collection.get(req.params.id));

    res.send(user.name + " has been deleted")
}

router.post('/updateUser/:id', updateUser);

function updateUser(req, res) {
    let user = collection.get(req.params.id);
    
    collection.update(collection.get(req.params.id), req.body);

    res.send(user.name + " has been updated");
}

router.get('/getUserByLegs/:countLegs', getUserByLegs);

function getUserByLegs(req, res) {
    let users = collection.where(function(obj) {
        return obj.legs == req.params.countLegs
    });

    res.json(users)
}

router.get('/getLegCount', getLegCount);

function getLegCount(req, res) {
    let users = collection.find();
    let count = 0;

    users.forEach(user => {
        count += user.legs
    });

    res.send("Anzahl der Beine in der Datenbank: " + count)
}

module.exports = router;