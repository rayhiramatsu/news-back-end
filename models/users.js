const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    postsSubmitted: [{type: String}],
    commentsSubmitted: [{type: String}]
},
{timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;


////test
////asdf
///a;ldskjasdl
