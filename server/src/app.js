const express = require('express');

const { api } = require('./api');

const app = express();

app.use('/apy', api);

module.exports.app = app;
// test
// git config --local user.name "Your Name"
// git config --local user.email hallebot.opspark@gmail.com