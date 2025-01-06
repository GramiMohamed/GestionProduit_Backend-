const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/products');

const app = express(); // Initialize the app first

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use the product routes after the app is initialized
app.use('/api/produits', productRoutes);

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// 404 Route
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes Placeholder
app.get('/', (req, res) => res.send('API Running'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));