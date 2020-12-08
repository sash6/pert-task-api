var userModel = require("../models/user.model");
var mongoose = require('mongoose');

module.exports = {

    saveForm: (req, res, next) => {
        console.log('req,body::::', req.body)
        userModel.create(req.body, function (err, form) {
            if (err) {
                return res.status(400).send(err);
            }
            return res.status(200).send("Successfully Created");
        });
    },

}

