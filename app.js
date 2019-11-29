const express = require('express'); // Require importiert das externe Paket.
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const index = require('./routes/index');
const noch_was = require('./routes/noch-was');
const calculation = require('./routes/calc');
const users = require('./routes/users');
const legCount = require('./routes/sumLegs');

// Generic application setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', index);
app.use('/noch/', noch_was);
app.use('/calc/', calculation);
app.use('/users/', users);
app.use('/', legCount)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  res.send('Not found');
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.stack);
  res.send(err.stack);
});

module.exports = app;
