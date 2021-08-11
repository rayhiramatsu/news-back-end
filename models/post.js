const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    link: String,
    title: {type: String, required: true},
    author: String,
    date: String,
    topics: [{type: String}],
    description: String,
    image: String,
    comment_Ids: [{type: String}]


},
{timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
