const express = require('express')
const router = express.Router()
const db = require('../src/database')

router.get('/', listAllUsers)

function listAllUsers(req, res) {
    const collection = db.getCollection('users')

    let users = collection.find()

    res.json(users)
}

module.exports = router