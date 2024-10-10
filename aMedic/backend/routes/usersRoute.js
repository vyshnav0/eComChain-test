const express = require('express')
const User = require('../models/usersModel')
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/login', async (req, res)=>{
    const {email, password} = req.body;

    const mypass = "mypass";
    const hashPass = await bcrypt.hash(mypass, 10);
    console.log("pass: ",hashPass);
    
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

module.exports = router;