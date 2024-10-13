const express = require('express');
const router = express.Router();

const OrderHistory = require('../models/orderHistoryModel');

router.get('/', async (req, res) => {
    // http://localhost:3000/history?productId=670585828f5aa89913c4e49b&userId=6705805b10383e99a0ca601e
    // will get the productid and userid from the query
    const { productId, userId } = req.query;

    let filter = {};
    if (productId)
        filter.productId = productId;
    if (userId)
        filter.userId = userId;
    try {
        const orderHistory = await OrderHistory.find(filter);
        if (orderHistory.length===0)
            return res.status(404).json({ message: "No matching order history found" });

        res.status(200).json(orderHistory)
    } catch (error) {
        res.status(500).json({ message: 'error fetching order history', error: error.message });
    }
});

module.exports = router;