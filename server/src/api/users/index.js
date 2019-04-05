const express = require('express');

const users = express.Router();

users.get('/', (req, res) => {
  res.sendStatus(501);
});

module.exports.users = users;
