const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

// what does this do? w06d04 just has it as a route to log in page

router.get('/', (req, res)=>{
    res.send('hello!');
});


// post route, log IN user
router.post('/', (req, res)=>{

    //should sessions handling happen here or on front end?

    User.findOne({username: req.body.username}, (err, foundUser)=>{

        if(err){
            // i think these console.logs will only log to heroku-backend

            //database error
            console.log(err);
        }
        else if(!foundUser){
            //user not found
            console.log("User with this username not found.");
        }
        else{
            //user is found

            // if passwords match,
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser;
                // res.json(foundUser);
            }
            // else if passwords don't match,
            else{
                console.log("passwords don't match!");
            }
        }
    });
});

// delete route, log OUT user
router.delete('/', (req, res)=>{
    req.session.destroy(()=>{
    });
});

module.exports = router;
