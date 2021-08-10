const bcrypt = require('bcrypt')
const express = require('express')
const user = express.Router()
const User = require('../models/users.js')

user.get('/', (req, res) => {
    res.json('Test')
})

// ===== Create Route ===== //
user.post('/newaccount', (req, res) => {
    // this grabs the user password and hashes it 10 times
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    // this creates the new user
    User.create(req.body, (err, createdUser) => {
        // logs an error if there is one
        if(err){
            console.log(err);
            res.json(err.message)
            // this will show if it worked
        } else {
            console.log('user is created', createdUser);
            res.json(createdUser)
        }
    })
})

// ===== User Login ===== //

module.exports = user;
