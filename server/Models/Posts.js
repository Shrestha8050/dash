const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  post: String,
  date: { type: Date, default: Date.now },
});

const Posts = mongoose.model('posts', postSchema);

module.exports = { Posts };
