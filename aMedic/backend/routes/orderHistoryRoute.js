const express = require('express');
const router = express.Router();

const OrderHistory = require('../models/orderHistoryModel');

router.get('/', async (req, res)=>{
    try {
        const orderHistory = await OrderHistory.find();
        if(!orderHistory)
            res.status(404).json({message: "history not found"});
        console.log("found");
        
        res.status(200).json(orderHistory)
    } catch (error) {
        res.status(500).json({ message: 'error fetching order history', error: error.message });
    }
});

module.exports = router;