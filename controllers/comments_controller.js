const express = require('express')
const router = express.Router();
const Comment = require('../models/comments.js');

module.exports = router;

//---------- Routes ----------//

// Index
router.get('/', (req, res)=>{
    Comment.find({}, (err, allComments)=>{
        res.json(allComments);
    });
});
// Create
router.post('/', (req, res)=>{
    Comment.create(req.body, (err, newComment)=>{
        res.json(newComment);
    });
});
// Edit
router.put('/:id', (req, res)=>{
    Comment.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedComment)=>{
        res.json(updatedComment);
    });
});
// Delete
router.delete('/:id', (req, res)=>{
    Comment.findByIdAndDelete(req.params.id, (err, deletedComment)=>{
        res.json(deletedComment);
    });
});
