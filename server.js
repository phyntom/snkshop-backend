const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const products = require('./data/products');
const connectDB = require('./config/dbConnection');
const app = express();

dotenv.config();

app.use(cors());

connectDB();

app.get('/', (req, res, next) => {
   res.send('API is running');
   next();
});

app.get('/api/products', (req, res) => {
   res.json(products);
});

app.get('/api/products/:id', (req, res) => {
   const product = products.find((item) => item._id === req.params.id);
   res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
   console.log(`server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});
