const mongoose = require('mongoose');
const Comment = require('./comments.js')

const postSchema = new mongoose.Schema({
    link: String,
    title: {type: String, required: true},
    author: String,
    date: String,
    topics: [{type: String}],
    description: String,
    image: String,
    comments: [Comment.schema]


},
{timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
