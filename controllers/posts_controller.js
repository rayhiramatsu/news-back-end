const express = require('express');
const router = express.Router();
const Post = require('../models/post.js');
const seed = require('../models/seed.js');

module.exports = router;

//---------- Routes ----------//

// Test route
// router.get('/', (req, res)=>{
//     res.send('index');
// });

// Index
router.get('/', (req, res)=>{
    Post.find({}, (err, allPosts)=>{
        res.json(allPosts);
    });
});
// Create
router.post('/', (req, res)=>{
    Post.create(req.body, (err, newPost)=>{
        res.json(newPost);
    });
});
// Edit
router.put('/:id', (req, res)=>{
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPost)=>{
        res.json(updatedPost);
    });
});
// Delete
router.delete('/:id', (req, res)=>{
    Post.findByIdAndDelete(req.params.id, (err, deletedPost)=>{
        res.json(deletedPost);
    });
});
// Seed
// NOT WORKING
router.get('/seed', (req, res)=>{
    Post.create(seed, (err, seedPosts)=>{
        res.json(seedPosts);
    });
});
