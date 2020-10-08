const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret!@#123';

const generateToken = (id) => {
   return jwt.sign({ id }, JWT_SECRET_KEY, {
      expiresIn: '30d',
   });
};

module.exports = generateToken;
