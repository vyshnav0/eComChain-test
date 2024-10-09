const express = require('express')
const Product = require('../models/productsModel');
const { route } = require('./usersRoute');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error getting products" });
    }
});

module.exports = router;