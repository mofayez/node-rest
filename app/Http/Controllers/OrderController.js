const orderModel = require('../../Models/order');

// create new order
const saveOrder = (req, res) => {
    let requestBody = req.body;
    orderModel.saveOrder(requestBody).then(result => {
        res.status(201).json({
            status: true,
            order: result
        });
    }).catch(error => {
        res.status(500).json({
            status: false,
            error: error
        });
    });
};


// get all orders
const getAllOrders = (req, res) => {

    orderModel.getAllOrders().then(result => {
        res.status(201).json({
            status: true,
            orders: result
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    });
};


module.exports.saveOrder = saveOrder;
module.exports.getAllOrders = getAllOrders;
