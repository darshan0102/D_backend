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
    Category : [{
        type : String
    }]
});

module.exports = mongoose.model('Project',ProjectSchema);