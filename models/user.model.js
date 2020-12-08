var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// This file is equilent to Data Base
var userschema = new Schema({
    firstName: {
        type: String,
        required: true,        
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,        
        unique: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    // dob: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },    
    addresses: {
        type: Array,
        required: true,
        trim: true
    },   
    
}, {
    timestamps: true,
    strict: true
})

module.exports = mongoose.model('User', userschema);
