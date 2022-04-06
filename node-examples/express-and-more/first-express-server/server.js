'use strict';
const express = require("express");
const app = express();

const PORT = 3020;
const HOST = 'localhost';

/*
 * Default route with no parameters
 */
app.get("/", (req, res) => {
  res.send("Hello world!\n");
});

app.get("/home", (req, res) => {
  res.send("I am finally home!\n");
})

/*
 * Add routes with parameters
 */
app.get("/user/:userId", (req, res) => {
  res.send(req.params);
});

app.get("/user/:userId/book/:bookId", (req, res) => {
  res.send(req.params);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

