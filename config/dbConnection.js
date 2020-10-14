const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://127.0.0.1:27017/snkshop?poolSize=20';

console.log(MONGO_URI);

const connectDB = async () => {
   try {
      const dbConn = await mongoose.connect(MONGO_URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         createIndexes: true,
      });
      console.log(`Connected to Mongodb: ${dbConn.connection.host}`.cyan.bold);
   } catch (error) {
      console.error(`Connection error : ${error.message}`.red.underline.bold);
      process.exit(1);
   }
};

module.exports = connectDB;
