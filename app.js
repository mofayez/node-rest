const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const httpError = require('http-errors');
const ordersRoutes = require('./routes/orderRoutes');
const productsRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/userRoutes');
const CORSMiddleware = require('./app/Http/Middleware/handleCorsMiddleware');
const checkAuthMiddleware = require('./app/Http/Middleware/check-auth');

// initialize express app
const app = express();

// middleware
app.use(CORSMiddleware);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'))

// routes
app.use('/orders', checkAuthMiddleware, ordersRoutes);
app.use('/products', checkAuthMiddleware, productsRoutes);
app.use('/users', usersRoutes);


// Error handling
app.use((req, res, next) => {
    // catch 404 and forward to error handler
    next(httpError(404));
});
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500);
    return res.json({
        error
    });
});


module.exports = app;
