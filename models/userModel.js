const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { bgCyan } = require('colors');

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   isAdmin: {
      type: String,
      required: true,
      default: false,
   },
});

// method to be used in case we wnat to hash our password
// before we save omitted for simplicity

// userSchema.pre('save', async (next) => {
//    if (!this.isModified('password')) {
//       next();
//    }
//    const salt = await bcrypt.genSalt(10);
//    this.password = await bcrypt.hash(this.password, salt);
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
