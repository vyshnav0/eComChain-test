const express = require('express')
const User = require('../models/usersModel')
const router = express.Router();

// router.get('/', async (req, res)=>{
//     try {
//         const users = await User.find();
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({message: "Error getting users list", error: error});
//     }
// });

router.post('/login', async (req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user)
            return res.status(404).json({message: "User not found"});
        if(password !== user.password)
            return res.status(400).json({message: "invalid password"})

        // if user is found and password is correct
        res.status(200).json({message: "Login successfull"});
    } catch (error) {
        res.status(500).json({message: "server error",error})
    }
})

module.exports = router;