import express from 'express'
import bcrypt from 'bcrypt'
var router = express.Router()

import userController from '../controllers/user.mjs'

// Validate important details about user's account in this middleware function
// For example, length of username, complexity of password etc.
async function validateUserDetails(req,res,next){

    if(!req.body){
        res.status(422)
        return res.send("Invalid payload. Empty request body received")
    }
    

    // Check length of user name
    if(!req.body.username || req.body.username.length < 4){
        res.status(422).send("Invalid payload. Username is either not provided or too small.")
    }

    var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Check format of email
    if(!req.body.email || !email_regex.test(String(req.body.email).toLowerCase())){
        res.status(422).send("Invalid email. Email is either not provided or in an invalid format")
    }
    
    // Hash the password using 10 rounds of salt generation
    req.body.password = await bcrypt.hash(req.body.password,10)

    next()
}

router.route('/:id?')
    .get(function(req,res) {
        if(!req.params.id)
            res.send('Please supply a user id to access details')
        else
            res.send('Thanks for sharing the user details')
    })
    .post(validateUserDetails, async function(req,res){
        let confirm_user = await userController.createUser(req.body)

        if(confirm_user.err){
            return res.status(500).json({error:confirm_user.err.message})
        }

        confirm_user = confirm_user.toJSON()
        delete confirm_user.password

        return res.status(201).json(confirm_user)
    })
    

export default router