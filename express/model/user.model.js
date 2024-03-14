const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,   // shortb form
    lastName: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
});


module.exports = mongoose.model('user',userSchema);