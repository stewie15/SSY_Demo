const Loki = require("lokijs");
const User = require('./User');

const db = new Loki('demo.json');
const users = db.addCollection('users');

users.insert(new User('Sleipnir', 8));
users.insert(new User('Jormungandr', 0));
users.insert(new User('Hel', 2));

module.exports = db;