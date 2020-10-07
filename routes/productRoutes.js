const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/productModel');

// @desc get all products
// @route GET /api/products
// @access public

router.get('/', async (req, res) => {
   try {
      const products = await Product.find({});
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

// @desc get product by id
// @route GET /api/products
// @access public

router.get('/:id', async (req, res) => {
   try {
      const productId = mongoose.Types.ObjectId(req.params.id);
      const product = await Product.findById(productId);
      if (product) {
         res.status(200).json(product);
      } else {
         res.status(404).json({ message: 'product not found' });
      }
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;
