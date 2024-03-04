const mongoose = require('mongoose');

const userSchema = mongoose.schema({
    firstName: string,   // shortb form
    lastName: {
        type: string
    },
    gender: {
        type: string,
        enum: ['male', 'female']
    },
    email:{
        type: string
    },
    password: {
        type: string
    },
    age: {
        type: number
    },
});


module.exports = mongoose.model('User',userSchema);