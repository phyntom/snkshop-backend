const mongoose = require('mongoose');
const reviewSchema = require('./reviewModel');

const productSchema = mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
      },
      name: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      brand: {
         type: String,
         required: true,
      },
      category: {
         type: String,
         required: true,
      },
      releaseDate: {
         type: Date,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
      rating: {
         type: Number,
         required: true,
         default: 0,
      },
      variants: [
         { size: { type: String, required: true }, quantity: { type: Number, require: true } },
      ],
      numReviews: {
         type: Number,
         require: true,
         default: 0,
      },
      price: {
         type: Number,
         required: true,
         default: 0,
      },
      countInStock: {
         type: Number,
         required: true,
         default: 0,
      },
   },
   {
      timestamps: true,
   }
);

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
