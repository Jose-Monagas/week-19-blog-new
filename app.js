const express = require('express');
const morgan = require('morgan');
const postRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use('/posts', postRoutes);
app.use('/comments', commentsRoutes);

module.exports = app;

// const postController = require("./controllers/posts")
// const commentController = require("./controllers/comments")
