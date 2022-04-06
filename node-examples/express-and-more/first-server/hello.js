#!/usr/bin/env node

/*
 * This is a simple Node.js application that only requires node be
 * installed on the system.  Note that there are no additional packages
 * or package.json file at all; just a basic Node.js "hello world"
 */
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(4000, 'localhost');
console.log('Server running at http://localhost:4000/');
