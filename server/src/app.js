const express = require('express');

const { api } = require('./api');

const app = express();

app.use('/apy', api);

module.exports.app = app;
