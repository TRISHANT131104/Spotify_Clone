const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const {getToken} = require('../utils/helpers')

//This POST route will help to register a user
router.post("/register",async (req,res)=>{
    const {email, password, firstName, lastName, username} = req.body;
    const user = await User.findOne({email});
    if(user){
        return res.status(403).json({error:"A user with this email already exists"});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUserData = {email, password:hashedPassword, firstName, lastName, username};
    const newUser = await User.create(newUserData);
    const token = await getToken(email, newUser);
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

//This POST route will help to login a user
router.post('/login', async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(403).json({error:"Invalid Credentials!"});
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(403).json({error:"Invalid Credentials!"});
    }
    const token = await getToken(user.email,user);
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
})

module.exports = router;