const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnection');

const users = require('./data/users');
const products = require('./data/products');

const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');

dotenv.config();

connectDB();

/**
 * method use to import data into mongodb
 */
const importData = async () => {
   try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();

      const createdUsers = await User.insertMany(users);
      const adminUser = createdUsers[0];

      const modifiedProducts = products.map((product) => {
         const totalInStock = product.variants.reduce((sum, item) => sum + item.quantity, 0);
         product.user = adminUser;
         product.countInStock = totalInStock;
         return product;
      });

      const createdProducts = await Product.insertMany(modifiedProducts);
      console.log(`inserted user ${createdUsers.length} - produtcs ${createdProducts.length}`);
   } catch (error) {
      console.log(`Error occurs ${error.message}`);
   }
};

const destroyData = async () => {
   try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
      console.log(`Data destroyed `);
   } catch (error) {
      console.log(`Error occurs ${error.message}`);
   }
};

if (process.argv[2] === '-d') {
   destroyData();
} else if (process.argv[2] === '-im') {
   importData();
}
