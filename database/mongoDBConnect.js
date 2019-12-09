const mongoose = require('mongoose');

module.exports = mongoose.connect(
    // "mongodb+srv://mofayez:"+ process.env.MONGO_ATLAS_PW +"@cluster0-tth9j.mongodb.net/test?retryWrites=true&w=majority",
    "mongodb://127.0.0.1:27017/shop-api",
    {
         useNewUrlParser: true,
         useUnifiedTopology: true
    }
);