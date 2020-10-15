const express = require('express');
const cors = require('cors');
const path = require('path');
const colors = require('colors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const keyRoutes = require('./routes/keyRoutes');
const connectDB = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandleMiddleware');

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/config', keyRoutes);

app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './public'));
});

// putting error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});
