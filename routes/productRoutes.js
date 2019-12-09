const express = require('express');
const router = express.Router();
const  upload = require('../app/Http/Middleware/muterMiddleware');
const productController = require('../app/Http/Controllers/ProductController');

router.get('', productController.getAllProducts);
router.post('/save-product', upload('uploads/', 'productImage'), productController.saveProduct);

module.exports = router;
