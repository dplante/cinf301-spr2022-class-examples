'use strict';
const express = require("express");
const app = express();

const PORT = 3020;
const HOST = '0.0.0.0';

app.get("/", (req, res) => {
  res.send("Hello world!\n");
});

/*
 * Add one route with parameters
 */
app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.post('user/:id', function (req, res, next) {
  console.log('Post ID: ', req.params.id);
  next();
});

app.get("/user/:userId/books/:booksId", (req, res) => {
  res.send(req.params);
});

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.write('User Info');
  next();
});

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.write(req.params.id);
  res.end();
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

