const express = require('express');
const router = express.Router();

const OrderHistory = require('../models/orderHistoryModel');

router.get('/history', async (req, res)=>{
    try {
        const orderHistory = await OrderHistory.find();
        if(!orderHistory)
            res.status(404).json({message: "history not found"});
        res.status(200).json({message: "got all history"})
    } catch (error) {
        res.status(500).json({ message: 'error fetching order history', error: err });
    }
});

module.exports = router;