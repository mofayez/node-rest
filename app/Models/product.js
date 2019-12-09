const mongoose = require('mongoose');
const Product = require('../../database/Schema/product');

// save new order
const saveProduct = (requestBody, file) => {
    const product = new Product({

        _id: new mongoose.Types.ObjectId(),
        name: requestBody.name,
        price: requestBody.price,
        productImage: file.path
    });

    return new Promise((resolve, reject) => {
        product.save()
            .then(result => {
                resolve(result);
            }).catch(error => {
            reject(error);
        });
    });
};


// get all products
const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        Product.find()
            .select("_id name price productImage")
            .exec()
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports.saveProduct = saveProduct;
module.exports.getAllProducts = getAllProducts;
