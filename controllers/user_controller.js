const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/users.js');


// Index
router.get('/', (req, res)=>{
    User.find({}, (err, allUsers)=>{
        res.json(allUsers);
    });
});

// Create
router.post('/', (req, res) =>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, newUser) =>{
        res.json(newUser);
    });
});

// Show
// To search if a user already exists
router.get('/:id', (req, res)=>{
    router.findById(req.params.id, (err, foundUser)=>{
        res.json(foundUser);
    });
});

// Edit
// To update password?
router.put('/:id', (req, res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
        res.json(updatedUser);
    });
});

// Delete
router.delete('/:id', (req, res)=>{
    User.findByIdAndDelete(req.params.id, (err, deletedUser)=>{
        res.json(deletedUser);
    });
});
module.exports = router;
