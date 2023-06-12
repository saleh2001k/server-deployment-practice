'use strict';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const stamper = require('./middleware/stamper');
const pageNotFound = require('./middleware/404');
const serverError = require('./middleware/500');

app.get('/', stamper, isAuth, handleHome);
app.get('/bad', badRequest);

app.use('*', pageNotFound);
app.use(serverError);

function handleHome(req, res) {
  res.status(200).json({
    code: 200,
    message: 'Welcome to the Home page',
    time: req.stamper
  });
}

function badRequest(req, res, next) {
  req.body = {
    test: 'test'
  };
  next({ message: 'Not a Number' });
}

function isAuth(req, res, next) {
  console.log('User authenticated');
  next();
}

function start(port) {
  app.listen(port, () => console.log('Server is up and running on port:', port));
}

module.exports = {
  app,
  start
};
