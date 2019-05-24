const express = require('express');

const Posts = require('../../db/Posts');

const posts = express.Router();

posts.get('/', (req, res) => {
  Posts.findAll()
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports.posts = posts;
