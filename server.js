const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/dbConnection');

const app = express();

dotenv.config();

app.use(cors());

connectDB();

app.get('/', (req, res) => {
   res.send('api is running !!!');
});

app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
   console.log(`server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});
