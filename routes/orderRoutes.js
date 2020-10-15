const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');
const Order = require('../models/orderModel');
const bcrypt = require('bcryptjs');
const protectedPath = require('../middleware/authMiddleware');

router.route('/').get(protectedPath, async (req, res, next) => {
   try {
      const orders = await Order.find({})
         .populate({
            path: 'user',
            model: 'User',
         })
         .populate({
            path: 'orderItems.product',
            model: 'Product',
         });
      res.status(200).json(orders);
   } catch (error) {
      next(error);
   }
});

router.route('/:id').get(protectedPath, async (req, res, next) => {
   try {
      const orderId = req.params.id;
      const orders = await Order.findById(orderId)
         .populate({
            path: 'user',
            model: 'User',
         })
         .populate({
            path: 'orderItems.product',
            model: 'Product',
         });
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
            orderItems: orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
         });
         const createdOrder = await order.save();
         res.status(201);
         res.json(createdOrder);
      }
   } catch (error) {
      next(error);
   }
});

router.route('/').patch(protectedPath, async (req, res, next) => {
   try {
      console.dir(req.body);
      const { orderId, isPaid, paidAt, isDelivered, deliveredAt } = req.body;
      const order = await Order.findById(orderId);

      if (!order) {
         res.status(400).json({ message: 'Cannot update unexistinng order' });
      } else {
         order.isPaid = isPaid || order.isPaid;
         order.paidAt = paidAt || order.paidAt;
         order.isDelivered = isDelivered || order.isPaid;
         order.deliveredAt = deliveredAt || order.paidAt;
         const updatedOrder = await order.save();
         res.status(201).json(updatedOrder);
      }
   } catch (error) {
      next(error);
   }
});

module.exports = router;
