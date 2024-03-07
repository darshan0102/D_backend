const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    Tittle : {
        type : String
    },
    Description : {
        type : String
    },
    Price : {
        type : Number
    },
    Category :{
        type : String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Project',ProjectSchema);