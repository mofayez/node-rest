const mongoose = require('mongoose');
const Order = require('../../database/Schema/order');

// connect to mongoDB
require('../../database/mongoDBConnect');

const saveOrder = orderData => {
    let order = new Order({
        _id: new mongoose.Types.ObjectId(),
        product: orderData.productId,
        quantity: orderData.quantity
    });

    return new Promise((resolve, reject) => {
        order.save()
            .then(document => {
                resolve(document);
            }).catch(error => {
                reject(error);
            });
    });
}


// get all orders
const getAllOrders = () => {

    let orders = Order.find()
        .populate('product', '_id name price productImage')
        .select('_id quantity')
        .exec();

    return new Promise((resolve, reject) => {
        orders.then(documents => {
            resolve(documents);
        }).catch(error => {
            reject(error);
        });
    });
}

module.exports.saveOrder = saveOrder;
module.exports.getAllOrders = getAllOrders;
