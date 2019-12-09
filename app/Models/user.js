const mongoose = require('mongoose');
const User = require('../../database/Schema/user');

// register user
const signup = requestData => {

        let user = (new User({
            _id: new mongoose.Types.ObjectId(),
            username: requestData.username,
            password: requestData.password
        })).save();

        return new Promise((resolve, reject) => {
            user.then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        });

};

// find user by username
const findUser = username => {
    let user = User.findOne({
        username
    }).exec();
    return new Promise((resolve, reject) => {
        user.then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        });
    });
};




module.exports.signup = signup;
module.exports.findUser = findUser;
