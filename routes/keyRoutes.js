const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const protectedPath = require('../middleware/authMiddleware');
const paymentKeys = require('../config/paymentKey');

router.route('/paypal/key').get(protectedPath, async (req, res, next) => {
   try {
      const key = paymentKeys.getPayPalClientId();
      res.status(200).json({ clientId: key });
   } catch (error) {
      next(error);
   }
});

module.exports = router;
