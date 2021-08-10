const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    // needs some stuff here
    link: String,
    title: {type: String, required: true},
    author: String,
    date: String,
    topics: [{type: String}],
    description: String,
    image: String,


},
{timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

// Do we want our model to look like this? Anything we want to add/remove?

// This is just a placeholder schema for now
////
