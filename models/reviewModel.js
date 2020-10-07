const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
   {
      name: { type: String, require: true },
      rating: { type: Number, require: true, default: 0 },
      comment: { type: String, require: true },
   },
   { timestamps: true }
);

const reviewModel = mongoose.model('Review', reviewSchema);

module.exports = reviewModel;
