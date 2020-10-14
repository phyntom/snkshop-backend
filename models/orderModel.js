const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
      },
      orderItems: [
         {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: String, required: true },
            product: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
         },
      ],
      shippingAddress: {
         country: { type: String, required: true },
         city: { type: String, required: true },
         email: { type: String, required: true },
         phoneNumber: { type: String, required: true },
         address: { type: String, required: true },
      },
      paymentMethod: {
         type: String,
         required: true,
      },
      paymentResult: {
         id: { type: String },
         status: { type: String },
         update_time: { type: String },
         email_address: { type: String },
      },
      taxPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      totalPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      paidAt: {
         type: Date,
      },
      isPaid: {
         type: Boolean,
         required: false,
         default: false,
      },
      isDelivered: {
         type: Boolean,
         required: false,
         default: 0.0,
      },
      deliveredAt: {
         type: Date,
      },
   },
   {
      timestamps: true,
   }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
