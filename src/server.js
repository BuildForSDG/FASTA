/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const parser = require('body-parser');

const server = express();
const mongoose = require('./db/index.js');
const RouteHandler = require('./routes/index');

const port = process.env.PORT || 8080;

server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));

RouteHandler(server);

server.get('/', (req, res, next) => {
  console.log('Connected');
  res.status(200).json({ message: 'Success' });
});

server.listen(port, () => { console.log(`Backend server started @ ${port}!`); });

module.exports = server;
