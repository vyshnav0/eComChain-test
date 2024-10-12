const express = require('express')
const User = require('../models/usersModel')
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/login', async (req, res)=>{
    const {email, password} = req.body;
   
    try {
        const user = await User.findOne({email});
        if(!user)
            return res.status(404).json({message: "User not found"});

        const rightPass = await bcrypt.compare(password, user.password)
        if(!rightPass)
            return res.status(400).json({message: "invalid password"})

        // if user is found and password is correct
        res.status(200).json({message: "Login successfull"});
    } catch (error) {
        res.status(500).json({message: "server error",error})
    }
})

router.get('/me', async (req, res)=>{
    try {
        // const userId = req.params._id;
        // const user = await User.findById(userId);

        const userEmail = 'johndoe@example.com';
        const user = await User.findOne({ email: userEmail });

        if(!user)
            return res.status(404).json({message: "usr not found"})
        res.status(200).json(user); 
    } catch (error) {   
        console.error("error fetching from backend",error);
    }
});

module.exports = router;