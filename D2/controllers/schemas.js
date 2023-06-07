const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  birth: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
});

const postSchema = new mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  titolo: {
    type: String,
    require: true,
  },
  cover: {
    type: String,
    require: true,
  },
  readTime: {
    value: { type: Number, require: true },
    unit: { type: String, require: true }
  },
  author: {
    name: { type: String, require: true },
    avatar: { type: String, require: false }
  },
  content: {
    type: String,
    require: true,
  }
});

module.exports = { authorSchema, postSchema };
