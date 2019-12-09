const express = require('express');
const router = express.Router();

const OrderController = require('../app/Http/Controllers/OrderController');

router.post('/save-order', OrderController.saveOrder);
router.get('', OrderController.getAllOrders);

module.exports = router;
