const mongoose = require('mongoose');
const colors = require('colors');

const MONGO_URI =
   process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/snkshop?retryWrites=true&w=majority';

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
