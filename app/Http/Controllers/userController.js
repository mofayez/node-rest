const userModel = require('../../Models/user');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

const signup = (req, res, next) => {

    //check username existence
    userModel.findUser(req.body.username)
        .then(user => {
            if (user) {
                return res.status(500).json({
                    error: 'username has already taken before!'
                });
            }
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            userModel.signup(req.body).then(user => {
                res.status(201).json({
                    status: true,
                    user
                });
            }).catch(error => {
                return res.status(500).json({
                    error
                });
            });
        }).catch(error => {
            return res.status(500).json({
                error
            });
        });
};


// login user
const login = (req, res, next) => {
    userModel.findUser(req.body.username)
        .then(user => {
            console.log(req.body.password, user.password);
            bcrypt.compare(req.body.password, user.password, (error, result) => {
                if (!result) {
                    return res.status(500).json({
                        error: 'Auth Failed'
                    });
                }
                if (error) {
                    return res.status(500).json({
                        error
                    });
                }

                let token = jwt.sign({
                        email: user.email,
                        userId: user._id
                    },
                    process.env.JWT_KEY, {
                        expiresIn: "1h"
                    }
                );
                res.status(200).json({
                    status: true,
                    token
                });
            });

        }).catch(error => {
            return res.status(500).json({
                status: false,
                message: 'Auth Failed!',
                error
            });
        });
};

module.exports.signup = signup;
module.exports.login = login;
