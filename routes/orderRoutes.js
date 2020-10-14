const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Order = require('../models/orderModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const protectedPath = require('../middleware/authMiddleware');

router.route('/').get(protectedPath, async (req, res, next) => {
   try {
      const orders = await Order.find({});
      res.status(200).json(orders);
   } catch (error) {
      next(error);
   }
});

router.route('/').post(protectedPath, async (req, res, next) => {
   try {
      const {
         orderItems,
         shippingAddress,
         paymentMethod,
         itemsPrice,
         taxPrice,
         shippingPrice,
         totalPrice,
      } = req.body;
      if (orderItems && orderItems.length === 0) {
         res.status(400);
         throw new Error('No order items');
      } else {
         const order = new Order({
            user: req.user,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
         });
         const createOrder = await order.save();
         res.status(201);
         res.json(createOrder);
      }
   } catch (error) {
      next(error);
   }
});

module.exports = router;
