const express = require('express');

const { users } = require('./users');
const { posts } = require('./posts');

const api = express.Router();

api.use('/users', users);
api.use('/posts', posts);

module.exports.api = api;
