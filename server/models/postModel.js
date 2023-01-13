const mongoose = require("mongoose");
const { Admin } = require("./UserModel");
const Joi = require("joi");
const { tagSchema } = require("./TagModel");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 80,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
    required: true,
  },
  author: {
    name:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true,
    },
    tag:{
      type: String,
      required: true,
      default: 'all'
    }
  },
  views: {
    type: Number,
    default: 1,
    min: 1,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);

function validatePost(post) {
  const schema = Joi.object({
    title: Joi.string().required().min(10).max(80),
    // tags: Joi.string().required().min(10).max(80),
    description: Joi.string().required().min(3).max(1024),
    author: Joi.allow(),
  });
  return schema.validate(post);
}

exports.Post = Post;
exports.validatePost = validatePost;
