const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {

    if (['image/jpeg', 'image/png'].includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const setStorage = destination => {

    return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destination);
        },
        filename: (req, file, cb) => {
            let _filename = new Date().getTime() + path.extname(file.originalname);
            cb(null, _filename);
        }
    });
}

const upload = (destination, inputName) => {
    return multer({
        storage: setStorage(destination),
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter
    }).single(inputName);
};

module.exports = upload;
