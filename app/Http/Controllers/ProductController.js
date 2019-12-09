const productModel = require('../../Models/product');

const saveProduct = (req, res, next) => {
    let requestBody = req.body;
    let file = req.file;
    productModel.saveProduct(requestBody, file)
        .then(document => {
            res.status(201).json({
                status: true,
                product: document
            });
        }).catch(error => {
        res.status(500).json({
            status: false,
            error: error
        });
    });
};

// get all products
const getAllProducts = (req, res, next) => {
    productModel.getAllProducts()
        .then(document => {
            res.status(201).json({
                status: true,
                products: document
            });
        }).catch(error => {
        res.status(500).json({
            status: false,
            error: error
        });
    });
};

module.exports.saveProduct = saveProduct;
module.exports.getAllProducts = getAllProducts;
